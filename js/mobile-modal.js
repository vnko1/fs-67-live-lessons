(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-mobile-open]'),
    modal: document.querySelector('[data-modal-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
