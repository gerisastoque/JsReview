//1

const people= [
  {nombre: 'Geraldine', edad:'23'}, 
  {nombre: 'Javier', edad:'30'}, 
  {nombre: 'María', edad:'28'}
]

function sumarEdades(people) {
  return people.reduce((total, people) => total + people.edad, 0);
}

console.log(sumarEdades(people)); 

//2

const objects =[
    {nombre: 'zapato', precio: 100},
    {nombre: 'camisa', precio: 50},
    {nombre: 'pantalón', precio: 80},
    {nombre: 'chaqueta', precio: 120},
    {nombre: 'bufanda', precio: 30}
]

const filteredObjects= objects.filter((Object) => Object.precio > 50);
console.log(filteredObjects);

//3

const students=[
    {name: 'Alice', grade: 'A'},
    {name: 'Bob', grade: 'B'},
    {name: 'Charlie', grade: 'C'},
    {name: 'David', grade: 'A'},
    {name: 'Eve', grade: 'B'},
    {name: 'Frank', grade: 'C'}
]
const foundstudents =(students, name)=>{
const student= students.find((student)=> student.name === name);
return student || null;
} 

console.log(foundstudents(students, 'Alice'));
console.log(foundstudents(students, 'Zoe'));


//4

const sortedObjects = objects.sort((a, b) => a.precio - b.precio);
console.log(sortedObjects);

//5

const people2= [
  {nombre: 'Geraldine', edad:'23'}, 
  {nombre: 'Carlos', edad:'35'},
  {nombre: 'Ana', edad:'22'},
  {nombre: 'Luis', edad:'27'},
]

function combinedPeople(people, people2) {
  const combinados = {};

 


