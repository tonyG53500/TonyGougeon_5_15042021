const locationId = window.location.search
const urlSearchParams = new URLSearchParams(locationId);
const productId = urlSearchParams.get("id")

main()

async function main() {
    const article = await getArticles()
    displayArticle(article)
}


function getArticles() {
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
                <p class="price" id="price">${article.price / 100} €</p>
                <a href="./panier.html?id=${article._id}" class="btn btn-outline-primary ms-auto" id="href">Ajouter au  panier</a>
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