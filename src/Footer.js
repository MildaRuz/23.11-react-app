import styles from './Footer.module.css';

const Footer = () => {
  //const cont = [];
  return (
    <footer id="contacts">
      <div className={styles.footerContainer}>
        <div className={styles.contactsCont}>
          <div className={styles.contactsTitle}>Contact us:</div>
          <div>email@email.lt</div>
          <div>phone number</div>
        </div>
        <div className={styles.soc}>
          <div>Like us on facebook</div>
          <div>Follow us on instagram</div>
        </div>
      </div>
      <div className={styles.copyright}>All rights reserved M.R. 2023</div>
    </footer>
  );
};

export default Footer;
