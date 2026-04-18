const social_toggle=document.getElementById("social_toggle");
social_toggle.innerHTML=`
<button id="toggleBtn">
<i class="fa-solid fa-angle-up"></i>
</button>

<div class="social-icons" id="socialIcons">
    <a href="#" class="soc fb"><i class="fa-brands fa-facebook-f"></i></a>
    <a href="#" class="soc x"><i class="fa-brands fa-x-twitter"></i></a>
    <a href="#" class="soc ig"><i class="fa-brands fa-instagram"></i></a>
    <a href="#" class="soc li"><i class="fa-brands fa-linkedin-in"></i></a>
    <a href="#" class="soc yt"><i class="fa-brands fa-youtube"></i></a>
</div>
`;
const toggleBtn = document.getElementById("toggleBtn");
const socialIcons = document.getElementById("socialIcons");

  toggleBtn.addEventListener("click", () => {
    socialIcons.classList.toggle("active");

    // Change icon (optional UX improvement)
    toggleBtn.innerHTML = socialIcons.classList.contains("active")
      ? '<i class="fa-solid fa-angle-down"></i>'
      : '<i class="fa-solid fa-angle-up"></i>';
  });