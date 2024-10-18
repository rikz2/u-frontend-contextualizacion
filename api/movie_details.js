async function fetchMovieDetails() {
    // Acortador de la descripcion 
    function getShortDescription(description, maxLength = 100) {
        if (description.length > maxLength) {
            return description.slice(0, maxLength) + '...';
        }
        return description;
    }

    // Obtener el parámetro de 'id' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id'); // id de la película

    if (!movieId) {
        document.getElementById('movie-details').innerHTML = `<p>No se encontró el ID de la película.</p>`;
        return;
    }

    try {
        // Realizar la solicitud a la API para obtener los detalles
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`);
        const data = await response.json();

        if (data.status === 'ok') {
            const movie = data.data.movie;

            // Mostrar los detalles de la película
            document.getElementById('movie-details').innerHTML = `
            <div class="col-md-9">
                    <div class="row justify-content-center align-items-stretch shadow-lg rounded-4 overflow-hidden bg-dark bg-gradient text-white">
                        <div class="col-lg-6 p-0 d-flex justify-content-center">
                            <div class="movie_detail-box-img w-100 d-flex">
                                <img class="w-100 img-fluid object-fit-cover" src="${movie.large_cover_image}" alt="${movie.title}">
                            </div>
                        </div>
                        <div class="col-lg-6 p-4 p-sm-5">
                            <div class="h-100 row justify-content-center align-items-center">
                                <h2 class="fw-bold fs-1 text-light">${movie.title}</h2>
                                <div class="text-secondary">
                                    <p>
                                        <strong class="text-light">
                                            Descripción:
                                        </strong> ${getShortDescription(movie.description_full || 'Sin descripción disponible.', 100)}</p>
                                    <p>
                                        <strong class="text-light">
                                        Año:
                                    </strong> 
                                    ${movie.year}
                                    </p>
                                    <p>
                                        <strong class="text-light">
                                            Calificación:
                                            </strong> ${movie.rating}
                                    </p>
                                    <p>
                                        <strong class="text-light">
                                            Géneros:
                                        </strong> ${movie.genres ? movie.genres.join(', ') : 'No disponible'}</p>
                                    <p><strong class="text-light">
                                        Idioma:
                                        </strong> ${movie.language}</p>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                </div>
            `;
        } else {
            console.error('Error al obtener los detalles de la película:', data.status_message);
            document.getElementById('movie-details').innerHTML = `<p>Error al cargar los detalles de la película.</p>`;
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        document.getElementById('movie-details').innerHTML = `<p>Error en la solicitud de la película.</p>`;
    }
}

// Llamar a la función para cargar los detalles de la película cuando se cargue la página
fetchMovieDetails();