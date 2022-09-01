import React from 'react'

import styles from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Automatically adds all props to input - no need to specify individually */}
      <input ref={ref} {...props.input} />
    </div>
  )
})

export default Input
