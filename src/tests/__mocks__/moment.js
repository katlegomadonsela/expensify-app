const moment =  require.requireActual('moment'); // we are importing the actual moment module

export default (timestamp = 0) => {
  return moment(timestamp);
};
