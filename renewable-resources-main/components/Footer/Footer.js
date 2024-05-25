import styles from './Footer.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdSmartphone } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import nature from '../../public/images/footer4.jpg';
import girl from '../../public/images/footer3.jpg';
import elephant from '../../public/images/footer2.jpg';
import wind from '../../public/images/footer1.jpg';
import saveFooter from '../../public/images/save-footer.jpg';
import footerImg from '../../public/images/footer-img.jpg';
import Image from 'next/image';
import Link from 'next/link';

const CustomFooter = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.aboutUs}>
          {/*  to be changed to logo */}
          <h1>Renewable resources</h1>
          <p>
            Renewable resources are natural resources that can be replenished or
            restored naturally over time, such as solar, wind, hydro,
            geothermal, and biomass energy.
          </p>
        </div>
        <div className={styles.contact}>
          <h3>Contact Info</h3>
          <span>Address: 124 Random Adress</span>
          <div className="icon__container">
            <div className={styles.info}>
              <BsFillTelephoneFill />
              <span> +1800-222-3333</span>
            </div>
            <div className={styles.info}>
              <MdSmartphone />
              <span> +1800-222-3333</span>
            </div>
            <div className={styles.info}>
              <FiMail />
              <span> contact@renewable.com</span>
            </div>
          </div>
        </div>
        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <div className={styles.linkContainer}>
            <FaHome />
            <Link className={styles.link} href={'/'}>
              Home
            </Link>
          </div>
          <div className={styles.linkContainer}>
            <AiOutlineInfoCircle />
            <Link className={styles.link} href={'/about'}>
              About
            </Link>
          </div>
          <div className={styles.linkContainer}>
            <BsFillTelephoneFill />
            <Link className={styles.link} href={'/contact'}>
              Contact
            </Link>
          </div>
        </div>
        <div className={styles.recent}>
          <h3>Recent Work</h3>
          <div className={styles.recentWork}>
            <div className={styles.img}>
              <Image src={nature} />
            </div>
            <div className={styles.img}>
              <Image src={girl} />
            </div>
            <div className={styles.img}>
              <Image src={elephant} />
            </div>
            <div className={styles.img}>
              <Image src={saveFooter} />
            </div>
            <div className={styles.img}>
              <Image src={footerImg} />
            </div>
            <div className={styles.img}>
              <Image src={wind} />
            </div>
          </div>
        </div>
      </footer>
      <footer className={styles.bottomFooter}>
        <p>&copy; All right reserved {new Date().getFullYear()} </p>
      </footer>
    </>
  );
};
export default CustomFooter;
