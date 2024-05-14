alert("Vamos realizar operações matemáticas")
let numberOne = Number(prompt("Digite o primeiro número por favor:")) 
let numberTwo = Number(prompt("Digite o segundo número por favor:"))
let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo
alert(`A soma do número ${numberOne} e ${numberTwo} é: ${sum}!`)
alert(`A subtração do número ${numberOne} pelo ${numberTwo} é: ${sub}!`)
alert(`A multiplicação do número ${numberOne} pelo ${numberTwo} é: ${multi}!`)
alert(`A divisão do número ${numberOne} pelo ${numberTwo} é: ${div}!`)
alert(`O resto da divisão entre os números ${numberOne} e ${numberTwo} é: ${rest}!`)

if (sum % 2 === 0){
  alert("Número par!")
}else{
  alert("Número impar!")
}
if (numberOne === numberTwo){
  alert("Números iguais!")
} else{
  alert("Números diferentes!")
}


