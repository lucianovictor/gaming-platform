import styles from './styles.module.scss'

export const BannerHero = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Currently Trending Games</h1>
        <button type="button">SEE ALL</button>
      </div>
      <div className={styles.images}></div>
    </>
  )
}
