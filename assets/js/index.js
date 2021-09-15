const listProduct=[
    {
      id: 1, 
      name: "Produit 1",
      price: 20,
      description: "My best product",
      imgUrl: "/assets/images/oak_1.jpg"  
    },
    {
        id: 2, 
        name: "Produit 2",
        price: 20,
        description: "My best product 2",
        imgUrl: "/assets/images/oak_2.jpg"
      },
      {
        id: 3, 
        name: "Produit 3",
        price: 20,
        description: "My best product 3",
        imgUrl: "/assets/images/oak_3.jpg" 
      },
      {
        id: 4, 
        name: "Produit 4",
        price: 20,
        description: "My best product 4",
        imgUrl: "/assets/images/oak_4.jpg"  
      },
      {
        id: 5, 
        name: "Produit 5",
        price: 20,
        description: "My best product 5",
        imgUrl: "/assets/images/oak_5.jpg"  
      },
      {
        id: 6, 
        name: "Produit 6",
        price: 20,
        description: "My best product 6"  
      },  
];
//creation de container de liste des produits
const containerProduct=document.getElementById("list-product");

/* creation du lien qui englobe un produit */
const linkProduct=document.createElement("a");
linkProduct.classList.add('col-12', 'col-sm-6', 'col-md-4', 'mb-3');
linkProduct.href="/views/pages de produit/page_de_produit-1cross_table.html";

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
imgCardImageTop.src=listProduct[0].imgUrl;
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
h2CardTitle.innerText=listProduct[0].description;

// creation de l'enfants de elements div card body
divCardBody.appendChild(h2CardTitle);

//creation de element p card-text
const pCardText=document.createElement("p");
pCardText.classList.add("card-text");
pCardText.innerText=listProduct[0].price +"&euro;";

// creation de l'enfants de elements div card body
divCardBody.appendChild(pCardText);

