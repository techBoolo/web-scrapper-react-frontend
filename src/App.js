import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginFromStorage } from './redux/reducers/userSlice.js'
import postService from './services/post.js'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import { 
  Header, 
  Footer, 
  Notification } from './components/index.js'

const App = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    // loginFromStorage
    const user = window.localStorage.getItem('user')
    if(user){
      dispatch(loginFromStorage({ token: user }))
    }
  }, [])

  useEffect(() => {
    async function fetchPost() {
      const response = await postService.getPosts()
      // dispatch the data to redux
      console.log(response.data);
    }

    fetchPost()
  }, [])

  return (
    <>
      <CssBaseline />
      <Stack minHeight='100vh'>
        <Header />
        <Container maxWidth='md' sx={{ border: '1px solid #ccc', flex: 1 }}>
          <Notification />
          <Outlet /> 
        </Container>
        <Footer />
      </Stack>
    </>
  );
};

export default App
