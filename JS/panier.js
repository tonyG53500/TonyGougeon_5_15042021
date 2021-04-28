let productInLocalStorage = JSON.parse(localStorage.getItem("product"));

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
}


displayPanier()