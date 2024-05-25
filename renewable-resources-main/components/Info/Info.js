import Image from 'next/image';
import styles from './Info.module.css';
import tree from '../../public/images/icon-4.png';
import leaf from '../../public/images/icon-5.png';
import recycle from '../../public/images/icon-1.png';
import sun from '../../public/images/icon-2.png';

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Image src={tree} />
          </div>
          <div className={styles.information}>
            <h3>1,000,000</h3>
            <h4>AREA CONSERVED</h4>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Image src={leaf} />
          </div>
          <div className={styles.information}>
            <h3>700</h3>
            <h4>SCIENTISTS</h4>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Image src={recycle} />
          </div>
          <div className={styles.information}>
            <h3>99.99%</h3>
            <h4>RECYCLING</h4>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Image src={sun} />
          </div>
          <div className={styles.information}>
            <h3>2000MW</h3>
            <h4>SOLAR POWER</h4>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="header">
          <h1>The only way to make this happened is to take action!</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nislet.</p>
        </div>
        <div className={styles.btn__container}>
          <button className={`${styles.btn} ${styles.firstBtn}`}>
            Donate Now
          </button>
          <button className={`${styles.btn} ${styles.secondBtn}`}>
            Act Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Info;
