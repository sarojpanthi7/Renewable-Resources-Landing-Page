import { Container } from 'react-bootstrap';
import styles from './HeroSection.module.css';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../public/images/slider-1.jpg';
import slider2 from '../../public/images/slider-2.jpg';
import slider3 from '../../public/images/slider-3.jpg';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted && (
        <Carousel className={styles.hero__container}>
          <Carousel.Item interval={1000}>
            <div className={styles.img}>
              <Image
                className="d-block w-100"
                src={slider1}
                alt="First slide"
              />
            </div>
            <Carousel.Caption className={styles.content}>
              <h3>Powering the future with renewable energy</h3>
              <p>let's make a sustainable tomorrow, today.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <div className={styles.img}>
              <Image
                className="d-block w-100"
                src={slider2}
                alt="Second slide"
              />
            </div>

            <Carousel.Caption className={styles.content}>
              <h3>Help Us</h3>
              <h2>Save Animals</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.img}>
              <Image
                className="d-block w-100"
                src={slider3}
                alt="Third slide"
              />
            </div>

            <Carousel.Caption className={styles.content}>
              <h3>Make This World</h3>
              <p>The Better Place</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
};
export default HeroSection;
