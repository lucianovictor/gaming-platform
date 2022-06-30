import styles from './styles.module.scss'

export const Header = () => (
  <header>
    <div className={styles.container}>
      <h1>LOGO</h1>
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.active}>Home</li>
          <li>About us</li>
          <li>Portfolio</li>
          <li>News</li>
        </ul>
      </nav>
      <button type="button"> Contact us</button>
    </div>
  </header>
)
