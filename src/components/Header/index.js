import Logo from './Logo.js'
import Menu from './Menu.js'

import Box from '@mui/material/Box'

const Header = (props) => {

  return (
    <Box sx={{ 
      padding: '20px', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
      }}
    >
      <Logo /> 
      <Menu />
    </Box>
  );
};
export default Header
