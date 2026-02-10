(function () {
  const btnNo = document.getElementById("btnNo");
  const btnYes = document.getElementById("btnYes");
  const successMessage = document.getElementById("successMessage");
  const card = document.querySelector(".letter-card");

  const proximityThreshold = 90;
  const movePadding = 16;

  function getRandomPosition() {
    const rect = card.getBoundingClientRect();
    const buttonWidth = btnNo.offsetWidth;
    const buttonHeight = btnNo.offsetHeight;

    const maxX = rect.width - buttonWidth - movePadding * 2;
    const maxY = rect.height - buttonHeight - movePadding * 2;

    const x = movePadding + Math.random() * Math.max(0, maxX);
    const y = movePadding + Math.random() * Math.max(0, maxY);

    return { x, y };
  }

  function handleMouseMove(e) {
    const noRect = btnNo.getBoundingClientRect();
    const centerX = noRect.left + noRect.width / 2;
    const centerY = noRect.top + noRect.height / 2;
    const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

    if (distance < proximityThreshold) {
      btnNo.style.position = "absolute";
      const { x, y } = getRandomPosition();
      btnNo.style.left = `${x}px`;
      btnNo.style.top = `${y}px`;
      btnNo.style.right = "auto";
      btnNo.style.transform = "none";
    }
  }

  document.addEventListener("mousemove", handleMouseMove);

  btnYes.addEventListener("click", function (e) {
    e.preventDefault();
    successMessage.classList.remove("hidden");
  });

  document.getElementById("successClose").addEventListener("click", function () {
    successMessage.classList.add("hidden");
  });
})();
