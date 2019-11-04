import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters.js';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});


test('should generate set end date action object', () => {
  const action = setEndDate(moment(1000));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(1000)
  });
});


test('should generate set text filter action object with added values', () => {
  const action = setTextFilter('meat');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'meat'
  })
});


test('should generate set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});


test('should generate sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
});


test('should generate sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})
