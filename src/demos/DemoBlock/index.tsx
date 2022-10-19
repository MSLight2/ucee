import styles from './index.scss';

interface Props {
  title: string;
  space?: boolean;
  setction?: boolean;
  children?: React.ReactNode;
}
export default (props: Props) => {
  return (
    <div className={styles.demoBlock}>
      <div
        className={`${styles.title} ${props.setction && styles.setction}`}
      >
        {props.title}
      </div>
      <div
        className={`block ${props.space && styles.space}`}
      >
        {props.children}
      </div>
    </div>
  )
}
