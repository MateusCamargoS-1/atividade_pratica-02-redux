import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
  description: string;
  value: number;
  type: 'entrada' | 'saida';
}

interface TransactionsState {
  transactions: Transaction[];
  balance: number;
}

const initialState: TransactionsState = {
  transactions: [],
  balance: 0,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);

      if (action.payload.type === 'entrada') {
        state.balance += action.payload.value;
      } else {
        state.balance -= action.payload.value;
      }
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
