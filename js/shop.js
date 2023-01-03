const items = [
    {
        id: 1,
        name: 'Manchester United Home kit 21/22',
        price: 49.99,
        image: 'Images/ManuHomeKit.jpg',
        description: 'This is the home kit worn by the 21/22 Manchester United squad'
    },
    {
        id: 2,
        name: 'Manchester United Away kit 21/22',
        price: 59.99,
        image: 'Images/ManuAwayKit.jpg',
        description: 'This is the home kit worn by the 21/22 Manchester United squad'
    },
    {
        id: 3,
        name: 'Manchester United Third kit 21/22',
        price: 39.99,
        image: 'Images/ManuAltKit.jpg',
        description: 'This is the home kit worn by the 21/22 Manchester United squad'
    },
    {
        id: 4,
        name: 'David Beckham Match worn boots & Kit',
        price: 749.99,
        image: 'Images/beckham.png',
        description: 'David Beckham Match worn boots & kit, vs Panathinaikos, UCL 2000'
    },
    {
        id: 5,
        name: 'Manchester United Away kit 1993',
        price: 39.99,
        image: 'Images/1993ManuKit.jpg',
        description: 'This is the home kit worn by the 21/22 Manchester United squad'
    },
    {
        id: 6,
        name: 'Manchester United 1994 Away kit',
        price: 109.99,
        image: 'Images/1994AwayKit.jpg',
        description: 'This is the home kit worn by the 21/22 Manchester United squad'
    },
    
  ];
  
  let cart = [];
  
  const createItemElement = item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.setAttribute("class" , "col_detail")
  
    const nameElement = document.createElement('h3');
    nameElement.textContent = item.name;
    nameElement.setAttribute("class" , "col_detail")
  
    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: €${item.price}`;
    priceElement.setAttribute("class" , "col_detail")

    const imageElement = document.createElement('img');
    imageElement.src = item.image;
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = item.description;
  
    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.setAttribute("class" , "btn btn-primary addtocart")
    addToCartButton.setAttribute("id", "addtocart ")
    addToCartButton.addEventListener('click', addToCart, () => {

      cart.push(item);
    });
    function addToCart() {
      var total=localStorage.getItem('checkout');
      total++;
      localStorage.setItem('checkout',total);
      document.querySelector('#checkout').innerHTML=total;
  };
  
    itemElement.appendChild(nameElement);
    itemElement.appendChild(imageElement);
    itemElement.appendChild(priceElement);
    itemElement.appendChild(descriptionElement);
    itemElement.appendChild(addToCartButton);
  
    return itemElement;
  };
  
const addItemsToPage = () => {
    const allItemsElement = document.getElementById('items');
  
    items.forEach(item => {
      const itemElement = createItemElement(item);
      allItemsElement.appendChild(itemElement);
 
    });
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    addItemsToPage();
  });

  