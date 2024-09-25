import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const TransactionList = () => {
  const transactions = useSelector((state: RootState) => state.transactions.transactions);

  return (
    <List>
      {transactions.map((transaction, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{ marginY: 2, padding: 2, borderRadius: '10px', backgroundColor: transaction.type === 'entrada' ? '#e8f5e9' : '#ffebee' }}
        >
          <ListItem>
            <ListItemText 
              primary={
                <Typography variant="h6" color={transaction.type === 'entrada' ? 'green' : 'red'}>
                  {transaction.description}
                </Typography>
              }
              secondary={`R$ ${transaction.value} - ${transaction.type}`}
            />
          </ListItem>
        </Paper>
      ))}
    </List>
  );
};

export default TransactionList;
