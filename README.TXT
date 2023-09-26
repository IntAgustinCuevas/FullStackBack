--Endpoints:

'/' (Metodo GET) :  Pagina de inicio del juego, envia como respuesta el texto para el boton que 
        da inicio al juego.

'/home' (Metodo GET) : Pagina principal del juego, donde se podra seleccionar entre registrarse 
                       o iniciar sesion.

'/users' (Metodo GET)  : Acceder a todos los usuarios registrados en la base de datos. 

'/users/:id' (Metodo GET)  : Acceder a un usuario registrado en la base de datos mediante su ID.

'/users/add' (Metodo POST)  : Registrar un nuevo usuario en la base de datos.

'/users/login' (Metodo POST)  : Verificar si un usuario esta registrado en la base de datos mediante 
                                su email y contraseña.

'/characters' (Metodo GET)  : Acceder a todos los personajes almacenados en la base de datos.

'/characters/add' (Metodo POST)  : Crear un nuevo personaje. 

'/characters/:id' (Metodo GET)  :Acceder a un personaje mediante su ID.

'/outfits' (Metodo GET)  : Acceder a los atuendos en la base de datos.

'/outfits/add' (Metodo POST)  : Guardar la seleccion de vestimentas de los personajes.

'/jackets' (Metodo GET)  : Acceder a la vestimenta de la parte de arriba.

