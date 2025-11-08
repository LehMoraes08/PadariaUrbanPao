document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("feedback").addEventListener('submit', (e) => {
        e.preventDefault()
    
        const numeroPadaria = "5524992139481"

            const nome = document.getElementById('nome').value
            const email = document.getElementById('email').value
            const produto_servico = document.getElementById('produto_servico').value
            const avaliacao = document.querySelector('input[name="avaliacao"]:checked').value
            const mensagem = document.getElementById('mensagem').value

            
            let msgFeed = `Feedback \n\n`

                msgFeed += `Nome: ${nome}\n`
                msgFeed += `E-mail: ${email}\n`
                msgFeed += `Produto/Serviço: ${produto_servico}\n`
                msgFeed += `Avaliação: ${avaliacao}\n`
                msgFeed += `Mensagem: ${mensagem}\n`
                msgFeed += `\n\n Muito obrigada pela seu FeedBack. Sua opinião é muito importante para nós! \n\n`


        const url = `https://wa.me/${numeroPadaria}?text=${encodeURIComponent(msgFeed)}`  

        window.open(url, "_blank")
        })
    })