import { Outlet } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import Header from './components/Header/index.js'
import Footer from './components/Footer/index.js'

const App = (props) => {

  return (
    <>
      <CssBaseline />
      <Stack minHeight='100vh'>
        <Header />
        <Container width='xs' sx={{ border: '1px solid #ccc', flex: 1 }}>
          <Outlet /> 
        </Container>
        <Footer />
      </Stack>
    </>
  );
};

export default App
