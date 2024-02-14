document.addEventListener("DOMContentLoaded", () => {
  const evaluationInputs = document.querySelectorAll(".transition");
  const evaluationScreen = document.getElementById("evaluation");
  const thankYouScreen = document.getElementById("thanks");
  const submitButton = document.querySelector(".submit-btn");
  const finalMessage = document.getElementById("final-message");

  let selectedRating;

  // Add click event listeners to evaluation inputs
  evaluationInputs.forEach((item) => {
    item.addEventListener("click", (event) => {
      const selectedValue = event.target.innerHTML;
      selectRating(selectedValue);
      highlightSelectedRating(event.target);
      // Change background color of the clicked element
      event.target.style.backgroundColor = "var(--orange)";
    });
  });

  // Add click event listener to submit button
  submitButton.addEventListener("click", () => {
    if (selectedRating) {
      evaluationScreen.classList.add("invisible");
      thankYouScreen.classList.remove("invisible");
      finalMessage.textContent = `You selected ${selectedRating} out of 5`;
    }
  });

  // Function to handle rating selection
  function selectRating(value) {
    selectedRating = value;
  }

  // Function to highlight selected rating
  function highlightSelectedRating(selectedElement) {
    evaluationInputs.forEach((item) => {
      item.style.backgroundColor = ""; // Reset background color for all inputs
    });
  }
});
