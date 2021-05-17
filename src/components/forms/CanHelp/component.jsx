import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import pt from 'prop-types'

import { TextField } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'

const SignupSchema = Yup.object().shape({
  chipInput: Yup.string()
    .max(16, 'Слишком длинное имя'),
})

const CanHelpForm = ({ onChangeInput, handleSubmit, handleBack }) => {
  const [chips, setChips] = useState([])
  const [currentChip, setCurrentChip] = useState('')

  const formik = useFormik({
    initialValues: {
      chipInput: '',
    },
    validationSchema: SignupSchema,
    onSubmit: () => {
      handleSubmit()
    },
  })

  const onChangeInputHandler = event => {
    setCurrentChip(event.target.value)
    formik.handleChange(event)
  }

  const onCreateNewChipHandler = () => {
    setChips(prevState => [
      ...prevState,
      { key: currentChip, label: currentChip },
    ])
    setCurrentChip('')
    onChangeInput([...chips, { key: currentChip, label: currentChip }])
  }

  const chipDeleteHandler = chipToDelete => {
    const chipsForFilter = chips.filter(chip => chip.key !== chipToDelete.key)
    setChips(chipsForFilter)
    onChangeInput(chipsForFilter)
  }

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Box display="flex" alignItems="center">
          <Box mb={3} mr={3} width="50%">
            <TextField
              label="Чем вы можете помочь другим"
              fullWidth
              id="chipInput"
              name="chipInput"
              placeholder="Как вас зовут?"
              type="text"
              value={currentChip}
              onChange={onChangeInputHandler} />
          </Box>
          <IconButton onClick={onCreateNewChipHandler}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box mb={3} display="flex">
          {chips.map(chip => (
            <Box key={chip.key} mr={1}>
              <Chip
                key={chip.key}
                label={chip.label}
                onDelete={() => chipDeleteHandler(chip)} />
            </Box>
          ))}
        </Box>
        <Box>
          <Button onClick={handleBack}>Назад</Button>
          <Button type="submit" variant="contained" color="primary">
            Отправить
          </Button>
        </Box>
      </form>
    </Container>
  )
}

CanHelpForm.propTypes = {
  onChangeInput: pt.func.isRequired,
  handleSubmit: pt.func.isRequired,
  handleBack: pt.func.isRequired,
}

export default CanHelpForm
