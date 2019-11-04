import {createStore} from 'redux';

// - - - - - - - - -Destructuring example - - - - - - - - - - - - - -- - -- -
const add = (numbers) => {
  return numbers.a + numbers.b;
}

console.log(add({a: 2, b: 4}));


const subtract = ({a, b}) => {
  return a - b;
}

console.log(subtract({a:10, b:2}));
// - - -- - - - - - - - - - - - - - - - - - - - - - -  -- - - - - - - - -- - -


// Action generators -- functions that return action objects
const incrementCount = (payload = {}) => ({ // non-destructured version
  type: 'INCREMENT',
  incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});


const decrementCount = ({decrementBy = 1} = {}) => ({ // destructured version
  type: 'DECREMENT',
  decrementBy: decrementBy
});


const setCount = ({count}) => ({
  type: 'SET',
  count: count
});


const resetCount = () => ({
  type: 'RESET'
});


const countReducer = (state = {count: 0}, action)=> {
  switch (action.type) {
    case 'INCREMENT' :
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT' :
      return {
        count: state.count - action.decrementBy
      }
    case 'SET' :
      return {
        count: action.count
      }
    case 'RESET' :
      return {
        count: 0
      }
    default:
      return state
  }
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=> {
  console.log(store.getState());
});


store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 6
});

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 1
});

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 150}))
