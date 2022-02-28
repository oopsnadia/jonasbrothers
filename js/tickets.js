
      $( () => {

        if ( $("#seccionDos")) {
        $("#seccionDos").click( function () {
          $(".detalleDeCompra2").fadeIn(1500);
          $(".detalleDeCompra").css("display", "none")
        })
      } 
      
      if ($("#seccionUno")) {
        $("#seccionUno").click( function () {
          $(".detalleDeCompra").fadeIn(1500);
          $(".detalleDeCompra2").css("display", "none")
        })
      } 
      
    });
    
