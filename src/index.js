const baseUrl = ("http://localhost:3000")
const inventory = document.querySelector("#featured-inventory")
const controls = document.querySelector("#controls")
const carYear = document.querySelector("#vehicle-year")
const carMake = document.querySelector("#vehicle-make")
const carModel = document.querySelector("#vehicle-model")
const displayImage = document.querySelector("#car-image")


const main = () => {
    inventory.innerHTML = '';
    fetch(baseUrl + "/cars")
        .then(response => response.json())
        .then(cars => cars.forEach(car => displayCar(car)))
        .catch(error => console.error("Error adding car:", error))
    addSubmitListener();
}

function displayCar(car) {
    const carImage = document.createElement("img")
    carImage.src = car.image;
    carImage.alt = car.make;
    carImage.addEventListener("click", () => carDetails(car))
    inventory.append(carImage);
}

function carDetails(car) {
    displayImage.src = car.image
    displayImage.alt = car.image
    carYear.innerText = car.year
    carMake.textContent = car.make
    carModel.textContent = car.model
}

function addSubmitListener() {
    const form = document.querySelector("#new-car")
    form.addEventListener("submit", (e) => addCar(e))
    // addSubmitListener();
}

function addCar(e) {
    e.preventDefault();

    const newCar = 0{
        year: e1.target["new-year"].value,
        make: e.target["new-make"].value,
        model: e.target["new-model"].value,
        image: e.target["new-image"].value
    }
    
    // e.target.reset()
    fetch(baseUrl + '/cars', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCar)
    })
        .then(response => response.json())
        .then(car => {
            displayCar(car)
            e.target.reset()
        })
        .catch(error => console.error("Error adding car:", error));
}
main()
