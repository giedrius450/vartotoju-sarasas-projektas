
let userList = [
    { // object
        firstName:"Tomas",
        lastName:"Kelpša",
        age:33,
        company:"Audimas"
    },
    { // object
        firstName:"Jonas",
        lastName:"Jonkūnas",
        age:23,
        company:"Kauno grūdai"
    }
]



console.log(`Vartotojų sąrašas:`);
for (let user of userList){
    console.log(`__________________`);
    console.log(`Vardas: ${user.firstName}`);
    console.log(`Pavardė: ${user.lastName}`);
    console.log(`Amžius: ${user.age}`);
    console.log(`Įmonė: ${user.company}`);
}
console.log(`__________________`);