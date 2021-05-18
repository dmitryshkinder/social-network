import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import pt from 'prop-types'

import { TextField } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TelegramIcon from '@material-ui/icons/Telegram'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Icon36LogoVk } from '@vkontakte/icons'

const SignupSchema = Yup.object().shape({
  instagram: Yup.string()
    .max(32, 'Слишком длинное имя'),
  telegram: Yup.string()
    .max(32, 'Слишком длинное имя'),
  vk: Yup.string()
    .max(32, 'Слишком длинное имя'),
  twitter: Yup.string()
    .max(32, 'Слишком длинное имя'),
  facebook: Yup.string()
    .max(32, 'Слишком длинное имя'),
  linkedin: Yup.string()
    .max(32, 'Слишком длинная ссылка'),
})

const SocialNetworksForm = ({ onChangeInput, initFormValues, handleNext, handleBack }) => {
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
        <Box display="flex" width="100%">
          <Box
            mb={3}
            mr={3}
            width="50%"
            display="flex"
            alignItems="flex-end"
            flexWrap="noWrap"
          >
            <Box mr={1}>
              <InstagramIcon />
            </Box>
            <TextField
              label="@username"
              fullWidth
              id="instagram"
              name="instagram"
              placeholder="@username"
              type="text"
              value={formik.values.instagram}
              onChange={onChangeInputHandler}
              error={
                formik.touched.instagram && Boolean(formik.errors.instagram)
              }
              helperText={formik.touched.instagram && formik.errors.instagram}
              onBlur={formik.handleBlur} />
          </Box>
          <Box
            mb={3}
            width="50%"
            display="flex"
            alignItems="flex-end"
            flexWrap="noWrap"
          >
            <Box mr={1}>
              <TelegramIcon />
            </Box>
            <TextField
              label="@username"
              fullWidth
              id="telegram"
              name="telegram"
              placeholder="@username"
              type="text"
              value={formik.values.telegram}
              onChange={onChangeInputHandler}
              error={formik.touched.telegram && Boolean(formik.errors.telegram)}
              helperText={formik.touched.telegram && formik.errors.telegram}
              onBlur={formik.handleBlur} />
          </Box>
        </Box>
        <Box display="flex" width="100%">
          <Box
            mb={3}
            mr={3}
            width="50%"
            display="flex"
            alignItems="flex-end"
            flexWrap="noWrap"
          >
            <Box mr={1}><Icon36LogoVk width={24} height={24} /></Box>
            <TextField
              label="@username"
              fullWidth
              id="vk"
              name="vk"
              placeholder="@username"
              type="text"
              value={formik.values.vk}
              onChange={onChangeInputHandler}
              error={formik.touched.vk && Boolean(formik.errors.vk)}
              helperText={formik.touched.vk && formik.errors.vk}
              onBlur={formik.handleBlur} />
          </Box>
          <Box
            mb={3}
            width="50%"
            display="flex"
            alignItems="flex-end"
            flexWrap="noWrap"
          >
            <Box mr={1}>
              <TwitterIcon />
            </Box>
            <TextField
              label="@username"
              fullWidth
              id="twitter"
              name="twitter"
              placeholder="@username"
              type="textarea"
              value={formik.values.twitter}
              onChange={onChangeInputHandler}
              error={formik.touched.twitter && Boolean(formik.errors.twitter)}
              helperText={formik.touched.twitter && formik.errors.twitter}
              onBlur={formik.handleBlur} />
          </Box>
        </Box>
        <Box display="flex" width="100%">
          <Box
            mb={3}
            mr={3}
            width="50%"
            display="flex"
            alignItems="flex-end"
            flexWrap="noWrap"
          >
            <Box mr={1}><FacebookIcon /></Box>
            <TextField
              label="@username"
              fullWidth
              id="facebook"
              name="facebook"
              placeholder="@username"
              type="textarea"
              value={formik.values.facebook}
              onChange={onChangeInputHandler}
              error={formik.touched.facebook && Boolean(formik.errors.facebook)}
              helperText={formik.touched.facebook && formik.errors.facebook}
              onBlur={formik.handleBlur} />
          </Box>
          <Box
            mb={3}
            width="50%"
            display="flex"
            alignItems="flex-end"
            flexWrap="noWrap"
          >
            <Box mr={1}><LinkedInIcon /></Box>
            <TextField
              label="https://www.linkedin.com/"
              fullWidth
              id="linkedin"
              name="linkedin"
              placeholder="https://www.linkedin.com/"
              type="textarea"
              value={formik.values.linkedin}
              onChange={onChangeInputHandler}
              error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
              helperText={formik.touched.linkedin && formik.errors.linkedin}
              onBlur={formik.handleBlur} />
          </Box>
        </Box>
        <Box>
          <Button onClick={handleBack}>Назад</Button>
          <Button type="submit" variant="contained" color="primary">
            Далее
          </Button>
        </Box>
      </form>
    </Container>
  )
}

SocialNetworksForm.propTypes = {
  onChangeInput: pt.func.isRequired,
  initFormValues: pt.object.isRequired,
  handleNext: pt.func.isRequired,
  handleBack: pt.func.isRequired,
}

export default SocialNetworksForm
