 document.addEventListener('DOMContentLoaded', function() {

const form = document.querySelector('#myForm')

form.addEventListener('submit', function(event) {
     
      event.preventDefault()
      
      console.log('🚀 Formulario enviado!')
      
      const formData = new FormData(form)
      
    
      console.log('=== DATOS DEL FORMULARIO ===')
      for (let [campo, valor] of formData.entries()) {
        console.log(`${campo}: ${valor}`)
      }
    })

})