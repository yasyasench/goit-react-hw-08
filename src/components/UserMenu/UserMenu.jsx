import React from 'react';
import { useDispatch } from 'react-redux';
import useAuth from "../hooks/useAuth";
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();

  return (
    <div className={css.userMenu}>
      {isLoggedIn ? (
        <div className={css.menu}>
          <span className={css.username}>Welcome, {user.name}</span>
          <button onClick={() => dispatch(logout())} className={css.logoutButton}>
            Logout
          </button>
        </div>
      ) : (
        <span className={css.username}>Welcome, User</span>
      )}
    </div>
  );
};

export default UserMenu;
