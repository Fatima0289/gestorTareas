//Obtener la lista de tareas del almacenamiento del navegador
let tasks = JSON.parse(localStorage.getItem('tasks')) || []; //Se guarda la información aún después de cerrar el servidor

//Función para agregar una tarea a la lista de tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
}
