import React from 'react'
import { useRouter } from 'next/router'

import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'

import styles from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : (locale === 'uz' ? uz : en)
    
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} container`}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <Image src="/logo.svg" width={60} height={80} alt="" draggable={false}></Image>
                    </div>
                    <div className={styles.list}>
                        <Link href="#" className={styles.link}>{t.aboutLink}</Link>
                        <Link href="#" className={styles.link}>{t.servicesLink}</Link>
                        <Link href="#" className={styles.link}>{t.callbackLink}</Link>
                        <Link href="#" className={styles.link}>{t.contactsLink}</Link>
                    </div>
                </div>
                <Link href="https://bit.ly/shahriyorweb" target="_blank" className={`${styles.link} ${styles.copy}`}>{t.footerCopy}</Link>
            </div>
        </footer>
    )
}

export default Footer