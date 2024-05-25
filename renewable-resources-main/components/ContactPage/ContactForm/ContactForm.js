import { BsFillTelephoneFill } from 'react-icons/bs';
import styles from './ContactForm.module.css';
import { MdSmartphone } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import {
  FaFacebookF,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className="item">
            <h5>BEFORE CONTACTING US</h5>
            <p>
              If you are experiencing technical issues, please try the following
              troubleshooting steps: Refresh the page and clear your cache and
              cookies Try using a different browser or device Check your
              internet connection
            </p>
          </div>
          <div className="item">
            <h5>CONTACT INFORMATION</h5>
            <p>184 Main Collins Street West Victoria 8007 Australia</p>
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

          <div className={styles.socials}>
            <h5>SOCIAL MEDIA</h5>
            <div className={styles.icons}>
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaGooglePlus />
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          <h3>Please fill up the form below</h3>

          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name" id="name" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter your email" id="email" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className={styles.btn}>Send</button>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
