'use strict'



import {
    contatos
} from './contatos.js'



const chatList = document.createElement('div')
chatList.id = "chatListId"
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

    
    const h4 = document.createElement('h4')
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


function AdicionarParteDireitaPerfil(contato) {
    // parte de cima do perfil
    const imgPerfil = document.createElement('div')
    imgPerfil.classList.add('img-perfil')

    const userimg = document.createElement('div')
    imgPerfil.classList.add('userimg')

    const imgWhatsapp = document.createElement('img')
    imgWhatsapp.src = `./${contato.image}`

    const nome = document.createElement('h4')
    nome.textContent = contato.name

    imgPerfil.append(userimg, nome)
    userimg.append(imgWhatsapp)

    return imgPerfil
    

}

    // parte das conversas do perfil
function adicionarParteDireitaChat(contato){
    const chat = document.createElement('div')
    chat.classList.add('chat')

    const youMessage = document.createElement('div')
    youMessage.classList.add('message', 'you-message')

    const p1 = document.createElement('p')
    const br = document.createElement('br')

    const span = document.createElement('span')
    for (let contador = 0; contador < contato.messages.length; contator++) {
        p1.textContent = contato.messages[contador]
        span.textContent = contato.messages[contador].time
    }

    

    chat.append(youMessage)
    p1.append(br, span)

    return chat


}
   




const carregarLadoDireito = () => {
    const perfil = document.getElementById('addLadoDireito1')
    const chat = document.getElementById('addLadoDireito2')
    
    
    const perfilScript = contatos.map(AdicionarParteDireitaPerfil)
    const chatScript = contatos.map(adicionarParteDireitaChat)
    perfil.replaceChildren(...perfilScript)
    chat.replaceChildren(...chatScript)
    


}


const carregarContatos = () => {
    console.log(contatos)
    const container = document.getElementById('container2')
    const contatosScript = contatos.map(criarContatos)
    container.replaceChildren(...contatosScript)

}





chatList.addEventListener('click', () => {
  const boxLeft = document.getElementById('box-left')
  boxLeft.classList.toggle('active')
  
  const boxRigth = document.getElementById('box-right')
  boxRigth.classList.toggle('active')
})

carregarContatos()
