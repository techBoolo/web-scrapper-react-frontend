import Logo from './Logo.js'
import Menu from './Menu.js'

import Box from '@mui/material/Box'

const Header = (props) => {

  return (
    <Box sx={{ 
      padding: '15px 25px', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ccc'
      }}
    >
      <Logo /> 
      <Menu />
    </Box>
  );
};
export default Header
