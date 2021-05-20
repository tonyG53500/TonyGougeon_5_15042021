class Product {
    constructor(id, name, price, description, imageUrl) {
        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
    }
    get Id() {
        return this.id
    }
    set Id(setId) {
        this.id = setId
    }
    get Name() {
        return this.name
    }
    set Name(setName) {
        this.id = setName
    }
    get Price() {
        return this.price
    }
    set Price(setPrice) {
        this.id = setPrice
    }
    get Description() {
        return this.description
    }
    set Description(setDescription) {
        this.id = setDescription
    }
    get ImageUrl() {
        return this.imageUrl
    }
    set ImageUrl(setImageUrl) {
        this.id = setImageUrl
    }
}


productCamera = new Product()