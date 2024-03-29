let loginDiv = document.querySelector("#login")

function initLogin() {
    let usernameDiv = document.querySelector("#username");
    let usernameInput = document.createElement('input');
    usernameInput.classList.add('username');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('placeholder', 'Username');
    usernameDiv.appendChild(usernameInput);

    let passwordDiv = document.querySelector("#password");
    let passwordInput = document.createElement('input');
    passwordInput.classList.add('password');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', 'Password');
    passwordDiv.appendChild(passwordInput);

    const rememberMeCookie = getCookie('rememberMe');
    if (rememberMeCookie) {
        const userData = JSON.parse(rememberMeCookie);
        usernameInput.value = userData.userId;
        passwordInput.value = userData.password;
    }

    let submitDiv = document.querySelector("#submit");
    let submitButton = document.createElement('button');
    submitButton.classList.add('submit');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', handleSubmit);
    submitDiv.appendChild(submitButton);

    let loginList = document.querySelector("#loginList");
    loginList.appendChild(usernameDiv);
    loginList.appendChild(passwordDiv);
    loginList.appendChild(submitDiv);

    loginDiv.appendChild(loginList);
}
initLogin();

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function createServerUI() {
    const orderDiv = document.createElement('div');
    orderDiv.id = 'order';

    const tableSelectorDiv = document.createElement('div');
    tableSelectorDiv.id = 'tableSelector';

    const tableListUl = document.createElement('ul');
    tableListUl.id = 'tableList';
    tableSelectorDiv.appendChild(tableListUl);

    const typeSelectorDiv = document.createElement('div');
    typeSelectorDiv.id = 'typeSelector';

    const typeListUI = document.createElement('ul');
    typeListUI.id = 'typeList';
    typeSelectorDiv.appendChild(typeListUI);

    const foodSelectorDiv = document.createElement('div');
    foodSelectorDiv.id = 'foodSelector';

    const foodListUl = document.createElement('ul');
    foodListUl.id = 'foodList';
    foodSelectorDiv.appendChild(foodListUl);

    const modSelectorDiv = document.createElement('div');
    modSelectorDiv.id = 'modSelector';

    const modListUl = document.createElement('ul');
    modListUl.id = 'modList';
    modSelectorDiv.appendChild(modListUl);

    orderDiv.appendChild(tableSelectorDiv);
    orderDiv.appendChild(foodSelectorDiv);
    orderDiv.appendChild(modSelectorDiv);
    orderDiv.appendChild(typeSelectorDiv);

    document.body.appendChild(orderDiv);

    const scriptTag = document.createElement('script');
    scriptTag.src = 'orderHandler.js';
    orderDiv.appendChild(scriptTag);

    loginDiv.style.display = 'none';
}

async function fetchOrders() {
    try {
        const response = await fetch("https://kevinwan.pythonanywhere.com/get-orders");

        if (!response.ok) {
            throw new Error(`Error HTTP Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

function clearOrders() {
    fetch("https://kevinwan.pythonanywhere.com/clear-orders")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP Status: ${response.status}`)
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    })
}


function checkOrders() {
    let newDiv = document.createElement('div');
    let newText = document.createElement("h1")

    newDiv.id = "printText"
    newText.textContent = "Currently checking for new orders"
    newDiv.appendChild(newText)
    document.body.appendChild(newDiv)

    loginDiv.style.display = 'none';

    const checkingOrder = setInterval(async () => {
        let orderData = await fetchOrders()
        console.log(orderData)

        if (orderData.length > 0) {
            console.log("clear")
            
            orderData.forEach((item) => {
                let formattedItem = item.replace(/\n/g, "<br>");
                let boldFormattedItem = `<strong>${formattedItem}</strong>`;
                
                document.body.style.fontSize = "29px";
                document.body.style.width = "88mm";
                document.body.innerHTML = boldFormattedItem;
                
                window.print();
            });
            

            clearOrders()
        } else {
            console.log("no data")
        }
    }, 5000)
}

function handleSubmit() {
    let username = document.querySelector('.username').value;
    let password = document.querySelector('.password').value;

    userData = {
        userId: username,
        password: password
    }

    fetch('https://kevinwan.pythonanywhere.com/send-login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userData: userData
        })
    }).then(res => {
        console.log("Response Status Code:", res.status);

        if (res.ok) {
            setCookie('rememberMe', JSON.stringify(userData), 7);

            return res.json();
        } else if (res.status == 401) {
            console.log("Incorrect Credentials")

            document.querySelector('.username').value = '';
            document.querySelector('.password').value = '';
        } else {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
    })
    .then(data => {
        if (data == "serve") {
            createServerUI();
        } else if (data == "print") {
            checkOrders();
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
