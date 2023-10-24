function areaDoCirculo(raio) {
  return Math.PI * raio ** 2
}

//console.log(areaDoCirculo(10));

function imc(peso, altura, sexo) {
  const res = peso / altura ** 2;
  const arrHomem = [[20.7, 'Abaixo do Peso'], [26.4, 'Peso Normal'], [27.8, 'Marginalmente Acima do Peso'], [31.1, 'Acima do Peso Ideal'], [999, 'Obeso']]
  const arrMulher = [[19.1, 'Abaixo do Peso'], [25.8, 'Peso Normal'], [27.3, 'Marginalmente Acima do Peso'], [32.3, 'Acima do Peso Ideal'], [999, 'Obeso']]

  if (sexo === 'mulher') {
    return arrMulher.find((value, index) => res < value[0])[1]
  }

  if (sexo === 'homem') {
    return arrHomem.find((value, index) => res < value[0])[1]
  }

  return 'Defina opcão de sexo da função: mulher ou homem.'
}
/**
console.log(imc(200, 1.5, 'homem'));
console.log(imc(150, 2, 'feminino'));
console.log(imc(100, 2, 'masculino'));
console.log(imc(70, 2, 'feminino')); 
*/

function calculadora(num1, num2, op) {
  switch (op) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    default:
      return 'Não existe um operador válido'
  }
}
/**
console.log(calculadora(1, 1, '+'))
console.log(calculadora(1, 1, '-'))
console.log(calculadora(1, 1, '*'))
console.log(calculadora(1, 1, '/'))
*/
