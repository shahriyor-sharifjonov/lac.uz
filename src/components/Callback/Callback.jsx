import React, { useState } from 'react'
import { useRouter } from 'next/router'

import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'

import styles from './Callback.module.scss'

const Callback = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : (locale === 'uz' ? uz : en)

    const [fio, setFio] = useState('')
    const [tel, setTel] = useState('')
    const [sended, setSended] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const dataObject = {
            'Имя': fio,
            'Телефон': tel,
        };

        console.log(dataObject);

        const response = await fetch('/api/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObject),
        })

        const message = await response.json()
        setSended(true)
        setFio('')
        setTel('')
    }

    return (
        <section className={styles.callback} id="callback">
            <div className={`container ${styles.container}`}>
                <h2 className={`${styles.title} title`} dangerouslySetInnerHTML={{ __html: t.callbackTitle }}></h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="text" className={styles.input} placeholder={t.callbackName} required value={fio} onChange={e => setFio(e.target.value)}></input>
                    <input type="text" className={styles.input} placeholder="+998 (__) ___-__-__" required value={tel} onChange={e => setTel(e.target.value)}></input>
                    <div className={styles.req}>
                        <div className={styles.chk}>
                            <input type="checkbox" required id="chk"></input>
                            <div></div>
                        </div>
                        <label htmlFor='chk'>{t.callbackReq}</label>
                    </div>
                    <button type="submit" className={styles.btn}>{t.callbackBtn}</button>
                    <p className={`${styles.p} ${sended && styles.active}`}>{t.callbackText}</p>
                </form>
            </div>
        </section>
    )
}

export default Callback