import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loader from '@/components/blocks/global/Loader'
import SecuredRoute from '@/components/wrappers/SecuredRoute'

import { AUTH_PAGE_PATH, FILLING_PROFILE_PATH, PROFILE_PATH } from '@/constants'

const NotFoundPage = React.lazy(() => import('@/components/pages/NotFound'))
const AuthPage = React.lazy(() => import('@/components/pages/Auth'))
const ClubmatesPage = React.lazy(() => import('@/components/pages/Clubmates'))
const FillingProfilePage = React.lazy(() =>
  import('@/components/pages/FillingProfile'),
)
const ProfilePage = React.lazy(() => import('@/components/pages/Profile'))
const OwnUserProfile = React.lazy(() =>
  import('@/components/pages/OwnUserProfile'),
)

export default () => (
  <Router>
    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={AUTH_PAGE_PATH} component={AuthPage} />

        <SecuredRoute exact path="/" component={ClubmatesPage} />

        <SecuredRoute
          exact
          path={FILLING_PROFILE_PATH}
          component={FillingProfilePage} />

        <SecuredRoute
          exact
          path={PROFILE_PATH}
          component={OwnUserProfile} />

        <SecuredRoute path="/:id" children={<ProfilePage />} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </React.Suspense>
  </Router>
)
