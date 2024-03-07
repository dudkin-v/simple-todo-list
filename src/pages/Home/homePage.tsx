import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import { Routes } from 'src/constants/routes.ts'
import classes from './home-page.module.scss'

const titleParts = ['LET\'S', 'PLAN', 'IT']

const renderTitleParts = (): ReactNode[] => {
  let totalDelay = 0
  const delay = 100
  
  return titleParts.map((part, partIndex) =>
    <span key={part}>
      {part.split('').map((letter, letterIndex) => {
        totalDelay += delay

        return (
          <span
            key={letterIndex}
            className={classes['page__title-letter']}
            style={{ animationDelay: `${totalDelay}ms` }}
          >
            {letter}
          </span>
        )
      })}
      {partIndex === titleParts.length - 1 &&
        <Link
          className={classes['page__button']}
          key="button"
          to={Routes.TODOS}
          style={{ animationDelay: `${totalDelay + delay}ms` }}
        >
          <DoubleArrowIcon className={classes['page__button-icon']} />
        </Link>
      }
    </span>
  )
}

const HomePage: FC = () => {
  return (
    <div className={classes['page']}>
      <div className={classes['page__title']}>
        {renderTitleParts()}
      </div>
    </div>
  )
}

export default HomePage
