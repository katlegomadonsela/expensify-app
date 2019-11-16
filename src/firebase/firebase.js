import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-SYW9MZ2FX2"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
    'prompt': 'select_account'
});

export {firebase, googleAuthProvider, database as default};




// const firebaseConfig = {
//   apiKey: "AIzaSyAuVDOzXHhsAX2C_zohiWj3fki2PHdBKv4",
//   authDomain: "expensify-65c09.firebaseapp.com",
//   databaseURL: "https://expensify-65c09.firebaseio.com",
//   projectId: "expensify-65c09",
//   storageBucket: "expensify-65c09.appspot.com",
//   messagingSenderId: "755148030479",
//   appId: "1:755148030479:web:a5819a9a91acff77c8d97a",
//   measurementId: "G-SYW9MZ2FX2"
// };
//
// firebase.initializeApp(firebaseConfig);
//
// const database = firebase.database();
//
// export {firebase, database as default};




// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('something was changed!');
//   console.log(snapshot.key, snapshot.val());
// });



// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//
//   console.log(expenses);
// })




// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//
//     console.log(expenses);
//   });




// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'For february',
//   amount: 127000,
//   createdAt: 976123498763
// });







// database.ref('notes').push({
//   title: 'Courses',
//   body: 'React, NodeJs, Python'
// });

// database.ref('notes/-LtP5AofrzEbn12pPpbW').remove();





// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })





// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with fetching data: ', e)
// });
//
// setTimeout(() => {
//   database.ref('age').set(1);
// }, 4000);
//
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 8000);
//
// setTimeout(() => {
//   database.ref('age').set(60);
// }, 12000);




// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data: ', e);
//   })


// database.ref().set({ // set returns a promise - meaning we can add then() and catch() after it
//   name: 'Andrew Mead',
//   age: 28,
//   isSingle: true,
//   job: {
//     title: 'Manager',
//     company: 'Maersk'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed. ', e)
// });
//
//
// database.ref().update({
//   name: 'Katlego Madonsela',
//   age: 30,
//   'job/title': 'Web Developer',
//   'job/company': 'Google',
//   'location/city': 'California'
// });


// database.ref().remove();
