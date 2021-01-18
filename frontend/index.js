var coffee = {
    valueName: ['arabic', 'bourbon', 'santos', 'greencoffee']
}; 

var coffeeList = new List('coffee-list', coffee);

document.getElementById('seeding').innerHTML = coffeeList.valueName

console.log(coffee)
console.log(coffeeList)

function post(){
    fetch('http://localhost:3000/clicked', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 'Coffee beans are so cool'})
    })
        .then(function(response){
            if(response.ok){
                console.log('POST Success.');
                return;
            }
            throw new Error('POST failed.');
        })
        .catch(function(error){
            console.log(error);
        });
}