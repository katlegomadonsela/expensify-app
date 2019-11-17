import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense: expense
});


export const startAddExpense = (expenseData = {}) => { // lesson 152 - 'asynchronous redux actions'
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = {description, note, amount, createdAt}

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => { // added return much later - lesson 153
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
}


// REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});


export const startRemoveExpense = ({id} = {}) => {
  return (dispatch, getState) => {      //dispatch gets passed to this function by the redux library
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({id}))
    });
  };
};


// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
});


export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};


// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses: expenses
});


export const startSetExpenses = () => { // lesson 158 - 'fetching expenses 2'
  return (dispatch, getState) => {
    const uid =  getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      });

      dispatch(setExpenses(expenses));
    });
  };
};
