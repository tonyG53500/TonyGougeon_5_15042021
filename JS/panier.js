let productInLocalStorage = JSON.parse(localStorage.getItem("product"));

displayPanier()

function displayPanier() {
    if(productInLocalStorage === null) {
        document.getElementById("basket").innerHTML = `
        <h1>Votre panier est vide !</h1>`
    } else {
        const tbody = document.getElementById("tbody")
        for(i=0; i<productInLocalStorage.length; i++) {
            tbody.innerHTML += `
            <tr>
                <td>${productInLocalStorage[i].productName}</td>
                <td>${productInLocalStorage[i].productPrice / 100}.00 €</td>
            </tr>`
        }
        const arrayPrice = []
        for (p=0; p<productInLocalStorage.length; p++) {
            arrayPrice.push(productInLocalStorage[p].productPrice)
            }
        const reducer = (acc, curr) => acc + curr
        const totalPanier = (arrayPrice.reduce(reducer)/100)
        document.getElementById("totalPanier").innerHTML = `${totalPanier}.00 €`
    }
    
    listenInput()
}

function listenInput() {
    document.getElementById("confirm").onclick = (e) => {
        e.preventDefault()
        if (!(productInLocalStorage === null)) {
            confirmOrder()
        } else {
            alert("Veuillez ajouter un produit à votre panier pour pouvoir procéder au paiement")
        }
    }

    validityInput(document.getElementById("firstname"), (e) => e.target.value.length > 1)
    validityInput(document.getElementById("lastname"), (e) => e.target.value.length > 1)
    validityInput(document.getElementById("email"), (e) => {
        const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i
        return emailRegex.test(e.target.value)
    })
    validityInput(document.getElementById("adress"), (e) => e.target.value.length > 3)
    validityInput(document.getElementById("zipcode"), (e) => {
        const zipcodeRegex = /^[0-9]{5}$/
        return zipcodeRegex.test(e.target.value)
    })
    validityInput(document.getElementById("city"), (e) => e.target.value.length > 1)
}

function validityInput(elt, condition) {
    elt.oninput = (e) => {
        if (condition(e)) {
            validInput(e.target)
        } else {
            neutralInput(e.target)
        }
    }

    elt.onblur = (e) => {
        if(!condition(e)) {
            invalidInput(e.target)
        }
    }
}

function validInput(elt) {
    elt.style.border = "1px solid green"
    elt.style.boxShadow = "0px 0px 3px 2px green"
}

function invalidInput(elt) {
    elt.style.border = "1px solid red"
    elt.style.boxShadow = "0px 0px 3px 2px red"
}

function neutralInput(elt) {
    elt.style.border = ""
    elt.style.boxshadow = ""
}

function confirmOrder() {
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const email = document.getElementById("email").value
    const adress = document.getElementById("adress").value
    const zipcode = document.getElementById("zipcode").value
    const city = document.getElementById("city").value

    const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i
    const zipcodeRegex = /^[0-9]{5}$/

    if (!(firstname.length > 1 && lastname.length > 1 && emailRegex.test(email) && adress.length > 3 && zipcodeRegex.test(zipcode) && city.length > 1)) {
        alert("Veuillez remplir tout le formulaire de contact pour pouvoir procéder au paiement")
        return
    }

    const products = Object.values(productInLocalStorage).map((product) => {
        return product._id
    })

    console.log(products);

    const order = {
        contact: {
            firstName: firstname,
            lastName: lastname,
            email: email,
            address: adress + " " + zipcode,
            city: city
        },
        products: products,
    }

    const requestOptions = {
        method: "POST",
        body: JSON.stringify(order),
        headers: {"Content-Type": "application/json; charset=utf-8"},
    }

    fetch("http://localhost:3000/api/cameras/order", requestOptions)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            localStorage.removeItem("product")
            window.location.href = "./confirmation.html" + `?orderId=${json.orderId}`
        })
        .catch(() => {
            alert("Il y a un problème technique")
        })
}