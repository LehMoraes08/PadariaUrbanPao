document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("cadastro").addEventListener('submit', (e) => {
        e.preventDefault()
    
        const numeroPadaria = "5524992139481"

            const nome = document.getElementById('nome').value
            const email = document.getElementById('email').value
            const telefone = document.getElementById('telefone').value
            const data_nascimento = document.getElementById('data_nascimento').value
            const rua = document.getElementById('rua').value
            const numero = document.getElementById('numero').value
            const complemento = document.getElementById('complemento').value
            const cidade = document.getElementById('cidade').value
            const bairro = document.getElementById('bairro').value
            const cep = document.getElementById('cep').value
            const estado = document.getElementById('estado').value            
            const selecionados = document.querySelectorAll('input[name="preferencias"]:checked')
            const preferenciasArray = Array.from(selecionados).map(item => item.value)
            const preferenciasString = preferenciasArray.join(", ")
            const frequencia = document.querySelector('input[name="frequencia"]:checked').value            
            const selecionadosGostaria = document.querySelectorAll('input[name="gostaria"]:checked')
            const gostariaArray = Array.from(selecionadosGostaria).map(item => item.value)
            const gostariaString = gostariaArray.join(", ")
            const clube_fidelidade = document.querySelector("input[name='clube_fidelidade']:checked").value
            const newsletter = document.querySelector("input[name='newsletter']:checked").value
            const desconto = document.querySelector("input[name='desconto']:checked").value
            const termos = document.getElementById("termos").checked ? "Sim" : "Não"
            const termos1 = document.getElementById("termos1").checked ? "Sim" : "Não"

        




            
            let msgCadastro = `Novo Cadastro\n\n`

                msgCadastro += `Nome: ${nome}\n`
                msgCadastro += `E-mail: ${email}\n`
                msgCadastro += `Telefone: ${telefone}\n`
                msgCadastro += `Data de Nascimento: ${data_nascimento}\n`
                msgCadastro += `Rua: ${rua}\n`
                msgCadastro += `Nº: ${numero}\n`
                msgCadastro += `Complemento: ${complemento}\n`
                msgCadastro += `Cidade: ${cidade}\n`
                msgCadastro += `Bairro: ${bairro}\n`
                msgCadastro += `CEP: ${cep}\n`
                msgCadastro += `Estado: ${estado}\n`
                msgCadastro += `Preferências: ${preferenciasString}\n`
                msgCadastro += `Frequência: ${frequencia}\n`                
                msgCadastro += `Gostoria de Receber: ${gostariaString}\n`
                msgCadastro += `Clube Fidelidade: ${clube_fidelidade}\n`
                msgCadastro += `NewsLetter: ${newsletter}\n`
                msgCadastro += `Desconto: ${desconto}\n`
                msgCadastro += `Aceita receber promoções por email?: ${termos}\n`
                msgCadastro += `Li e aceito os termos de privacidade: ${termos1}\n`
                msgCadastro += `\n\n Muito obrigada pela seu Cadastro. Sua participação é muito importante para nós! \n\n`


        const url = `https://wa.me/${numeroPadaria}?text=${encodeURIComponent(msgCadastro)}`  

        window.open(url, "_blank")
        })
    })