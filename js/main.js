

const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Keyboard', price: 200 },
    { id: 3, title: 'Mouse', price: 100 },
    { id: 4, title: 'Gamepad', price: 87 },
    
];


const renderProduct = (title, price, img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjw-6Mc1f6VYw9hGNwuwthHgbs0mMYiph2w&usqp=CAU" ) => {
    return `<div class="product-item">
    <img src="${img}" alt="image" class="product-img">
                <h3 class="product-title">${title}</h3>
                <p class="product-price">${price}</p>
            </div>`
};

const render = productsList => {
    const productsElements = productsList.map(item => renderProduct(item.title, item.price, item.img));
    document.querySelector('.products').innerHTML = productsElements;
};

render(products);