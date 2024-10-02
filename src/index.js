const baseUrl = ("http://localhost:3000")
const inventory = document.querySelector("#featured-inventory")
const controls = document.querySelector("#controls")
const displayImage = document.querySelector("#car-image")
const toggleFormBtn = document.getElementById("toggle-form-btn")
const newCarForm = document.getElementById("new-car-form")
const searchInput = document.getElementById("search-car")

let allCars = []
let addedCars = [];


const handleSearch = (e) => {
    const userSearch = e.target.value.toUpperCase()
    const filterCars = allCars.filter(car => car["make"].toUpperCase().includes(userSearch) || car["model"].toUpperCase().includes(userSearch))
    if (filterCars.length) {
        inventory.innerHTML = ""
        filterCars.forEach(car => displayCar(car))
    }
}
const attachListenerToInput = () => {
    searchInput.addEventListener("input", handleSearch)
}

attachListenerToInput()


const main = () => {
    inventory.innerHTML = '';
    fetch(baseUrl + "/cars")
        .then(response => response.json())
        .then(cars => {
            allCars = cars
            carDetails(cars[0])
            cars.forEach(car => displayCar(car))
        })
        .catch(error => alert(error))
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
    const carYear = document.querySelector(".vehicle-year")
    carYear.textContent = car.year
    const carMake = document.querySelector(".vehicle-make")
    carMake.textContent = car.make
    const carModel = document.querySelector(".vehicle-model")
    carModel.textContent = car.model

}

function addSubmitListener() {
    const form = document.querySelector("#new-car")
    form.addEventListener("submit", (e) => addCar(e))
    toggleFormBtn.addEventListener("click", () => {
        if (newCarForm.style.display === "none" || newCarForm.style.display === "") {
            newCarForm.style.display = "block";
        } else {
            newCarForm.style.display = "none";
        }
    });
}

function addCar(e) {
    e.preventDefault();

    const newCar = {
        year: e.target["new-year"].value,
        make: e.target["new-make"].value,
        model: e.target["new-model"].value,
        image: e.target["new-image"].value,
        id: Date.now()
    }
    addedCars.push(newCar);
    // allCars.push(newCar);
    allCars = [...allCars, newCar]
    displayCar(newCar);
    e.target.reset();
}


// fetch(baseUrl + '/cars', {
//     method: "DELETE",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify()
// })
//     .then(response => response.json())
//     .then(car => {
//         displayCar(car)
// e.target.reset()
//     })
//     .catch(error => console.error("Error adding car:", error));

main()

