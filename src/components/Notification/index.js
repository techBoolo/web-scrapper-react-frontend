import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Notification = (props) => {
  const { data } = useSelector(state => state.notification)

  if(!data) return null
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
      color: `${ data._status == 'error' ? 'red' : data._status == 'success' ? 'green' : 'blue' }`,
      border: '1px solid #ccc',
      margin: '0 auto',
      width: '100%',
    }}>
     <Typography>{ data.message }</Typography>
    </Box>
  );
};

export default Notification
