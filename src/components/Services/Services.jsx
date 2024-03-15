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
        <section className={styles.services}>
            <div className={`${styles.container} container`}>
                
            </div>
        </section>
    )
}

export default Services