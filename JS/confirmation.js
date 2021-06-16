const locationId = window.location.search
const urlSearchParams = new URLSearchParams(locationId);
const orderId = urlSearchParams.get("orderId")
console.log(orderId);

displayOrderId()

// Affiche l'Id de la commande qui nous est retourné
function displayOrderId() {
    document.getElementById("orderId").innerHTML = `${orderId}`
}