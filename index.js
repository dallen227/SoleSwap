// Add JavaScript below
document.addEventListener('DOMContentLoaded', function() {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    document.querySelector('.add-to-cart').addEventListener('click', function() {
        const product = {
            name: 'Air Jordan 4',
            price: 250,
            description: 'Iconic design with premium leather and mesh upper, plus Air cushioning for comfort.',
            imageUrl: 'https://via.placeholder.com/400x400' 
        };


        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart)); 


        alert('Item added to your cart!');
    });

    document.querySelector('.buy-now').addEventListener('click', function() {

        window.location.href = '/checkout';  
    });
});

