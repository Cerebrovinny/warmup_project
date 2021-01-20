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
            backendError();
        });
        
}

function changeHeader(){
    var header = document.getElementById("change-header");
    var coffeeHdr = document.getElementById("coffee-header")

    if (coffeeHdr.style.display === "none") {
        coffeeHdr.style.display = "block";
    } else {
        coffeeHdr.style.display = "none"
    }

    if (coffeeHdr.style.display === "block") {
        header.style.display = "none"
    } else {
        header.style.display = "block"
    }
}

function backendError(){
    var elementp = document.getElementById("p-coffee");
    var error = elementp.innerHTML = "Ooppss you have to start the backend before click on this button";
        return error;
}