//modal para editar tipo de hortaliza

const modalTipoHortaliza = new bootstrap.Modal(document.getElementById('modalTipoHortaliza'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', '.btnEditarTipo', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nombre_editar.value = fila.children[1].innerHTML
    modalTipoHortaliza.show()
})

//modal para agregar tipo de hortaliza

const modalAgregarTipoHortaliza = new bootstrap.Modal(document.getElementById('modalAgregarTipoHortaliza'))
const onAgregarTipo = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
onAgregarTipo(document, 'click', '.btnAgregarTipo', e =>{
    
    modalAgregarTipoHortaliza.show()
})

