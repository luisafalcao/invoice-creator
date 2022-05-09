// 1. create empty arrays where services and prices will be stored
let services = []
let prices = []

// 2. a) get service buttons
const washCarBtn = document.getElementById("washcar-btn")
const mowLawnBtn = document.getElementById("mowlawn-btn")
const pullWeedsBtn = document.getElementById("pullweeds-btn")

const washCar = {
    service: 'Wash Car',
    price: 10
}

const mowLawn = {
    service: 'Mow Lawn',
    price: 20
}

const pullWeeds = {
    service: 'Pull Weeds',
    price: 30
}

let totalPrice = document.getElementById("total-price")

// 2. b) get list containers
const serviceUl = document.getElementById("service-list")
const priceUl = document.getElementById("price-list")

// 3. b) check to see if there is data on localStorage, and if there is, add that to the list
let washCarServicesFromLocalStorage = JSON.parse(localStorage.getItem("services"))
let washCarPricesFromLocalStorage = JSON.parse(localStorage.getItem("prices"))
if (washCarServicesFromLocalStorage) {
    services = washCarServicesFromLocalStorage;
    prices = washCarPricesFromLocalStorage;

    renderServices()
}

let mowLawnServicesFromLocalStorage = JSON.parse(localStorage.getItem("services"))
let mowLawnPricesFromLocalStorage = JSON.parse(localStorage.getItem("prices"))
if (mowLawnServicesFromLocalStorage) {
    services = mowLawnServicesFromLocalStorage;
    prices = mowLawnPricesFromLocalStorage;

    renderServices()
}

let pullWeedsServicesFromLocalStorage = JSON.parse(localStorage.getItem("services"))
let pullWeedsPricesFromLocalStorage = JSON.parse(localStorage.getItem("prices"))
if (pullWeedsServicesFromLocalStorage) {
    services = pullWeedsServicesFromLocalStorage;
    prices = pullWeedsPricesFromLocalStorage;

    renderServices()
}

// 3. trigger event on button click: add service to empty array
washCarBtn.addEventListener("click", function() {
    services.push(washCar.service)
    prices.push(washCar.price)
    
    // 3. a) save to local storage
    localStorage.setItem("services", JSON.stringify(services))
    localStorage.setItem("prices", JSON.stringify(prices))
    
    renderServices()
})

mowLawnBtn.addEventListener("click", function() {
    services.push(mowLawn.service)
    prices.push(mowLawn.price)
    
    // 3. a) save to local storage
    localStorage.setItem("services", JSON.stringify(services))
    localStorage.setItem("prices", JSON.stringify(prices))
    
    renderServices()
})

pullWeedsBtn.addEventListener("click", function() {
    services.push(pullWeeds.service)
    prices.push(pullWeeds.price)
    
    // 3. a) save to local storage
    localStorage.setItem("services", JSON.stringify(services))
    localStorage.setItem("prices", JSON.stringify(prices))
    
    renderServices()
})

// 4. create a function with a for loop inside in order to display the array on the table
function renderServices() {
    let servicesList = ""
    for (let i = 0; i < services.length; i++) {
        servicesList += `<li class="description">${services[i]}:</li>`
    }
    serviceUl.innerHTML = servicesList

    let sum = 0;
    let pricesList = ""
    for (let i = 0; i < prices.length; i++) {
        pricesList += `<li class="price"><span>$</span>${prices[i]}</li>`
        // 5. update total cost
        sum += prices[i]
        totalPrice.innerHTML = `$ ${sum}`
    }
    priceUl.innerHTML = pricesList
}

// 6. a) get send button
const sendBtn = document.getElementById("send-btn")

// 6. b) reset when "send" button is clicked
sendBtn.addEventListener("click", function() {
    // clear local storage
    localStorage.clear();
    
    // reset variables (services, prices and total)
    services = [];
    prices = [];
    sum = 0;
    totalPrice.innerHTML = `$ ${sum}`

    // render updated list
    renderServices()
})