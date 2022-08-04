import React from 'react'

import HeaderCartButton from './HeaderCartButton'

import mealsImage from '../../assets/meals.jpeg'
import styles from './Header.module.css'

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='A table full of food' />
      </div>
    </>
  )
}

export default Header
