const products = [
    {id: 1, title: 'Notebook', price: 20000, img: 'https://cdn.svyaznoy.ru/upload/iblock/e4e/1014685090.jpg'},
    {id: 2, title: 'Mouse', price: 1500, img: 'https://media.ldlc.com/r1600/ld/products/00/00/91/29/LD0000912998_2.jpg'},
    {id: 3, title: 'Keyboard', price: 5000, img: 'https://c.pxhere.com/photos/02/42/keyboard_black_notebook-720687.jpg!d'},
    {id: 4, title: 'Gamepad', price: 4500, img: 'https://img.mvideo.ru/Pdb/50039432b1.jpg'},
];

const renderProduct = (title, price, img = '') => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <img src=${img} alt=${title}>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const renderProducts = (list) => {
    const productList = list.map(function (product) {
        return renderProduct(product.title, product.price, product.img);
    });
    console.log(productList);
    document.querySelector('.products').innerHTML = productList.join(' ');

};

renderProducts(products);
