import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'

import styles from './Intro.module.scss'
import Link from 'next/link'

const Intro = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : (locale === 'uz' ? uz : en);
    const [width, setWidth] = useState(100)

    const changeLanguage = (e) => {
        const locale = e.target.innerHTML
        router.push(router.pathname, router.asPath, { locale })
    }

    useEffect(() => {
        setWidth(document.querySelector(`.${styles.btn}`).clientWidth)
    }, [locale])

    return (
        <section className={styles.intro} id="intro">
            <div className={`container ${styles.container}`}>
                <div className={styles.lang}>
                    <button type="button" className={`${styles.langBtn} ${locale === "ru" && styles.active}`} onClick={(e) => {changeLanguage(e);}}>ru</button>
                    <div className={styles.hr}></div>
                    <button type="button" className={`${styles.langBtn} ${locale === "uz" && styles.active}`} onClick={(e) => {changeLanguage(e);}}>uz</button>
                    <button type="button" className={`${styles.langBtn} ${locale === "en" && styles.active}`} onClick={(e) => {changeLanguage(e);}}>en</button>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>{t.introTitle}</h1>
                    <p className={styles.desc}>{t.introDesc}</p>
                </div>
                <Link href="#callback" className={styles.btn} style={{ marginLeft: `calc(${-width/2}px + 10vw)` }}>{t.introBtn}</Link>
            </div>
        </section>
    )
}

export default Intro