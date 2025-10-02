 document.addEventListener('DOMContentLoaded', function() {
  console.log('Página cargada')

  const form = document.querySelector('#myForm')

  
  form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    console.log('Formulario enviado')
    
    // Validar formulario
    if (!form.checkValidity()) {
      console.log('Formulario inválido')
      form.classList.add('was-validated')
      return
    }
    
    // Obtener datos
    const formData = new FormData(form)
    
    console.log('=== DATOS DEL FORMULARIO ===')
    for (let [campo, valor] of formData.entries()) {
      console.log(campo + ': ' + valor)
    }
    
    // Convertir a objeto
    const datos = Object.fromEntries(formData.entries())
    console.log('Objeto:', datos)
    
    form.classList.add('was-validated')
    console.log('Datos procesados correctamente')
  })
  
})