const lockSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" class="chapName_lock_icon" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
  </svg>
`;
 
 const confirmContainer = document.getElementById("confirmContainer");
 const sendBtn = document.getElementById("sendBtn");
 let selectedCode = null;
 let selectedIndex = null;

 
 
 // Helper: find which key contains this code
 function findKeyForCode(code) {
   for (const [key, codes] of Object.entries(student_Data.unlocked)) {
     if (codes.includes(code)) {
       return key;
     }
   }
   return null;
 }
 
 // Helper: format time difference
 function formatRelativeTime(unixSeconds) {
   const now = Math.floor(Date.now() / 1000); // current UNIX timestamp in seconds
   const keyTime = parseInt(unixSeconds, 10);
   const diff = keyTime - now; // positive = future, negative = past
   
   const absDiff = Math.abs(diff);
   let value, unit;
   
   if (absDiff < 3600) {
     value = Math.floor(absDiff / 60);
     unit = "H"; // minutes → show as hours if you prefer
     if (value === 0) value = 1; // minimum 1
   } else if (absDiff < 86400) {
     value = Math.floor(absDiff / 3600);
     unit = "H";
   } else {
     value = Math.floor(absDiff / 86400);
     unit = "D";
   }
   
   if (diff >= 0) {
     // Future → remaining
     return `${value} ${unit}`;
   } else {
     // Past → elapsed
     return `${value} ${unit} ago`;
   }
 }
 
 // Loop through chapters
 document.querySelectorAll(".chapName_chapter_box").forEach(box => {
   const code = box.getAttribute("chap_code");
   const index = box.getAttribute("chap_index");
   const subject = box.closest(".chapName_container").getAttribute("data_subject"); // 👈
   const key = findKeyForCode(code);



function hexToString(hex) {
  let str = '';
  for (let i = 0; i < hex.length; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return str;
}
const whereis = new URLSearchParams(window.location.search);
const incriptedata = whereis.get("inc");
let chapter = 'chapter0';
if (index) {
  try {
    index = hexToString(index);
  } catch (e) {
    console.error("Hex decode failed:", e);
  }
}

   if (!key) {
     // No key → locked
     box.classList.add("chapName_locked");
     box.insertAdjacentHTML("beforeend", lockSVG);
     
     box.addEventListener("click", () => {
       selectedCode = code;
       selectedIndex = index;
       sendBtn.textContent = `Unlock Chapter ${index}`;
       confirmContainer.style.display = "flex";
     });
   } else {
     const now = Math.floor(Date.now() / 1000);
     const keyTime = parseInt(key, 10);
     
     if (keyTime < now) {
       // ⛔ Time passed → lock chapter
       box.classList.add("chapName_locked");
       box.insertAdjacentHTML("beforeend", lockSVG);
       
       const relativeTime = formatRelativeTime(key);
       box.insertAdjacentHTML("beforeend", `<div class="chapName_chapter_time">${relativeTime}</div>`);
       
       box.addEventListener("click", () => {
         selectedCode = code;
         selectedIndex = index;
         sendBtn.textContent = `Unlock Chapter ${index}`;
         confirmContainer.style.display = "flex";
       });
     } else {
       // ✅ Time not passed → unlocked
       const relativeTime = formatRelativeTime(key);
       box.insertAdjacentHTML("beforeend", `<div class="chapName_chapter_time">${relativeTime}</div>`);
       
       box.addEventListener("click", () => {
         /*
         window.location.href = `https://xxxxxvxxvxxx.github.io/letscode/${subject}.html?chapter=chapter${index}`;
         */
         window.location.href = `https://c41c.github.io/app/e/${subject}/?inc=${index}`;
       });
     }
   }
 });
 
 // Send button handler
 sendBtn.addEventListener("click", handleSend);
 
 function handleSend() {
   if (!selectedCode) return;
   sendBtn.innerHTML = `Request sending... <span class="chapName_spinner"></span>`;
   fetch(student_Data.webhook, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ code: selectedCode })
     })
     .then(() => {
       sendBtn.textContent = "Open Bot and check your inbox.✅️";
       sendBtn.removeEventListener("click", handleSend);
       sendBtn.addEventListener("click", () => {
         confirmContainer.style.display = "none";
       }, { once: true });
     })
     .catch(() => {
       sendBtn.textContent = "Error!";
     });
 }
 
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
