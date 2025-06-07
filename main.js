// --------------------- Admin Signup ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const adminSignupForm = document.getElementById("adminSignupForm");
  const studentSignupForm = document.getElementById("studentSignupForm");
  const adminLoginForm = document.getElementById("adminLoginForm");
  const studentLoginForm = document.getElementById("studentLoginForm");

  if (adminSignupForm) {
    adminSignupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("adminSignupUsername").value;
      const password = document.getElementById("adminSignupPassword").value;

      localStorage.setItem("admin_" + username, password);
      alert("Admin registered successfully!");
      window.location.href = "admin_login.html";
    });
  }

  // --------------------- Student Signup ---------------------
  if (studentSignupForm) {
    studentSignupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("studentSignupUsername").value;
      const password = document.getElementById("studentSignupPassword").value;

      localStorage.setItem("student_" + username, password);
      alert("Student registered successfully!");
      window.location.href = "student_login.html";
    });
  }

  // --------------------- Admin Login ---------------------
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("adminLoginUsername").value;
      const password = document.getElementById("adminLoginPassword").value;

      const storedPassword = localStorage.getItem("admin_" + username);
      if (storedPassword === password) {
        alert("Admin Login successful!");
        sessionStorage.setItem("loggedInAdmin", username);
        window.location.href = "admin_dashboard.html";
      } else {
        alert("Invalid username or password!");
      }
    });
  }

  // --------------------- Student Login ---------------------
  if (studentLoginForm) {
    studentLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("studentLoginUsername").value;
      const password = document.getElementById("studentLoginPassword").value;

      const storedPassword = localStorage.getItem("student_" + username);
      if (storedPassword === password) {
        alert("Student Login successful!");
        sessionStorage.setItem("loggedInStudent", username);
        window.location.href = "student_dashboard.html";
      } else {
        alert("Invalid username or password!");
      }
    });
  }
});
console.log("Library Management System loaded.");

