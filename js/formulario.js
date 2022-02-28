$( () => {

    

    $("#formulario").submit(function(e) {
        e.preventDefault();

        let hijos = $(e.target).children();
        console.log(hijos[0].value);
        console.log(hijos[1].value);

        if ( $("#name").val() !== "" && $("#email").val() !== "") {
        $("#result").append(`
        <div class="sent"><p> Thanks! </p></div>
        `);
        }
        $(this)[0].reset();
    });


    $("#name").on("keyup", function() {
        verificar();
    });
    
    $("#email").on("keyup", function() {
        verificar();
    });



    const verificar = () => {

    if ( $("#name").val().length > 0 && $("#email").val().length > 0 ) {
        $("#completar").removeClass("show");
    } else {
        $("#completar").addClass("show");
    }
}

});

