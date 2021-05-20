main()

async function main() {
    const articles = await getArticles()
    console.log(articles);
    for (article of articles) {
        displayArticle(article)
    }
}

function getArticles() {
    return cam.camera
}

function displayArticle(article) {
    document.getElementById("row").innerHTML += `
    <div class="card col-md-6 col-lg-4 m-4 shadow" style="width: 22rem;">
        <img src="${article.imageUrl}" id="img" class="card-img-top" alt="Appareil photo">
        <div class="card-body">
            <h5 class="card-title" id="title">${article.name}</h5>
            <p class="card-text" id="desc">${article.description}</p>
            <a href="./produit.html?id=${article._id}" class="btn btn-outline-primary" id="href">Voir le produit</a>
        </div>
    </div>`
}