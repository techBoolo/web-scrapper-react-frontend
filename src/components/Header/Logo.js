import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
const Logo = (props) => {

  return (
    <Box>
      <Link 
        component={RouterLink}
        to='/'
        underline='hover'
      >
        <Typography sx={{ color: 'red'}} variant='h5'>
          Lo
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo
