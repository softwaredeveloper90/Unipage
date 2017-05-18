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

var link = document.getElementById('add-to-basket');
if (link) {
    link.onclick = function(e) {
        e.preventDefault();
        window.alert('caught a click! Yeah!');
        var name = link.getAttribute('data-course-name');
        var id = link.getAttribute('data-course-id');
        var price = link.getAttribute('data-course-price');


        var basket = getBasketIfExists();

        var course = {name: name, id: id, qty: 1, price: price};
        basket.push(course);
        localStorage.setItem('basket', JSON.stringify(basket));
        displayBasketCount();
    }
}
    
function displayBasketCount() {
    var basket = getBasketIfExists();
    var basketcount = document.getElementById('basket-count');
    basketcount.innerText = basket.length;
}

displayBasketCount();

function writeCoursesToPage() {
    var element = document.getElementById('basket-courses');
    if(!element) {
        return;
    }
    var basket = getBasketIfExists();
    var template = '<div class="basket-item">{{ name }} ({{ id }}) {{ price }}</div>';
    var html = "";
    basket.forEach(function(course) {
        course.name = course.name || "unknown";
        html += Mustache.render(template, course);
    })
    element.innerHTML = html;
}

writeCoursesToPage();




