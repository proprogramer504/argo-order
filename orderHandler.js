let order = document.querySelector("#order")
let tableSelector = document.querySelector("#tableSelector")
let foodSelector = document.querySelector("#foodSelector")
let modSelector = document.querySelector("#modSelector")
let typeSelector = document.querySelector("#typeSelector")

let tableList = tableSelector.querySelector('#tableList')
let typeList = typeSelector.querySelector('#typeList')
let foodList = foodSelector.querySelector('#foodList')
let modList = modSelector.querySelector("#modList")

let finalKey
let tableNumber
let currPrice = 0
let foodOrder = []
let mods = []

// inside type 1 is breakfast 2 is brunch 3 is lunch
const products = [
    {
        "id": 1,
        "name": "Basic Breakfast",
        "price": 15,
        "type": [
            1,
            2
        ],
        "mods": {
            "first": {
                "modClass": "Egg",
                "mod1": {
                    "name": "Basted",
                    "price": 0
                },
                "mod2": {
                    "name": "Over Easy",
                    "price": 0
                },
                "mod3": {
                    "name": "Over Medium",
                    "price": 0
                },
                "mod4": {
                    "name": "Over Hard",
                    "price": 0
                },
                "mod5": {
                    "name": "Poached Soft",
                    "price": 0
                },
                "mod6": {
                    "name": "Poached Medium",
                    "price": 0
                },
                "mod7": {
                    "name": "Poached Hard",
                    "price": 0
                },
                "mod8": {
                    "name": "Scrambled",
                    "price": 0
                },
                "mod9": {
                    "name": "Sunny Side Up",
                    "price": 0
                }
            },
            "second": {
                "modClass": "Meat",
                "mod1": {
                    "name": "Avocado",
                    "price": 0
                },
                "mod2": {
                    "name": "Bacon",
                    "price": 0
                },
                "mod3": {
                    "name": "Grilled Tomato",
                    "price": 0
                },
                "mod4": {
                    "name": "Ham",
                    "price": 0
                },
                "mod5": {
                    "name": "Sausage",
                    "price": 0
                },
                "mod6": {
                    "name": "Sliced Tomato",
                    "price": 0
                }
            },
            "third": {
                "modClass": "Bread",
                "mod1": {
                    "name": "White",
                    "price": 0
                },
                "mod2": {
                    "name": "Brown",
                    "price": 0
                },
                "mod3": {
                    "name": "No Bread",
                    "price": 0
                }
            },
            "fourth": {
                "modClass": "Sub",
                "mod1": {
                    "name": "Sub SALAD",
                    "price": 0
                },
                "mod2": {
                    "name": "Sub FRIES",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 2,
        "name": "Argo Burger",
        "price": 17,
        "type": [
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "Sides",
                "mod1": {
                    "name": "Fries",
                    "price": 0
                },
                "mod2": {
                    "name": "Mashed Potatoes",
                    "price": 0
                },
                "mod3": {
                    "name": "NO Side",
                    "price": -3
                },
                "mod4": {
                    "name": "Salad",
                    "price": 2
                },
                "mod5": {
                    "name": "Side Veggies",
                    "price": 0
                },
                "mod6": {
                    "name": "Side Salad",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 3,
        "name": "Breakfast Club",
        "price": 17,
        "type": [
            1,
            2
        ],
        "mods": {
            "first": {
                "modClass": "Bread",
                "mod1": {
                    "name": "White",
                    "price": 0
                },
                "mod2": {
                    "name": "Brown",
                    "price": 0
                },
                "mod3": {
                    "name": "No Bread",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 4,
        "name": "Daily Omelette",
        "price": 19,
        "type": [
            1,
            2
        ],
        "mods": {
            "first": {
                "modClass": "Bread",
                "mod1": {
                    "name": "White",
                    "price": 0
                },
                "mod2": {
                    "name": "Brown",
                    "price": 0
                },
                "mod3": {
                    "name": "No Bread",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 5,
        "name": "Cakes Platter",
        "price": 19,
        "type": [
            1,
            2
        ],
        "mods": {
            "first": {
                "modClass": "Egg",
                "mod1": {
                    "name": "Basted",
                    "price": 0
                },
                "mod2": {
                    "name": "Over Easy",
                    "price": 0
                },
                "mod3": {
                    "name": "Over Medium",
                    "price": 0
                },
                "mod4": {
                    "name": "Over Hard",
                    "price": 0
                },
                "mod5": {
                    "name": "Poached Soft",
                    "price": 0
                },
                "mod6": {
                    "name": "Poached Medium",
                    "price": 0
                },
                "mod7": {
                    "name": "Poached Hard",
                    "price": 0
                },
                "mod8": {
                    "name": "Scrambled",
                    "price": 0
                },
                "mod9": {
                    "name": "Sunny Side Up",
                    "price": 0
                }
            },
            "second": {
                "modClass": "Meat",
                "mod1": {
                    "name": "Avocado",
                    "price": 0
                },
                "mod2": {
                    "name": "Bacon",
                    "price": 0
                },
                "mod3": {
                    "name": "Grilled Tomato",
                    "price": 0
                },
                "mod4": {
                    "name": "Ham",
                    "price": 0
                },
                "mod5": {
                    "name": "Sausage",
                    "price": 0
                },
                "mod6": {
                    "name": "Sliced Tomato",
                    "price": 0
                }
            },
            "third": {
                "modClass": "Bread",
                "mod1": {
                    "name": "White",
                    "price": 0
                },
                "mod2": {
                    "name": "Brown",
                    "price": 0
                },
                "mod3": {
                    "name": "No Bread",
                    "price": 0
                }
            },
            "fourth": {
                "modClass": "Sub",
                "mod1": {
                    "name": "Sub SALAD",
                    "price": 0
                },
                "mod2": {
                    "name": "Sub FRIES",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 6,
        "name": "Pancakes",
        "price": 16,
        "type": [
            1,
            2
        ],
        "mods": {
            "first": {
                "modClass": "Bread",
                "mod1": {
                    "name": "NO Fruit",
                    "price": 0
                },
                "mod2": {
                    "name": "NO Butter",
                    "price": 0
                },
                "mod3": {
                    "name": "No Bread",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 7,
        "name": "French Platter",
        "price": 19,
        "type": [
            1,
            2
        ],
        "mods": {
            "first": {
                "modClass": "Egg",
                "mod1": {
                    "name": "Basted",
                    "price": 0
                },
                "mod2": {
                    "name": "Over Easy",
                    "price": 0
                },
                "mod3": {
                    "name": "Over Medium",
                    "price": 0
                },
                "mod4": {
                    "name": "Over Hard",
                    "price": 0
                },
                "mod5": {
                    "name": "Poached Soft",
                    "price": 0
                },
                "mod6": {
                    "name": "Poached Medium",
                    "price": 0
                },
                "mod7": {
                    "name": "Poached Hard",
                    "price": 0
                },
                "mod8": {
                    "name": "Scrambled",
                    "price": 0
                },
                "mod9": {
                    "name": "Sunny Side Up",
                    "price": 0
                }
            },
            "second": {
                "modClass": "Meat",
                "mod1": {
                    "name": "Avocado",
                    "price": 0
                },
                "mod2": {
                    "name": "Bacon",
                    "price": 0
                },
                "mod3": {
                    "name": "Grilled Tomato",
                    "price": 0
                },
                "mod4": {
                    "name": "Ham",
                    "price": 0
                },
                "mod5": {
                    "name": "Sausage",
                    "price": 0
                },
                "mod6": {
                    "name": "Sliced Tomato",
                    "price": 0
                }
            },
            "third": {
                "modClass": "Bread",
                "mod1": {
                    "name": "White",
                    "price": 0
                },
                "mod2": {
                    "name": "Brown",
                    "price": 0
                },
                "mod3": {
                    "name": "No Bread",
                    "price": 0
                }
            },
            "fourth": {
                "modClass": "Sub",
                "mod1": {
                    "name": "Sub SALAD",
                    "price": 0
                },
                "mod2": {
                    "name": "Sub FRIES",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 8,
        "name": "French Toast",
        "price": 13,
        "type": [
            1,
            2
        ],
        "mods": {
            "first": {
                "modClass": "Bread",
                "mod1": {
                    "name": "NO Fruit",
                    "price": 0
                },
                "mod2": {
                    "name": "NO Butter",
                    "price": 0
                },
                "mod3": {
                    "name": "No Bread",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 9,
        "name": "Waffles",
        "price": 16,
        "type": [
            1,
            2
        ],
        "mods": {
            "first": {
                "modClass": "Bread",
                "mod1": {
                    "name": "NO Fruit",
                    "price": 0
                },
                "mod2": {
                    "name": "NO Butter",
                    "price": 0
                },
                "mod3": {
                    "name": "No Bread",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 11,
        "name": "Con Queso Eggs",
        "price": 17,
        "type": [
            1,
            2
        ],
        "mods": {
            "first": {
                "modClass": "Egg",
                "mod1": {
                    "name": "Over Easy",
                    "price": 0
                },
                "mod2": {
                    "name": "Over Medium",
                    "price": 0
                },
                "mod3": {
                    "name": "Over Hard",
                    "price": 0
                },
                "mod4": {
                    "name": "Poached Soft",
                    "price": 0
                },
                "mod5": {
                    "name": "Poached Medium",
                    "price": 0
                },
                "mod6": {
                    "name": "Poached Hard",
                    "price": 0
                },
                "mod7": {
                    "name": "Scrambled",
                    "price": 0
                },
                "mod8": {
                    "name": "Scrambled Hard",
                    "price": 0
                },
                "mod9": {
                    "name": "Sunny Side Up",
                    "price": 0
                }
            },
            "second": {
                "modClass": "Sub",
                "mod1": {
                    "name": "Sub Sauce",
                    "price": 0
                },
                "mod2": {
                    "name": "Sub Ham",
                    "price": 0
                }
            },
            "third": {
                "modClass": "Sauce",
                "mod1": {
                    "name": "Sauce on Side",
                    "price": 0
                },
                "mod2": {
                    "name": "No Sauce",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 12,
        "name": "Brunch Omelette",
        "price": 23,
        "type": [
            2
        ],
        "mods": {
            "first": {
                "modClass": "Bread",
                "mod1": {
                    "name": "White",
                    "price": 0
                },
                "mod2": {
                    "name": "Brown",
                    "price": 0
                },
                "mod3": {
                    "name": "No Bread",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 13,
        "name": "Eggs Benedict",
        "price": 16,
        "type": [
            1,
            2
        ],
        "mods": {
            "first": {
                "modClass": "Sauce",
                "mod1": {
                    "name": "Hollandaise ON SIDE",
                    "price": 0
                },
                "mod2": {
                    "name": "NO Hollandaise",
                    "price": 0
                }
            },
            "second": {
                "modClass": "Egg",
                "mod1": {
                    "name": "Over Easy",
                    "price": 0
                },
                "mod2": {
                    "name": "Over Medium",
                    "price": 0
                },
                "mod4": {
                    "name": "Over Hard",
                    "price": 0
                },
                "mod5": {
                    "name": "Poached Soft",
                    "price": 0
                },
                "mod6": {
                    "name": "Poached Medium",
                    "price": 0
                },
                "mod7": {
                    "name": "Poached Hard",
                    "price": 0
                },
                "mod8": {
                    "name": "Scrambled",
                    "price": 0
                },
                "mod9": {
                    "name": "Scrambled Hard",
                    "price": 0
                },
                "mod10": {
                    "name": "Sunny Side Up",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 14,
        "name": "Chicken and Waffles",
        "price": 22,
        "type": [
            2
        ],
        "mods": {
            "first": {
                "modClass": "Sub",
                "mod1": {
                    "name": "Sub SALAD",
                    "price": 0
                },
                "mod2": {
                    "name": "Sub FRIES",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 15,
        "name": "Meat Loaf",
        "price": 21,
        "type": [
            2
        ],
        "mods": {
            "first": {
                "modClass": "Without",
                "mod1": {
                    "name": "NO Tomato Sauce",
                    "price": 0
                },
                "mod2": {
                    "name": "NO Homefries",
                    "price": 0
                },
                "mod3": {
                    "name": "NO Salad",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 16,
        "name": "Pancakes and Duck Confit",
        "price": 23,
        "type": [
            1,
            2
        ],
        "mods": {
            "first": {
                "modClass": "Without",
                "mod1": {
                    "name": "NO Pancakes",
                    "price": 0
                },
                "mod2": {
                    "name": "NO Duck",
                    "price": 0
                },
                "mod3": {
                    "name": "NO Fruit",
                    "price": 0
                },
                "mod4": {
                    "name": "NO Butter",
                    "price": 0
                },
                "mod5": {
                    "name": "NO Compote",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 17,
        "name": "Pork",
        "price": 22,
        "type": [
            2
        ],
        "mods": {
            "first": {
                "modClass": "Toast",
                "mod1": {
                    "name": "White",
                    "price": 0
                },
                "mod2": {
                    "name": "Brown",
                    "price": 0
                }
            },
            "second": {
                "modClass": "Egg",
                "mod1": {
                    "name": "Basted",
                    "price": 0
                },
                "mod2": {
                    "name": "Over Easy",
                    "price": 0
                },
                "mod3": {
                    "name": "Over Medium",
                    "price": 0
                },
                "mod4": {
                    "name": "Over Hard",
                    "price": 0
                },
                "mod5": {
                    "name": "Poached Soft",
                    "price": 0
                },
                "mod6": {
                    "name": "Poached Medium",
                    "price": 0
                },
                "mod7": {
                    "name": "Poached Hard",
                    "price": 0
                },
                "mod8": {
                    "name": "Scrambled",
                    "price": 0
                },
                "mod9": {
                    "name": "Sunny Side Up",
                    "price": 0
                }
            },
            "third": {
                "modClass": "Sauce",
                "mod1": {
                    "name": "Extra Mush Sauce",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 19,
        "name": "Salmon Benedict",
        "price": 23,
        "type": [
            2
        ],
        "mods": {
            "first": {
                "modClass": "Egg",
                "mod1": {
                    "name": "Basted",
                    "price": 0
                },
                "mod2": {
                    "name": "Over Easy",
                    "price": 0
                },
                "mod3": {
                    "name": "Over Medium",
                    "price": 0
                },
                "mod4": {
                    "name": "Over Hard",
                    "price": 0
                },
                "mod5": {
                    "name": "Poached Soft",
                    "price": 0
                },
                "mod6": {
                    "name": "Poached Medium",
                    "price": 0
                },
                "mod7": {
                    "name": "Poached Hard",
                    "price": 0
                },
                "mod8": {
                    "name": "Scrambled",
                    "price": 0
                },
                "mod9": {
                    "name": "Sunny Side Up",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 20,
        "name": "Spaghetti BOLO",
        "price": 23,
        "type": [
            2
        ],
        "mods": {
            "first": {
                "modClass": "Without",
                "mod1": {
                    "name": "Garlic Toast",
                    "price": 0
                },
                "mod2": {
                    "name": "Parmesan Cheese",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 21,
        "name": "Steak and Eggs",
        "price": 24,
        "type": [
            1,
            2
        ],
        "mods": {
            "first": {
                "modClass": "Bread",
                "mod1": {
                    "name": "White",
                    "price": 0
                },
                "mod2": {
                    "name": "Brown",
                    "price": 0
                },
                "mod3": {
                    "name": "No Bread",
                    "price": 0
                }
            },
            "second": {
                "modClass": "Meat",
                "mod1": {
                    "name": "Blue Rare",
                    "price": 0
                },
                "mod2": {
                    "name": "Med Rare",
                    "price": 0
                },
                "mod3": {
                    "name": "Med Well",
                    "price": 0
                },
                "mod4": {
                    "name": "Medium",
                    "price": 0
                },
                "mod5": {
                    "name": "Rare",
                    "price": 0
                },
                "mod6": {
                    "name": "Well Done",
                    "price": 0
                }
            },
            "third": {
                "modClass": "Egg",
                "mod1": {
                    "name": "Basted",
                    "price": 0
                },
                "mod2": {
                    "name": "Over Easy",
                    "price": 0
                },
                "mod3": {
                    "name": "Over Medium",
                    "price": 0
                },
                "mod4": {
                    "name": "Over Hard",
                    "price": 0
                },
                "mod5": {
                    "name": "Poached Soft",
                    "price": 0
                },
                "mod6": {
                    "name": "Poached Medium",
                    "price": 0
                },
                "mod7": {
                    "name": "Poached Hard",
                    "price": 0
                },
                "mod8": {
                    "name": "Scrambled",
                    "price": 0
                },
                "mod9": {
                    "name": "Sunny Side Up",
                    "price": 0
                },
                "mod10": {
                    "name": "Boiled",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 22,
        "name": "Bacon Lettuce Tomato (BLT)",
        "price": 13,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "Toast",
                "mod1": {
                    "name": "White",
                    "price": 0
                },
                "mod2": {
                    "name": "Brown",
                    "price": 0
                }
            },
            "second": {
                "modClass": "Side",
                "mod1": {
                    "name": "Sub Mash",
                    "price": 0
                },
                "mod2": {
                    "name": "Sub Salad",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 23,
        "name": "Bacon Cheese Burger & Fries",
        "price": 14,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 66,
        "name": "Cheese Burger Fries",
        "price": 17,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "Sides",
                "mod2": {
                    "name": "Mashed Potatoes",
                    "price": 0
                },
                "mod3": {
                    "name": "NO Side",
                    "price": -3
                },
                "mod4": {
                    "name": "Salad",
                    "price": 2
                },
                "mod5": {
                    "name": "Side Veggies",
                    "price": 0
                },
                "mod6": {
                    "name": "Side Salad",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 24,
        "name": "Bacon Wrapped Tenderloin",
        "price": 25,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 25,
        "name": "Beef Stir Fry",
        "price": 21,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "Rice",
                "mod1": {
                    "name": "On RICE",
                    "price": 0
                },
                "mod2": {
                    "name": "On NOODLE",
                    "price": 1
                }
            }
        }
    },
    {
        "id": 26,
        "name": "Burger & Fries",
        "price": 12,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "Sub",
                "mod1": {
                    "name": "SUB SALAD",
                    "price": 0
                },
                "mod2": {
                    "name": "SUB MASH",
                    "price": 1
                }
            }
        }
    },
    {
        "id": 28,
        "name": "Chicken Con Queso",
        "price": 21,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "Sub",
                "mod1": {
                    "name": "ON FRIES",
                    "price": 0
                },
                "mod2": {
                    "name": "ON MASH",
                    "price": 0
                },
                "mod3": {
                    "name": "ON VEGGIES",
                    "price": 1
                }
            }
        }
    },
    {
        "id": 29,
        "name": "Coconut Curry Chicken",
        "price": 19,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "Sub",
                "mod1": {
                    "name": "ON FRIES",
                    "price": 0
                },
                "mod2": {
                    "name": "ON NOODLE",
                    "price": 1
                },
                "mod3": {
                    "name": "ON VEGGIES",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 30,
        "name": "Chicken Stir Fry",
        "price": 21,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "Sub",
                "mod1": {
                    "name": "ON NOODLE",
                    "price": 1
                }
            }
        }
    },
    {
        "id": 31,
        "name": "Duck Confit",
        "price": 23,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "Sub",
                "mod1": {
                    "name": "Sauce on side",
                    "price": 1
                }
            }
        }
    },
    {
        "id": 32,
        "name": "Fish and Chips",
        "price": 19,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 33,
        "name": "Flat Iron Steak",
        "price": 24,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "Rarity",
                "mod1": {
                    "name": "MEDIUM RARE",
                    "price": 0
                },
                "mod2": {
                    "name": "MEDIUM WELL",
                    "price": 0
                },
                "mod3": {
                    "name": "MEDIUM",
                    "price": 0
                },
                "mod4": {
                    "name": "RARE",
                    "price": 0
                },
                "mod5": {
                    "name": "WELL DONE",
                    "price": 0
                }
            },
            "second": {
                "modClass": "SUB",
                "mod1": {
                    "name": "SUB MASH",
                    "price": 0
                },
                "mod2": {
                    "name": "SUB RICE",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 34,
        "name": "Garlic Ginger Seafood",
        "price": 21,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 35,
        "name": "Grilled Cheese Special",
        "price": 16,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "SUB",
                "mod1": {
                    "name": "SUB MASH",
                    "price": 0
                },
                "mod2": {
                    "name": "SUB SALAD",
                    "price": 0
                }
            },
            "second": {
                "modClass": "toast",
                "mod1": {
                    "name": "Brown Toast",
                    "price": 0
                },
                "mod2": {
                    "name": "White Toast",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 36,
        "name": "House Chow Mein",
        "price": 21,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            },
            "second": {
                "modClass": "Sub",
                "mod1": {
                    "name": "On Rice",
                    "price": 0
                },
                "mod2": {
                    "name": "On Veggies",
                    "price": 1
                }
            }
        }
    },
    {
        "id": 37,
        "name": "Ling Cod",
        "price": 21,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "starch",
                "mod1": {
                    "name": "Double Starch",
                    "price": 0
                },
                "mod2": {
                    "name": "Double Veg",
                    "price": 0
                },
                "mod3": {
                    "name": "No Starch",
                    "price": 0
                },
                "mod4": {
                    "name": "No Veg",
                    "price": 0
                }
            },
            "second": {
                "modClass": "Sub",
                "mod1": {
                    "name": "Sauce on side",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 38,
        "name": "Meat Loaf",
        "price": 18,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "Size",
                "mod1": {
                    "name": "Main 1",
                    "price": 0
                },
                "mod2": {
                    "name": "Main 2",
                    "price": 3.95
                }
            }
        }
    },
    {
        "id": 39,
        "name": "Pasta Special",
        "price": 22,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 40,
        "name": "Pork Loin",
        "price": 21,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "Sauce",
                "mod1": {
                    "name": "Sauce on side",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 41,
        "name": "Pork Schnitzel",
        "price": 22,
        "type": [
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 42,
        "name": "Roasted Stuffed Chicken",
        "price": 19,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 43,
        "name": "Rock Fish",
        "price": 22,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "starch",
                "mod1": {
                    "name": "Double Starch",
                    "price": 0
                },
                "mod2": {
                    "name": "Double Veg",
                    "price": 0
                },
                "mod3": {
                    "name": "No Starch",
                    "price": 0
                },
                "mod4": {
                    "name": "No Veg",
                    "price": 0
                }
            },
            "second": {
                "modClass": "Sub",
                "mod1": {
                    "name": "Sauce on side",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 44,
        "name": "Seafood Pasta",
        "price": 23,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 45,
        "name": "Shepards Pie",
        "price": 19,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 46,
        "name": "Sockeye Salmon",
        "price": 24,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "starch",
                "mod1": {
                    "name": "Double Starch",
                    "price": 0
                },
                "mod2": {
                    "name": "Double Veg",
                    "price": 0
                },
                "mod3": {
                    "name": "No Starch",
                    "price": 0
                },
                "mod4": {
                    "name": "No Veg",
                    "price": 0
                }
            },
            "second": {
                "modClass": "Sub",
                "mod1": {
                    "name": "Sauce on side",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 47,
        "name": "Spaghetti Bolognese",
        "price": 18,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 48,
        "name": "Spicy Lamb",
        "price": 21,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "noodle",
                "mod1": {
                    "name": "On Noodle",
                    "price": 1
                }
            }
        }
    },
    {
        "id": 49,
        "name": "Teriyaki",
        "price": 17,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 50,
        "name": "Turkey Club",
        "price": 17,
        "type": [
            3
        ],
        "mods": {
            "first": {
                "modClass": "Bread",
                "mod1": {
                    "name": "Brown Bread",
                    "price": 0
                },
                "mod2": {
                    "name": "White Bread",
                    "price": 0
                },
                "mod3": {
                    "name": "No Bread",
                    "price": 0
                }
            },
            "second": {
                "modClass": "Sub",
                "mod1": {
                    "name": "SUB MASH",
                    "price": 0
                },
                "mod2": {
                    "name": "SUB SALAD",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 51,
        "name": "Special 1",
        "price": 21.95,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 52,
        "name": "Special 2",
        "price": 23.95,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 53,
        "name": "Special 3",
        "price": 24.95,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVALIBLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 54,
        "name": "Coffee",
        "price": 3.75,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "Type",
                "mod1": {
                    "name": "Regular",
                    "price": 0
                },
                "mod2": {
                    "name": "Decaf",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 55,
        "name": "Tea",
        "price": 3.75,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "Flavor",
                "mod1": {
                    "name": "English",
                    "price": 0
                },
                "mod2": {
                    "name": "Earl Grey",
                    "price": 0
                },
                "mod3": {
                    "name": "Lady Grey",
                    "price": 0
                },
                "mod4": {
                    "name": "Green",
                    "price": 0
                },
                "mod5": {
                    "name": "Mint",
                    "price": 0
                },
                "mod6": {
                    "name": "Camomile",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 56,
        "name": "Americano",
        "price": 4.5,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVAILABLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 57,
        "name": "Espresso",
        "price": 3.5,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "Size",
                "mod1": {
                    "name": "Single",
                    "price": 0
                },
                "mod2": {
                    "name": "Double",
                    "price": 0.45
                }
            }
        }
    },
    {
        "id": 58,
        "name": "Latte/Cappuccino",
        "price": 4.5,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "Size",
                "mod1": {
                    "name": "Single",
                    "price": 0
                },
                "mod2": {
                    "name": "Double",
                    "price": 1
                }
            }
        }
    },
    {
        "id": 59,
        "name": "Orange Juice",
        "price": 4.5,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVAILABLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 60,
        "name": "Pomegranate Juice",
        "price": 7,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVAILABLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 61,
        "name": "Sodas",
        "price": 2.75,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVAILABLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 62,
        "name": "San Pellegrino",
        "price": 3.75,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "Flavour",
                "mod1": {
                    "name": "Various",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 63,
        "name": "Milkshakes",
        "price": 7,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "Flavor",
                "mod1": {
                    "name": "Vanilla",
                    "price": 0
                },
                "mod2": {
                    "name": "Chocolate",
                    "price": 0
                },
                "mod3": {
                    "name": "Strawberry",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 64,
        "name": "Chocolate Milk",
        "price": 3.75,
        "type": [
            1,
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "nan",
                "mod1": {
                    "name": "NO MODS AVAILABLE",
                    "price": null
                }
            }
        }
    },
    {
        "id": 65,
        "name": "Shortrib Benny",
        "price": 16,
        "type": [
            2,
            3
        ],
        "mods": {
            "first": {
                "modClass": "Sauce",
                "mod1": {
                    "name": "Hollandaise ON SIDE",
                    "price": 0
                },
                "mod2": {
                    "name": "NO Hollandaise",
                    "price": 0
                }
            },
            "second": {
                "modClass": "Egg",
                "mod1": {
                    "name": "Over Easy",
                    "price": 0
                },
                "mod2": {
                    "name": "Over Medium",
                    "price": 0
                },
                "mod4": {
                    "name": "Over Hard",
                    "price": 0
                },
                "mod5": {
                    "name": "Poached Soft",
                    "price": 0
                },
                "mod6": {
                    "name": "Poached Medium",
                    "price": 0
                },
                "mod7": {
                    "name": "Poached Hard",
                    "price": 0
                },
                "mod8": {
                    "name": "Scrambled",
                    "price": 0
                },
                "mod9": {
                    "name": "Scrambled Hard",
                    "price": 0
                },
                "mod10": {
                    "name": "Sunny Side Up",
                    "price": 0
                }
            }
        }
    },
    {
        "id": 66,
        "name": "Side Salad",
        "price": 17,
        "type": [
            1,
            2
        ],
        "mods": {
            "first": {
                "first": {
                    "modClass": "nan",
                    "mod1": {
                        "name": "NO MODS AVAILABLE",
                        "price": null
                    }
                }
            }
        }
    }
]

function enableTypeDisableTable() {
    tableSelector.style.display = "none"
    typeSelector.style.display = ""
}

function enableFoodDisableType() {
    typeSelector.style.display = "none"
    foodSelector.style.display = ""
}

function enableTableDisableFood () {
    tableSelector.style.display = ""
    foodSelector.style.display = "none"
}

function enableFoodDisableMods () {
    foodSelector.style.display = ""
    modSelector.style.display = "none"

    while (modList.firstChild) {
        modList.removeChild(modList.firstChild);
    }
}

function enableModsDisableFood () {
    modSelector.style.display = ""
    foodSelector.style.display = "none"
}

function formatData (id, tableNumber, itemName, price, mods) {
    let dta = {
        id: id,
        tableNumber: Number(tableNumber),
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

    for(let item = 19; item < 22; item++) {
        let newDiv = document.createElement('div')

        newDiv.classList.add('table')
        newDiv.innerHTML = `
            <button onclick="clickedTable(${item + 1})">Outside ${item - 18}</button>`
        tableList.appendChild(newDiv)
    }

    for(let item = 22; item < 28; item++) {
        let newDiv = document.createElement('div')

        newDiv.classList.add('table')
        newDiv.innerHTML = `
            <button onclick="clickedTable(${item + 1})">Patio ${item - 21}</button>`
        tableList.appendChild(newDiv)
    }

    let typeArray = ["Breakfast", "Brunch", "Lunch"]
    typeArray.forEach ( (value) => {
        console.log(value)
        let newDiv = document.createElement('div')
        
        newDiv.classList.add('type')
        newDiv.innerHTML = `
            <button onclick="clickedType('${value}')">${value}</button>`
        typeList.appendChild(newDiv)
        typeSelector.style.display = "none"
    })
}
initApp()


function createMods(mods) {
    let maxMods = Object.keys(mods).length - 1;
    let currentMod = 0;
    for (const modType in mods) {
        let modDiv = document.createElement("div");
        modDiv.classList.add(`modContainer${currentMod}`);
        modDiv.style.display = currentMod > 0 ? "none" : "";
        modList.appendChild(modDiv);

        for (const mod in mods[modType]) {
            if (mods[modType][mod] != mods[modType].modClass) {
                let newDiv = document.createElement("div");
                newDiv.classList.add('mod');
                newDiv.innerHTML = `
                    <button onclick="clickedMod('${mods[modType][mod].name}', ${mods[modType][mod].price})">
                        ${mods[modType][mod].name} $${mods[modType][mod].price}
                    </button>`;
                modDiv.appendChild(newDiv);
            }
        }

        if (currentMod == maxMods) {
            let typedModWrapper = document.createElement('div');
            typedModWrapper.classList.add("typedModWrapper");

            let typeMod = document.createElement('div');
            typeMod.classList.add("typeMod");
            typeMod.innerHTML = `<input class="typedMods" placeholder="Type Mods">`;
            typedModWrapper.appendChild(typeMod);

            let doneButtonDiv = document.createElement("div");
            doneButtonDiv.classList.add('finalDone');
            doneButtonDiv.innerHTML = `<button onclick="clickedDoneMod()">Back to Foods</button>`;
            typedModWrapper.appendChild(doneButtonDiv);

            modDiv.appendChild(typedModWrapper);

            addEnterEventListener(typeMod.querySelector('.typedMods'), typedModWrapper);
        } else {
            let newDiv = document.createElement("div");
            newDiv.classList.add('partialDone');
            newDiv.innerHTML = `<button onclick="clickedPartialDone('${currentMod}', ${currentMod+1})">Done</button>`;
            modDiv.appendChild(newDiv);
        }
        currentMod++;
    }
}

function addEnterEventListener(inputElement, wrapperDiv) {
    inputElement.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();

            let newInputDiv = document.createElement('div');
            newInputDiv.classList.add("typeMod");
            newInputDiv.innerHTML = `<input class="typedMods" placeholder="Type Mods">`;

            let doneButtonDiv = wrapperDiv.querySelector('.finalDone');
            if (doneButtonDiv) {
                wrapperDiv.removeChild(doneButtonDiv);
            }

            wrapperDiv.appendChild(newInputDiv);
            newInputDiv.querySelector('.typedMods').focus();

            doneButtonDiv = document.createElement("div");
            doneButtonDiv.classList.add('finalDone');
            doneButtonDiv.innerHTML = `<button onclick="clickedDoneMod()">Back to Foods</button>`;
            wrapperDiv.appendChild(doneButtonDiv);

            addEnterEventListener(newInputDiv.querySelector('.typedMods'), wrapperDiv);
        }
    });
}


function clickedType (type) {
    const decode = {
        "Breakfast": 1,
        "Brunch": 2,
        "Lunch": 3
    }
    let foodArray = []
    let decoded = decode[type]

    products.forEach( (value, key) => {

        value.type.forEach ((intType) => {
            if (intType === decoded) {

                foodArray.push([value, key])
            }
        })
    })
    if (foodArray.length > 0) {
        foodArray.forEach( (menuData) => {
           menuData.forEach( (menuItem) => {
            if (menuItem.name === undefined) {
                console.log("und")
            } else {
                let newDiv = document.createElement("div")

                newDiv.classList.add("food")
                newDiv.innerHTML = `
                <button onclick=clickedFood('${menuData[1]}')>${menuItem.name}</button>`
                foodList.appendChild(newDiv)
            }
           })
        })
        let newDiv = document.createElement('div')
        newDiv.classList.add('done')
        newDiv.innerHTML = `
            <button onclick="clickedFinalDone()">Print</button>`
        foodList.appendChild(newDiv)
        enableFoodDisableType()
    }
}

function clickedMod (modSelected, modPrice) {
    console.log(modPrice)
    mods.push(modSelected)
    currPrice += Number(modPrice)
}

function clickedPartialDone(current, next) {
    console.log(current, next)
    let currentSlide = document.querySelector(`.modContainer${current}`)
    let nextSlide = document.querySelector(`.modContainer${next}`)

    currentSlide.style.display = "none"
    nextSlide.style.display = ''
}

function clickedDoneMod() {
    let typedMods = document.querySelectorAll(".typedMods");
    typedMods.forEach((element) => {
        if (element.value.trim() !== "") {
            mods.push(element.value.trim());
        }
    });

    let data = formatData(document.querySelector(".username").value, tableNumber, products[finalKey].name, currPrice, mods);
    foodOrder.push(data);

    mods = [];
    finalKey = undefined;
    currPrice = 0;
    enableFoodDisableMods();
}



function clickedTable (tblNumber) {
    tableNumber = tblNumber
    enableTypeDisableTable()
}

function clickedFood (key) {
    finalKey = key
    currPrice += Number(products[key].price)
    createMods(products[key].mods)
    enableModsDisableFood()
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
    while (foodList.firstChild) {
        foodList.removeChild(foodList.firstChild);
    }
    enableTableDisableFood();
}

