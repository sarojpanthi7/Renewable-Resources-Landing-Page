import Image from 'next/image';
import styles from './AboutContent.module.css';
import img from '../../../public/images/aboutContent.jpg';
const AboutContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={img} />
      </div>
      <div className={styles.content}>
        <h2>Welcome to our website dedicated to renewable resources!</h2>
        <p>
          Our mission is to promote the use of renewable resources and create a
          sustainable future for generations to come. We believe that renewable
          resources are the key to reducing our reliance on fossil fuels and
          mitigating the impact of climate change.
        </p>
        <p>
          At our website, you will find information and resources on a wide
          range of renewable resources including solar, wind, hydro, geothermal,
          and biomass. We provide up-to-date news, articles, and guides on how
          to utilize renewable resources for energy production and conservation.
        </p>
        <p>
          Our team of experts is passionate about the environment and renewable
          energy. We are committed to providing accurate and reliable
          information to help individuals, businesses, and governments make
          informed decisions about renewable resources.
        </p>
        <p>
          We welcome you to join us on this journey towards a greener, more
          sustainable future. Explore our website to learn more about renewable
          resources, their benefits, and how you can contribute to a cleaner
          environment.
        </p>
        <button className={`${styles.btn}`}>Donate Now</button>
      </div>
    </div>
  );
};
export default AboutContent;
