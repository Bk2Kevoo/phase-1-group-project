const baseUrl = "http://localhost:3000"
const inventory = document.getElementById("featured-inventory")
const controls = document.getElementById("controls")
const carDetails = document.getElementById("car-details")
const vehiclePrice = document.getElementsByClassName("vehicle-price")


function displayCars(car) {
    displayCars()
}





fetch(baseUrl + "/cars")
    .then(reponse => response.json())
    .then(cars => cars.forEach(car => displayCars(car)))
    .catch(error => {
        console.error("Error fetching cars:", error);
    });