const topBar=document.getElementById('topBar');
const topMenu=document.getElementById("navbar");
const mobileNav=document.getElementById("mobileNav");
const myFooter=document.getElementById("myFooter");
const idName=['home','admin','academic','facility','research','committee','placement','association','news'];
topBar.innerHTML=`<div class="tb-left">
    <span><i class="fa-solid fa-phone-volume"></i>&nbsp;+91 431-2516609</span>
    <a href="#"><i class="fa-regular fa-envelope"></i>&nbsp;<span>srm_nursing@gmail.com</span></a>
    <span><i class="fa-regular fa-clock"></i>&nbsp;Mon–Sat 9:00 AM – 5:00 PM</span>
  </div>
  <div class="tb-right">
    <a href="#" class="tb-pill"><i class="fa-solid fa-user"></i>Student Portal</a>
    <a href="#" class="tb-pill"><i class="fa-solid fa-lock"></i>Staff Login</a>
    <a href="#" class="tb-pill">NAAC</a>
    <a href="#" class="tb-apply"><i class="fa-solid fa-arrow-right"></i> Apply Now</a>
  </div>`;
topMenu.innerHTML=`
 <a href="index.html" class="nav-logo">
      <img src="./assets/images/logo.png" alt="Logo">
  </a>
  <ul class="nav-links">
    <li><a href="index.html" onclick="setActive(this)" id=${idName[0]} class='tab'>Home</a></li>
    <!-- ADMINISTRATION -->
    <li>
      <a href="#" onclick="setActive(this)" id=${idName[1]} class='tab'>Administration <i class="fa-solid fa-chevron-down chevron"></i></a>
      <div class="dropdown">
        <a href="#"><i class="fa-solid fa-sitemap"></i> Organization Chart</a>
        <a href="#"><i class="fa-solid fa-scale-balanced"></i> Statutory Bodies</a>
        <a href="codeofconduct.html"><i class="fa-solid fa-file-lines"></i> Code of Conduct</a>
      </div>
    </li>
    <!-- ACADEMICS -->
    <li>
      <a href="./academics.html" onclick="setActive(this)" id=${idName[2]} class='tab'>Academics <i class="fa-solid fa-chevron-down chevron"></i></a>
      <div class="dropdown">
        <div class="submenu-item">
            <a href='#'>
                <div>
                    <span><i class="fa-solid fa-building-columns"></i>Departments </span>
                    <span><i class="fa-solid fa-chevron-right sub-chevron"></i></span>
                </div>
            </a>
            <!-- LEVEL 3 -->
            <div class="sub-dropdown">
                <a href="#"><i class="fa-solid fa-stethoscope"></i> Fundamentals of Nursing</a>
                <a href="#"><i class="fa-solid fa-user-doctor"></i> Adult Health Nursing</a>
                <a href="#"><i class="fa-solid fa-house-chimney-medical"></i> Community Health Nursing</a>
                <a href="#"><i class="fa-solid fa-baby"></i> Child Health Nursing</a>
                <a href="#"><i class="fa-solid fa-brain"></i> Mental Health Nursing</a>
                <a href="#"><i class="fa-solid fa-venus"></i> OBG Nursing</a>
            </div>
        </div>
        <a href="#"><i class="fa-solid fa-user-check"></i> Admission</a>
        <a href="#"><i class="fa-solid fa-pen-to-square"></i> Application</a>
        <a href="#"><i class="fa-solid fa-graduation-cap"></i> Courses Offered</a>
        <a href="#"><i class="fa-solid fa-calendar-days"></i> Academic Calendar</a>
        <a href="#"><i class="fa-solid fa-award"></i> Awards</a>
      </div>
    </li>

    <!-- FACILITIES -->
    <li>
      <a href="./facilities.html" onclick="setActive(this)" id=${idName[3]} class='tab'>Facilities <i class="fa-solid fa-chevron-down chevron"></i></a>
        <div class="dropdown">
            <div class="submenu-item">
                <a href='./clinical_facilities.html'>
                    <div>
                        <span><i class="fa-solid fa-building-columns"></i>Clinical Facilities</span>
                        <span><i class="fa-solid fa-chevron-right sub-chevron"></i></span>
                    </div>
                </a>
                <!-- LEVEL 3 -->
                <div class="sub-dropdown">
                   <a href="#"><i class="fa-solid fa-hospital"></i> Hospital Facilities</a>
                    <a href="#"><i class="fa-solid fa-house-medical"></i> Community Settings</a>
                    <a href="#"><i class="fa-solid fa-kit-medical"></i> Outreach Camp</a>
                </div>
            </div>
        <a href="#"><i class="fa-solid fa-chalkboard"></i> Class Room</a>
        <a href="#"><i class="fa-solid fa-building"></i> Multi Purpose Hall</a>
        <a href="#"><i class="fa-solid fa-book"></i> Library</a>
        <a href="#"><i class="fa-solid fa-flask"></i> Laboratory</a>
        <a href="#"><i class="fa-solid fa-futbol"></i> Sports</a>
        <a href="#"><i class="fa-solid fa-music"></i> Cultural</a>
        <a href="#"><i class="fa-solid fa-bus"></i> Transport</a>
        <a href="#"><i class="fa-solid fa-bed"></i> Hostel</a>
        <a href="#"><i class="fa-solid fa-utensils"></i> Canteen</a>
      </div>
    </li>
    <li><a class='tab' href="./research.html" onclick="setActive(this)" id=${idName[4]}>Research</a></li>
    <li><a class='tab' href="./committee.html" onclick="setActive(this)" id=${idName[5]}>Committees</a></li>
    <li><a class='tab' href="./placement.html" onclick="setActive(this)" id=${idName[6]}>Placement</a></li>
    <li><a class='tab' href="./association.html" onclick="setActive(this)" id=${idName[7]}>Associations</a></li>
    <li>
      <a href="#" onclick="setActive(this)" id=${idName[8]} class='tab'>News & Events <i class="fa-solid fa-chevron-down chevron"></i></a>
        <div class="dropdown">
            <div class="submenu-item">
                <a href='#'>
                    <div>
                        <span><i class="fa-solid fa-building-columns"></i>News Letter</span>
                        <span><i class="fa-solid fa-chevron-right sub-chevron"></i></span>
                    </div>
                </a>
                <!-- LEVEL 3 -->
                <div class="sub-dropdown">
                   <a href="./assets/pdf/JUL24-DEC24.pdf" target='_blank'><i class='fa-regular fa-file-pdf'></i>July 2024 - December 2024</a>
                  <a href="./assets/pdf/JAN24-JUN24.pdf" target='_blank'><i class='fa-regular fa-file-pdf'></i>January 2024 - June 2024</a>
                  <a href="./assets/pdf/JAN23-JUN23.pdf" target='_blank'><i class='fa-regular fa-file-pdf'></i>January 2023 - June 2023</a>
                  <a href="./assets/pdf/JAN20-DEC21.pdf" target='_blank'><i class='fa-regular fa-file-pdf'></i>January 2020 - December 2021</a>
                  <a href="./assets/pdf/JAN19-DEC20.pdf" target='_blank'><i class='fa-regular fa-file-pdf'></i>January 2019 - December 2020</a>
                </div>
            </div>
      </div>
    </li>
    
  </ul>
  <div class="hamburger" onclick="toggleMobileNav()">
    <span></span><span></span><span></span>
  </div>`;
mobileNav.innerHTML=`
    <a href="./index.html"><i class="fa-solid fa-house"></i> Home</a>

  <!-- ADMINISTRATION -->
  <div class="mobile-group">
    <a href="#" onclick="toggleSubmenu(event)">
      Administration <i class="fa-solid fa-chevron-down chevron"></i>
    </a>
    <div class="dropdown">
      <a href="#"><i class="fa-solid fa-sitemap"></i> Organization Chart</a>
      <a href="#"><i class="fa-solid fa-scale-balanced"></i> Statutory Bodies</a>
      <a href="./codeofconduct.html"><i class="fa-solid fa-file-lines"></i> Code of Conduct</a>
    </div>
  </div>

  <!-- ACADEMICS -->
  <div class="mobile-group">
    <a href="./academics.html" onclick="toggleSubmenu(event)">
      Academics <i class="fa-solid fa-chevron-down chevron"></i>
    </a>
    <div class="dropdown">
      <a href="#"><i class="fa-solid fa-user-check"></i> Admission</a>
      <a href="#"><i class="fa-solid fa-pen-to-square"></i> Application</a>
      <a href="#"><i class="fa-solid fa-graduation-cap"></i> Courses Offered</a>
      <a href="#"><i class="fa-solid fa-calendar-days"></i> Academic Calendar</a>
      <a href="#"><i class="fa-solid fa-award"></i> Awards</a>
    </div>
  </div>

  <!-- CLINICAL -->
  <div class="mobile-group">
    <a href="./clinical_facilities.html" onclick="toggleSubmenu(event)">
      Clinical Facilities <i class="fa-solid fa-chevron-down chevron"></i>
    </a>
    <div class="dropdown">
      <a href="#"><i class="fa-solid fa-hospital"></i> Hospital Facilities</a>
      <a href="#"><i class="fa-solid fa-house-medical"></i> Community Settings</a>
      <a href="#"><i class="fa-solid fa-kit-medical"></i> Outreach Camp</a>
    </div>
  </div>

  <!-- DIRECT LINKS -->
  <a href="./research.html"><i class="fa-solid fa-flask"></i> Research</a>
  <a href="./committee.html"><i class="fa-solid fa-users"></i> Committees</a>
  <a href="./placement.html"><i class="fa-solid fa-briefcase"></i> Placement</a>
  <a href="#"><i class="fa-solid fa-calendar"></i> Events</a>

  <a href="#" class="mobile-apply">
    <i class="fa-solid fa-arrow-right"></i> Apply Now 2025–26
  </a>
`;
myFooter.innerHTML=`
  <!-- Alert bar matching screenshot -->
  <div class="footer-alert">
    <p><i class="fa-solid fa-bell"></i> Admissions Open for 2025 — Limited Seats Available! &nbsp;·&nbsp; TNNMC Approved &nbsp;·&nbsp; Green Campus Certified</p>
    <a href="#" class="fa-apbtn"><i class="fa-solid fa-arrow-right"></i> Apply Now</a>
  </div>

  <!-- Main footer columns matching screenshot -->
  <div class="footer-main">
    <!-- Brand -->
    <div class="footer-brand">
      <a href="#" class="footer-logo-row">
        <img src="./assets/images/logo.png" alt="">
      </a>
      <p>To prepare students of our Nursing College to become empathetic and compassionate health care providers and transform the lives of people in our ecosystem.</p>
      <div class="f-social">
        <a class="f-soc" href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a class="f-soc" href="#"><i class="fa-brands fa-x-twitter"></i></a>
        <a class="f-soc" href="#"><i class="fa-brands fa-instagram"></i></a>
        <a class="f-soc" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        <a class="f-soc" href="#"><i class="fa-brands fa-youtube"></i></a>
      </div>
    </div>

    <!-- Quick Links -->
    <div class="footer-col">
      <div class="fcol-title">Quick Links</div>
      <ul>
        <li><a href="#"><i class="fa-solid fa-chevron-right"></i> Home</a></li>
        <li><a href="#"><i class="fa-solid fa-chevron-right"></i> About Us</a></li>
        <li><a href="#"><i class="fa-solid fa-chevron-right"></i> Departments</a></li>
        <li><a href="#"><i class="fa-solid fa-chevron-right"></i> Events</a></li>
        <li><a href="#"><i class="fa-solid fa-chevron-right"></i> Gallery</a></li>
        <li><a href="#"><i class="fa-solid fa-chevron-right"></i> Contact</a></li>
      </ul>
    </div>

    <!-- Nursing Depts -->
    <div class="footer-col">
      <div class="fcol-title">Nursing Depts.</div>
      <ul>
        <li><a href="#"><i class="fa-solid fa-chevron-right"></i> Department of Nursing</a></li>
        <li><a href="#"><i class="fa-solid fa-chevron-right"></i> Midwifery & Obstetrics</a></li>
        <li><a href="#"><i class="fa-solid fa-chevron-right"></i> Community Nursing</a></li>
        <li><a href="#"><i class="fa-solid fa-chevron-right"></i> B.Sc Nursing</a></li>
        <li><a href="#"><i class="fa-solid fa-chevron-right"></i> Recruitment & Admissions</a></li>
      </ul>
    </div>

    <!-- Contact -->
    <div class="footer-col">
      <div class="fcol-title">Contact</div>
      <ul class="fcont-list">
        <li><div class="fci"><i class="fa-solid fa-location-dot"></i></div><span>Irungalur, Tiruchirappalli, TN</span></li>
        <li><div class="fci"><i class="fa-solid fa-phone"></i></div><a href="#">0431-2516609</a></li>
        <li><div class="fci"><i class="fa-solid fa-envelope"></i></div><a href="#">srm_nurs</span></a></li>
        <li><div class="fci"><i class="fa-brands fa-facebook-f"></i></div><a href="#">Facebook Page</a></li>
        <li><div class="fci"><i class="fa-brands fa-instagram"></i></div><a href="#">Instagram</a></li>
      </ul>
    </div>
  </div>

   <div class="footer-bottom">
    <p>© 2025 SRM Trichy College of Nursing. All Rights Reserved.</p>
    
    <div class="fbot-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Use</a>
      <a href="#">Sitemap</a>
    </div>
</div>`;
const currenturl=window.location.pathname;
if(currenturl.includes(".html")){
  const currentPage = currenturl.split("/").pop();
  document.querySelectorAll(".tab").forEach(tab => {
    
    const link = tab.getAttribute("href");

    if (link.includes(currentPage)) {
      tab.classList.add("active");
    }
  });
}
else{
  const homeId=document.querySelector("#home");
  homeId.classList.add('active');
}