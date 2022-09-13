const input = document.getElementById('input')
const button = document.getElementById('button')

button.addEventListener("click", function(e){
    const contrario = input.value.split("").reverse().join("")

    if (input.value == contrario) 
        alert("É um Palindromo")
    else
        alert("Não é um Palíndromo")
});