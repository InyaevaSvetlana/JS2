
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
let getData = (url, cb) => {
    let xhr = new XMLHttpRequest();
    // window.ActiveXObject -> new ActiveXObject();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                console.log('error');
            } else {
                cb(xhr.responseText);
            }
        }
    }
};

class Product {
    constructor(product, img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjw-6Mc1f6VYw9hGNwuwthHgbs0mMYiph2w&usqp=CAU') {
        let { product_name, price = 0, id_product } = product;
        this.title = product_name;
        this.img = img;
        this.price = price;
        this.id = id_product;
        this.rendered = false
    }

    render() {
        this.rendered = true;
        return `<div class="product-item">
                  <img src="${this.img}" alt="${this.title}">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price}</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`
    }

}

class ProductsList {
    constructor(container = '.products') {
        this.data = [];
        this.products = [];
        this.container = document.querySelector(container);
        this._fetchData()
        .then(() => this._render());
    }

    init() {}

    calcSum() {
        return this.products.reduce((accum, item) => accum += item.price, 0);
    }
    _fetchData() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                this.data = data;
                for (let dataEl of this.data) {
                    const product = new Product(dataEl);
                    this.products.push(product);
                }
            })
    }

    _render() {
        for (let product of this.products) {
            if (product.rendered) {
                continue;
            }

            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

const list = new ProductsList();
console.log(list.calcSum());



class Cart {
    constructor(){

    }
    
     render(){

    }
    addItemToCart(){

    }

    totalCartPrice(){
        let totalPrice = document.querySelector('.cart-list-total'); 
        let sum = 0;
      totalPrice.innerText = `Итого: ${sum} рублей`;
      
    }
    
}

let btnCloseCart = document.querySelector('.cart-delete');
let cartListSection = document.querySelector('.cart-list');
let btnCart = document.querySelector('.btn-cart');
let openBasket = () => {
    cartListSection.style.display = 'block';
}
btnCart.addEventListener('click', openBasket );

let closeBasket = () => {
    cartListSection.style.display = 'none';
}
btnCloseCart.addEventListener('click', closeBasket );

let cart = new Cart();
cart.totalCartPrice();
