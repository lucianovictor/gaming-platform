import styles from './styles.module.scss'

export const Banner = () => (
  <section>
    <div className={styles.container}>
      <h3>3D game Dev </h3>
      <h1>Work that we produce for our clients</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard.
      </p>
      <button type="button">Get more details</button>
    </div>
    <div className={styles.background}>
      <img src="../../assets/joy_stick.png" alt="" />
    </div>
  </section>
)
