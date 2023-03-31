import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const Footer = (props) => {

  return (
    <Box sx={{ 
      display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '10px',
        gap: '5px',
        color: '#ccc'
      }}
    >
      <Typography>&copy;</Typography>
      <Typography>boo.et, </Typography>
      <Typography>{new Date().getFullYear()}</Typography>
    </Box>
  );
};

export default Footer
