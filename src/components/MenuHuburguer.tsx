import styles from './styles/MenuHuburguer.module.css'
const MenuHamburguer = () => {
  return (
    <nav className={styles.Navbar}>
      <input id="menu-humburguer" type="checkbox" />

      <label htmlFor="menu-humburguer">
        <div className={styles.Menu}>
          <span className={styles.Hamburguer}></span>
        </div>
      </label>
      <ul className={styles.Links}>
        <li>
          <a href="#About">sobre</a>
        </li>
        <li>
          <a href="#Skills">Habilidades</a>
        </li>
        <li>
          <a href="#Projects">Projeto</a>
        </li>
        <li>
          <a href="#Contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export { MenuHamburguer };
