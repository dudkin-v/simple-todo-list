import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Routes as RoutesEnum } from 'src/constants/routes.ts'
import HomePage from 'src/pages/Home/homePage.tsx'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<div>404</div>} />
      <Route path={RoutesEnum.HOME} element={<HomePage />} />
      <Route path={RoutesEnum.TODOS} element={<div>Todos page</div>} />
    </Routes>
  )
}

export default AppRoutes
