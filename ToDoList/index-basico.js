/**
 * DOMContentLoaded es para  que toda la pagina este renderizada y no haya
 * problemas al usar algunos ID.
 */
document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('title');

    const description = document.getElementById('description');

    const table = document.getElementById('table');

    const alert = document.getElementById('alert');

    let id  = 1;

    /**
     * Hacer la variable const no permite modificarla, si necesitara
     * modificarla es mejor usar let
    */
    const btn = document.getElementById('add');
    /**
    btn.onclick = function() {
        console.log('Title:', title.value);
        console.log('Description:', description.value);
    }
    */

    function addToDo() {
        /**
         * Si no se ha ingresado nada a los datos de descripcion
         * y titulo
         */
        if (title.value === '' || description.value === '') {
            alert.classList.remove('d-none');
            alert.innerText = 'Title and description required';
            // console.error('Title and description required');
            return;
        }

        // Si si contienen elementos
        alert.classList.add('d-none');
        // Agregar elementos a la fila
        const row = table.insertRow();
        // Agrego id a las filas, lo asigno y lo incremento.
        row.setAttribute('id', id++);
        /**
         * Creacion de la nueva fila con su titulo obtenido de 
         * lo que ingreso el usuario ademas se crean el checkbox y
         * el boton de editar
         */
        row.innerHTML = `
        <td>${title.value}</td>
        <td>${description.value}</td>
        <td class="text-center">
             <input type="checkbox">
         </td>
         <td class="text-right">
             <button class="btn btn-primary mb-1">
                 <i class="fa fa-pencil"></i>
             </button>
         </td>
        `;

        // Creacion del boton eliminar
        const removeBtn = document.createElement('button');
        // Personalizando el boton eliminar
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        /**
         * Funcionalidad del boton
         */
        removeBtn.onclick = function (e) {
            removeToDo(row.getAttribute('id'));
            // console.log(e.target.parentNode);
        }
        // Agregando el boton al final del tercer elemento en la fila
        row.children[3].appendChild(removeBtn);
    }

    function removeToDo(id) {
        console.log(id);
        document.getElementById(id).remove();
    }

    btn.onclick = addToDo;

});