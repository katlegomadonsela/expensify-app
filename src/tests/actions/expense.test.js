import {editExpense, addExpense, removeExpense} from '../../actions/expenses.js';

test('Should setup remove expense action object', () => {
  const action = removeExpense({id: 'abcdefg'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abcdefg'
  })
});


test('should setup edit expense action object', () => {
  const action = editExpense('123', {note: 'new note'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'new note'
    }
  })
})


test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    amount: 101000,
    createdAt: 1000,
    note: 'last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});


test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
});
