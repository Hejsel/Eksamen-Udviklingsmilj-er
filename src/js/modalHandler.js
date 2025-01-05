function openModal(imageSrc) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  modalImg.src = imageSrc;
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("image-modal");
  modal.classList.add("hidden");
}
