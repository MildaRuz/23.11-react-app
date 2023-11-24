import styles from './Header.module.css';

const Header = () => {
  const nav = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About us' },
    { id: 'nicePhoto', name: 'Nice photo' },
    { id: 'goodThings', name: 'Good things' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'contacts', name: 'Contacts' },
  ];

  return (
    <header>
      <nav>
        <div className={styles.logo}>LoGo</div>
        <ul className={styles.navList}>
          {nav.map((el) => (
            <li key={el.id}>
              <a href={'#' + el.id}>{el.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
