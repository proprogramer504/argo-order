let order = document.querySelector("#order")
let tableSelector = document.querySelector("#tableSelector")
let foodSelector = document.querySelector("#foodSelector")
let modSelector = document.querySelector("#modSelector")

let tableList = tableSelector.querySelector('#tableList')
let foodList = foodSelector.querySelector('#foodList')
let modList = modSelector.querySelector("#modList")

let finalKey
let tableNumber
let currPrice = 0
let foodOrder = []
let mods = []

const products = [
    {
        id:1,
        name:"Basic Breakfast",
        price:15,
        mods:{
            mod1: {
                name: "Bacon",
                price: 0
            },
            mod2: {
                name: "Ham",
                price: 0
            },
            mod3: {
                name: "Home Fries",
                price: 0
            },
            mod4: {
                name: "White Bread",
                price: 0
            },
            mod5: {
                name: "Brown Bread",
                price: 0
            }
        }
    },
    {
        id:2,
        name:"Platter",
        price:19,
        mods:{
            mod1: {
                name: "Cake Platter",
                price: 0
            },
            mod2: {
                name: "French Platter",
                price: 0
            }
        }
    },
    {
        id:3,
        name:"Breakfast Club",
        price:17,
        mods:{
            mod1: {
                name: "White Toast",
                price: 0
            },
            mod2: {
                name: "Brown Toast",
                price: 0
            },
            mod3: {
                name: "Home Fries",
                price: 0
            },
            mod4: {
                name: "Fries",
                price: 0
            }
        }
    },
    {
        id:4,
        name:"Con Queso Eggs",
        price:17,
        mods:{

        }
    },
    {
        id:5,
        name:"Buttermilk Pancakes",
        price:16,
        mods:{

        }
    },
    {
        id:6,
        name:"French Toast",
        price:17,
        mods:{

        }
    },
    {
        id:7,
        name:"Steak n' Eggs",
        price:24,
        mods:{
            mod1: {
                name: "Over Easy Eggs",
                price: 0
            },
            mod2: {
                name: "Over Medium Eggs",
                price: 0
            },
            mod3: {
                name: "Over Hard Eggs",
                price: 0
            },
            mod4: {
                name: "Sunny Side Up Eggs",
                price: 0
            },
            mod5: {
                name: "Blue Rare",
                price: 0
            },
            mod6: {
                name: "Rare",
                price: 0
            },
            mod7: {
                name: "Medium Rare",
                price: 0
            },
            mod8: {
                name: "Medium",
                price: 0
            },
            mod9: {
                name: "Medium Well",
                price: 0
            },
            mod10: {
                name: "Well Done",
                price: 0
            },
            mod11: {
                name: "White Toast",
                price: 0
            },
            mod12: {
                name: "Brown Toast",
                price: 0
            }
        }
    },
    {
        id:8,
        name:"House Chow Mein",
        price:21,
        mods:{
            
        }
    },
    {
        id:9,
        name:"Chicken Chili Con Queso",
        price:21,
        mods:{
            mod1: {
                name: "Rice",
                price: 0
            },
            mod2: {
                name: "Fries",
                price: 0
            }
        }
    },
    {
        id:10,
        name:"Spicy Lamb",
        price:21,
        mods:{

        }
    },
    {
        id:11,
        name:"Coconut Curry Chicken Stir Fry",
        price:19,
        mods:{
            mod1: {
                name: "Tofu (makes it vegan)",
                price: 0
            }
        }
    },
    {
        id:12,
        name:"Spaghetti Meat Sauce",
        price:18,
        mods:{

        }
    },
    {
        id:13,
        name:"Argo Burger",
        price:17,
        mods:{
            mod1: {
                name: "Home Fries",
                price: 0
            },
            mod2: {
                name: "Fries",
                price: 0
            },
            mod3: {
                name: "Salad",
                price: 2
            }
        }
    },
    {
        id:14,
        name:"Turkey Club",
        price:17,
        mods:{
            mod1: {
                name: "Fries",
                price: 0
            },
            mod2: {
                name: "White",
                price: 0
            },
            mod3: {
                name: "Brown",
                price: 0
            },
            mod4: {
                name: "Salad",
                price: 2
            }
        }
    },
    {
        id:15,
        name:"Grilled Cheese Tomato Bacon Sandwich",
        price:17,
        mods:{
            mod1: {
                name: "Fries",
                price: 0
            },
            mod2: {
                name: "White",
                price: 0
            },
            mod3: {
                name: "Brown",
                price: 0
            },
            mod4: {
                name: "Salad",
                price: 2
            }
        }
    },
    {
        id:16,
        name:"Eggs Benedict",
        price:17    ,
        mods:{
            mod1: {
                name: "Soft",
                price: 0
            },
            mod2: {
                name: "Medium",
                price: 0
            },
            mod3: {
                name: "Hard",
                price: 0
            }
        }
    },
    {
        id:17,
        name:"Short Rib Benedict",
        price:23,
        mods:{
            mod1: {
                name: "Soft",
                price: 0
            },
            mod2: {
                name: "Medium",
                price: 0
            },
            mod3: {
                name: "Hard",
                price: 0
            }
        }
    },
    {
        id:18,
        name:"Daily Omelette",
        price:NaN,
        mods:{

        }
    },
    {
        id:19,
        name:"Fried Chicken n' Waffles",
        price:21,
        mods:{

        }
    }
]

function enableFoodDisableTable () {
    tableSelector.style.display = "none"
    foodSelector.style.display = ""
}

function enableTableDisableFood () {
    tableSelector.style.display = ""
    foodSelector.style.display = "none"
}

function enableFoodDisableMods () {
    foodSelector.style.display = ""
    modSelector.style.display = "none"
}

function enableModsDisableFood () {
    modSelector.style.display = ""
    foodSelector.style.display = "none"
}

function formatData (id, tableNumber, itemName, price, mods) {
    let dta = {
        id: id,
        tableNumber: tableNumber,
        name: itemName,
        price: price,
        mods: mods,
    }

    return dta
}

function initApp () {
    let toGo = document.createElement('div')
        
    toGo.classList.add('toGo')
    toGo.innerHTML = `
        <button onclick="clickedTable(${0})">To Go</button>`
    tableList.appendChild(toGo)

    for(let item = 0; item < 10; item++) {
        let newDiv = document.createElement('div')

        newDiv.classList.add('table')
        newDiv.innerHTML = `
            <button onclick="clickedTable(${item + 1})">Table ${item + 1}</button>`
        tableList.appendChild(newDiv)
    }

    for(let item = 10; item < 19; item++) {
        let newDiv = document.createElement('div')

        newDiv.classList.add('table')
        newDiv.innerHTML = `
            <button onclick="clickedTable(${item + 1})">Bar ${item - 9}</button>`
        tableList.appendChild(newDiv)
    }

    products.forEach( (value, key) => {
        let newDiv = document.createElement('div')
        
        newDiv.classList.add('food')
        newDiv.innerHTML = `
            <button onclick="clickedFood(${key})">${value.name} $${value.price.toLocaleString()}</button>`
        foodList.appendChild(newDiv)
        foodSelector.style.display = "none"
    })

    let newDiv = document.createElement('div')
        
    newDiv.classList.add('done')
    newDiv.innerHTML = `
        <button onclick="clickedFinalDone()">Print</button>`
    foodList.appendChild(newDiv)
}
initApp()

function createMods(mods) {
    modList.innerHTML = ""
    for (const modKey in mods) {
        if (mods.hasOwnProperty(modKey)) {
            const mod = mods[modKey]

            let newDiv = document.createElement('div')
            newDiv.classList.add('mod')
            newDiv.innerHTML = `
                <button onclick="clickedMod('${mod.name}', '${mod.price}')">${mod.name} $${mod.price}</button>`
            modList.appendChild(newDiv)
        }
    }

    let typeMod = document.createElement('div')
    typeMod.classList.add("typeMod")
    typeMod.innerHTML = `
    <input class="typedMods" placeholder="Type Mods">`

    modList.append(typeMod)

    let newDiv = document.createElement('div')
    newDiv.classList.add('done')
    newDiv.innerHTML = `
        <button onclick="clickedDoneMod()">Add</button>`
    
    modList.appendChild(newDiv)
}

function clickedMod (modSelected, modPrice) {
    console.log(modPrice)
    mods.push(modSelected)
    currPrice += Number(modPrice)
}

function clickedTable (tblNumber) {
    tableNumber = tblNumber
    enableFoodDisableTable()
}

function clickedFood (key) {
    finalKey = key
    currPrice += Number(products[key].price)
    createMods(products[key].mods)
    enableModsDisableFood()
}

function clickedDoneMod () {
    let typedMods = document.querySelectorAll(".typedMods")
    typedMods.forEach ( (element) => {
        if (element.value != "") {
            mods.push(element.value)
        }
    })

    let data = formatData(document.querySelector(".username").value, tableNumber, 
        products[finalKey].name, currPrice, mods)
    foodOrder.push(data)
    
    mods = []
    finalKey = undefined
    currPrice = 0
    enableFoodDisableMods()
}

function clickedFinalDone() {
    fetch('https://kevinwan.pythonanywhere.com/send-orders', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            order: foodOrder
        })
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"));

    foodOrder = [];
    enableTableDisableFood();
}

