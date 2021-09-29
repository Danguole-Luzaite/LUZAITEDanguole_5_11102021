const listProduct=[];

/* 
cette function me permets de creer de liste de produits
*/
function createProduct(listProduct){
  //creation de container de liste des produits
  const containerProduct=document.getElementById("list-product");

  for (index in listProduct){
    /* creation du lien qui englobe un produit */
    const linkProduct=document.createElement("a");
    linkProduct.classList.add('col-12', 'col-sm-6', 'col-md-4', 'mb-3');
    //linkProduct.href= "/frontend/views/pages de produit/page_de_produit-1cross_table.html" + "?id=" + listProduct._id;
    linkProduct.setAttribute("href", "/frontend/views/pages de produit/page_de_produit-1cross_table.html" + "?id=" + listProduct[index]._id);

    // creation de l'enfants de elements div list product
    containerProduct.appendChild(linkProduct);

    // creation du block produit
    const divCard=document.createElement("div");
    divCard.classList.add("card");

    // creation de l'enfants de elements a
    linkProduct.appendChild(divCard);

    // creation de l'image
    const imgCardImageTop=document.createElement("img");
    imgCardImageTop.classList.add("card-image-top");
    imgCardImageTop.src=listProduct[index].imageUrl;
    imgCardImageTop.alt="Produit 1";

    //creation de l'enfants de element div
    divCard.appendChild(imgCardImageTop);

    //creation de element card body
    const divCardBody=document.createElement("div");
    divCardBody.classList.add("card-body");

    // creation de l'enfants de elements div card
    divCard.appendChild(divCardBody);

    //creation de element h2 card-title
    const h2CardTitle=document.createElement("h2");
    h2CardTitle.classList.add("card-title");
    h2CardTitle.innerText=listProduct[index].name;

    // creation de l'enfants de elements div card body
    divCardBody.appendChild(h2CardTitle);

    //creation de element p card-text
    const pCardText=document.createElement("p");
    pCardText.classList.add("card-text");
    pCardText.innerText=listProduct[index].price + "  \u20AC";

    // creation de l'enfants de elements div card body
    divCardBody.appendChild(pCardText);
  }
}

/* 
cette fonction envoie la liste des produits du serveur
*/
function getListProducts() {
  fetch("http://localhost:3000/api/furniture")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log("liste de produits : ", value);
    createProduct(value);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}
getListProducts();