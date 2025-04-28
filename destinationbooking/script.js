// Form validation for booking form
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]');
    const email = this.querySelector('input[type="email"]');
    const people = this.querySelector('input[type="number"]');
    const destination = this.querySelector('select');

    if (name.value.trim() === "" || email.value.trim() === "" || people.value.trim() === "" || destination.value.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.value.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    alert("Thanks for booking your trip!");
});
