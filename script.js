// Sample project data
let projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "web-development",
    date: "2023-08-1",
    description:
      "Personal portfolio website built with HTML CSS and Tailwind CSS and Javascript. Features responsive design, project showcase, and contact functionality.",
    image: { icon: "laptop-code", color: "#0d9488" },
    url: "https://mohit-panaliya.github.io",
    tags: ["HTML","CSS","tailwindCSS", "portfolio", "responsive"],
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "web-development",
    date: "2023-08-20",
    description:
      "Full-featured e-commerce platform built with WordPress and WooCommerce. Includes product management, payment integration, and customer accounts.",
    image: { icon: "shopping", color: "#6366f1" },
    url: "",
    tags: ["wordpress", "woocommerce", "e-commerce", "php"],
  },
  {
    id: 3,
    title: "Task App",
    category: "web-development",
    date: "2023-06-10",
    description:
      "CRUD application built with Next.js and MongoDB. Features user authentication, data management, and real-time updates.",
    image: { icon: "mobile", color: "#ec4899" },
    url: "",
    tags: ["nextjs", "mongodb", "crud", "HTML","CSS","TailwindCSS"],
  },
  {
    id: 4,
    title: "SAP HANA Views",
    category: "data-analysis",
    date: "2024-02-05",
    description:
      "Created Attribute, Analytical And Calculation View According to Business Login and Plot it into Visualizer in Chart Format",
    image: { icon: "chart", color: "#f59e0b" },
    url: "",
    tags: ["SAP HANA", "dashboard", "Views", "visualization", "Calculation View"],
  },
  {
    id: 5,
    title: "Data Cleaning & Analysis",
    category: "data-analysis",
    date: "2023-6-15",
    description:
      "SAP HANA data cleaning and analysis project using Calculation Views using Different Join Union Rank Nodes. Transformed raw datasets into actionable insights.",
    image: { icon: "chart", color: "#10b981" },
    url: "",
    tags: ["SAP HANA", "Calculation View", "Join", "data analysis", "Union", "Rank Node"],
  },
  {
    id: 6,
    title: "Database Migration",
    category: "data-analysis",
    date: "2023-12-15",
    description:
      "Worked on Oracle DB PLSQL Database to SAP HANA DB Migration. Worked on lots of Stored Procedures and triggers with SQLScript",
    image: { icon: "chart", color: "#10b981" },
    url: "",
    tags: ["SAP HANA", "Calculation View", "data analysis", "stored Procedure","SQLScript", "PLSQL" ,"OracleDB"],
  },
  {
    id: 7,
    title: "Frappe Framework & ERPNext Installation",
    category: "erp-development",
    date: "2024-03-20",
    description:
      "Installation of Frappe Bench in Fresh Installed Ubuntu System. Installed Frappe and ERPNext",
    image: { icon: "cogs", color: "#8b5cf6" },
    url: "",
    tags: ["frappe", "erpnext", "Ubuntu", "Installation"],
  },
  {
    id: 8,
    title: "Understand ERPNext",
    category: "erp-development",
    date: "2024-01-30",
    description:
      "Understand Frappe BAsics and ERPNExt Cycles and Explored about different Modules available in ERPNext",
    image: { icon: "users", color: "#ef4444" },
    url: "",
    tags: ["erpnext", "hr-management", "frappe", "business-process"],
  },
];
const technicalSkills = [
  {
    title: "Operating Syatem",
    icon: "fas fa-laptop",
    items: ["Linux", "Windows"],
  },
  {
    title: "Web Development",
    icon: "fas fa-code",
    items: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "React",
      "Next.js",
      "Express.js",
      "MongoDB",
      "WordPress",
    ],
  },
  {
    title: "Web Scraping",
    icon: "fas fa-scissors",
    items: ["Beautiful Soup 4"],
  },
  {
    title: "Web Testing / Web Automation",
    icon: "fas fa-magic",
    items: ["Selenium", "SeleniumBase"],
  },
  {
    title: "Data Analysis",
    icon: "fas fa-chart-bar",
    items: ["ETL", "SQLScript", "Excel", "SAP HANA", "SAP BW"],
  },
  {
    title: "ERP Development",
    icon: "fas fa-cogs",
    items: ["Frappe Framework", "ERPNext", "Python"],
  },
  {
    title: "Other Tools",
    icon: "fas fa-tools",
    items: ["Git/GitHub", "API Integration", "Agile"],
  },
];

// DOM Elements
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const backToTopButton = document.getElementById("back-to-top");
const projectsGrid = document.getElementById("projects-grid");
const noResults = document.getElementById("no-results");
const projectModal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.getElementById("close-modal");

const projectSearch = document.getElementById("project-search");
const projectSort = document.getElementById("project-sort");
const filterBtns = document.querySelectorAll(".filter-btn");
const contactForm = document.getElementById("contact-form");

// Mobile Menu Toggle
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Back to Top Button
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible");
    backToTopButton.classList.add("opacity-100", "visible");
  } else {
    backToTopButton.classList.add("opacity-0", "invisible");
    backToTopButton.classList.remove("opacity-100", "visible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Navigation Active State
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-nav");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-nav");
    }
  });
});
function renderTechnicalSkills() {
  const container = document.getElementById("technical-skills");

  let html = `
    <h3 class="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  `;

  technicalSkills.forEach((skill) => {
    const itemsHtml = skill.items
      .map(
        (item) =>
          `<span class="skill-pill bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">${item}</span>`
      )
      .join("");

    html += `
      <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div class="flex items-center mb-4">
          <div class="bg-primary/10 p-3 rounded-full mr-3">
            <i class="${skill.icon} text-primary"></i>
          </div>
          <h4 class="text-lg font-medium">${skill.title}</h4>
        </div>
        <div class="flex flex-wrap gap-2">${itemsHtml}</div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// Run after DOM loads
document.addEventListener("DOMContentLoaded", renderTechnicalSkills);

// Projects Functionality
function renderProjects(projectsToRender) {
  projectsGrid.innerHTML = "";

  if (projectsToRender.length === 0) {
    noResults.classList.remove("hidden");
  } else {
    noResults.classList.add("hidden");

    projectsToRender.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.className =
        "project-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all";
      projectCard.setAttribute("data-category", project.category);

      let iconClass;
      switch (project.image.icon) {
        case "laptop-code":
          iconClass = "fas fa-laptop-code";
          break;
        case "mobile":
          iconClass = "fas fa-mobile-alt";
          break;
        case "shopping":
          iconClass = "fas fa-shopping-cart";
          break;
        case "blog":
          iconClass = "fas fa-blog";
          break;
        case "chart":
          iconClass = "fas fa-chart-line";
          break;
        case "palette":
          iconClass = "fas fa-palette";
          break;
        case "cogs":
          iconClass = "fas fa-cogs";
          break;
        case "users":
          iconClass = "fas fa-users";
          break;
        default:
          iconClass = "fas fa-laptop-code";
      }

      projectCard.innerHTML = `
                            <div class="h-48 flex items-center justify-center" style="background-color: ${project.image.color}">
                                <i class="${iconClass} text-white text-5xl"></i>
                            </div>
                            <div class="p-6">
                                <div class="flex justify-between items-start mb-3">
                                    <h3 class="text-xl font-bold">${project.title}</h3>
                                    <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">${project.category}</span>
                                </div>
                                <p class="text-gray-600 mb-4 line-clamp-2">${project.description}</p>
                                <button class="view-project-btn text-primary hover:text-primary/80 font-medium flex items-center" data-id="${project.id}">
                                    View Details
                                    <i class="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                        `;

      projectsGrid.appendChild(projectCard);
    });

    // Add event listeners to view project buttons
    document.querySelectorAll(".view-project-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const projectId = parseInt(btn.getAttribute("data-id"));
        const project = projects.find((p) => p.id === projectId);

        if (project) {
          showProjectModal(project);
        }
      });
    });
  }
}

function showProjectModal(project) {
  let iconClass;
  switch (project.image.icon) {
    case "laptop-code":
      iconClass = "fas fa-laptop-code";
      break;
    case "mobile":
      iconClass = "fas fa-mobile-alt";
      break;
    case "shopping":
      iconClass = "fas fa-shopping-cart";
      break;
    case "blog":
      iconClass = "fas fa-blog";
      break;
    case "chart":
      iconClass = "fas fa-chart-line";
      break;
    case "palette":
      iconClass = "fas fa-palette";
      break;
    case "cogs":
      iconClass = "fas fa-cogs";
      break;
    case "users":
      iconClass = "fas fa-users";
      break;
    default:
      iconClass = "fas fa-laptop-code";
  }

  const tagsHtml = project.tags
    .map(
      (tag) =>
        `<span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">${tag}</span>`
    )
    .join("");

  modalContent.innerHTML = `
                    <div class="flex flex-col md:flex-row">
                        <div class="md:w-2/5 h-48 md:h-auto flex items-center justify-center" style="background-color: ${
                          project.image.color
                        }">
                            <i class="${iconClass} text-white text-5xl"></i>
                        </div>
                        <div class="md:w-3/5 p-6">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-2xl font-bold">${
                                  project.title
                                }</h3>
                                <span class="bg-primary/10 text-primary px-2 py-1 rounded-full">${
                                  project.category
                                }</span>
                            </div>
                            <p class="text-gray-600 mb-4">${
                              project.description
                            }</p>
                            ${
                              project.url
                                ? `
                            <div class="mb-4">
                                <h4 class="font-medium mb-2">Project URL</h4>
                                <a href="${project.url}" target="_blank" class="text-primary hover:underline">${project.url}</a>
                            </div>
                            `
                                : ""
                            }
                            
                            <div>
                                <h4 class="font-medium mb-2">Technologies</h4>
                                <div class="flex flex-wrap gap-2">
                                    ${tagsHtml}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

  projectModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

closeModal.addEventListener("click", () => {
  projectModal.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// Filter projects
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    // Update active button
    filterBtns.forEach((b) => {
      b.classList.remove("bg-primary", "text-white");
      b.classList.add("bg-white", "hover:bg-primary/10", "text-dark");
    });
    btn.classList.remove("bg-white", "hover:bg-primary/10", "text-dark");
    btn.classList.add("bg-primary", "text-white");

    // Filter projects
    let filteredProjects = projects;
    if (filter !== "all") {
      filteredProjects = projects.filter(
        (project) => project.category === filter
      );
    }

    // Apply search and sort
    filteredProjects = applySearchAndSort(filteredProjects);

    renderProjects(filteredProjects);
  });
});

// Search projects
projectSearch.addEventListener("input", () => {
  const activeFilter = document
    .querySelector(".filter-btn.bg-primary")
    .getAttribute("data-filter");
  let filteredProjects = projects;

  if (activeFilter !== "all") {
    filteredProjects = projects.filter(
      (project) => project.category === activeFilter
    );
  }

  filteredProjects = applySearchAndSort(filteredProjects);
  renderProjects(filteredProjects);
});

// Sort projects
projectSort.addEventListener("change", () => {
  const activeFilter = document
    .querySelector(".filter-btn.bg-primary")
    .getAttribute("data-filter");
  let filteredProjects = projects;

  if (activeFilter !== "all") {
    filteredProjects = projects.filter(
      (project) => project.category === activeFilter
    );
  }

  filteredProjects = applySearchAndSort(filteredProjects);
  renderProjects(filteredProjects);
});

function applySearchAndSort(projectsList) {
  // Apply search
  const searchTerm = projectSearch.value.toLowerCase().trim();
  if (searchTerm) {
    projectsList = projectsList.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  }

  // Apply sort
  const sortOption = projectSort.value;
  switch (sortOption) {
    case "newest":
      projectsList.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case "oldest":
      projectsList.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "name-asc":
      projectsList.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "name-desc":
      projectsList.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }

  return projectsList;
}

// Contact Form Submission with AJAX
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);

  try {
    const response = await fetch("send_email.php", {
      method: "POST",
      body: formData,
    });
    const result = await response.text();

    if (result.trim() === "success") {
      document.getElementById("form-response").innerHTML =
        '<p class="text-green-600">✅ Your message has been sent successfully!</p>';
      contactForm.reset();
    } else {
      document.getElementById("form-response").innerHTML =
        '<p class="text-red-600">❌ Sending an Email from Github is not working Please Send Via Email or visit </p>  <a href="https://mohit-panaliya.gtree.in">mohit-panaliya.gtree.in </a>';
    }
  } catch (error) {
    document.getElementById("form-response").innerHTML =
      '<p class="text-red-600">⚠️ Error connecting to server.</p>';
  }
});

// Resume download function
function downloadResume() {
  // In a real application, this would download the actual PDF resume
  const link = document.createElement("a");
  link.href = "Mohit_Panaliya_Resume.pdf"; // path to your resume file
  link.download = "Mohit_Panaliya_Resume.pdf"; // suggested filename
  link.target = "_blank"; // open in new tab (optional)
  link.click();
}

// Initialize projects
renderProjects(projects);
