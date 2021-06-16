class Product {
    constructor(id, name, price, description, imageUrl, lenses) {
        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
        this.lenses = lenses
    }
    get Id() {
        return this.id
    }
    get Name() {
        return this.name
    }
    set Name(setName) {
        this.name = setName
    }
    get Price() {
        return this.price
    }
    set Price(setPrice) {
        this.price = setPrice
    }
    get Description() {
        return this.description
    }
    set Description(setDescription) {
        this.description = setDescription
    }
    get ImageUrl() {
        return this.imageUrl
    }
    set ImageUrl(setImageUrl) {
        this.imageUrl = setImageUrl
    }
    get Lenses() {
        return this.lenses
    }
    set Lenses(setLenses) {
        this.lenses = setLenses
    }

    // Affiche l'article avec ses données 
    display()
    {
        return (`
        <div class="card col-md-6 col-lg-4 m-4 shadow" style="width: 22rem;">
            <img src="${this.imageUrl}" id="img" class="card-img-top" alt="Appareil photo">
            <div class="card-body">
                <h5 class="card-title" id="title">${this.name}</h5>
                <p class="card-text" id="desc">${this.description}</p>
                <a href="./produit.html?id=${this.id}" class="btn btn-outline-primary" id="href">Voir le produit</a>
            </div>
        </div>`)
    }
}

productCamera = new Product()