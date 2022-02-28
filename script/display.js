//importerar fetch functionen ifrån fetch.js
import { fetchUrl } from "./fetch.js"

console.log(fetchUrl())

//exporterar till main.js
export async function itemDisplay(){
    await fetchUrl().then((data) =>{
        let array = data.products;
        let arrayLength = array.length;
        
        for(let i = 0; i<arrayLength; i++){
            
            const divs = document.createElement('div');
            
            divs.classList.add('products');
            
            const bodyEl = document.createElement('div')

            document.body.appendChild(bodyEl)
            

            //name
            const name = document.createElement('div')
            name.innerText = data.products[i].name;
            divs.appendChild(name);

            //price
            const price = document.createElement('div')
            price.innerText = data.products[i].price + 'kr';
            divs.appendChild(price);

            //quantity
            //tror typ inte denna behövs visa men vet inte
            const quantity = document.createElement('div')
            quantity.innerText = data.products[i].quantity + ' ' + 'stycken i lager';
            divs.appendChild(quantity);

            //img
            const photo = document.createElement('img')
            photo.src = data.products[i].photo;
            divs.appendChild(photo);
          
            // knappar
           
            const knapp1 = document.createElement('button');
            const knapp2 = document.createElement('button');
            knapp1.innerText = "Add to cart";
            knapp2.innerText = "delete from cart"
            divs.appendChild(knapp1);
            divs.appendChild(knapp2);



            bodyEl.appendChild(divs)
            

            console.log(array[i])
            console.log(divs)
            
        }
    })
}






// denna är ifrån stackoverflow men har den som inspo bara
/* 
class Item{
    constructor(name,price,quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
     
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = []
    }
    
    addItem(item){
      this.items.push(item)
    }
  }
  
  let items = [
    new Item("+","-",20),
    new Item("svarta sneakers","1200kr",10),
    new Item("Axelrämväska","399kr",15),
    new Item("Versace Klocka","12000kr",5),
    new Item("North Face Mössa","349kr",40)
  ]
  
  let basket = new ShoppingCart()
  
  let market = document.getElementById("market")
  let s = items.map((item,id)=>"<button onClick=addItem("+id+")>Add "+item.name+"</button>").join("")
  market.innerHTML = s
  
  function addItem(id) {
    basket.addItem(items[id])
    showBasket()
  } 
  
 /*  function showBasket() {
    let cart = document.getElementById("items")
    let s = basket.items.map((item,id)=>"<span style='margin: 5px'>"+item.name+"</span>").join("")
    cart.innerHTML = s
  }
   */ 