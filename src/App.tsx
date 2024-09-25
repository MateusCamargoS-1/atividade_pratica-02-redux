import { Provider } from 'react-redux';
import store from './store/store';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionList from './components/TransctionList/TransactionList';
import Balance from './components/CurrentBalance/CurrentBalance';
import { Container, Typography, Box } from '@mui/material';
import GlobalStyled from './config/GlobalStyled';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          <Typography variant="h2" align="center" color='#15e167' sx={{ marginBottom: 2 }}>
            Controle de Dinheiro
          </Typography>
        </Box>
        <Balance />
        <TransactionForm />
        <TransactionList />
      </Container>
    </Provider>
  );
};

export default App;
