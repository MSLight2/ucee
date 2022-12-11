/**
 * 借鉴antd-mobile
 */
const gulp = require('gulp')
const path = require('path')
const del = require('del')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const ts = require('gulp-typescript')
const babel = require('gulp-babel')
const through = require('through2')
const rename = require('gulp-rename')
const vite = require('vite')
const tsconfig = require('./build-tsconfig.json')
const packageJson = require('./package.json')
const webpackStream = require('webpack-stream')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default

function clean() {
  return del('./lib/**')
}

function delIndex() {
  return del('./src/index.ts')
}

function renameComponentsFile() {
  return gulp
    .src('./src/components.ts')
    .pipe(rename('index.ts'))
    .pipe(gulp.dest('./src/'))
}

function buildStyles() {
  return gulp
    .src('./src/**/*.scss', {
      // base: './src/',
      ignore: ['**/demo/**/*', '**/demos/**/*', '**/__tests__/**/*'],
    })
    .pipe(sass({ includePaths: [path.join(__dirname, 'src')] }).on('error', sass.logError))
    .pipe(
      postcss([
        autoprefixer({ overrideBrowserslist: 'iOS >= 10, Chrome >= 49' }),
      ])
    )
    .pipe(gulp.dest('./lib/es'))
    .pipe(gulp.dest('./lib/cjs'))
};

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
  })
  return gulp
    .src([
      'src/**/*.{ts,tsx}',
      '!src/App.tsx',
      '!src/index.tsx',
      '!src/react-app-env.d.ts',
      '!src/setupTests.ts',
      '!src/components.ts',
    ], {
      ignore: ['**/demo/**/*', '**/demos/**/*', '**/__tests__/**/*'],
    })
    .pipe(tsProject)
    .pipe(babel())
    .pipe(gulp.dest('lib/es/'))
}

function buildDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
    declaration: true,
    emitDeclarationOnly: true,
  })
  return gulp
    .src([
      'src/**/*.{ts,tsx}',
      '!src/App.tsx',
      '!src/index.tsx',
      '!src/react-app-env.d.ts',
      '!src/setupTests.ts',
      '!src/components.ts',
    ], {
      ignore: ['**/demo/**/*', '**/demos/**/*', '**/__tests__/**/*'],
    })
    .pipe(tsProject)
    .pipe(gulp.dest('lib/es/'))
    .pipe(gulp.dest('lib/cjs/'))
}

function buildCJS() {
  return gulp
    .src(['lib/es/**/*.js'])
    .pipe(
      babel({
        'plugins': ['@babel/plugin-transform-modules-commonjs'],
      })
    )
    .pipe(gulp.dest('lib/cjs/'))
}

function getViteConfigForPackage({ env, formats, external }) {
  const name = packageJson.name
  const isProd = env === 'production'
  return {
    root: process.cwd(),

    mode: env,

    logLevel: 'silent',

    define: { 'process.env.NODE_ENV': `"${env}"` },

    build: {
      lib: {
        name: 'uceeMobile',
        entry: './lib/es/index.js',
        formats,
        fileName: format => `${name}.${format}${isProd ? '' : `.${env}`}.js`,
      },
      rollupOptions: {
        external,
        output: {
          dir: './lib/bundle',
          globals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
      minify: isProd ? 'esbuild' : false,
    },
  }
}

async function buildBundles(cb) {
  const envs = ['development', 'production']
  const configs = envs.map(env =>
    getViteConfigForPackage({
      env,
      formats: ['es', 'cjs', 'umd'],
      external: ['react', 'react-dom'],
    })
  )

  await Promise.all(configs.map(config => vite.build(config)))
  cb && cb()
}

function buildCompatibleUMD() {
  return gulp
    .src('lib/bundle/ucee-mobile.umd.js')
    .pipe(
      babel({
        presets: [
          [
            '@babel/env',
            {
              targets: {
                'chrome': '49',
                'ios': '9',
              },
            },
          ],
        ],
      })
    )
    .pipe(rename('ucee-mobile.compatible.umd.js'))
    .pipe(gulp.dest('lib/bundle/'))
    .pipe(rename('ucee-mobile.js'))
    .pipe(gulp.dest('lib/umd/'))
}

function copyAssets() {
  return gulp
    .src('./src/assets/**/*')
    // .pipe(gulp.dest('lib/assets'))
    .pipe(gulp.dest('lib/es/assets'))
    .pipe(gulp.dest('lib/cjs/assets'))
}

function copyMetaFiles() {
  return gulp.src(['./README.md', './LICENSE.txt']).pipe(gulp.dest('./lib/'))
}

function scssSuffixToCssInCompoent() {
  return gulp
    .src('lib/es/components/**/*.js')
    .pipe(
      through.obj((file, enc, cb) => {
        if(file.isNull()) {
          return cb(null, file)
        }
        if(file.isStream()) {
          return cb(null, file)
        }
        let contents = file.contents.toString()
        contents = contents.replace(/\.scss/g, '\.css')
        file.contents = Buffer.from(contents)
        cb(null, file)
      })
    )
    .pipe(gulp.dest('lib/es/components/'))
}

function generatePackageJSON() {
  return gulp
    .src('./package.json')
    .pipe(
      through.obj((file, enc, cb) => {
        const rawJSON = file.contents.toString()
        const parsed = JSON.parse(rawJSON)
        delete parsed.scripts
        delete parsed.devDependencies
        delete parsed.eslintConfig
        delete parsed.browserslist
        delete parsed.files
        // delete parsed.resolutions
        delete parsed.packageManager
        const stringified = JSON.stringify(parsed, null, 2)
        file.contents = Buffer.from(stringified)
        cb(null, file)
      })
    )
    .pipe(gulp.dest('./lib/'))
}

function buildUmdWebpack() {
  return gulp
    .src('lib/es/index.js')
    .pipe(
      webpackStream({
        mode: 'production',
        output: {
          filename: 'ucee-mobile.js',
          library: 'uceeMobile',
          libraryTarget: 'umd'
        },
        performance: {
          hints: false,
        },
        resolve: {
          extensions: ['.js', '.json'],
        },
        plugins: [
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: 'report/report.html',
          }),
          new StatoscopeWebpackPlugin({
            saveReportTo: 'report/statoscope/report.html',
            saveStatsTo: 'report/statoscope/stats.json',
            open: false,
          }),
        ],
        externals: [
          {
            react: {
              commonjs: 'react',
              commonjs2: 'react',
              amd: 'react',
              root: 'React',
            },
            'react-dom': {
              commonjs: 'react-dom',
              commonjs2: 'react-dom',
              amd: 'react-dom',
              root: 'ReactDOM',
            },
          },
        ],
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: 'babel-loader',
                options: {
                  'presets': [
                    [
                      '@babel/preset-env',
                      {
                        'loose': true,
                        'modules': false,
                        'targets': {
                          'chrome': '49',
                          'ios': '10',
                        },
                      },
                    ],
                    '@babel/preset-typescript',
                    '@babel/preset-react',
                  ],
                },
              },
            },
            {
              test: /\.(png|svg|jpg|gif|jpeg)$/,
              use: ['file-loader']
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: ['file-loader']
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
          ]
        }
      })
    )
    .pipe(gulp.dest('lib/umd/'))
}

exports.default = gulp.series(
  clean,
  renameComponentsFile,
  buildES,
  buildCJS,
  gulp.parallel(buildDeclaration, buildStyles),
  scssSuffixToCssInCompoent,
  copyAssets,
  copyMetaFiles,
  generatePackageJSON,
  buildBundles,
  buildCompatibleUMD,
  buildUmdWebpack,
  delIndex,
)