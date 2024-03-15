import React from 'react'
import { useRouter } from 'next/router'

import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'

import styles from './Contacts.module.scss'
import Link from 'next/link'

const Contacts = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : (locale === 'uz' ? uz : en);

    return (
        <section className={styles.contacts} id="contacts">
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={`${styles.title} title`} dangerouslySetInnerHTML={{ __html: t.contactsTitle }}></h2>
                    <p className={styles.loc}>14 Navoiy str. Tashkent, Republic of Uzbekistan</p>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2C13.0837 2.00344 10.2878 3.16347 8.22564 5.22563C6.16348 7.28778 5.00345 10.0837 5.00001 13C4.99652 15.3832 5.77499 17.7018 7.21601 19.6C7.21601 19.6 7.51601 19.995 7.56501 20.052L16 30L24.439 20.047C24.483 19.994 24.784 19.6 24.784 19.6L24.785 19.597C26.2253 17.6996 27.0034 15.3821 27 13C26.9966 10.0837 25.8365 7.28778 23.7744 5.22563C21.7122 3.16347 18.9163 2.00344 16 2ZM16 17C15.2089 17 14.4355 16.7654 13.7777 16.3259C13.1199 15.8864 12.6072 15.2616 12.3045 14.5307C12.0017 13.7998 11.9225 12.9956 12.0769 12.2196C12.2312 11.4437 12.6122 10.731 13.1716 10.1716C13.731 9.61216 14.4437 9.2312 15.2197 9.07686C15.9956 8.92252 16.7998 9.00173 17.5307 9.30448C18.2616 9.60723 18.8864 10.1199 19.3259 10.7777C19.7654 11.4355 20 12.2089 20 13C19.9987 14.0605 19.5768 15.0771 18.827 15.827C18.0771 16.5768 17.0605 16.9987 16 17Z" fill="white"/>
                            </svg>
                            <p className={styles.itemTxt}>{t.contactsLoc}</p>
                        </div>
                        <div className={styles.item}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.82667 14.3867C10.7467 18.16 13.84 21.24 17.6133 23.1733L20.5467 20.24C20.9067 19.88 21.44 19.76 21.9067 19.92C23.4 20.4133 25.0133 20.68 26.6667 20.68C27.4 20.68 28 21.28 28 22.0133V26.6667C28 27.4 27.4 28 26.6667 28C14.1467 28 4 17.8533 4 5.33333C4 4.6 4.6 4 5.33333 4H10C10.7333 4 11.3333 4.6 11.3333 5.33333C11.3333 7 11.6 8.6 12.0933 10.0933C12.24 10.56 12.1333 11.08 11.76 11.4533L8.82667 14.3867Z" fill="white"/>
                            </svg>
                            <Link href="tel:+998712418000" className={styles.itemTxt}>+998 (71) 241-80-00</Link>
                        </div>
                        <div className={styles.item}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.33329 26.6666C4.59996 26.6666 3.9724 26.4057 3.45063 25.8839C2.92885 25.3621 2.66751 24.7341 2.66663 23.9999V7.99992C2.66663 7.26659 2.92796 6.63903 3.45063 6.11725C3.97329 5.59547 4.60085 5.33414 5.33329 5.33325H26.6666C27.4 5.33325 28.028 5.59459 28.5506 6.11725C29.0733 6.63992 29.3342 7.26747 29.3333 7.99992V23.9999C29.3333 24.7333 29.0724 25.3613 28.5506 25.8839C28.0288 26.4066 27.4008 26.6675 26.6666 26.6666H5.33329ZM16 17.3333L26.6666 10.6666V7.99992L16 14.6666L5.33329 7.99992V10.6666L16 17.3333Z" fill="white"/>
                            </svg>
                            <Link href="mailto:mail@mail.ru" className={styles.itemTxt}>mail@mail.ru</Link>
                        </div>
                        <div className={styles.item}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 5.33325C17.4145 5.33325 18.7711 5.89515 19.7713 6.89535C20.7715 7.89554 21.3334 9.2521 21.3334 10.6666C21.3334 12.0811 20.7715 13.4376 19.7713 14.4378C18.7711 15.438 17.4145 15.9999 16 15.9999C14.5856 15.9999 13.229 15.438 12.2288 14.4378C11.2286 13.4376 10.6667 12.0811 10.6667 10.6666C10.6667 9.2521 11.2286 7.89554 12.2288 6.89535C13.229 5.89515 14.5856 5.33325 16 5.33325ZM16 18.6666C21.8934 18.6666 26.6667 21.0533 26.6667 23.9999V26.6666H5.33337V23.9999C5.33337 21.0533 10.1067 18.6666 16 18.6666Z" fill="white"/>
                            </svg>
                            <p className={styles.itemTxt}>OOO “Legal Associates Center”</p>
                        </div>
                    </div>
                    <Link href="https://yandex.uz/maps/10335/tashkent/house/YkAYdAFhTkUAQFprfX9zcHxibQ==/?ll=69.261708%2C41.321019&z=16.61" target="_blank" className={styles.btn}>{t.contactsBtn}</Link>
                </div>
                <div style={{position:"relative",overflow:"hidden"}} className={styles.map}>
                    <a href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"}}>Ташкент</a>
                    <iframe src="https://yandex.uz/map-widget/v1/?ll=69.262765%2C41.320976&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTAxNDA3EjRPyrt6YmVraXN0b24sIFRvc2hrZW50LCBBbGlzaGVyIE5hdm9peSBrb8q7Y2hhc2ksIDE0IgoN_4WKQhW6SCVC&z=16.61" width="560" height="400" frameborder="1" allowfullscreen="true" style={{position:"relative"}}></iframe>
                </div> 
                <Link href="https://yandex.uz/maps/10335/tashkent/house/YkAYdAFhTkUAQFprfX9zcHxibQ==/?ll=69.261708%2C41.321019&z=16.61" target="_blank" className={`${styles.btn} ${styles.mobile}`}>{t.contactsBtn}</Link>
            </div>
        </section>
    )
}

export default Contacts