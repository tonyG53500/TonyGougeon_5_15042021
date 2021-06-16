class ApiCamera {

    // va chercher toutes les données des caméras
    get camera() { 
        return fetch('http://localhost:3000/api/cameras')
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(articles) {
            let result_tab = [];
            let article;
            for (article of articles) {
                let p = new Product(article._id, article.name, article.price, article.description, article.imageUrl);
                result_tab.push(p);
            }
            return (result_tab);
        })
        .catch(function error() {
            document.getElementById("row").innerHTML = `<div class="error d-flex justify-content-center"><h1>Oupsss!!! Une erreur technique est survenue.<br>Impossible d'afficher les articles.</h1></div>`
        })
    }

    // va chercher les données d'une caméra grace à son Id
    get cameraId() {
        return fetch(`http://localhost:3000/api/cameras/${productId}`)
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(articles) {

            let p = new Product(articles._id, articles.name, articles.price, articles.description, articles.imageUrl, articles.lenses);

            return p;
        })
        .catch(function error() {
            document.getElementById("main").innerHTML = `<div class="error d-flex justify-content-center"><h1>Oupsss!!! Une erreur technique est survenue.<br>Impossible d'afficher l'article.</h1></div>`
        })
    }

    // Post la commande et nous renvoie un Id de commande
    postProduct() {
        const products = Object.values(productInLocalStorage).map((product) => {
            return product.productId
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