import React from 'react'
import css from "./Header.module.css"

const Header = () => {
  return (
      <header className={css.header}>
          <div className={css.headerContainer}>
          <p className={css.headerTitle}>PhoneBook</p>
          <nav className={css.nav}>
                <div className={css.navlist}>
                    <a className={css.navitem}>Log in</a>
                    <a className={css.navitem}>Registre</a>
                </div>
              </nav>
              </div>
    </header>
  )
}

export default Header