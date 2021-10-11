const listProductsInCart=JSON.parse(localStorage.getItem('cart'));
const orderResponseDetails=JSON.parse(localStorage.getItem('orderResponse'));
var orderConfirmationDetails={};


/*
fonction pour obtenir la quantité de produit commandé
*/
function getProductQuantity(productId){
    var productQuantity=0;

    for(let index in listProductsInCart){
        if(listProductsInCart[index]._id == productId){
            productQuantity=listProductsInCart[index].quantity;
        };
    };
    
    return(productQuantity);
};


/*
fonction pour créer les détails de la confirmation de commande
*/
function createOrderConfirmationDetails(){
    //
    orderConfirmationDetails.orderId=orderResponseDetails.orderId;
    orderConfirmationDetails.contact=orderResponseDetails.contact;
    orderConfirmationDetails.products=orderResponseDetails.products;
    //
    var totalPriceSum=0;
    for(let index in orderConfirmationDetails.products){
        orderConfirmationDetails.products[index].quantity = getProductQuantity(orderConfirmationDetails.products[index]._id);
        orderConfirmationDetails.products[index].totalPrice = orderConfirmationDetails.products[index].quantity * orderConfirmationDetails.products[index].price;
        totalPriceSum = totalPriceSum + orderConfirmationDetails.products[index].totalPrice;
    };
    //
    orderConfirmationDetails.totalSum = totalPriceSum;
    //
    deleteLocalStorageData();

    console.log("orderConfirmationDetails", orderConfirmationDetails);
    //
    createOrderConfirmationPage();
    
};


/*
fonction pour effacer les détails stockés dans le localStorage
*/
function deleteLocalStorageData(){
    localStorage.removeItem('cart');
    localStorage.removeItem('chosenProductID');
    localStorage.removeItem('orderResponse');
    localStorage.removeItem('productsCount');
};


/*
fonction pour créer une page de confirmation de commande
*/
function createOrderConfirmationPage(){
    // pour afficher orderId dans la page de confirmation
    document.getElementById("order-id").innerText="Id de commande : " + orderConfirmationDetails.orderId;
    // pour afficher contact dans la page de confirmation
    document.getElementById("first-name").innerText="Prénom : " + orderConfirmationDetails.contact.firstName;
    document.getElementById("surname").innerText="Nom : " + orderConfirmationDetails.contact.lastName;
    document.getElementById("city").innerText="Ville : " + orderConfirmationDetails.contact.city;
    document.getElementById("address").innerText="Adresse : " + orderConfirmationDetails.contact.address;
    document.getElementById("email").innerText="E-mail : " + orderConfirmationDetails.contact.email;

    //
    const productsRows=document.getElementById("products-rows");
    for(let index in orderConfirmationDetails.products){
        const productRow=document.createElement("tr");
        productsRows.appendChild(productRow);

        const productName=document.createElement("td");
        productName.scope="row";
        productName.innerText=orderConfirmationDetails.products[index].name;
        productRow.appendChild(productName);

        const productQuantity=document.createElement("td");
        productQuantity.scope="row";
        productQuantity.innerText=orderConfirmationDetails.products[index].quantity;
        productRow.appendChild(productQuantity);

        const productTotalPrice=document.createElement("td");
        productTotalPrice.scope="row";
        productTotalPrice.innerText=orderConfirmationDetails.products[index].totalPrice;
        productRow.appendChild(productTotalPrice);
    };

    //
    document.getElementById("total-sum").innerText = orderConfirmationDetails.totalSum + "  \u20AC";
};

createOrderConfirmationDetails();