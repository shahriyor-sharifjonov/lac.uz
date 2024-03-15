import React from 'react'
import { useRouter } from 'next/router'

import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'

import styles from './Footer.module.scss'

const Footer = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : (locale === 'uz' ? uz : en);
    
    return (
        <footer className={styles.footer}>

        </footer>
    )
}

export default Footer