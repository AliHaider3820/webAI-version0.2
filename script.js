// Sample data for categories and services
const categories = [
    { 
        id: 1, 
        name: 'Healthcare', 
        icon: 'fas fa-hospital',
        image: 'images/healthcare.jpg',
        bgColor: '#E3F2FD',
        gradient: 'linear-gradient(135deg, #E3F2FD 0%, #90CAF9 100%)',
        iconColor: '#1976D2'
    },
    { 
        id: 2, 
        name: 'Education', 
        icon: 'fas fa-graduation-cap',
        image: 'images/education.jpg',
        bgColor: '#F3E5F5',
        gradient: 'linear-gradient(135deg, #F3E5F5 0%, #CE93D8 100%)',
        iconColor: '#7B1FA2'
    },
    { 
        id: 3, 
        name: 'Transportation', 
        icon: 'fas fa-car',
        image: 'images/transportation.jpg',
        bgColor: '#E8F5E9',
        gradient: 'linear-gradient(135deg, #E8F5E9 0%, #A5D6A7 100%)',
        iconColor: '#388E3C'
    },
    { 
        id: 4, 
        name: 'Food & Dining', 
        icon: 'fas fa-utensils',
        image: 'images/food.jpg',
        bgColor: '#FFF3E0',
        gradient: 'linear-gradient(135deg, #FFF3E0 0%, #FFB74D 100%)',
        iconColor: '#F57C00'
    },
    { 
        id: 5, 
        name: 'Entertainment', 
        icon: 'fas fa-film',
        image: 'images/entertainment.jpg',
        bgColor: '#FCE4EC',
        gradient: 'linear-gradient(135deg, #FCE4EC 0%, #F48FB1 100%)',
        iconColor: '#C2185B'
    },
    { 
        id: 6, 
        name: 'Professional Services', 
        icon: 'fas fa-briefcase',
        image: 'images/professional.jpg',
        bgColor: '#ECEFF1',
        gradient: 'linear-gradient(135deg, #ECEFF1 0%, #B0BEC5 100%)',
        iconColor: '#455A64'
    }
];

const services = [
    { 
        id: 1, 
        name: 'Medical Consultation',
        category: 'Healthcare',
        description: '24/7 online medical consultation services with certified healthcare professionals',
        icon: 'fas fa-stethoscope',
        image: 'images/medical-consultation.jpg',
        rating: 4.8,
        reviews: 128,
        features: ['24/7 Availability', 'Video Consultations', 'Prescription Services'],
        price: 'From $49',
        badge: 'Popular'
    },
    { 
        id: 2, 
        name: 'Online Courses',
        category: 'Education',
        description: 'Access to premium educational content from world-class instructors',
        icon: 'fas fa-laptop',
        image: 'images/online-courses.jpg',
        rating: 4.9,
        reviews: 256,
        features: ['Self-paced Learning', 'Certificate Included', 'Expert Support'],
        price: 'From $29',
        badge: 'Best Seller'
    },
    { 
        id: 3, 
        name: 'Ride Sharing',
        category: 'Transportation',
        description: 'Safe and reliable on-demand transportation services available 24/7',
        icon: 'fas fa-taxi',
        image: 'images/ride-sharing.jpg',
        rating: 4.7,
        reviews: 512,
        features: ['Real-time Tracking', 'Secure Payments', 'Professional Drivers'],
        price: 'From $10',
        badge: 'Trusted'
    },
    { 
        id: 4, 
        name: 'Food Delivery',
        category: 'Food & Dining',
        description: 'Quick and reliable food delivery from your favorite local restaurants',
        icon: 'fas fa-hamburger',
        image: 'images/food-delivery.jpg',
        rating: 4.6,
        reviews: 384,
        features: ['Live Order Tracking', 'No Minimum Order', 'Special Offers'],
        price: 'From $0',
        badge: 'Fast Delivery'
    }
];

// Featured services data
const featuredServices = [
    {
        name: "Home Cleaning",
        description: "Professional home cleaning services",
        rating: 4.8,
        price: "$80/visit",
        image: "images/services/cleaning.png"
    },
    {
        name: "Plumbing",
        description: "Expert plumbing repair and installation",
        rating: 4.7,
        price: "$95/hour",
        image: "images/services/plumbing.png"
    },
    {
        name: "Electrician",
        description: "Licensed electrical services",
        rating: 4.9,
        price: "$90/hour",
        image: "images/services/electrical.png"
    },
    {
        name: "Landscaping",
        description: "Professional garden and lawn care",
        rating: 4.6,
        price: "$75/hour",
        image: "images/services/landscaping.png"
    },
    {
        name: "Interior Design",
        description: "Creative home interior solutions",
        rating: 4.8,
        price: "$150/hour",
        image: "images/services/interior-design.png"
    },
    {
        name: "Home Security",
        description: "Advanced security system installation",
        rating: 4.9,
        price: "$200/system",
        image: "images/services/security.png"
    }
];

// Function to populate categories
function populateCategories() {
    const categoryGrid = document.getElementById('categoryGrid');
    categoryGrid.innerHTML = categories.map(category => `
        <div class="category-card" data-category="${category.name}" 
             style="background: ${category.gradient}">
            <div class="category-image" style="
                background-image: linear-gradient(
                    rgba(0, 0, 0, 0.3),
                    rgba(0, 0, 0, 0.3)
                ),
                url('${category.image}')">
                <div class="category-content">
                    <i class="${category.icon}" style="color: ${category.iconColor}"></i>
                    <h3>${category.name}</h3>
                </div>
            </div>
        </div>
    `).join('');
}

// Function to populate services
function populateServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = services.map(service => `
        <div class="service-card" data-category="${service.category}">
            <div class="service-image" style="background-image: url('${service.image}')">
                ${service.badge ? `<span class="service-badge">${service.badge}</span>` : ''}
            </div>
            <div class="service-content">
                <div class="service-header">
                    <i class="${service.icon}"></i>
                    <h3>${service.name}</h3>
                </div>
                <p class="service-description">${service.description}</p>
                <div class="service-features">
                    ${service.features.map(feature => `
                        <span class="feature-tag"><i class="fas fa-check"></i> ${feature}</span>
                    `).join('')}
                </div>
                <div class="service-footer">
                    <div class="service-rating">
                        <div class="stars">
                            ${Array(Math.floor(service.rating)).fill('<i class="fas fa-star"></i>').join('')}
                            ${service.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                        </div>
                        <span class="rating-number">${service.rating} (${service.reviews})</span>
                    </div>
                    <div class="service-price">
                        <span>${service.price}</span>
                        <button class="book-button">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        // Filter services
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            const serviceName = card.querySelector('h3').textContent.toLowerCase();
            const serviceDesc = card.querySelector('p').textContent.toLowerCase();
            const isVisible = serviceName.includes(searchTerm) || serviceDesc.includes(searchTerm);
            card.style.display = isVisible ? 'block' : 'none';
        });

        // Filter categories
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            const categoryName = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = categoryName.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    hamburgerBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburgerMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburgerMenu.contains(e.target)) {
            hamburgerMenu.classList.remove('active');
        }
    });
});

// Function to toggle side menu visibility
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    if (sideMenu.style.left === '0px') {
        sideMenu.style.left = '-250px';
    } else {
        sideMenu.style.left = '0px';
    }
}

// Function to handle search
function handleSearch(event) {
    event.preventDefault(); // Prevent the default form submission
    const query = document.getElementById('searchInput').value;
    // Implement search functionality here
    console.log('Searching for:', query);
    // Redirect or filter results based on the query
}

// Add event listener to the search form on services.html
const searchForm = document.querySelector('.search-bar form');
if (searchForm) {
    searchForm.addEventListener('submit', handleSearch);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateCategories();
    populateServices();
    setupSearch();

    // Add click handlers for categories
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const serviceCards = document.querySelectorAll('.service-card');
            
            serviceCards.forEach(serviceCard => {
                if (serviceCard.dataset.category === category) {
                    serviceCard.style.display = 'block';
                } else {
                    serviceCard.style.display = 'none';
                }
            });
        });
    });
});
