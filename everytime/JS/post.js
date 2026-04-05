document.addEventListener("DOMContentLoaded", () => {
  const writeCollapsed = document.getElementById("write-collapsed");
  const writeExpanded = document.getElementById("write-expanded");

  const questionCheck = document.getElementById("questionCheck");
  const infoBox = document.getElementById("questionInfoBox");

  if (writeCollapsed && writeExpanded) {
    writeCollapsed.addEventListener("click", () => {
      writeCollapsed.classList.add("hidden");
      writeExpanded.classList.remove("hidden");
    });
  }

  if (questionCheck && infoBox) {
    questionCheck.addEventListener("change", function () {
      if (this.checked) {
        infoBox.classList.remove("hidden");
      } else {
        infoBox.classList.add("hidden");
      }
    });
  }
});
