const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].profession === 'developer') {
      console.log(data[i].name)
    }
  }
}

// 2. Add Data
function addData() {
  const name = prompt('Enter name')
  const age = parseInt(prompt('Enter Age'));
  const profession = prompt('Enter profession')
  let obj = { name: name, age: age, profession: profession }
  data.push(obj);
  console.log(`data added with entry with name ${obj.name},age ${obj.age} and profession ${obj.profession}`)
}

// 3. Remove Admins
function removeAdmin() {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].profession === 'admin') {
      arr.push(data[i]);
      data.splice(i, 1);
      i--;
    }
  }
  console.log(`${arr.length} entry is removed`);
  console.log(arr);
}

// 4. Concatenate Array
function concatenateArray() {
  let arr1 = [{ name: "raghav", age: 36, profession: "developer" }] //dummy array
  const concatenatedArray = arr1.concat(data);
  console.log(concatenatedArray);
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].age;
  }
  console.log(`average age is ${sum / data.length}`);
}

// 6. Age Check
function checkAgeAbove25() {
  let arr = data.filter(elem => { return elem.age > 25 });
  if (arr.length > 0)
    console.log(`age above 25 is present`);
  // console.log(arr);
}

// 7. Unique Professions
function uniqueProfessions() {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (!arr.includes(data[i].profession)) {
      arr.push(data[i].profession);
    }
  }
  console.log('printing all the unique professions:-')
  arr.forEach(element => {
    console.log(element);
  });
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => {
    return a.age - b.age;
  });
  console.log('displaying sorted data with ascending age:-')
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === 'john') {
      data[i].profession = 'manager';
      break;
    }
  }
  console.log('updated profession of john to manager')
  console.log(data);

}

// 10. Profession Count
function getTotalProfessions() {
  let dev = 0, ad = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].profession === 'developer') {
      dev++;
      continue;
    }
    if(data[i].profession==='admin')
    {
      ad++;
    }

  }
  console.log(`total number of developers is ${dev} and admin is ${ad}`)
}
