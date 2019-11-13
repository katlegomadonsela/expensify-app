const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('This is my resolved data');
    reject('something went wrongaa!');
  }, 2500);
});

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error: ', error);
})
