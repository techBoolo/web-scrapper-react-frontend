import { useState } from 'react'
import { Link as RouterLink, useMatch } from 'react-router-dom'
import Link from '@mui/material/Link'

import Box from '@mui/material/Box'
const Menu = (props) => {
  const [ loggedIn ] = useState(true)
  const homeMatch = useMatch('/')
  const loginMatch = useMatch('/login')
  const adminMatch = useMatch('/admin')

  return (
    <Box sx={{ display: 'flex', gap: '10px'}}>
    { loggedIn ? 
     !adminMatch && <Link component={RouterLink} to='/admin'>Admin</Link>  
      :
     !loginMatch &&  <Link component={RouterLink} to='/login'>Login</Link> 
    }
    { !homeMatch && <Link component={RouterLink} to='/'>Home</Link> }
    </Box>
  );
};

export default Menu
