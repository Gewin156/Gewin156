document.addEventListener('scroll' ,() => {
const backTOTOP =document.querySelector('.back-to-top');
if (window.scrollY > 300) {
    backTOTOP.computedStyleMap.display ='block';
} else {
    backTOTOP.style .display = 'none';
}
} );
// Example: Existing functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is ready!');

    // Add more functionality below
});

// Search bar functionality
document.getElementById('searchBar').addEventListener('keyup', function () {
    const searchQuery = this.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const productDescription = product.querySelector('p').textContent.toLowerCase();

        if (productName.includes(searchQuery) || productDescription.includes(searchQuery)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
// Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
