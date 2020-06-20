import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from './components/utils/Loading'
import { CenteredDiv } from './styles/utils/CenteredDiv'
import useAuth from './hooks/useAuth'

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Logout = lazy(() => import('./pages/Logout'))
const TopSubs = lazy(() => import('./pages/TopSubs'))
const SubRoyale = lazy(() => import('./pages/SubRoyale'))
const Account = lazy(() => import('./pages/Account'))
const LoginCallback = lazy(() => import('./pages/LoginCallback'))
const DoesNotExist = lazy(() => import('./pages/404'))

const ProtectedRoute = ({ component, ...rest }) => {
  const [userInStorage] = useAuth()
  if (userInStorage) {
    return <Route {...rest} component={component} />
  } else {
    return <Redirect to='/login' />
  }
}

export const Routes = () => (
  <>
    <Suspense
      fallback={
        <CenteredDiv>
          <Loading />
        </CenteredDiv>
      }
    >
      <Switch>
        <ProtectedRoute exact={true} path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/callback' component={LoginCallback} />
        <ProtectedRoute path='/logout' component={Logout} />
        <ProtectedRoute path='/top-subs' component={TopSubs} />
        <ProtectedRoute path='/sub-royale' component={SubRoyale} />
        <ProtectedRoute path='/account' component={Account} />
        {/* 404 route */}
        <Route component={DoesNotExist} />
      </Switch>
    </Suspense>
  </>
)
