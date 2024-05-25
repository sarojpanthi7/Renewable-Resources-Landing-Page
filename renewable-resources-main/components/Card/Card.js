import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import styles from './Card.module.css';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function CustomCard({ title, icon, desc }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted && (
        <Card className={styles.card}>
          <Card.Body>
            <div className={styles.img}>
              <Image src={icon} alt={title} />
            </div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default CustomCard;
