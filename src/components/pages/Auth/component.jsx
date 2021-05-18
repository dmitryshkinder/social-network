import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signInEmailAuth, registerRequest } from '@/actions'
import { HOME_PAGE_PATH, FILLING_PROFILE_PATH } from '@/constants'
import RegisterForm from '@/components/forms/Register'
import LoginForm from '@/components/forms/Login'

import Alert from '@material-ui/lab/Alert'

import {
  Main,
  RightContent,
  Logo,
  LeftContent,
  WelcomeMessage,
  SignLink,
} from './styles'

import logo from './img/logo.png'

function AuthPage () {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.firebase.auth)

  const [isRegisterTypeForm, setTypeForm] = useState(true)

  const onSwapTypeForm = () => {
    setTypeForm(!isRegisterTypeForm)
  }

  const onLoginSubmitFormHandler = values => {
    dispatch(signInEmailAuth(values))
  }

  const onRegisterSubmitForm = values => {
    dispatch(registerRequest(values))
  }

  if (auth.uid) {
    return <Redirect to={HOME_PAGE_PATH} />
  }

  return (
    <Main>
      <RightContent>
        <Logo src={logo} />
        <WelcomeMessage>
          <h2>Добро пожаловать в Клуб!</h2>
          <p>
            Rozhkov Club - это сообщество, где люди помогают друг другу
            выстраивать отношения на разных уровнях
          </p>
        </WelcomeMessage>
        <footer>
          <p className="copywriting">Rozhkov.by</p>
        </footer>
      </RightContent>
      <LeftContent>
        {alert.show && <Alert severity={alert.severity}>{alert.text}</Alert>}
        <SignLink>
          {isRegisterTypeForm ? (
            <p>
              У вас уже есть аккаунт? <a onClick={onSwapTypeForm}>Войдите</a>
            </p>
          ) : (
            <p>
              У вас ещё нет аккаунта?{' '}
              <a onClick={onSwapTypeForm}>Зарегистрируйтесь</a>
            </p>
          )}
        </SignLink>
        {isRegisterTypeForm ? (
          <RegisterForm
            onSwap={onSwapTypeForm}
            onRegisterSubmitForm={onRegisterSubmitForm}
          />
        ) : (
          <LoginForm
            onSwap={onSwapTypeForm}
            onLoginSubmitForm={onLoginSubmitFormHandler}
          />
        )}
      </LeftContent>
    </Main>
  )
}

export default AuthPage
