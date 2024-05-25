import styles from './MakeDonation.module.css';

const MakeDonation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.firstHeader}>Make Donation</h2>
          <h3>Your money can cure this earth</h3>
          <div className={styles.underline}></div>
        </div>
        <div className="content">
          We are a larhge froup of people who powered movement fighting for a
          green and peaceful future for your land, forest, ocenas, foods,
          climate and pass the green earth to our children. Each one of us can
          make small changes in our lives, but together we can change the world.
        </div>
        <button className={`${styles.btn} ${styles.firstBtn}`}>
          Donate Now
        </button>
      </div>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.secondHeader}>Stop Drilling, Need Action!</h2>
          <h3>Your voice does matter</h3>
          <div className={styles.underline}></div>
        </div>
        <div className="content">
          The Obama administration just granted Shell’s final permit to drill in
          the Alaskan Arctic this summer despite overwhelming global public
          opposition and the obvious risks to Arctic communities, wildlife, and
          our climate. But this isn’t over. The President knows what’s at stake:
          his climate legacy.
        </div>
        <button className={`${styles.btn} ${styles.secondBtn}`}>Act Now</button>
      </div>
    </div>
  );
};
export default MakeDonation;
