import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import pt from 'prop-types'

import { TextField } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Обязательное поле')
    .max(32, 'Слишком длинное имя'),
  city: Yup.string()
    .required('Обязательное поле')
    .max(32, 'Слишком длинное название города'),
  ownSite: Yup.string()
    .max(256, 'Слишком длинная ссылка'),
  aboutMe: Yup.string()
    .required('Обязательное поле')
    .max(512, 'Слишком длиннное описание'),
})

const CommonInformationForm = ({
  onChangeInput,
  initFormValues,
  handleNext,
}) => {
  const formik = useFormik({
    initialValues: initFormValues,
    validationSchema: SignupSchema,
    onSubmit: () => {
      handleNext()
    },
  })

  const onChangeInputHandler = event => {
    formik.handleChange(event)
    onChangeInput(event)
  }

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <Box display="flex" width="100%">
            <Box mb={3} mr={3} width="50%">
              <TextField
                label="Введите имя и фамилию"
                required
                fullWidth
                id="name"
                name="name"
                placeholder="Введите имя и фамилию"
                type="text"
                value={formik.values.name}
                onChange={onChangeInputHandler}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                onBlur={formik.handleBlur} />
            </Box>
            <Box mb={3} width="50%">
              <TextField
                label="В каком городе вы живёте?"
                required
                fullWidth
                id="city"
                name="city"
                placeholder="В каком городе вы живёте?"
                type="text"
                value={formik.values.city}
                onChange={onChangeInputHandler}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                onBlur={formik.handleBlur} />
            </Box>
          </Box>
          <Box mb={3}>
            <TextField
              label="Введите ссылку на ваш сайт (если есть)"
              fullWidth
              id="ownSite"
              name="ownSite"
              placeholder="Введите ссылку на ваш сайт (если есть)"
              type="text"
              value={formik.values.ownSite}
              onChange={onChangeInputHandler}
              error={formik.touched.ownSite && Boolean(formik.errors.ownSite)}
              helperText={formik.touched.ownSite && formik.errors.ownSite}
              onBlur={formik.handleBlur} />
          </Box>
          <Box mb={3}>
            <TextField
              variant="outlined"
              label="Расскажите немного о себе"
              fullWidth
              required
              id="aboutMe"
              name="aboutMe"
              placeholder="Расскажите немного о себе"
              type="textarea"
              value={formik.values.aboutMe}
              onChange={onChangeInputHandler}
              error={formik.touched.aboutMe && Boolean(formik.errors.aboutMe)}
              helperText={formik.touched.aboutMe && formik.errors.aboutMe}
              onBlur={formik.handleBlur}
              multiline
              rows={4}
              rowsMax={4} />
          </Box>
          <Box>
            <Button disabled>
              Назад
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Далее
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  )
}

CommonInformationForm.propTypes = {
  onChangeInput: pt.func.isRequired,
  initFormValues: pt.object.isRequired,
  handleNext: pt.func.isRequired,
}

export default CommonInformationForm
