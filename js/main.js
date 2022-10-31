const botao = document.getElementById('botao')
botao.addEventListener('click', clicar)

const numero = document.getElementById('numero')
const select = document.getElementById('select-tabu')

function clicar() {
    if (numero.value.length == 0) {
        alert('Digite um Número')
    } else {
        const valor = Number(numero.value)//convertendo o numero string em numero
        select.innerHTML = ''
        for (let c=1; c<=10; c++) {
            const item = document.createElement('div')
            item.innerHTML = `<strong style="font-size: 1.7rem;">${valor} x ${c} = ${valor*c}</strong>`
            select.appendChild(item)
            
            console.log(c)
        }
    }
        
}