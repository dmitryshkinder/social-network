import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loader from '@/components/blocks/global/Loader'
import SecuredRoute from '@/components/wrappers/SecuredRoute'

import { AUTH_PAGE_PATH } from '@/constants'

const NotFoundPage = React.lazy(() => import('@/components/pages/NotFound'))
const AuthPage = React.lazy(() => import('@/components/pages/Auth'))
const ClubmatesPage = React.lazy(() => import('@/components/pages/Clubmates'))

export default () => (
  <Router>
    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={AUTH_PAGE_PATH} component={AuthPage} />

        <SecuredRoute path="/" component={ClubmatesPage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </React.Suspense>
  </Router>
)
