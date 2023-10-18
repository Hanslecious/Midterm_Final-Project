


function validate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const nameRegex = /^[a-zA-Z\- ]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

  let isValid = true;

  try {
   
      if (name.length === 0) {
        throw new Error("Please enter a name.");
      } else if (!nameRegex.test(name)) {
        throw new Error("Please enter a valid name.");
      }

    // console.log(j);

    if (email.length === 0) {
        throw new Error("Email address is required");
      } else if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address.");
      }

      if (password.length === 0) {
        throw new Error("Password is required");
      } else if (!passwordRegex.test(password)) {
        throw new Error("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one numeric character.");
      }

  } catch (error) {
    alert(error.message);
    isValid = false;
  } finally {
  //  alert('Be more Cautious next time')
  }

  if (isValid) {
    window.location.href = "index2.html";
    alert("submitted Successfully");
  }

  return isValid;
}






