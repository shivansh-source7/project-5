
    document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const userNameInput = document.getElementById("user-name");
    const requestAssistanceBtn = document.getElementById("request-assistance-btn");
  
    // Handle Request Assistance Button Click
    requestAssistanceBtn.addEventListener("click", () => {
      const userName = userNameInput.value.trim();
      if (userName === "") {
        alert("Please enter your name!");
      } else {
        console.log(`Name: ${userName}`);
        alert(`Hello, ${userName}! Your request has been submitted.`);
      }
    });
  });
  
// JavaScript to handle view switching
document.addEventListener("DOMContentLoaded", () => {
    const customerView = document.getElementById("customerView");
    const mechanicView = document.getElementById("mechanicView");
    const billView = document.getElementById("billView");
    const adminView= document.getElementById("adminView")
    // Get navigation links
    const navLinks = document.querySelectorAll("nav a");
  
    // Event listener for the Mechanic View link
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
  
        if (link.textContent.trim() === "Customer View") {
          // Show Customer View
          customerView.style.display = "block";
          mechanicView.style.display = "none";
          billView.style.display = "none";
          adminView.style.display="none";
        } else if (link.textContent.trim() === "Mechanic View") {
          // Show Mechanic View
          customerView.style.display = "none";
          mechanicView.style.display = "block";
          billView.style.display = "none";
          adminView.style.display="none";
        } else if (link.textContent.trim() === "Bill View") {
          // Show Bill View
          customerView.style.display = "none";
          mechanicView.style.display = "none";
          billView.style.display = "block";
          adminView.style.display="none";
        }else if (link.textContent.trim() === "Admin View") {
          // Show Mechanic View
          customerView.style.display = "none";
          mechanicView.style.display = "none";
          billView.style.display = "none";
          adminView.style.display="block";

        }
        // Highlight the active link
        navLinks.forEach((nav) => nav.classList.remove("active"));
        link.classList.add("active");
      
      });
    });
  });


// JavaScript Code
document.addEventListener('DOMContentLoaded', () => {
    const issueButtons = document.querySelectorAll('.issue-btn');
    const locationInput = document.getElementById('location');
    const currentLocationBtn = document.getElementById('currentLocationBtn');
    const breakdownForm = document.getElementById('breakdownForm');
  
    // Add click event for issue buttons
    issueButtons.forEach((button) => {
      button.addEventListener('click', () => {
        issueButtons.forEach((btn) => btn.classList.remove('selected'));
        button.classList.add('selected');
      });
    });
  
    // Use current location (Dummy functionality)
    currentLocationBtn.addEventListener('click', () => {
      locationInput.value = "Using your current location...";
      setTimeout(() => {
        locationInput.value = "Near acharya institute front gate"; // Simulate fetched location
      }, 2000);
    });
  
    // Handle form submission
    breakdownForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const selectedIssue = document.querySelector('.issue-btn.selected');
      const location = locationInput.value.trim();
      const description = document.getElementById('description').value.trim();
  
      if (!location || !selectedIssue) {
        alert('Please fill out all required fields.');
        return;
      }
  
      // Simulate request submission
      alert(`Request submitted for ${selectedIssue.textContent.trim()} at ${location}.\nDetails: ${description || 'N/A'}`);
      breakdownForm.reset();
      issueButtons.forEach((btn) => btn.classList.remove('selected'));
    });
  });


  