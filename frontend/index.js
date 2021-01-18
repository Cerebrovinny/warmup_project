var coffee = {
    valueName: ['arabic', 'bourbon', 'santos', 'greencoffee']
}; 

var coffeeList = new List('coffee-list', coffee);

document.getElementById('seeding').innerHTML = coffeeList.valueName

console.log(coffee)
console.log(coffeeList)