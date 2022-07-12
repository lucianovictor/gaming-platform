import styles from './styles.module.scss'

export const BannerHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Currently Trending Games</h1>
        <button>SEE ALL</button>
      </div>
      <div className={styles.images}></div>
    </div>
  )
}
