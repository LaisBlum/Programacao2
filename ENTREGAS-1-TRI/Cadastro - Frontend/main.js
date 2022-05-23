const actionBar = document.querySelector(".action-bar");
const btAdd = actionBar.querySelector(".bt-add");
const container = document.querySelector(".container-data");
const templateModalAluno = container.querySelector("template.aluno");


btAdd.addEventListener("click", () => {
  const cloneModal = templateModalAluno.content.cloneNode(true);
  container.prepend(cloneModal);
});

container.addEventListener("click", (event) => {
  const btClose = event.target.closest(".bt-close");
  const btSave = event.target.closest(".bt-save");
  const modal = event.target.closest(".modal");

  if (btSave) {
    const formElement = modal.querySelector("form");
    const formData = new FormData(formElement);
    formData.forEach(console.log);
  }

  if (btClose) {
    modal.remove();
  }

});
