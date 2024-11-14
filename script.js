document.getElementById('search-bar').addEventListener('keyup', function(event) {
    const query = event.target.value.toLowerCase();
    const categories = document.querySelectorAll('#categories .category');
    
    categories.forEach(category => {
        const categoryText = category.textContent.toLowerCase();
        category.style.display = categoryText.includes(query) ? 'block' : 'none';
    });
});

document.querySelector('.auth-links a[href="#Upload"]').addEventListener('click', function (event) {
    event.preventDefault(); 
    alert('Upload feature coming soon!'); 
});

document.querySelector('.auth-links a[href="#signup"]').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Sign Up feature coming soon!');
});

document.querySelector('.auth-links a[href="#login"]').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Log In feature coming soon!');
});

const nav = document.querySelector('nav');
const toggleNav = document.createElement('button');
toggleNav.textContent = '☰';
toggleNav.style.display = 'none';
toggleNav.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'none' ? 'inline-flex' : 'none';
});
document.querySelector('header').appendChild(toggleNav);

window.addEventListener('resize', () => {
    if (window.innerWidth <= 600) {
        toggleNav.style.display = 'block';
        nav.style.display = 'none';
    } else {
        toggleNav.style.display = 'none';
        nav.style.display = 'inline-flex';
    }
});

// const categories = document.querySelectorAll('#categories .category');
// categories.forEach(category => {
//     category.addEventListener('click', function() {
//         const categoryName = this.id; 
        
//         alert('Showing recipes for ${categoryName}');
        
//         showModalWithRecipes(categoryName);
//     });
// });

function showModalWithRecipes(categoryName) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Recipes for ${categoryName}</h2>
            <p>List of ${categoryName} recipes will go here.</p>
        </div>`;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.close-button').onclick = function() {
        modal.remove();
    };
}

