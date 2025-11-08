document.addEventListener("DOMContentLoaded", () => {
        
        const produtos = [
            document.getElementById('produto-Bolo'),
            document.getElementById('produto-TortaDoce'),
            document.getElementById('produto-TortaSalgada'),
            document.getElementById('produto-Salgados'),
            document.getElementById('produto-Doces')
        ];


        produtos.forEach((select, index) => {
            select.addEventListener('change', () => {
                if (select.value !== "") {
                    produtos.forEach((s, i) => {
                        if (i !== index) {
                            s.disabled = true;
                            s.value = "";
                        }
                    });
                } else {
                    produtos.forEach(s => s.disabled = false);
                }
            });
        });


document.getElementById('pedidos').addEventListener('submit' , (e) => {
        e.preventDefault()

        const numeroPadaria = "5524992139481"

        const nome = document.getElementById('nome').value
        const telefone = document.getElementById('telefone').value
        const email = document.getElementById('email').value

        
        let tipo = "";
        let sabor = "";

        for (let select of produtos) {
            if (select.value && select.value !== "") {
                tipo = select.id.replace("produto-", "")
                sabor = select.value
                break
            }
        }
       
        if (!tipo || !sabor) {
            alert("Por favor, selecione um produto e sabor antes de enviar.")
            return
        }
       
        const nomesProdutos = {
            Bolo: "Bolo",
            TortaDoce: "Torta Doce",
            TortaSalgada: "Torta Salgada",
            Salgados: "Salgados (cento)",
            Doces: "Doces (cento)"
        }

        tipo = nomesProdutos[tipo] || tipo


        const tamanho = document.querySelector("input[name='tamanho']:checked").value
        const quantidade = document.getElementById('quantidade').value
        const dataEntregaInput = document.querySelector("input[name= 'data']").value
        const horaEntregaInput = document.querySelector("input[name= 'hora']").value

        const pagamento = document.querySelector("input[name='pagamento']:checked").value
        const retirada = document.querySelector("input[name='retirada']:checked").value

        const observacoes = document.querySelector("textarea[name='mensagem']").value

            let dataEntrega1 = ""
        const partes = dataEntregaInput.split("-")
        dataEntrega1 = `${partes[2]}/${partes[1]}/${partes[0]}`


            let mensagem = `Urban Pão agradece o seu pedido, aguarde um momento que entraremos em contato para confirmação. \n\n`

                mensagem += `Nome: ${nome}\n`
                mensagem += `Telefone: ${telefone}\n`
                mensagem += `E-mail: ${email}\n`
                mensagem += `Produto: ${tipo}\n`
                mensagem += `Sabor: ${sabor}\n`
                mensagem += `Tamanho: ${tamanho}\n`
                mensagem += `Quantidade: ${quantidade}\n`
                mensagem += `Data de Entrega: ${dataEntrega1}\n`
                mensagem += `Hora da Entrega: ${horaEntregaInput}\n`
                mensagem += `OBS.: ${observacoes}\n`
                mensagem += `Forma de Pagamento: ${pagamento}\n`
                mensagem += `Retirada.: ${retirada}\n`
        
    

        const url = `https://wa.me/${numeroPadaria}?text=${encodeURIComponent(mensagem)}`  

        window.open(url, "_blank")

    })
})