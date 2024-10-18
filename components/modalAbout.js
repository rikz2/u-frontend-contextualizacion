function createModalAbout() {
  const modalAboutHTML = `
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
                            El proyecto consiste en la implementación de un sitio web para la visualización de información relacionada con películas, se implementan la funcionalidad de realizar la petición a una API pasando como parámetro la opción de organizar mediante fecha o año la lista de películas, la función de búsqueda mediante el título de la película, y la vista detalle de la información relacionada con la película seleccionada, tambien se implemento el diseño del sistema de comentarios en la vista respectiva vista detalle.
                        </p>    
                    </div>
                </div>
            </div>
        </div>    
    `;

  // Añadir el header al principio del body
  document.body.insertAdjacentHTML("afterbegin", modalAboutHTML);
}

// Ejecutar la función para generar el header
createModalAbout();
