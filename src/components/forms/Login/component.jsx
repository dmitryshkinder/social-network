import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import pt from 'prop-types'

import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'
import { InputContainer, FieldsContainer } from '@/theme/FormStyle'

import { Links } from './styles'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Неверный email').required('Обязательное поле'),
  password: Yup.string()
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .required('Обязательное поле'),
})

function LoginForm ({ onLoginSubmitForm }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      onLoginSubmitForm(values)
    },
  })

  return (
    <>
      <h2>Войдите в аккаунт</h2>
      <p>используя свой логин и пароль</p>
      <form onSubmit={formik.handleSubmit}>
        <FieldsContainer>
          <InputContainer>
            <TextField
              fullWidth
              label="Почта"
              id="email"
              name="email"
              placeholder="Почта"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur} />
          </InputContainer>
          <InputContainer>
            <TextField
              fullWidth
              label="Пароль"
              id="password"
              name="password"
              placeholder="Пароль"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              onBlur={formik.handleBlur} />
          </InputContainer>
        </FieldsContainer>
        <Links>
          <Button type="submit" variant="contained" size="large" color="primary">
            Войти
          </Button>
        </Links>
      </form>
    </>
  )
}

LoginForm.propTypes = {
  onLoginSubmitForm: pt.func.isRequired,
}

export default LoginForm
