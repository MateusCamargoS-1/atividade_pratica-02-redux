import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../store/models/transactionSlice';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import FormContainer from './TransctionFormStyled';

const TransactionForm = () => {
  const [description, setDescription] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [type, setType] = useState<'entrada' | 'saida'>('entrada');
  
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTransaction({ description, value, type }));
    setDescription('');
    setValue(0);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Valor"
          type="number"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          fullWidth
          variant="outlined"
        />
        <TextField
          select
          label="Tipo"
          value={type}
          onChange={(e) => setType(e.target.value as 'entrada' | 'saida')}
          fullWidth
          variant="outlined"
        >
          <MenuItem value="entrada">Entrada</MenuItem>
          <MenuItem value="saida">Saída</MenuItem>
        </TextField>
      </Box>
      <Button 
        variant="contained" 
        color="primary" 
        type="submit" 
        fullWidth
        sx={{ marginTop: '20px', padding: '10px' }}
      >
        Adicionar Transação
      </Button>
    </FormContainer>
  );
};

export default TransactionForm;
