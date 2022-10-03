import { FC } from 'react'
import cn from 'classnames'

import styles from './style.module.css'

type Props = {
  children: string
  disabled: boolean
}

export const Button: FC<Props> = ({ disabled, children }) => {
  const buttonClassName = cn(styles.button, {
    [styles.disabled]: disabled,
  })

  return (
    <button className={buttonClassName} disabled={disabled}>
      {children}
    </button>
  )
}
