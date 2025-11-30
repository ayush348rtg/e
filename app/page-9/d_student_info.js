
  // Populate profile info
  document.getElementById('std_profileName').textContent = student_Data.name;
  document.getElementById('std_profileClass').textContent = student_Data.classLevel;
  
  // Avatar
  const std_avatarImg = document.querySelector('.std_avatar_image');
  std_avatarImg.src = student_Data.gender.toLowerCase() === "female" ?
    "https://ayush348rtg.github.io/e/file/svg-file/girl-person.svg" :
    "https://ayush348rtg.github.io/e/file/svg-file/boy-person.svg";
  
  // Toggle social icons + hide message box
  function std_toggleContact() {
    const container = document.getElementById('std_socialContainer');
    const arrow = document.getElementById('std_arrowIcon');
    const msgBox = document.getElementById('std_messageBox');
    
    container.classList.toggle('std_collapsed');
    arrow.classList.toggle('std_rotated');
    
    if (msgBox.style.display === 'block') {
      msgBox.style.display = 'none';
    }
  }
  
  // Gmail icon click → toggle message box
  document.querySelector('#std_gmail').parentElement.parentElement.addEventListener('click', function(e) {
    e.preventDefault();
    const box = document.getElementById('std_messageBox');
    box.style.display = (box.style.display === 'block') ? 'none' : 'block';
  });
  
  // Send button handler
  document.getElementById('std_sendMessageBtn').addEventListener('click', function() {
    const msg = document.getElementById('std_messageInput').value.trim();
    const status = document.getElementById('std_statusMsg');
    
    if (!msg) {
      status.textContent = "Please enter a message.";
      return;
    }
    
    status.textContent = "Sending...";
    
    fetch(student_Data.webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg })
      })
      .then(() => {
        status.textContent = "Message sent successfully ✅";
        document.getElementById('std_messageInput').value = "";
      })
      .catch(() => {
        status.textContent = "Error sending message ❌";
      });
  });
  // Menu button toggle for showing/hiding ID
document.querySelector('.std_menu_btn').addEventListener('click', function() {
  const idBox = document.getElementById('std_idBox');
  
  if (idBox.style.display === 'block') {
    idBox.style.display = 'none'; // hide if visible
  } else {
    idBox.textContent = "ID: " + student_Data.id; // set ID text
    idBox.style.display = 'block'; // show if hidden
  }
});
