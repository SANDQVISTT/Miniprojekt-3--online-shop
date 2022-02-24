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
        
            
            bodyEl.appendChild(divs)

            console.log(array[i])
            console.log(divs)

        }
    })
}