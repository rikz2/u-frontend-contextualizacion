let currentPage = 1;
const limit = 8; // Número de películas por página
const maxMovies = 54; // Máximo número de películas a mostrar

// Función para obtener películas
async function fetchMovies(page = 1, query = "") {
  try {
    let apiUrl = `https://yts.mx/api/v2/list_movies.json?page=${page}&limit=${limit}&sort_by=year`;

    // Si hay una búsqueda, agrega el parámetro `query_term`
    if (query) {
      apiUrl += `&query_term=${encodeURIComponent(query)}`;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === "ok") {
      const movies = data.data.movies;
      let movieHtml = "";

      // Solo mostrar hasta el límite de maxMovies
      const displayedMovies = movies.slice(0, maxMovies - (page - 1) * limit);

      if (displayedMovies.length === 0) {
        movieHtml = "<p>No movies found</p>"; // Mostrar mensaje si no se encontraron películas
      } else {
        displayedMovies.forEach((movie) => {
          movieHtml += `
                            <div class="card-movie col m-2">
                                <div class="card h-100">
                                    <img class="card-img-top" src="${movie.medium_cover_image}" alt="${movie.title}" />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">${movie.title}</h5>
                                            <p>${movie.year}</p>
                                            <p>Rating: ${movie.rating}</p>
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center">
                                            <a class="btn btn-outline-light mt-auto" href="movie_details.html?id=${movie.id}">Ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
        });
      }

      document.getElementById("movie-list").innerHTML = movieHtml;

      // Actualizar la paginación solo si no es una búsqueda
      if (!query) {
        const totalMovies = Math.min(data.data.movie_count, maxMovies); // Asegurar que no se superen los 32 resultados
        generatePagination(totalMovies, limit, page);
      }
    } else {
      console.error("Error al obtener las películas:", data.status_message);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

// Generar la paginación
function generatePagination(totalMovies, moviesPerPage, currentPage) {
  const totalPages = Math.ceil(totalMovies / moviesPerPage);
  let paginationHtml = "";

  // Botón de página anterior
  paginationHtml += `
            <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
                <a class="page-link" href="#" aria-label="Previous" onclick="changePage(${
                  currentPage - 1
                })">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
        `;

  // Generar botones de página
  for (let i = 1; i <= totalPages; i++) {
    paginationHtml += `
                <li class="page-item ${i === currentPage ? "active" : ""}">
                    <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
                </li>
            `;
  }

  // Botón de página siguiente
  paginationHtml += `
            <li class="page-item ${
              currentPage === totalPages ? "disabled" : ""
            }">
                <a class="page-link" href="#" aria-label="Next" onclick="changePage(${
                  currentPage + 1
                })">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        `;

  document.getElementById("pagination").innerHTML = paginationHtml;
}

// Cambiar la página y llamar a la API nuevamente
function changePage(page, query = "") {
  fetchMovies(page, query);
  currentPage = page;
}

// Cargar las películas al iniciar la página
fetchMovies(currentPage); // Mostrar películas por defecto

// Manejar el envío del formulario de búsqueda
document
  .getElementById("search-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const query = document.getElementById("search-input").value.trim(); // Obtener el valor de búsqueda

    if (query) {
      // Llamar a la API con el parámetro de búsqueda
      await fetchMovies(1, query); // Pasar la búsqueda y resetear la página a 1
    } else {
      // Si el campo de búsqueda está vacío, mostrar las películas por defecto
      fetchMovies(currentPage);
    }
  });
