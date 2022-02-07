//Application Dependencies 
const { Auxiliary } = require('./lib/app/models/Auxiliary');
const mysql = require('mysql');
const { AuxiliaryDAO } = require('./lib/app/database/AuxiliaryDAO.js');
const bodyParser = require('body-parser'); 


//Create an instance of an Express Application on port 3000 
const express = require('express'); 
const { use } = require('express/lib/application');
const app = express(); 
const port = 3000; 

//Database configuration 
const dbHost = "localhost"
const dbPort = 8889; 
const dbUsername = "root";
const dbPassword = "root"; 
const database = "lift_up";
const pool = initDbConnection();
app.use(bodyParser.json()); 

//Route code beings 
//GET Route at Root '/' that returns a Test Text message 
app.get('/', function (_req, res)
{
    //Return Test Text 
    console.log("In GET / Route"); 
    res.send('Welcome to liftUp!');
});

//GET Route at '/auxiliary' that returns all Auxiliaries from the database 
app.get('/auxiliary', function (_req, res)
{
    //Return Auxiliaries List as JSON, call AuxiliaryDAO.findAuxilaries(), and returns JSON array of Auxiliaries (a string)
    console.log('In GET /auxiliary Route');
    let dao = new AuxiliaryDAO(pool); 
    dao.findAuxiliaries(function(auxs)
    {
        res.json(auxs);
    });
});

//GET Route at '/auxiliary/:auxId' that returns all Auxilaries from the database for a auxId
app.get('/auxiliary/:auxId', function (_req, res)
{
    //Return Artists List as JSON, call AuxiliaryDAO.findAuxiliaryByAuxId(), and returns JSON array of Auxiliaries (a string)
    console.log('In GET /auxiliary/:auxId Route');
    let dao = new AuxiliaryDAO(pool); 
    dao.findAuxiliariesByAuxId(_req.params.auxId, function(auxs)
    {
        res.json(auxs);
    });
});

//GET Route at '/auxiliary/:userId' that returns all Auxilaries from the database for a userId
app.get('/auxiliary/user/:userId', function (_req, res)
{
    //Return Artists List as JSON, call AuxiliaryDAO.findAuxiliaryByUserId(), and returns JSON array of Auxiliaries (a string)
    console.log('In GET /auxiliary/user/userId Route');
    let dao = new AuxiliaryDAO(pool); 
    dao.findAuxiliariesByUserId(_req.params.userId, function(auxs)
    {
        res.json(auxs);
    });
});

//GET Route at '/auxiliary/search/liftType/:liftType' that returns all Auxilaries from the database for a liftType
app.get('/auxiliary/liftType/:liftType', function (_req, res)
{
    //Return Artists List as JSON, call AuxiliaryDAO.findAuxiliaryByLiftType(), and returns JSON array of Auxiliaries (a string)
    console.log('In GET /auxiliary/liftType/:liftType Route');
    let dao = new AuxiliaryDAO(pool); 
    dao.findAuxiliariesByLiftType(_req.params.liftType, function(auxs)
    {
        res.json(auxs);
    });
});

//GET Route at '/auxiliary/search/name/:name that returns all Auxilaries from the database for a name
app.get('/auxiliary/search/name/:name', function (_req, res)
{
    //Return Artists List as JSON, call AuxiliaryDAO.findAuxiliaryByName(), and returns JSON array of Auxiliaries (a string)
    console.log('In GET /auxiliary/search/name/:name Route');
    let dao = new AuxiliaryDAO(pool); 
    dao.findAuxiliariesByName(_req.params.name, function(auxs)
    {
        res.json(auxs);
    });
});

// PUT Route at '/auxiliary' that updates an Auxiliary in the database
app.put('/auxiliary', function (req, res)
{
    // If invalid PUT Body then return 400 response else update Auxiliary to the database
    console.log('In PUT /auxiliary Route with Post of ' + JSON.stringify(req.body));
    if(!req.body.name)
    {
        // Check for valid PUT Body, note this should validate EVERY field of the POST
        res.status(400).json({error: "Invalid Auxiliary Posted"});
    }
    else
    {
        // Create an Album object model from Posted Data
        let aux = new Auxiliary(req.body.id, req.body.name, req.body.userId, req.body.liftType, req.body.description);

        // Call AuxiliaryDAO.update() to update an Auxiliary from Posted Data and return an OK response     
        let dao = new AuxiliaryDAO(pool);
        dao.update(aux, function(changes)
        {
            if(changes == 0)
                res.status(200).json({"error" : "Updating Auxiliary passed but nothing was changed"})
            else
                res.status(200).json({"success" : "Updating Auxiliary passed and data was changed"});
        });     
      }
})

//POST Route at '/auxiliary' that adds an Auxiliary to the database 
app.post('/auxiliary', function (req, res)
{
   console.log(req); 

   //If Invalid POST Body then return 400 reponse else add Album and Tracks to the database 
   console.log('In POST /auxiliary Route with a Post of ' + JSON.stringify(req.body)); 
   if(!req.body.name)
   {
       //Check for valid POST Body, note this should validate EVERY field of the POST 
       res.status(400).json({error : "Invalid Auxiliary Posted"}); 
   }
   else
   {
       //Create an Auxiliary Object model from Posted Data
       let aux = new Auxiliary(-1, req.body.name, req.body.userId, req.body.liftType, req.body.description); 

       //Call AuxililaryDAO.create() to create an Auxiliary from Posted Data and return an OK response 
       let dao = new AuxiliaryDAO(pool); 
       dao.create(aux, function(auxId)
       {
           if(auxId == -1)
               res.status(200).json({"error" : "Creating Auxiliary failed"});
           else   
               res.status(200).json({"success" : "Creating Auxiliary passed with an Album ID of " + auxId});
       });
   }
});

// DELETE Route at '/auxiliary/:id' that deletes an Album given an Auxiliary ID from the database
app.delete('/auxiliary/:id', function (req, res)
{
    // Get the Album
    console.log('In DELETE /auxiliary Route with ID of ' + req.params.id);
    let auxId = Number(req.params.id);
 
    // Call AuxiliaryDAO.delete() to delete an Auxiliary from the database and return if passed
    let dao = new AuxiliaryDAO(pool);
    dao.delete(auxId, function(changes)
    {
        if(changes == 0)
            res.status(200).json({"error" : "Delete Auxiliary failed"})
        else
            res.status(200).json({"success" : "Delete Auxiliary passed"})
    });
 })



// Route code ends
// Start the Server
app.listen(port, () => 
{
    console.log(`Example app listening on port ${port}!`);
});

//* **************** Private Helper Methods **************** */
function initDbConnection()
{
    return mysql.createPool({host: dbHost, port: dbPort, user: dbUsername, password: dbPassword, database: database, connectionLimit: 10});  
}   