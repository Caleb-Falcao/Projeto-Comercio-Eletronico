document.addEventListener("DOMContentLoaded", function () {
  var searchForm = document.querySelector(".navbar .form-inline");
  var searchBtn = document.querySelector(".navbar .search-btn");

  searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    searchForm.classList.toggle("active");
  });
});


function search() {
  let input = document.getElementById("searchbar").value
  input = input.toLowerCase()
  let x = document.getElementsByClassName('produto')

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = 'none'
    } else {
      x[i].style.display = 'list-item'
    }
  }

}
/*ocultar div detalhes da compra */
$('.det-compra').hide();

//Botão btn info ao ser clicado
$('.btn-det').on('click', function () {
  $(this).hide();
  $('.pag-inicial').hide();
  $('.det-compra').show();

});

$(document).ready(function() {
  // Quando o botão com a classe 'btn-success' for clicado
  $('.btn-comprar').click(function() {
    // Exibe um alerta para o usuário
    alert('Produto comprado com sucesso!');
  });
});

/*reiniciar pagina */
function reloadPage() {
  // Recarrega a página atual
  window.location.reload();
}