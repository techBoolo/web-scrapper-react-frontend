import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import userService from '../../services/user.js'
import errorMessage from '../../utils/errorMessage.js'
import { notify } from '../../redux/reducers/notificationSlice.js'
import { login } from '../../redux/reducers/userSlice.js'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton'

const Login = (props) => {
  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ loading, setLoading ] = useState(false)

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)

  // fetch the data here and dispatch the data 
  const handleLogin = async (ev) => {
    ev.preventDefault()
    setLoading(true)
    const loginInfo = { name, password }
    try {
      const response = await userService.login(loginInfo)
      const { data: { message, token }} = response
      dispatch(notify({ message, _status: 'success' }))
      dispatch(login({ token }))
      window.localStorage.setItem('user', token)
    } catch (err) {
      const message = errorMessage(err)
      dispatch(notify({ message, _status: 'error' }))
      setPassword('')
      return
    }finally {
      setLoading(false)
    }
  }

  if(user) {
    return (
      <Navigate to='/' replace={true} />
    )
  }
  return (
    <Stack 
      alignItems='center'  
      spacing={1} 
      sx={{ margin: '20px auto', backgoundColor: '#ccc' }}
    >
     <Typography variant='h5'>signin</Typography> 
     <Typography variant='caption'>You can use the account info shown below the input fields</Typography> 
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
          autoFocus
          helperText='Admin'
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
          helperText='admin'
        />
        <LoadingButton
          type='submit'
          variant='contained'
          fullWidth
          loading={loading}
          loadingIndicator='Processing...'
          sx={{ marginTop: '10px'}}
        >login</LoadingButton>
      </form>
    </Stack>
  );
};

export default Login
