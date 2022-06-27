import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Banxico Visualizer</h1>
      <div>
        by{' '}
        <a href='https://hugomendez.dev' target='_blank' rel='noreferrer'>
          Hugo Méndez
        </a>{' '}
        -{' '}
        <a
          href='https://github.com/Hugomndez/banxico-api-visualizer'
          target='_blank'
          rel='noreferrer'
        >
          Github Repo
        </a>
      </div>
    </header>
  );
};

export default Header;
