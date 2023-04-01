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
      backgroundColor: `${ data._status == 'error' ? '#faaeb2' : data._status == 'success' ? '#98ff98' : '#8ab1f4' }`,
      margin: '0 auto',
      width: '100%',
    }}>
     <Typography>{ data.message }</Typography>
    </Box>
  );
};

export default Notification
