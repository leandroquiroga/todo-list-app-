# TODO LIST 📝
La idea de este todo list es que el usuario pueda colocar un título y una descripción a su tarea, el titulo puede llevar un titulo a la tarea, la hora de realizar dicha tarea, entre tantas. Permite guardar las tareas usando el localStorage de nuestro navegador, así que se puede salir de la aplicación y volver a entrar y nuestra tarea seguirá estando disponible.

[todo-list-app](https://user-images.githubusercontent.com/80013958/131264782-9610ff8b-90b3-415f-ab4a-3caad4703022.gif)

# Construido con 🛠️
Este proyecto se realizo con las siguientes herramientas:

- HTML5
- CSS3
- Bootstrap
- Grid
- Flex-box
- JavaScript

# Funcionalidades ⚙️

## Validación de input
Esta funcionabilidad nos permite que saber si el usuario ingresa un título, una descripción de la tarea. En caso de detectar de no cumplir con una de ellas o ambas, nos mostrar un mensaje de error y deshabilita el botón “Guardar tarea” para no guardar la tarea si no cumple con los requistos

## Local Storage
Usamos el localStorage para poder guardar nuestra tarea así podemos salir y entrar a la aplicación y la tarea seguirá estando. En el localStorage se guarda en un array que contiene varios con objetos con sus respectivas propiedades. Al eliminar las tareas ya finalizadas se eliminan del localStorage y al concluir con todas las tareas se guarda un array vacio.

## Data time 
Usamos la funciones de new Date para indicar la fecha (día, mes, año) y la hora en la que se creo la tarea, así el usuario sabe cuando creo la tarea.  

## Scroll up 
Contenemos un scroll up que solo se activa cuando estamos en modo Mobile, al llegar a determinada posición del scroll nos aparece una flecha con la posibilidad de presionar y nos devuelve al principio de la app 

## Card task 
Al crea una tarea, se nos crea una carta dinámicamente con el título, la descripción y la fecha de creación y un botón de cerrar, que al darle click se elimina de app y del localStorage

## Spinner 
Este spinner de Bootstrap aparece durante un tiempo determinado luego de haber creado la tarea correctamente, simulado que tarda la creación de la carta con la tarea. 

 ## Task 
Cada tarea se guarda en un objeto con un ID, este ID se crea a partir de números aleatorios del 1 al 500000 (como máximo), esto nos permite que al dar click en el botón de eliminar podamos filtrar el id del localStorage así podemos eliminamos la tarea correspondiente, tanto como del nuestro todo list y del array alojado del localStorage.  


# Posibles mejoras 🚀
-	Mensaje de confirmación al eliminar una tarea (Modal)
-	Mensaje de que se agregó una tarea satisfactoriamente 
-	Contador de tareas 
-	Tareas completadas. 


# Despliegue 📦
[![Netlify Status](https://api.netlify.com/api/v1/badges/9410b6aa-2074-43dd-90fc-8626110ce227/deploy-status)](https://todolistask.netlify.app/)

# Contacto 📫
- [Linkedin](https://www.linkedin.com/in/leanquiroga95/)
- [Frontend Mentor](https://www.frontendmentor.io/profile/leandroquiroga)
- [Email](mailto:leandroquiroga9514@gmail.com)

# Autor 👤
Realizado con ❤️ por [Leandro Quiroga](https://github.com/leandroquiroga);
