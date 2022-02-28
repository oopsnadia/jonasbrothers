$(function() {

    var owner = $('#owner');
    var cardNumber = $('#cardNumber');
    var cardNumberField = $('#card-number-field');
    var CVV = $("#cvv");
    var mastercard = $("#mastercard");
    var confirmButton = $('#confirm-purchase');
    var visa = $("#visa");
    var amex = $("#amex");


    cardNumber.payform('formatCardNumber');
    CVV.payform('formatCardCVC');


    cardNumber.keyup(function() {

        amex.removeClass('transparent');
        visa.removeClass('transparent');
        mastercard.removeClass('transparent');

        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
            cardNumberField.addClass('has-error');
        } else {
            cardNumberField.removeClass('has-error');
            cardNumberField.addClass('has-success');
        }

        if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
            mastercard.addClass('transparent');
            amex.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
            mastercard.addClass('transparent');
            visa.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
            amex.addClass('transparent');
            visa.addClass('transparent');
        }
    });

    confirmButton.click(function(e) {

        e.preventDefault();

        if(owner.val().length < 5){
            $(".wrong-owner").append(`<p class='btn btn-secondary' id='btn__credit-card'> Please enter a valid name!</p>`)
        } else if (CVV.val() === "" || CVV.val().length < 3) {
            $(".wrong-cvv").append(`<p class='btn btn-secondary' id='btn__credit-card'> Please enter a valid CVV!</p>`)
        } else if (cardNumber.val() === "" || cardNumber.val().length < 16) {
            $(".wrong-card-number").append(`<p class='btn btn-secondary' id='btn__credit-card'> Please enter a valid card number!</p>`)
        } else {
            Swal.fire(
                'Payment Successfull!',
                'Thank you for your purchase!',
                'success'
              )
        }
    });
});
