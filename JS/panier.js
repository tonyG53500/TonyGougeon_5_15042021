let productInLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productInLocalStorage);

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
    }
}
displayPanier()