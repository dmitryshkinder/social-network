import React from 'react'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import Router from '@/Router'
import { getStore } from '@/store'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import Internalization from '@/components/wrappers/Internalization'
import firebase from './firebase'

const reactReduxFirebaseConfig = { userProfile: 'users' }

const reactReduxFirebaseProps = {
  firebase,
  config: reactReduxFirebaseConfig,
  dispatch: getStore().dispatch,
}

function App () {
  return (
    <Provider store={getStore()}>
      <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
        <Internalization>
          <ThemeProviderWrapper>
            <Router />
          </ThemeProviderWrapper>
        </Internalization>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default App
