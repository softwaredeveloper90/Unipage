var link = document.getElementById('add-to-basket');
link.onclick = function(e) {
    e.preventDefault();
    window.alert('caught a click! Yeah!');
    var id = link.getAttribute('data-course-id');
    var price = link.getAttribute('data-course-price');
    
    function getBasketIfExists() {
        var stored = localStorage.getItem('basket');
        try{
            basket = JSON.parse(stored);
        } catch (e) {
            basket = [];
        }
        if (basket instanceof Array) {
            return basket;
        } else {
            return [];
        }
        
    }
    var basket = getBasketIfExists();
    
    var course = {id: id, qty: 1, price};
    basket.push(course);
    localStorage.setItem('basket', JSON.stringify(basket));
}

