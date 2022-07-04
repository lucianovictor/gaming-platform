import { Banner } from 'components/Banner'
import { Header } from 'components/Header'
import Head from 'next/head'
import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gaming Platform </title>
      </Head>
      <Header />
      <Banner />
    </div>
  )
}
