let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} añadido al carrito!`);
}

function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    if (cartItemsDiv && cartTotalSpan) {
        cartItemsDiv.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `${item.name} <span>${item.price.toFixed(2)}€</span>`;
            cartItemsDiv.appendChild(itemDiv);
            total += item.price;
        });
        cartTotalSpan.textContent = `${total.toFixed(2)}€`;
    }
}

function submitOrder(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const className = document.getElementById('class').value;
    if (cart.length === 0) {
        alert('El carrito está vacío!');
        return;
    }
    alert(`Pedido confirmado!\nNombre: ${name}\nClase: ${className}\nTotal: ${document.getElementById('cart-total').textContent}`);
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('checkout-form').reset();
    displayCart();
}
