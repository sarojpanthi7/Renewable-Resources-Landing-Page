import styles from './Team.module.css';
import jeniffer from '../../../public/images/jeniffer.jpg';
import john from '../../../public/images/john.jpg';
import amely from '../../../public/images/amely.jpg';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Team = () => {
  const content = [
    {
      id: 1,
      img: jeniffer,
      name: 'Jennifer Smith',
      role: 'Founder',
      info: 'Jennifer Smith is an environmental activist, writer, and the founder of the Intersectional Environmentalist platform, which aims to promote diversity, equity, and inclusion in the environmental movement. She is known for her advocacy work on environmental and social justice issues, particularly the intersection of race and the environment.',
    },
    {
      id: 2,
      img: john,
      name: 'John Doe',
      role: 'GENERAL MANAGER',
      info: 'John Doe is an American environmental activist, author, and adventurer who is known for his advocacy work on sustainability and conservation. He has been involved in various environmental campaigns and initiatives, including promoting sustainable agriculture.',
    },
    {
      id: 3,
      img: amely,
      name: 'Amely Chan',
      role: 'HUMAN RELATION',
      info: 'Amley Chan is an environmental advocate, video producer, and travel blogger who is known for her work on sustainability and green living. She promotes eco-friendly lifestyle choices through her blog, "Travel Lushes," and her social media channels.',
    },
  ];
  return (
    <div className={styles.container}>
      <h3>Meet The Team</h3>
      <div className={styles.cards}>
        {content.map((card) => {
          return (
            <article key={card.id} className={styles.card}>
              <div className={styles.card_img}>
                <Image src={card.img} />
              </div>
              <div className={styles.info}>
                <h4>{card.name}</h4>
                <span>{card.role}</span>
                <p>{card.info}</p>
              </div>
              <div className={styles.icons}>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
export default Team;
