import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Routes as RoutesEnum } from 'src/constants/routes.ts'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<div>404</div>} />
      <Route path={RoutesEnum.HOME} element={<div>Home page</div>} />
      <Route path={RoutesEnum.TODOS} element={<div>Todos page</div>} />
    </Routes>
  )
}

export default AppRoutes
