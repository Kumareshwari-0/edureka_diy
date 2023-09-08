const dropdown = document.querySelector('select');

dropdown.addEventListener('change', (e) => {
  console.log(e.target.value);
});

const nameInput = document.getElementById("name1");

  nameInput.addEventListener("input", () => {
    if (nameInput.value === "") {
      alert("Name cannot be null");
    }
  });