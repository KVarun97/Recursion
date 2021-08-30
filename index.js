// Import stylesheets
import './style.css';
// const myFriends = {
//   name: 'Varun',
//   friends: [
//     {
//       name: 'Rohit',
//       friends: [
//         {
//           name: 'Saket'
//         }
//       ]
//     },
//     {
//       name: 'Milind',
//       friends: [
//         {
//           name: 'RohitK'
//         }
//       ]
//     }
//   ]
// };

// const getMyFriends = (person) => {
//   const names = [];
//   if(!person.friends) {
//     return [];
//   }
//   for(let friend of person.friends) {
//     names.push(friend.name);
//     names.push(...getMyFriends(friend));
//   }
//   return names;
// }
// console.log(getMyFriends(myFriends));


const factorial = (number) => {
  if(number === 1) {
    return number;
  }
  return number * factorial(number - 1);
}
console.log(factorial(5))
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
