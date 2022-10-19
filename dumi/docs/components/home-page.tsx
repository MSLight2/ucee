import React from "react";
// @ts-ignore
import styles from './home-page.less';
import RightImg from '../../assets/index_kj.svg';

export default () => {
  return (
    <div className={styles.main}>
      <div className={styles['content-left']}>
        <div className={styles['ct-title']}>Ucee Mobile</div>
        <div className={styles['ct-text']}>一个基于React的移动端组件库，</div>
        <div className={styles['ct-text']}>UI来自Vant UI。</div>
        <div className={styles.buttons}>
          <a href="/guide/start">开始使用</a>
          <a href="/components/button">组件列表</a>
        </div>
      </div>
      <div className={styles['content-right']}>
        <img src={RightImg} alt="" />
      </div>
    </div>
  );
}