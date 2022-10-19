declare module '*.css';
declare module '*.scss';
declare module '*.less' {
  const value: {
    [key: string]: string
  }
  export = value
}
declare module '*.png';
declare module '*.svg';
