export const Modal = {
  wrapper:document.querySelector('.modal-wrapper'),
  message:document.querySelector('.modal .title span'),
  buttonClose:document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
 },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}


// Ao apertar a tecla Esc, ele vai fechar a aba
window.addEventListener('keydown',handleKeydown)

function handleKeydown(event){
  if(event.key === 'Escape'){
    Modal.close()
  }
}

// Ao apertar a tecla Enter, ele vai calcular
window.addEventListener('keypress', handleKeypress)

function handleKeypress(event){
  if(event.handleKeypress === 'Enter'){
    Modal.message()
  }
}