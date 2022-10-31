const panelCards = document.querySelectorAll(".panel");

panelCards.forEach((panel) => {
  panel.addEventListener("click", () => {
    panelCards.forEach((panelToUpdate) => {
      panelToUpdate.classList.remove("active");
    });

    panel.classList.add("active");
  });
});
