<!-- Side Menu -->
<div class="head_side_menu" id="head_sideMenu">
  <h2>Select a class</h2>
  <a class="head_menu_option" id="menu_class_11">
    <div class="head_menu_title">Class 11 - Science</div>
    <div class="head_menu_subtitle">Boards + Competitive Exams</div>
  </a>
  <a href="https://c41c.github.io/app/e/class12/" class="head_menu_option">
    <div class="head_menu_title">Class 12 - Science</div>
    <div class="head_menu_subtitle">Boards + Competitive Exams</div>
  </a>
</div>


 // Close confirmation box when clicking outside the section
 document.addEventListener("click", (event) => {
   const section = document.getElementById("class11_physics_chap");
   const confirmBox = document.getElementById("confirmContainer");
   
   // If confirm box is visible and click is outside both section and confirm box
   if (
     confirmBox.style.display === "flex" &&
     !section.contains(event.target) &&
     !confirmBox.contains(event.target)
   ) {
     confirmBox.style.display = "none";
     selectedCode = null;
     selectedIndex = null;
   }
 });