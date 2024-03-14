import React, {useState} from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'

const Header = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : (locale === 'uz' ? uz : en);
    const [drop, setDrop] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const changeLanguage = (e) => {
        const locale = e.target.innerHTML
        router.push(router.pathname, router.asPath, { locale })
    }

    return (
        <header className={styles.header}>
            <nav className={`container ${styles.container}`}>
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
                <div className={styles.right}>
                    <div className={styles.tel}>
                        <Link href="tel:+998712418000" className={styles.telSvg}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9605 2.5C8.07866 2.5 2.49341 8.1 2.49341 15C2.49341 21.9 8.07866 27.5 14.9605 27.5C21.8423 27.5 27.4276 21.9 27.4276 15C27.4276 8.1 21.8423 2.5 14.9605 2.5ZM20.7452 11C20.5582 12.975 19.7478 17.775 19.3364 19.9875C19.1619 20.925 18.8128 21.2375 18.4887 21.275C17.7656 21.3375 17.217 20.8 16.5189 20.3375C15.4218 19.6125 14.7984 19.1625 13.7387 18.4625C12.5045 17.65 13.3024 17.2 14.013 16.475C14.2 16.2875 17.3916 13.375 17.4539 13.1125C17.4626 13.0727 17.4614 13.0315 17.4505 12.9923C17.4397 12.953 17.4194 12.9171 17.3916 12.8875C17.3168 12.825 17.217 12.85 17.1298 12.8625C17.0176 12.8875 15.2722 14.05 11.8687 16.35C11.37 16.6875 10.9212 16.8625 10.5222 16.85C10.0734 16.8375 9.22563 16.6 8.58981 16.3875C7.80438 16.1375 7.1935 16 7.24336 15.5625C7.2683 15.3375 7.57998 15.1125 8.16593 14.875C11.8063 13.2875 14.2249 12.2375 15.4342 11.7375C18.9001 10.2875 19.6107 10.0375 20.0845 10.0375C20.1842 10.0375 20.4211 10.0625 20.5707 10.1875C20.6953 10.2875 20.7327 10.425 20.7452 10.525C20.7327 10.6 20.7577 10.825 20.7452 11Z" fill="white"/>
                            </svg>    
                        </Link>
                        <Link href="tel:+998712418000">+998 (71) 241-80-00</Link>
                    </div>
                    <div className={styles.drop}>
                        <button className={styles.dropBtn} onClick={() => {setDrop(!drop)}}>
                            {locale}
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_85_365)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.08349 10.0375C8.90771 10.2131 8.66943 10.3117 8.42099 10.3117C8.17255 10.3117 7.93427 10.2131 7.75849 10.0375L4.22224 6.50249C4.04645 6.32662 3.94773 6.08812 3.94778 5.83946C3.94784 5.5908 4.04668 5.35234 4.22255 5.17655C4.39842 5.00077 4.63692 4.90204 4.88558 4.9021C5.13425 4.90216 5.3727 5.00099 5.54849 5.17687L8.42099 8.04937L11.2935 5.17687C11.4702 5.00601 11.707 4.9114 11.9528 4.91342C12.1986 4.91544 12.4338 5.01392 12.6077 5.18766C12.7816 5.3614 12.8803 5.59649 12.8826 5.8423C12.8848 6.08811 12.7904 6.32497 12.6197 6.50187L9.08411 10.0381L9.08349 10.0375Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_85_365">
                                <rect width="15" height="15" fill="white" transform="translate(0.92099)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button> 
                        <div className={`${styles.dropContent} ${drop && styles.active}`}>
                            <button className={styles.dropLink} onClick={(e) => {setDrop(!drop);changeLanguage(e);}}>{locale === 'uz' && 'ru'}{locale === 'ru' && 'en'}{locale === 'en' && 'uz'}</button>
                            <button className={styles.dropLink} onClick={(e) => {setDrop(!drop);changeLanguage(e);}}>{locale === 'ru' && 'uz'}{locale === 'en' && 'ru'}{locale === 'uz' && 'en'}</button>
                        </div>
                    </div>
                    <button className={styles.menuBtn} onClick={()=>{setMenuOpen(!menuOpen)}}>
                        <div></div>
                    </button>
                </div>
            </nav>
            <div className={`${styles.menuOverlay} ${menuOpen && styles.active}`} onClick={()=>{setMenuOpen(!menuOpen)}}></div>
            <div className={`${styles.menu} ${menuOpen && styles.active}`}>
                <div className={styles.logo} onClick={()=>{setMenuOpen(!menuOpen)}}>
                    <Image src="/logo.svg" width={60} height={80} alt="" draggable={false}></Image>
                </div>
                <div className={styles.list}>
                    <Link href="#" className={styles.link} onClick={()=>{setMenuOpen(!menuOpen)}}>{t.aboutLink}</Link>
                    <Link href="#" className={styles.link} onClick={()=>{setMenuOpen(!menuOpen)}}>{t.servicesLink}</Link>
                    <Link href="#" className={styles.link} onClick={()=>{setMenuOpen(!menuOpen)}}>{t.callbackLink}</Link>
                    <Link href="#" className={styles.link} onClick={()=>{setMenuOpen(!menuOpen)}}>{t.contactsLink}</Link>
                </div>
                <div className={styles.tel}>
                    <Link href="tel:+998712418000" className={styles.telSvg}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9605 2.5C8.07866 2.5 2.49341 8.1 2.49341 15C2.49341 21.9 8.07866 27.5 14.9605 27.5C21.8423 27.5 27.4276 21.9 27.4276 15C27.4276 8.1 21.8423 2.5 14.9605 2.5ZM20.7452 11C20.5582 12.975 19.7478 17.775 19.3364 19.9875C19.1619 20.925 18.8128 21.2375 18.4887 21.275C17.7656 21.3375 17.217 20.8 16.5189 20.3375C15.4218 19.6125 14.7984 19.1625 13.7387 18.4625C12.5045 17.65 13.3024 17.2 14.013 16.475C14.2 16.2875 17.3916 13.375 17.4539 13.1125C17.4626 13.0727 17.4614 13.0315 17.4505 12.9923C17.4397 12.953 17.4194 12.9171 17.3916 12.8875C17.3168 12.825 17.217 12.85 17.1298 12.8625C17.0176 12.8875 15.2722 14.05 11.8687 16.35C11.37 16.6875 10.9212 16.8625 10.5222 16.85C10.0734 16.8375 9.22563 16.6 8.58981 16.3875C7.80438 16.1375 7.1935 16 7.24336 15.5625C7.2683 15.3375 7.57998 15.1125 8.16593 14.875C11.8063 13.2875 14.2249 12.2375 15.4342 11.7375C18.9001 10.2875 19.6107 10.0375 20.0845 10.0375C20.1842 10.0375 20.4211 10.0625 20.5707 10.1875C20.6953 10.2875 20.7327 10.425 20.7452 10.525C20.7327 10.6 20.7577 10.825 20.7452 11Z" fill="white"/>
                        </svg>    
                    </Link>
                    <Link href="tel:+998712418000">+998 (71) 241-80-00</Link>
                </div>
            </div>
        </header>
    )
}

export default Header