document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("contato").addEventListener('submit', (e) => {
        e.preventDefault()
    
        const numeroPadaria = "5524992139481"

            const nome = document.getElementById('nome').value
            const telefone = document.getElementById('telefone').value
            const email = document.getElementById('email').value
            const assunto = document.getElementById('assunto').value
            const mensagem = document.getElementById('mensagem').value

            
            let texto = `Formulário de Contato \n\n`

                texto += `Nome: ${nome}\n`
                texto += `Telefone: ${telefone}\n`
                texto += `E-mail: ${email}\n`
                texto += `Assunto: ${assunto}\n`
                texto += `Mensagem: ${mensagem}\n`
                texto += `\n\n Muito obrigada pela sua avaliação. Sua opinião é muito valiosa para nós! \n\n`


        const url = `https://wa.me/${numeroPadaria}?text=${encodeURIComponent(texto)}`  

        window.open(url, "_blank")
        })
    })