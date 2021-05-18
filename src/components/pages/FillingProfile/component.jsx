import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { HOME_PAGE_PATH } from '@/constants'
import CommonInformationForm from '@/components/forms/CommonInformation'
import SocialNetworksForm from '@/components/forms/SocialNetworks'
import CanHelpForm from '@/components/forms/CanHelp'

import { createUserRequest } from '@/actions'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import illustration from './img/illustration.jpg'

function getSteps () {
  return ['Основная информация', 'Социальные сети', 'Чем я могу помочь?']
}

const initUserInformation = {
  name: '',
  city: '',
  ownSite: '',
  aboutMe: '',
  instagram: '',
  telegram: '',
  vk: '',
  twitter: '',
  facebook: '',
  linkedin: '',
}

const initCommonInformation = {
  name: '',
  city: '',
  ownSite: '',
  aboutMe: '',
}

const initSocialNetworksLinks = {
  instagram: '',
  telegram: '',
  vk: '',
  twitter: '',
  facebook: '',
  linkedin: '',
}

const FillingProfile = () => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.firebase.auth.uid)

  const [userInformation, setUserInformation] = useState({})
  const [commonInformation, setCommonInformation] = useState(
    initCommonInformation,
  )
  const [socialNetworksLinks, setSocialNetworksLinks] = useState(
    initSocialNetworksLinks,
  )
  const [canHelpInformation, setCanHelpInformation] = useState({})
  const [redirectFlag, setRedirectFlag] = useState(false)

  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set())
  const steps = getSteps()

  const onChangeUserInformationHandler = event => {
    const { name } = event.target
    setUserInformation(prevState => ({
      ...prevState,
      [name]: event.target.value,
    }))
    setCommonInformation(prevState => ({
      ...prevState,
      [name]: event.target.value,
    }))
  }

  const onChangeSocialLinksHandler = event => {
    const { name } = event.target
    setUserInformation(prevState => ({
      ...prevState,
      [name]: event.target.value,
    }))
    setSocialNetworksLinks(prevState => ({
      ...prevState,
      [name]: event.target.value,
    }))
  }

  const onChangecanHelpInformation = skills => {
    setUserInformation(prevState => ({ ...prevState, skills }))
    setCanHelpInformation(prevState => ({ ...prevState, skills }))
  }

  function getStepContent (step) {
    switch (step) {
      case 0:
        return (
          <CommonInformationForm
            initFormValues={commonInformation}
            handleNext={nextStepHandler}
            onChangeInput={onChangeUserInformationHandler} />
        )
      case 1:
        return (
          <SocialNetworksForm
            initFormValues={socialNetworksLinks}
            handleNext={nextStepHandler}
            handleBack={backStepHandler}
            onChangeInput={onChangeSocialLinksHandler} />
        )
      case 2:
        return (
          <CanHelpForm
            initFormValues={canHelpInformation}
            handleSubmit={submitStepFormHandler}
            handleBack={backStepHandler}
            onChangeInput={onChangecanHelpInformation} />
        )
      default:
        return 'Неизвестный шаг'
    }
  }

  const isStepSkipped = step => {
    return skipped.has(step)
  }

  const nextStepHandler = () => {
    console.log(1)
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const backStepHandler = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const submitStepFormHandler = async () => {
    Object.keys(userInformation).forEach(key =>
      userInformation[key] === undefined ? delete userInformation[key] : {})
    await dispatch(createUserRequest({ ...userInformation, id }))
    setRedirectFlag(state => !state)
  }

  if (redirectFlag) return (<Redirect to={HOME_PAGE_PATH} />)

  return (
    <Container>
      <Box textAlign="center">
        <img src={illustration} width="25%" />
      </Box>
      <Box mb={2}>
        <h4>Давайте немного познакомимся</h4>
        <p>
          Заполните информацию о себе. Её будут видеть другие пользователи
          платформы
        </p>
      </Box>
      <Box mb={3}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {}
            const labelProps = {}
            if (isStepSkipped(index)) {
              stepProps.completed = false
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
            </div>
          ) : (
            <div>
              {getStepContent(activeStep)}
            </div>
          )}
        </div>
      </Box>
    </Container>
  )
}

export default FillingProfile
