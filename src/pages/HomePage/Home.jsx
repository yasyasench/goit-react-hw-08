import React from 'react'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import css from "./Home.module.css"

const Home = () => {

  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();


  return (
      <div>
          <h2 className={css.homeTitle} >
              Welcome to phoneBook!
      </h2>

      {isLoggedIn && <h3 className={css.homeText}>Hello, {user.name}! Let's create your own phone book. Tap on contacts and explore all of our features, we have prepared for you!</h3>}
      
    </div>
  )
}

export default Home
