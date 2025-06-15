document.querySelectorAll('.fotografo').forEach(fotografo => {
  fotografo.addEventListener('click', () => {
    fotografo.classList.toggle('expanded');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".formulario-sobre-imagem");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // evita que o formulário recarregue a página

    // Aqui você pode validar os dados, se quiser
    const nome = formulario.querySelector('input[type="text"]').value;
    const idade = formulario.querySelector('input[type="number"]').value;

    // Só muda de página se os campos forem preenchidos
    if (nome && idade) {
      window.location.href = "fotografos.html"; // Vai para a próxima página
    } else {
      alert("Preencha todos os campos!");
    }
  });
});