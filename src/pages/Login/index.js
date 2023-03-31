import { useState } from 'react'
import { useDispatch } from 'react-redux'
import userService from '../../services/user.js'
import errorMessage from '../../utils/errorMessage.js'
import { notify } from '../../redux/reducers/notificationSlice.js'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton'

const Login = (props) => {
  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')
  const dispatch = useDispatch()

  const handleLogin = async (ev) => {
    ev.preventDefault()
    const loginInfo = { name, password }
    try {
      const response = await userService.login(loginInfo)
      const { data: { message, token }} = response
      dispatch(notify({ message, _status: 'success' }))
      // save token in redux and storage
      // redirect
    } catch (err) {
      const message = errorMessage(err)
      dispatch(notify({ message, _status: 'error' }))
      return
    }
  }
  return (
    <Stack 
      alignItems='center'  
      spacing={1} 
      minWidth='400px'
      sx={{ margin: 'auto auto', backgoundColor: '#ccc' }}
    >
     <Typography variant='h5'>signin</Typography> 
      <form 
        onSubmit={handleLogin} 
        style={{ 
          display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center'
        }}
      >
        <TextField 
          required
          type='text' 
          label='Name'
          placeholder='Your login name' 
          size='small'
          margin='dense'
          fullWidth
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <TextField 
          required
          type='password'
          label='Password'
          placeholder='Password' 
          size='small'
          margin='dense'
          fullWidth
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <LoadingButton
          type='submit'
          variant='contained'
          fullWidth
          loading={false}
          loadingIndicator='Processing...'
          sx={{ marginTop: '10px'}}
        >login</LoadingButton>
      </form>
    </Stack>
  );
};

export default Login
