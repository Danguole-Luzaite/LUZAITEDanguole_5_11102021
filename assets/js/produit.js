var chosenProduct={};
var currentProductInCard=[];

/* 
cette function me permets de créer les details sur un produit
*/ 
function createProductPage(chosenProduct) {
 //creation de container de la page de produit   
 const productPage=document.getElementById("product-page");

  //création de l'élément div qui englobe les détails du produit
  const productBlock=document.createElement("div");
  productBlock.classList.add('row', 'container__product-details', 'rounded', 'shadow', 'm-5', 'p-3');

  // creation de l'enfants de elements div  id - product page
  productPage.appendChild(productBlock);

  // creation du block image
  const imageBlock=document.createElement("div");
  imageBlock.classList.add("col-5");

  // creation de l'enfants de elements div productBlock
  productBlock.appendChild(imageBlock);

  // creation de l'image de produit
  const productImage=document.createElement("img");
  productImage.classList.add('product-image', 'product-image-chair');
  productImage.src=chosenProduct.imageUrl;
  productImage.alt=chosenProduct.name;

  //creation de l'enfants de element imageBlock
  imageBlock.appendChild(productImage);

  //creation de element div productDescriptionBlock
  const productDescriptionBlock=document.createElement("div");
  productDescriptionBlock.classList.add("col-7");

  //creation de l'enfants de element div productBlock
  productBlock.appendChild(productDescriptionBlock);

  //creation de element div productNameBlock
  const productNameBlock=document.createElement("div");
  productNameBlock.classList.add('row', 'product-name');

  //creation de l'enfants de element div productDescriptionBlock
  productDescriptionBlock.appendChild(productNameBlock);

  //creation de element h5 productName
  const productName=document.createElement("h5");
  productName.classList.add('p-3', 'product-name-width');
  productName.innerText=chosenProduct.name;

  //creation de l'enfants de element div productNameBlock
  productNameBlock.appendChild(productName);

  //creation de element span productPrice
  const productPrice=document.createElement("span");
  productPrice.classList.add('p-3', 'product-price', 'product-name-width');
  productPrice.innerText=chosenProduct.price + "  \u20AC";

  //creation de l'enfants de element div productNameBlock
  productNameBlock.appendChild(productPrice);

  //creation de element div productDescriptionBox
  const productDescriptionBox=document.createElement("div");
  productDescriptionBox.classList.add('product-description', 'pt-4', 'pb-3');

  //creation de l'enfants de element div productDescriptionBlock
  productDescriptionBlock.appendChild(productDescriptionBox);

  //creation de element p productDescriptionText 
  const productDescriptionText=document.createElement("p");
  productDescriptionText.innerText=chosenProduct.description;

  //creation de l'enfants de element div productDescriptionBox
  productDescriptionBox.appendChild(productDescriptionText);
  
  // cet div contient de statut de produit et categorie
  const productStatusAndCategory=document.createElement("div");
  productStatusAndCategory.classList.add('row');
  productDescriptionBlock.appendChild(productStatusAndCategory);

  //creation de element div customizationMenuBlock pour personnalisation de produit, menu déroulant
  const customizationMenuBlock=document.createElement("div");
  customizationMenuBlock.classList.add('dropdown', 'col-6', 'col-sm-6');
  
  //creation de l'enfants de element div productDescriptionBlock
  productStatusAndCategory.appendChild(customizationMenuBlock);

  //creation de element button dropdownToggleButton
  const  dropdownToggleButton=document.createElement("button");
  dropdownToggleButton.classList.add('btn', 'btn-default', 'dropdown-toggle');
  dropdownToggleButton.type="button";
  dropdownToggleButton.setAttribute("data-toggle", "dropdown");
  dropdownToggleButton.innerText="Sélectionnez le type de vernis...";

  //creation de l'enfants de element div customizationMenuBlock
  customizationMenuBlock.appendChild(dropdownToggleButton);

  //creation de element span buttonCaret
  const buttonCaret=document.createElement("span");
  buttonCaret.classList.add("caret");

  //creation de l'enfants de element button dropdownToggleButton
  dropdownToggleButton.appendChild(buttonCaret);

  //creation de element ul dropdownMenuList
  const dropdownMenuList=document.createElement("ul");
  dropdownMenuList.classList.add("dropdown-menu");

  
  //creation de l'enfants de element div customizationMenuBlock
  customizationMenuBlock.appendChild(dropdownMenuList);

  //une boucle pour obtenir une liste des éléments du menu déroulant (vernis) pour la personnalisation du produit choisi
  for (index in chosenProduct.varnish){
      //creation de element li dropdownMenuElement
      const dropdownMenuElement=document.createElement("li");
      dropdownMenuList.appendChild(dropdownMenuElement);

      //creation de element a dropdownMenuElementLink
      const dropdownMenuElementLink=document.createElement("a");
      dropdownMenuElementLink.classList.add("pl-2");
      dropdownMenuElementLink.href="#";
      dropdownMenuElementLink.innerText=chosenProduct.varnish[index];
      dropdownMenuElement.appendChild(dropdownMenuElementLink);
  }

  //creation de élément div statusProductCard pour afficher le statut de produit dans le panier
  const statusProductCard=document.createElement("div");
  statusProductCard.classList.add('col-6', 'col-sm-6', 'text-danger', 'pt-2');
  statusProductCard.innerText="Produit déjà dans le panier";
  productStatusAndCategory.appendChild(statusProductCard);

  //creation de élément div block, productButtonsBlock, qui contient les boutons "Retourner" et "Ajouter au panier"
  const productButtonsBlock=document.createElement("div");
  productButtonsBlock.classList.add('row', 'mt-4');
  //creation de l'enfants de element div productDescriptionBlock
  productDescriptionBlock.appendChild(productButtonsBlock);

  //creation de élément div productButtonsColumn, qui contient le bouton "Retourner"
  const productButtonsColumn=document.createElement("div");
  productButtonsColumn.classList.add("col");
  //creation de l'enfants de element div productButtonsBlock
  productButtonsBlock.appendChild(productButtonsColumn);

  //creation de élément a productButtonReturn
  const productButtonReturn=document.createElement("a");
  productButtonReturn.href="/frontend/index.html";
  productButtonReturn.classList.add('btn', 'btn-outline-secondary', 'btn-width');
  productButtonReturn.role="button";
  productButtonReturn.innerText="Retourner";
  //creation de l'enfants de element div productButtonsColumn
  productButtonsColumn.appendChild(productButtonReturn);

  //creation de élément div productButtonsColumnAjouter, qui contient le bouton "Ajouter au panier"
  const productButtonsColumnAjouter=document.createElement("div");
  productButtonsColumnAjouter.classList.add("col");
  //creation de l'enfants de element div productButtonsBlock
  productButtonsBlock.appendChild(productButtonsColumnAjouter);

  //creation de élément button productButtonAjouter
  const productButtonAjouter=document.createElement("button");
  productButtonAjouter.classList.add('btn', 'btn-outline-primary', 'btn-width');
  productButtonAjouter.innerText="Ajouter au panier";
  productButtonAjouter.addEventListener('click', function(e){
    addProductToCart(chosenProduct);
    e.preventDefault();
   });

  //creation de l'enfants de element div productButtonsColumnAjouter
  productButtonsColumnAjouter.appendChild(productButtonAjouter);
}

/*
cette fonction envoie le produit choisi depuis le serveur
*/
function getChosenProduct(productId) {
    fetch("http://localhost:3000/api/furniture/" + productId)
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
      console.log("produit choisi : ", value);
      chosenProduct=value;
      createProductPage(value);
    })
    .catch(function(err) {
      // Une erreur est survenue
    });
}

/*
cette fonction permet de récupérer l'identifiant du paramètre de l'URL pour renvoyer l'élément avec l'identifiant correspondant
*/
function getIdParameterFromUrl(){
    
    const queryString = window.location.search;
    console.log(queryString);
    
    const urlParams = new URLSearchParams(queryString);
    const paramId = new String(urlParams.get('id'));
    console.log(paramId);
    
    getChosenProduct(paramId);
}

getIdParameterFromUrl();

/*
 le code de click pour ajouter au panier 
 */
 function addProductToCart(productToAdd){

    //permet de recuperer les produits qui sont dans le panier
    currentProductInCard=JSON.parse(localStorage.getItem('card'));
    if (currentProductInCard==null){
        currentProductInCard=[];
        currentProductInCard.push(productToAdd);
        localStorage.setItem('card', JSON.stringify(currentProductInCard));
    }else{
        currentProductInCard.push(productToAdd);
        localStorage.setItem('card', JSON.stringify(currentProductInCard));
    }
    
    console.log("le produit a afficher dans le panier est ", productToAdd);
 }