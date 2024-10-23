import React from 'react'
import css from "./Header.module.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <header className={css.header}>
          <div className={css.headerContainer}>
          <p className={css.headerTitle}>PhoneBook</p>
          <div className={css.nav}>
                  <div className={css.navlist}>
                      <NavLink className={css.navitem} to="/">Home</NavLink>
                    <NavLink className={css.navitem} to="/contacts">Contacts</NavLink>
                    <NavLink className={css.navitem} to="/login">Log in</NavLink>
                    <NavLink className={css.navitem} to="/register">Registre</NavLink>
                </div>
              </div>
              </div>
    </header>
  )
}

export default Header