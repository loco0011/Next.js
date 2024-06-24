import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"
import Image from "next/image"
import Navbar from "./Navbar"

import React from 'react'

const Header = () => {
  return (
    <header className={styles.main_header}>

      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={100} width={100}></Image>
        </Link>
      </div>
      <Navbar/>
    </header>
  )
}

export default Header