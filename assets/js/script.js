function toggleMobileNav(){

const nav = document.getElementById("mobileNav");
const overlay = document.getElementById("mobileOverlay");

nav.classList.toggle("open");
overlay.classList.toggle("open");

}

function toggleSubmenu(e){

e.preventDefault();

const parent = e.target.closest(".mobile-group");

parent.classList.toggle("open");

}

function setActive(element) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  element.classList.add("active");
}

function toggleReadMore(button) {
  const container = button.previousElementSibling;
  if (container && container.classList.contains('leader-expanded-content')) {
    const isExpanded = container.classList.toggle('expanded');
    button.classList.toggle('active');
    
    if (isExpanded) {
      button.innerHTML = `Read Less <i class="fa-solid fa-chevron-up"></i>`;
    } else {
      button.innerHTML = `Read More <i class="fa-solid fa-chevron-down"></i>`;
      // Smoothly scroll back to the top of the leader card on collapse
      const card = button.closest('.leader-card');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}