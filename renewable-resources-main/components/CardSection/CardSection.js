import CustomCard from '../Card/Card';
import service1 from '../../public/images/icon-service-1.png';
import service2 from '../../public/images/icon-service-2.png';
import service3 from '../../public/images/icon-service-3.png';
import styles from './CardSection.module.css';

const CardSection = () => {
  const content = [
    {
      title: 'Save Our Forest',
      icon: service1,
      desc: 'Save trees, and they’ll bear fruits for future generations.',
    },
    {
      title: 'Save Our Water',
      icon: service2,
      desc: 'Understand your responsibility of saving water so that you can be blessed with later.',
    },
    {
      title: 'Recycle',
      icon: service3,
      desc: 'Reuse, recycle, and reduce the waste for a better future',
    },
  ];
  return (
    <div className={styles.cardSection}>
      {content.map((item, index) => {
        return <CustomCard {...item} key={index} />;
      })}
    </div>
  );
};
export default CardSection;
