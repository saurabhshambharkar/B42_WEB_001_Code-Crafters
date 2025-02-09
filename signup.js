

// document.getElementById("createAccountForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form from submitting
    
//     // Get form values
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const repassword = document.getElementById("repassword").value;

//     // Validate password match
//     if (password !== repassword) {
//         alert("Passwords do not match!");
//         return;
//     }

//     // Save user data to localStorage
//     const userData = { name, email, password };
//     localStorage.setItem("user", JSON.stringify(userData));
//     handleSignup(name,email,password)

//     alert("Account created successfully!");
//     // Optionally redirect to another page
//     //window.location.href = "./signin.html";
// });

// async function handleSignup(name,email,password){
    
//     try {
//       console.log("Signing up...");
//       const response = await axios.post("https://sd-project-5-3438.onrender.com/signin", {
//         username,   
//         email,
//         password,
//       });

//       console.log((response.data.message));
//       //alert("Signup successful! Redirecting to login...");
//       //navigate("/login"); // Redirect to login page
//     } catch (err) {
//       console.log("Signup Error:", err.response?.data);
//     }
//   };
