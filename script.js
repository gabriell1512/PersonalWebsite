// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Blog modal logic
document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const postId = this.getAttribute('href');
        const post = document.querySelector(postId);
        if (post) {
            document.getElementById('blog-modal-body').innerHTML = post.innerHTML;
            document.getElementById('blog-modal').style.display = 'flex';
        }
    });
});
document.querySelector('.blog-modal-close').onclick = function() {
    document.getElementById('blog-modal').style.display = 'none';
};
window.onclick = function(event) {
    const modal = document.getElementById('blog-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Placeholder for future JS features 