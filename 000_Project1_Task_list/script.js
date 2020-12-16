// Creamos una Clase que defina los datos que se van a usar como instancias para todas las tareas

class Task{
    constructor(name, priority, time){
        this.name = name;
        this.priority = priority;
        this.time = time;
    }
}


// creamos una Clase User Interface que gestione los metodos que queremos desarrollar en el programa
class UI{
    //crear un elemento con los datos de tarea cuando se guarda
    addTask(task){

        const taskList = document.getElementById("task-list")
        const element = document.createElement("div")
        let colorPriority = "border-dark"
        
        if(task.priority == "Medium"){
            colorPriority =  "border-warning"
        }
        else if(task.priority == "High"){
            colorPriority =  "border-danger"
        }
        element.innerHTML = `
            <div class="card mb-2 text-center bg-light border ${colorPriority} animate__animated animate__backInRight">
                <div class="card-body">
                    <strong>Task:</strong> ${task.name}
                    <strong>Priority:</strong> ${task.priority}
                    <strong>Time:</strong> ${task.time}h
                    <strong><a href="#" class="btn-task text-dark element-close far fa-check-circle ml-2" title="Completed Task" name="complete"></a></strong>
                    <strong><a href="#" class="btn-task text-dark element-close far fa-times-circle" title="Delete Task" name="delete"></a></strong>
                </div>
            </div>
        
        `
        taskList.appendChild(element) 
        countTask(1)
    }

    //reinicial el formulario
    resetForm(){
        document.getElementById("task-form").reset()
    }

    //eliminamos el elemento padre <div> que tenga el name=delete de donde se ejecuto el evento de click
    deleteTask(element){
        
        if(element.name === "delete"){
            //console.log("delete")
            element.parentElement.parentElement.parentElement.remove()
            // mostrar mnensaje para eliminar

            this.showMessage("Task Deleted Successfully", "danger", "fa-calendar-times")
        }
        if(element.name === "complete"){
            //console.log("delete")
            element.parentElement.parentElement.parentElement.remove()
            // mostrar mnensaje para eliminar

            this.showMessage("Task Completed Successfully", "warning", "fa-trophy" )
            countTaskW(1)
        }
        countTask(-1)
    }

    showMessage(message, cssClass, iconClass){
        const div = document.createElement("div")
        const icon = document.createElement("li")
        icon.className = `fa ${iconClass} iconMessage`
        div.className = `message text-center alert alert-${cssClass} mt-2 animate__animated animate__fadeIn`
        div.appendChild(icon)
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector(".container")
        const app = document.querySelector("#App")
        container.insertBefore(div, app)

        //quitar mensage
        setTimeout(function(){
            document.querySelector(".message").remove()
        }, 3000);
    }
}

//DOM

// capturamos el evento submit del formulario y ejecutamos un grupo de instrucciones
document.getElementById("task-form").addEventListener("submit", function (e){
    // Capturamos los datos del formulariuo y los asignamos a unas variables representativas
    const name = document.getElementById("name_t").value
    const brand = document.getElementById("priority_t").value
    const price = document.getElementById("time_t").value
    const task = new Task(name, brand, price)

    const ui = new UI()
    ui.addTask(task)
    ui.resetForm()
    ui.showMessage("Task Added Successfully", "success", "fa-calendar-plus")
    
    //console.log(product)

    // Evita que el evento por default del submit refresque la pagina
    e.preventDefault();
})


//capturar el evento clic sobre le boton de eliminar producto
document.getElementById("task-list").addEventListener("click", function (e){
    const ui = new UI()
    //console.log(e.target)
    ui.deleteTask(e.target)
})

// Cambiamos a tema light
document.querySelector(".light_t").addEventListener("click", function (e){
    document.getElementById("body-app").classList.add("body-light")
    document.getElementById("body-app").classList.remove("body-dark")
})

// Cambiamos a tema Dark
document.querySelector(".dark_t").addEventListener("click", function (e){
    document.getElementById("body-app").classList.add("body-dark")
    document.getElementById("body-app").classList.remove("body-light")
})

// anexamos cantidad de tasks
var countT = 0, countTW = 0
function countTask(t){
    
    countT += t
    
    document.getElementById("countVal").innerText=countT
}

// anexamos taks completed
function countTaskW(t){
    
    countTW += t
    
    document.getElementById("countValW").innerText=countTW
}

// reestablecemos la App a 0

window.onload = function() {
    countTask(0)
    countTaskW(0)
    
  }
