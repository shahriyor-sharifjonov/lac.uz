import React from 'react'
import { useRouter } from 'next/router'

import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'

import styles from './About.module.scss'

const About = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : (locale === 'uz' ? uz : en);
  return (
    <section className={styles.about}>
        <div className={`${styles.container} container`}>
            <h2 className={`${styles.title} title`} dangerouslySetInnerHTML={{ __html: t.aboutTitle }}></h2>
            <p className={styles.p}>{t.aboutText}</p>
        </div>
    </section>
  )
}

export default About