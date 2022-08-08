import React from 'react'

import HeaderCartButton from './HeaderCartButton'

import mealsImage from '../../assets/meals.jpeg'
import styles from './Header.module.css'

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='A table full of food' />
      </div>
    </>
  )
}

export default Header
