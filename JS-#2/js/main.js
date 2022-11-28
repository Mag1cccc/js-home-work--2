//1
const user2 = [
    {
    name: 'Temo',
    age: 25
    },
    
    {
    name: 'Lasha',
    age: 21
    },
    {
    name: 'Ana',
    age: 28
    },
    {
    name: 'Amiko',
    age: 19
    },
    {
    name: 'Dato',
    age: 30
    },
    {
    name: 'Nika',
    age: 15
    },
]

let minElement = 100;
let name2;
function min(user2){
    for(let i = 0; i < user2.length; i++){
        if(user2[i].age < minElement){
            minElement = user2[i].age;
            name2 = user2[i].name;
        }
    }
    
    console.log('Smallest: ' + name2);
}
min(user2);



//2
const user = {
    firstName : 'Amiko',
    lastName :'Morgoshia',
    age: 19
}
console.log(user);

function x (user){
    const newUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age
    };
    return newUser;
}
console.log(x(user));



//3
function getRandomNumber (){
    let result = parseInt(Math.random() * 6) + 1;
    return result;
}

let firstUser;
let secondUser;
 
 do{
    firstUser = getRandomNumber();
    secondUser = getRandomNumber();
    console.log('firstUser: ' + firstUser + '     ' + 'secondUser: ' + secondUser);
 }
while(firstUser !== 3 && secondUser !== 3)
    if(firstUser == 3){
         console.log( 'Winner is firstUser: ' + firstUser);
     }  else if(secondUser == 3){
         console.log( 'Winner is secondUser: ' + secondUser);
     } else if(firstUser == secondUser) {
         console.log (firstUser +' Equal ' + secondUser);
}