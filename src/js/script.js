$(document).ready(function () {
    const formLogin = $('#iniciar-sesion');
    const formRegistro = $('#registrarse');
    const tabIniciarSesion = $('.tab-segunda');
    const tabRegistrarse = $('.tab-primera');

    // Mostrar Questionnaire de inicio de sesión y ocultar registro al cargar la página
    formLogin.show();
    formRegistro.hide();

    // Cambiar a la pestaña de inicio de sesión al hacer clic en "Iniciar Sesión"
    tabIniciarSesion.on('click', function () {
        formLogin.show();
        formRegistro.hide();
        tabIniciarSesion.addClass('active');
        tabRegistrarse.removeClass('active');
    });

    // Cambiar a la pestaña de registro al hacer clic en "Registrarse"
    tabRegistrarse.on('click', function () {
        formLogin.hide();
        formRegistro.show();
        tabIniciarSesion.removeClass('active');
        tabRegistrarse.addClass('active');
    });

    
    // Manejo de estilos y etiquetas al interactuar con los inputs
    $(".contenedor-Questionnaires").find("input, textarea").on("keyup blur focus", function (e) {
        var $this = $(this),
            label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.removeClass("highlight");
            }
        } else if (e.type === "focus") {
            if ($this.val() === "") {
                label.removeClass("highlight");
            } else if ($this.val() !== "") {
                label.addClass("highlight");
            }
        }
    });
});
