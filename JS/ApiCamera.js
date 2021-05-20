class ApiCamera {
    get camera() {
        return fetch('http://localhost:3000/api/cameras')
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(articles) {
            return articles
        })
        .catch(function error() {
            document.getElementById("row").innerHTML = `<div class="error d-flex justify-content-center"><h1>Oupsss!!! Une erreur technique est survenue.<br>Impossible d'afficher les articles.</h1></div>`
        })
    }

    get cameraId() {
        return fetch(`http://localhost:3000/api/cameras/${productId}`)
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(articles) {
            return articles
        })
        .catch(function error() {
            document.getElementById("main").innerHTML = `<div class="error d-flex justify-content-center"><h1>Oupsss!!! Une erreur technique est survenue.<br>Impossible d'afficher l'article.</h1></div>`
        })
    }

    postProduct() {
        const products = Object.values(productInLocalStorage).map((product) => {
            return product._id
        })

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
                alert("Un problème technique est survenue, nous ne pouvons pas procéder au paiement.")
            })
    }
}

cam = new ApiCamera()