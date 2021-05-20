const locationId = window.location.search
const urlSearchParams = new URLSearchParams(locationId);
const productId = urlSearchParams.get("id")

main()

async function main() {
    const article = await getArticle()
    displayArticle(article)
    addToLocalStorage(article)
}

function getArticle() {
    return cam.cameraId
}

function displayArticle(article) {
    document.getElementById("main").innerHTML = `
    <div class="card m-4 shadow d-flex flex-row">
        <img src="${article.imageUrl}" id="img" class="card-img-top w-50" alt="Appareil photo">
        <div class="card-body card-body-produit d-flex flex-column justify-content-between p-5">
            <h5 class="card-title" id="title">${article.name}</h5>
            <p class="card-text" id="desc">${article.description}</p>
            <div class="choice" id="choice">
                <h5 class="card-choice">Veuillez choisir un objectif:</h5>
                <div id="choice-items">
                </div>
            </div>
            <div class="panier">
                <p class="price" id="price">${article.price / 100}.00 €</p>
                <button type="submit" class="btn btn-outline-primary ms-auto" id="btn-panier">Ajouter au panier</button>
            </div>
        </div>
    </div>`
    const choice = document.getElementById("choice-items")
    let lenses = article.lenses
    for (x=0; x< lenses.length ; x++) {
        choice.innerHTML += `
        <input type="radio" id="lense" name="drone" value="lense">
        <label for="lense" id="test">` + lenses[x] + `</label><br>`
    }
     
}

function addToLocalStorage(article) {
    const btnPanier = document.getElementById("btn-panier")

    btnPanier.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(event);

        let produitPanier = {
            productName: article.name,
            _id: article._id,
            productPrice: article.price,
            productQuantity: 1
        }

        let productInLocalStorage = JSON.parse(localStorage.getItem("product"));

        if(productInLocalStorage) {
            productInLocalStorage.push(produitPanier)
            localStorage.setItem("product", JSON.stringify(productInLocalStorage))
            window.location.href = "./panier.html"
        } else {
            productInLocalStorage = []
            productInLocalStorage.push(produitPanier)
            localStorage.setItem("product", JSON.stringify(productInLocalStorage))
            window.location.href = "./panier.html"
        }
    })  
}

