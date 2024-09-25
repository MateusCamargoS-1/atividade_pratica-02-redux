import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Typography, Paper, Box } from '@mui/material';

const CurrentBalance = () => {
  const balance = useSelector((state: RootState) => state.transactions.balance);

  return (
    <Paper 
      elevation={3} 
      sx={{ padding: 4, borderRadius: '10px', backgroundColor: '#f2f2f2', marginBottom: 4 }}
    >
      <Typography variant="h4" align="center">
        Saldo Atual
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Typography 
          variant="h3" 
          color={balance >= 0 ? 'green' : 'red'} 
          fontWeight="bold"
        >
          R$ {balance}
        </Typography>
      </Box>
    </Paper>
  );
};

export default CurrentBalance;
