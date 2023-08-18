import { Suspense, lazy, memo } from 'react'
import { Route, Routes as Router } from 'react-router-dom'
import { routes } from './routes'
import LoadingFullPage from '~/components/LoadingFullPage'

const Login = lazy(() => import('~/modules/Authentication/Login'))

const Routes = memo(() => {
  return (
    <Suspense fallback={<LoadingFullPage />}>
      <Router>
        <Route path={routes.auth.login} element={<Login />}></Route>
      </Router>
    </Suspense>
  )
})

export default Routes
