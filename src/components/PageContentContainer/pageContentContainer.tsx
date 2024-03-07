import { FC, PropsWithChildren } from 'react'
import classes from './page-content-container.module.scss'

const PageContentContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className={classes['container']}>{children}</section>
  )
}

export default PageContentContainer
