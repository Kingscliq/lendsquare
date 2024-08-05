import React from 'react'

import styles from './table.module.scss'

const THead = ({ onClick, text }: { onClick?: () => void; text: string }) => {
  return (
    <div className={styles.table__head} onClick={onClick}>
      <p>{text}</p>
    </div>
  )
}

export default THead
