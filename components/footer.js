function createFooter() {
    const footerHTML = `
       <footer class="py-5 bg-dark" style=" margin-top: auto;">
            <div class="">
                <div class="row justify-content-center">
                   
                    <p class="m-0 text-center text-white">
                        Materia: 2024 2-DESARROLLO DE SOFTWARE WEB FRONT-END-2310-5A MOM 2 VIRTUAL
                    </p>
                </div>
            </div>
        </footer>
        
    `;

    // Añadir el header al principio del body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Ejecutar la función para generar el header
createFooter();
