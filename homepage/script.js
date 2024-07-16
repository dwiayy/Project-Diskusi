// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('nav ul li h3');
    const content = document.querySelector('.container');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const section = event.target.textContent.toLowerCase();
            loadContent(section);
        });
    });




    

});
