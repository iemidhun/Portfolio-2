/* --- PROJECT DATABASE (Mock DB) --- */
const projectData = [
    {
        id: 1,
        title: "Corporate Dashboard",
        category: "web",
        image: "C:\Users\SreeDigitalMedia\Documents\midhun\photfolio 2/Ecommerce-KPI-dashboard.png",
        description: "A high-performance admin dashboard built with React and D3.js."
    },
    {
        id: 2,
        title: "Fitness Tracker App",
        category: "app",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
        description: "Mobile application for tracking workouts and nutrition."
    },
    {
        id: 3,
        title: "Neon Brand Identity",
        category: "design",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
        description: "Complete visual identity and logo design for a tech startup."
    },
    {
        id: 4,
        title: "E-Commerce Platform",
        category: "web",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        description: "Scalable online store with Stripe payment integration."
    }
];

// Function to Render Projects from "Database"
const portfolioContainer = document.getElementById('portfolio-container');

function renderProjects(projects) {
    portfolioContainer.innerHTML = ''; // Clear current content
    
    projects.forEach(project => {
        const div = document.createElement('div');
        div.classList.add('portfolio-item');
        div.setAttribute('data-category', project.category);
        
        div.innerHTML = `
            <div class="item-wrap">
                <img src="${project.image}" alt="${project.title}">
                <div class="item-overlay">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            </div>
        `;
        portfolioContainer.appendChild(div);
    });
    
    // Re-initialize hover effects for new elements
    const newItems = document.querySelectorAll('.portfolio-item');
    // You might need to re-attach the filter logic here if it breaks
}

// Load data on start
document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projectData);
    // ... your other init functions
});