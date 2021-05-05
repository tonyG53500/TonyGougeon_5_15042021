const locationId = window.location.search
const urlSearchParams = new URLSearchParams(locationId);
const orderId = urlSearchParams.get("orderId")
console.log(orderId);

displayOrderId()

function displayOrderId() {
    document.getElementById("orderId").innerHTML = `${orderId}`
}