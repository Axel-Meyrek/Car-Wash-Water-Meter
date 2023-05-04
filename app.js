/* Varibles ---------------------------------------- */
const inputNameUsuario = document.querySelector('#inputNameUsuario')
const btnSaveForm = document.querySelector('#btnSaveForm')
const conteinerNameUsario = document.querySelector('.nameusuario')
const sectionLogin = document.querySelector('.sectionLogin')
const btnSectionLogin = document.querySelector('#btnSectionLogin')
const inputCorreoUsuario = document.querySelector('#inputCorreoUsuario')
const sectionObjetivo = document.querySelector('.sectionObjetivo')
const btnSectionObjetivo = document.querySelector('#btnSectionObjetivo')
const btnSectionCronometro = document.querySelector('#btnSectionCronometro')




/* Funciones ---------------------------------------- */

const mostrarNombreUsario = e => {
    e.preventDefault()
    const nameUsario = inputNameUsuario.value
    conteinerNameUsario.textContent = 'Hola ' + nameUsario

    ocultarMostrarLogin()
}

const ocultarMostrarLogin = () => {
    sectionLogin.classList.toggle('sectionLogin--off')
    limpiarInputsLogin()
}

const limpiarInputsLogin = () => {
    inputNameUsuario.value = ''
    inputCorreoUsuario.value = ''
}

const ocultarMostrarobjetivo = () => {
    sectionObjetivo.classList.toggle('sectionObjetivo--off')
}

const mostrarCronometro = () => {
    sectionObjetivo.classList.add('sectionObjetivo--off')
}



/* Eventos -------------------------------------------- */
btnSaveForm.addEventListener('click', mostrarNombreUsario)
btnSectionLogin.addEventListener('click', ocultarMostrarLogin)
btnSectionObjetivo.addEventListener('click', ocultarMostrarobjetivo)
btnSectionCronometro.addEventListener('click', mostrarCronometro)