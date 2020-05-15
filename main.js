var app = new Vue({
    el: '#app',
    data: {
        product: 'socks',
        image: './vmSocks-green-onWhite.jpg',
        inStock: true,
        cart: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
    
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ]
    }
})
