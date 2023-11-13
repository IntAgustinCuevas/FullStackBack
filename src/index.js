const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


//------------Settings--------------
require('dotenv').config();
app.set('port', process.env.PORT || 4000);
app.use(express.json());
app.use(cors());


//--------Controllers----------------
const userController = require('../src/Controllers/user');
const characterController = require('../src/Controllers/character');

//--------Start server---------------
app.listen(app.get('port'), () => {
    console.log(`Server running on port`,app.get('port'));
});

//--------Connetc to MongoDB----------
mongoose
.connect(process.env.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("connected");
})
.catch((err) => console.log(err));

//--------------LLamadas--------------
//-----------GET usuarios-----------------------
// GET de todos los usuarios de la base de datos.
app.get('/users', async (req, res) => {
	
	let limit = req.query.limit;
	let offset = req.query.offset;

	try {
		const result = await userController.getAllUsers(limit,offset);
		res.status(200).json(result);
	} 
	catch (err) {
		res.status(500).send('Error, intentelo mas tarde.');
		console.log(err);
	}
}); 

// GET de un usuario de la base de datos.
app.get('/users/:id', async (req, res) => {
  
  let id = req.params.id;
  
  try {
    const result = await userController.getUser(id);
    res.status(200).json(result);
  } 
  catch (err) {
    res.status(500).send('Error, intentelo mas tarde.');
    console.log(err);
  }
}); 

//-----------GET personajes----------
//GET de todos los personajes de un usuario.
app.get('/characters/:id' , async (req,res) => {
	let userId = req.params.id;

	try {
        const result = await characterController.getUserCharacters(userId);
        res.status(200).json(result);
    }catch(error){
		res.status(500).send('Error, intentelo mas tarde');
	}
})

//GET de un personaje.
app.get('/character/:name', async (req, res) => {
  
	let name = req.params.name;
	
	try {
	  const result = await characterController.getOneCharacter(name);
	  res.status(200).json(result);
	} 
	catch (err) {
	  res.status(500).send('Error, intentelo mas tarde.');
	  console.log(err);
	}
  });


//----------------POST------------------------------

//POST crear nuevo usuario
app.post('/users/add' , async (req , res) => {
	let name = req.body.name;
	let email = req.body.email;
	let password = req.body.password;
	console.log(name,email,password);
	try{
		const result = await userController.createUser(name,email,password);
		if(result){
			res.status(201).send('Usuario creado correctamente'); 
		}else{
			res.status(409).send('El usuario ya existe');
		}  
	}catch(error){
		  res.status(500).send('Error al crear el usuario.'); 
		}
	});

//POST verificar usuario.
app.post('/users/login' , async (req, res) => {
	let email = req.body.email;
	let password = req.body.password;
	
	try{
		const result = await userController.loginUser(email,password);
		if(result){
			res.status(200).json(result);
			console.log('Login successful');
		}
	}catch(error){
		res.status(500).send('Error inesperado.');
	}
});	

//POST crear personaje.
app.post('/characters/add' , async (req, res) => {
	let userId = req.body.userId
	let name = req.body.name;
	let personaje = req.body.personaje;
	let parteSuperior = req.body.parteSuperior;
	let pantalon = req.body.pantalon;
	let calzado = req.body.calzado;
	console.log(userId)
	try{	
		const result = await characterController.createCharacter(userId,name,personaje,parteSuperior,pantalon,calzado);	
		console.log(result);
		if(result){
			res.status(201).send('Personaje creado correctamente');
		}else{
			res.status(409).send('Nombre de personaje en uso.');
		}
	}catch(error){
		console.error(error);
		res.status(500).send('Ocurrio un error.');
	}
});



