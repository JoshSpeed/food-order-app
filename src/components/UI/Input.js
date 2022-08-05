import React from 'react'

import styles from './Input.module.css'

function Input(props) {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Automatically adds all props to input - no need to specify individually */}
      <input {...props.input} />
    </div>
  )
}

export default Input
