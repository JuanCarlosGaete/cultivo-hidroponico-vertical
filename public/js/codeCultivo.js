//modal para agregar cultiuvo
const modalAgregarCultivo = new bootstrap.Modal(document.getElementById('modalAgregarCultivo'))
const onAgregarCultivo = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
onAgregarCultivo(document, 'click', '.btnAgregarCultivo', e =>{
    
    modalAgregarCultivo.show()
})

//modal para editar cultivo

const modalEditarCultivo = new bootstrap.Modal(document.getElementById('modalEditarCultivo'))
const onEditarCultivo = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
onEditarCultivo(document, 'click', '.btnEditarCultivo', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    lote_editar.value = fila.children[1].innerHTML
    cantidad_editar.value = fila.children[2].innerHTML
    fechaInicio_editar.value = fila.children[3].innerHTML
    modalEditarCultivo.show()
})