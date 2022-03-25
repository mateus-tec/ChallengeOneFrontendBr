function validadardados() {
  window.event.preventDefault();

  if (document.form.nome.value == "") {
    alert("Campo e obrigatorio");
    document.form.nome.focus();
  } else if (
    document.form.email.value == "" )
    document.form.email.value.indexOf("@") == -1 ||
    document.form.email.value.indexOf(".") == -1
   {
    alert("Email invalido");
  }
}
document.querySelector("form").addEventListener("submit", validadardados);
