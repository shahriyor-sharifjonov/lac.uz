import React from 'react'
import { useRouter } from 'next/router'

import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'

import styles from './Services.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : (locale === 'uz' ? uz : en)

    return (
        <section className={styles.services} id="services">
            <div className={`${styles.container} container`}>
                <h2 className={`${styles.title} title`} dangerouslySetInnerHTML={{ __html: t.servicesTitle }}></h2>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <p className={styles.itemTitle}>{t.services1}</p>
                        <Link href="#callback" className={styles.itemBtn}>{t.servicesBtn}</Link>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.itemTitle}>{t.services2}</p>
                        <Link href="#callback" className={styles.itemBtn}>{t.servicesBtn}</Link>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.itemTitle}>{t.services3}</p>
                        <Link href="#callback" className={styles.itemBtn}>{t.servicesBtn}</Link>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.itemTitle}>{t.services4}</p>
                        <Link href="#callback" className={styles.itemBtn}>{t.servicesBtn}</Link>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.itemTitle}>{t.services5}</p>
                        <Link href="#callback" className={styles.itemBtn}>{t.servicesBtn}</Link>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.itemTitle}>{t.services6}</p>
                        <Link href="#callback" className={styles.itemBtn}>{t.servicesBtn}</Link>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.itemTitle}>{t.services7}</p>
                        <Link href="#callback" className={styles.itemBtn}>{t.servicesBtn}</Link>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.itemTitle}>{t.services8}</p>
                        <Link href="#callback" className={styles.itemBtn}>{t.servicesBtn}</Link>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.itemTitle}>{t.services9}</p>
                        <Link href="#callback" className={styles.itemBtn}>{t.servicesBtn}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services