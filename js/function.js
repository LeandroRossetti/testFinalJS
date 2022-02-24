function pedidoEmpanadas() {
  let JQ = 0,
    Carne = 0,
    Pollo = 0;


  alert("Te ayudare a hacer el pedido de la docena de empanadas, solo quedan de JQ, Carne y Pollo.");

  for (let index = 12; index > 0; index--) {

    let valueEmpanada = parseInt(prompt(`Decime el gusto en número, escribi 1 para JQ, 2 para Carne y 3 para Pollo y 10 para cancelar el pedido, todavía faltan los gustos de ${index} empanadas....PEDISTE de JQ ${JQ}, de Carne ${Carne}, de Pollo ${Pollo}`));
    if (valueEmpanada == 1) {
      JQ++;
    }

    else if (valueEmpanada == 2) {
      Carne++;
    }

    else if (valueEmpanada == 3) {
      Pollo++;
    }

    else if (valueEmpanada == 10) {
      JQ = 0;
      Carne = 0;
      Pollo = 0;
      break;
    }

    else {
      index++;
      alert("Dato ingresado incorrecto");

    }

  }

  if (JQ == 0 & Carne == 0 & Pollo == 0) {
    alert('Cancelaste tu pedido')
  }
  else {
    alert(`Tu pedido queda así: Empanadas de JQ: ${JQ}, Empanadas de Carne: ${Carne}, Empanadas de Pollo: ${Pollo}`);
  }
}
