function orderNow() {
    alert("Thank you for choosing Mahru Tea Cafe! ☕ Your order feature will be added soon.");
}

// Scroll animation trigger
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-up').forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) { el.style.opacity = 1; el.style.transform = 'translateY(0)' }
    });
});
