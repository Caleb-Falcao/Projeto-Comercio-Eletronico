document.addEventListener("DOMContentLoaded", function () {
  var searchForm = document.querySelector(".navbar .form-inline");
  var searchBtn = document.querySelector(".navbar .search-btn");

  searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    searchForm.classList.toggle("active");
  });
});
