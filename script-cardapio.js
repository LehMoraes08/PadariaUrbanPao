let carrinho = []

let totalCarrinho = 0

document.querySelectorAll(".comprar").forEach(btn => {
    btn.addEventListener("click" , () => {
        let produto = btn.dataset.produto
        let preco = parseFloat(btn.dataset.preco)

        let input = btn.closest("tr").querySelector("input[type='number']")
        let qtd = parseInt(input.value) || 1

        let subtotal = preco * qtd

        carrinho.push({produto, preco, qtd, subtotal})

        totalCarrinho += subtotal

        let li = document.createElement("li")
        li.textContent = `${produto} (x${qtd}) - R$ ${subtotal.toFixed(2)}`

        document.getElementById("listaCarrinho").appendChild(li)

        document.getElementById("totalCarrinho").innerHTML = `R$ ${totalCarrinho.toFixed(2)}`

        let resultado = btn.closest("tr").querySelector(".resultado")
        if (resultado) {
            resultado.innerHTML = ""
        }
        input.value = 0        
    })
})

document.getElementById("limpar").addEventListener('click', () => {
    carrinho = [] 

    totalCarrinho = 0 

    document.getElementById("listaCarrinho").innerHTML = "" 

    document.getElementById('totalCarrinho').innerHTML = "0.00"
})

function calcularItem(nome, preco, idInput, idResultado){

let qtd = parseInt(document.getElementById(idInput).value)

let subtotal = qtd * preco

let desconto = (nome === "Pão" && qtd > 15) ? subtotal * 0.1 : 0

let total = subtotal - desconto

let taxaEntrega = 7.00

let totalComTaxa = total

document.getElementById(idResultado).innerHTML = 
    `
        <strong>Produto:</strong> ${nome}<br>
        <strong>Quantidade:</strong> ${qtd}<br>
        <strong>Preço unitário:</strong> R$ ${preco.toFixed(2)}<br>
        <strong>Subtotal:</strong> R$ ${subtotal.toFixed(2)}<br>
        <strong>Desconto:</strong> R$ ${desconto.toFixed(2)}<br>
        <strong>Total:</strong> R$ ${totalComTaxa.toFixed(2)}
    `
}

document.getElementById("taxaEntrega").addEventListener("change", () => {
    let taxa = 7.00
    if (document.getElementById("taxaEntrega").checked) {
        document.getElementById("totalCarrinho").innerHTML = `${(totalCarrinho + taxa).toFixed(2)}`
    } else {
        document.getElementById("totalCarrinho").innerHTML = `${totalCarrinho.toFixed(2)}`
    }
    })

document.addEventListener("DOMContentLoaded" , () => { 

document.getElementById("enviar").addEventListener('click', () => {

    const numeroPadaria = "5524992139481"
    
    let mensagemPedido = "🛒 *Pedido via site:*\n\n"

    carrinho.forEach(item => {
        mensagemPedido += `• ${item.produto} (x${item.qtd}) - R$ ${item.subtotal.toFixed(2)}\n`
    });

    let totalFinal = totalCarrinho
    if (document.getElementById("taxaEntrega").checked) {
        totalFinal += 7.00;
        mensagemPedido += `\n📦 *Taxa de entrega:* R$ 7.00`
    }

    mensagemPedido += `\n\n💰 *Total:* R$ ${totalFinal.toFixed(2)}`

     const url = `https://wa.me/${numeroPadaria}?text=${encodeURIComponent(mensagemPedido)}`  

        window.open(url, "_blank")

    }) 

})
