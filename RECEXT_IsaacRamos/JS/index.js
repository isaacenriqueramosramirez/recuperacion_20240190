const API_URL = "https://retoolapi.dev/i7SHcm/empleados";

const container = document.getElementById ('cards-container');

async function cargarPersonas() {
    try{
        const res = await fetch (API_URL);
        const data = await res.json();
        CargarTarjetas(data);
    }catch(err){
        console.error('Error al cargar los datos:', err);
        container.innerHTML = '<p>Error al cargar las personas</p>';

    }
} 

function CargarTarjetas(personas){
    container.innerHTML = '';

    if (personas.length == 0){//si "personas" esta vacio, entonces:
        container.innerHTML = "<p> no hay personas registradas</p>";
        return; // Evita que el codigo se siga ejecutando
        
    }
    personas.forEach(persona => {
        container.innerHTML +=`
        <div class= "card">
        <h2>${persona.nombre}</h2>
        <p>${persona.apellido}</p>
         <p>${persona.empresa}</p>
          <p>${persona.telefono}</p>
           <p>${persona.edad}</p>
            <p>${persona.correo}</p>
        </div>
        `;
    });
}
   

    window.addEventListener('DOMContentLoaded', cargarPersonas);
