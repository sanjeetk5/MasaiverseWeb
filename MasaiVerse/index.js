document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    registerUser();
  });

  function registerUser() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const place = document.getElementById("place").value;
    const batch = document.getElementById("batch").value;
    const profession = document.getElementById("profession").value;

    const registrationData = {
      name: name,
      age: age,
      place: place,
      batch: batch,
      profession: profession
    };

    fetch("http://localhost:9090/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    })
    .then(response => response.json())
    .then(data => {
      alert("Successfully registered!");
      window.location.href= "index.html";
    })
    .catch(error => console.error("Error:", error));
  }