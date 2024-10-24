import React from 'react'
import css from "./Header.module.css"
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors'
import { logout } from '../../redux/auth/operations'

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
      <header className={css.header}>
          <div className={css.headerContainer}>
        <NavLink to="/" className={css.headerTitle}>PhoneBook</NavLink>
        {isLoggedIn && <div className={css.welcome}>Welcome, {user.name}!</div>}
          <div className={css.nav}>
                  <div className={css.navlist}>
                    <NavLink className={css.navitem} to="/contacts">Contacts</NavLink>
            {!isLoggedIn && (
              <>
                <NavLink className={css.navitem} to="/login">Log in</NavLink>
                <NavLink className={css.navitem} to="/register">Registre</NavLink>
              </>
            )}
            {isLoggedIn && <button onClick={() => dispatch(logout())} className={css.logoutBtn}>Log Out</button>}
                </div>
              </div>
              </div>
    </header>
  )
}

export default Header