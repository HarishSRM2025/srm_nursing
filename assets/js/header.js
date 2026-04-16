const topBar=document.getElementById('topBar');
const topMenu=document.getElementById("navbar");

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
    <li><a href="index.html" class="active">Home</a></li>
    <!-- ADMINISTRATION -->
    <li>
      <a href="#">Administration <i class="fa-solid fa-chevron-down chevron"></i></a>
      <div class="dropdown">
        <a href="#"><i class="fa-solid fa-sitemap"></i> Organization Chart</a>
        <a href="#"><i class="fa-solid fa-scale-balanced"></i> Statutory Bodies</a>
        <a href="codeofconduct.html"><i class="fa-solid fa-file-lines"></i> Code of Conduct</a>
      </div>
    </li>
    <!-- ACADEMICS -->
    <li>
      <a href="./academics.html">Academics <i class="fa-solid fa-chevron-down chevron"></i></a>
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
      <a href="#">Facilities <i class="fa-solid fa-chevron-down chevron"></i></a>
        <div class="dropdown">
            <div class="submenu-item">
                <a href='#'>
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
    <li><a href="#">Research</a></li>
    <li><a href="#">Committees</a></li>
    <li><a href="#">Placement</a></li>
    <li><a href="#">Associations</a></li>
    <li><a href="#">News & Events</a></li>
  </ul>
  <div class="hamburger" onclick="toggleMobileNav()">
    <span></span><span></span><span></span>
  </div>`;