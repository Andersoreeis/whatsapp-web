'use strict'



import {
    contatos
} from './contatos.js'



const h4 = document.createElement('h4')
const nome = document.createElement('h4')
const chatList = document.createElement('div')
const criarContatos = (contato) => {
   
    chatList.classList.add('chatlist')


    const blockActive = document.createElement('div')
    blockActive.classList.add("block")


    const imgbx = document.createElement('div')
    imgbx.classList.add('imgbx')

    const img = document.createElement('img')
    img.classList.add('imageReform')
    img.src = `./${contato.image}`


    const details = document.createElement('div')
    details.classList.add('details')

    const listhead = document.createElement('div')
    listhead.classList.add('listhead')


    h4.textContent = contato.name

    const time = document.createElement('p')
    time.classList.add('time')

    const group = document.createElement('p')
    group.classList.add('group')

    for (let contador = 0; contador < contato.messages.length; contador++) {
        time.textContent = contato.messages[contador].time

        group.textContent = contato.messages[contador].content.slice(0, 25) + "..."
    }





    const message = document.createElement('div')
    message.classList.add('message')





    chatList.append(blockActive)
    blockActive.append(imgbx, details)
    imgbx.append(img)
    details.append(listhead, message)
    listhead.append(h4, time)
    message.append(group)

    return chatList



}
chatList.addEventListener('click', () => {
    if (h4 == nome) {
        AdicionarParteDireita()
    } else {
        return false
    }
})
function AdicionarParteDireita() {
    // parte de cima do perfil
    const imgPerfil = document.createElement('div')
    imgPerfil.classList.add('img-perfil')

    const userimg = document.createElement('div')
    imgPerfil.classList.add('userimg')

    const imgWhatsapp = document.createElement('img')
    imgWhatsapp.src = `./${contato.image}`


    nome.textContent = contato.name




    // parte das conversas do perfil

    const chat = document.createElement('div')
    chat.classList.add('chat')

    const youMessage = document.createElement('div')
    youMessage.classList.add('message', 'you-message')

    const p1 = document.createElement('p')
    const br = document.createElement('br')

    const span = document.createElement('span')
    for (let contador = 0; contato < contato.messages.length; contato++) {
        p1.textContent = contato.messages[contador]
        span.textContent = contato.messages[contador].time
    }

    imgPerfil.append(userimg, nome)
    userimg.append(imgWhatsapp)

    chat.append(youMessage)
    p1.append(br, span)



}




const carregarContatos = () => {
    console.log(contatos)
    const container = document.getElementById('container2')
    const contatosScript = contatos.map(criarContatos)
    container.replaceChildren(...contatosScript)

}

carregarContatos()