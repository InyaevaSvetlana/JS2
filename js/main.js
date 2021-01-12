

const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Keyboard', price: 200 },
    { id: 3, title: 'Mouse', price: 100 },
    { id: 4, title: 'Gamepad', price: 87 },
];


const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
            </div>`
};

const render = productsList => {
    const productsElements = productsList.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productsElements;
};

render(products);