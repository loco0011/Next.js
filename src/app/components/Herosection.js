import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import herostyles from "@/app/styles/Herosection.module.css"
import styles from "@/app/styles/common.module.css"


export const Herosection = ({title}) => {
  return (
    <main className={herostyles.main_section}>
        <div className={styles.container}>
            <div>
                <h1>{title}</h1>
                <p>
                At Together, we bring the magic of movies right to your fingertips. Whether you're a film enthusiast or just looking for a fun way to spend time with friends, our platform offers an unparalleled movie viewing experience.                </p>
                <Link href="/movie">
                <button className={styles.btn}>
                    Explore Movies
                </button>
                </Link>
            </div>
        </div>
    </main>
  )
}
