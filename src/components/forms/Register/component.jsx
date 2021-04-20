import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import pt from 'prop-types'

import { TextField } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import { InputContainer, FieldsContainer } from '@/theme/FormStyle'

import { Links } from './styles'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Слишком короткое имя')
    .max(70, 'Слишком длинное имя')
    .required('Обязательное поле'),
  lastName: Yup.string()
    .min(2, 'Слишком короткая фамилия')
    .max(70, 'Слишком длинная фамилия')
    .required('Обязательное поле'),
  email: Yup.string().email('Неверный email').required('Обязательное поле'),
  password: Yup.string()
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .required('Обязательное поле'),
  acceptTerms: Yup.bool().oneOf([true], 'Обязательное поле'),
})

const RegisterForm = ({ onRegisterSubmitForm }) => {
  const [isBtnStatus, setBtnStatus] = useState(true)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      acceptTerms: false,
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      onRegisterSubmitForm(values)
    },
  })

  const onCheckboxChange = e => {
    formik.handleChange(e)
    setBtnStatus(!isBtnStatus)
  }

  return (
    <>
      <h2>Зарегистрируйтесь</h2>
      <p>Введите email и пароль</p>
      <form onSubmit={formik.handleSubmit}>
        <FieldsContainer>
          <InputContainer>
            <TextField
              fullWidth
              label="Имя"
              id="firstName"
              name="firstName"
              placeholder="Имя"
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
              onBlur={formik.handleBlur} />
          </InputContainer>
          <InputContainer>
            <TextField
              fullWidth
              label="Фамилия"
              id="lastName"
              name="lastName"
              placeholder="Фамлия"
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              onBlur={formik.handleBlur} />
          </InputContainer>
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
          <FormControlLabel
            control={
              <Checkbox
                id="acceptTerms"
                name="acceptTerms"
                color="primary"
                onChange={onCheckboxChange} />
            }
            label="Я принимаю политику конфеденциальности" />
          <Button
            type="submit"
            disabled={isBtnStatus}
            variant="contained"
            size="large"
            color="primary"
          >
            Войти
          </Button>
        </Links>
      </form>
    </>
  )
}

RegisterForm.propTypes = {
  onRegisterSubmitForm: pt.func.isRequired,
}

export default RegisterForm
