function lucro() {

    var valor = document.getElementById('valor')
    var percentual = document.getElementById('percentual')
    var result = document.getElementById('resultado1')
    var result2 = document.getElementById('resultado2')
    var result3  = document.getElementById('resultado3')
    var result4  = document.getElementById('resultado4')

    var valor = Number(valor.value)
    var percentual = Number(percentual.value)
    var soma = parseFloat((percentual / 100) * valor)

    result.innerHTML = "Valor de Lucro: R$" + soma
    result2.innerHTML = "Preço sugerido R$" + (valor + soma)
    result3.innerHTML = "Percentual do calculo: " + percentual + "%"
    result4.innerHTML = "O Custo inicial foi de R$" + valor
}