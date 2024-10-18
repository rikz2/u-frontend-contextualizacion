function createHeader() {
    const headerHTML = `
        <header>
            <!-- Aquí va tu navegación -->
            <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                <div class="container px-4 px-lg-5">
                    <a class="navbar-brand fw-bolder fst-italic" href="../index.html">
                        <img style="max-width: 50px;" src="assets/logo_movieweb.png" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="d-flex w-100 justify-content-end gap-3">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li class="nav-item">
                                    <a class="fw-bold nav-link active" aria-current="page" href="../index.html">Home</a>
                                </li>
                            </ul>
                            <li class="nav-item">
                                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#modalAbout">
                                About
                                </button>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <!-- Modal about -->
        <div class="modal fade" id="modalAbout" tabindex="-1" aria-labelledby="movieDetailLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="movieDetailLabel">About</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="fs-6">
                            El proyecto consiste en la implementación de un sitio web para la visualización de información relacionada con películas, se implementan la funcionalidad de realizar la petición a una API pasando como parámetro la opción de organizar mediante fecha o año la lista de películas, la función de búsqueda mediante el título de la película, y la vista detalle de la información relacionada con la película seleccionada.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Añadir el header al principio del body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// Ejecutar la función para generar el header
createHeader();
