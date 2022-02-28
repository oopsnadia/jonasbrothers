//RENDERIZADO PRODUCTOS EN LOCAL STORAGE

function showItemsPago() {
  const cart = JSON.parse(localStorage.getItem('CART'))
  $("#tbody2").html(cart.map(item => buildTrItem2(item)))
}

const buildTrItem2 = item => {
  return `
  <p> ${item.name} x ${item.numberOfUnits}</p>
  <p class="productosFinal-desc2">£ ${item.price}</p>
  <p class="productosFinal-desc2"> £ ${item.price * item.numberOfUnits}</p>
`
}

function calcTotalPago() {
  const cart = JSON.parse(localStorage.getItem('CART'));
  const total = (cart && cart.length) ?
    cart.reduce((acc, item) => {
      acc = acc + parseFloat(item.price * item.numberOfUnits)
      return acc
    }, 0) :
    0
  $('#total2').append(`<p class="item-total">Total £ ${total.toFixed(2)} </p>`)

}



showItemsPago()
calcTotalPago()