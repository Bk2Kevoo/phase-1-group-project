const baseUrl = "http://localhost:3000"
const inventory = document.getElementById("featured-inventory")
const controls = document.getElementById("controls")
const carDetails = document.getElementById("car-details")
const vehiclePrice = document.getElementsByClassName("vehicle-price")


function displayCars(car) {
    const carImage = document.createElement("img")
    carImage.src = car.image
    carImage.alt = car.make
    carImage.addEventListener("click", (e) => handleClick(car))
    inventory.append(carImage)
}

function handleClick() {
    handleClick()
}




fetch(baseUrl + "/cars")
    .then(response => response.json())
    .then(cars => cars.forEach(car => displayCars(car)))
    .catch(error => {
        console.error("Error fetching cars:", error);
    });