//Obtener la lista de tareas del almacenamiento del navegador
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//Se guarda la información aún después de cerrar el servidor

//Función para poder llevar las tareas de la lista
export const getTasks = () => tasks;

//Función para agregar una tarea a la lista de tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Función para eliminar una tarea
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Función para actualizar una tarea de la lista
export const toggleTask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
