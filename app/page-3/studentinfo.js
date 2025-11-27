const profileData = {
        "name": "Ayush",
        "classLevel": "Class 11",
        "gender": "female" // or "female"
    };

    // Populate HTML from JSON
    document.getElementById('profileName').textContent = profileData.name;
    document.getElementById('profileClass').textContent = profileData.classLevel;

    // Avatar element
    const avatarImg = document.querySelector('.avatar-image');

    // Detect gender and set profile image
    if (profileData.gender.toLowerCase() === "female") {
        avatarImg.src = "file/svg-file/girl-person.svg";
    } else {
        avatarImg.src = "file/svg-file/girl-person.svg";
    }

    // Function to handle the accordion toggle
    function toggleContact() {
        const container = document.getElementById('socialContainer');
        const arrow = document.getElementById('arrowIcon');
        
        // Toggles the 'collapsed' class to hide/show the icons smoothly
        container.classList.toggle('collapsed');
        
        // Toggles the 'rotated' class to flip the arrow
        arrow.classList.toggle('rotated');
    }