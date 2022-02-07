import { Auxiliary } from "../models/Auxiliary";
import * as mysql from "mysql";
import * as util from "util";

export class AuxiliaryDAO {
    //Class members 
    private pool;

    /**
     * Non-default constructor.
     * @param pool Connection pool
     */
    constructor(pool: any) {
        // Set all class properties 
        this.pool = pool;
    }

    /**
   * CRUD method to return all Auxiliaries. 
   * 
   * @param callback Callback function with an array of type Auxiliary. 
   */
    public findAuxiliaries(callback: any) {
        //List of Auxiliary to return 
        let auxs: Auxiliary[] = [];


        //Get a pooled connection to the database, run the query to get all the distinct Auxiliaries, and return the List of Auxiliaries 
        this.pool.getConnection(function (err: any, connection: any) {

            //Throw error if an error
            if (err) throw err


            //Run query 
            connection.query('SELECT * FROM auxiliary', function (err: any, rows: any, fields: any) {
                //Throw error if an error 
                if (err) throw err

                //Loop over result set and save the Auxiliary into list
                for (let x = 0; x < rows.length; x++) {
                    auxs.push(new Auxiliary(rows[x].auxiliary_id, rows[x].name, rows[x].user_id, rows[x].lift_type, rows[x].description));
                }
                console.log(rows);
                //Do a callback to return the results 
                callback(auxs);
            });
            //Release connection in the pool 
            connection.release();
        });
    }

    /**
     * CRUD method to return all Auxiliaries for a auxId
     * @param auxId userId of the user to retrieve auxilaries for  
     * @param callback Callback function with an array of type Auxiliary
     */
    public findAuxiliariesByAuxId(auxId: number, callback: any) {
        //List of Auxiliaries to return 
        let auxs: Auxiliary[] = [];
        console.log(auxId);

        // Get pooled database connection and run queries   
        this.pool.getConnection(async function (err: any, connection: any) {
            // Throw error if an error
            if (err) throw err;

            // Use Promisfy Util to make an async function and update Auxiliary
            await connection.query('SELECT * FROM auxiliary WHERE auxiliary_id=?', [auxId], function (err: any, rows: any, fields: any) {

                // Throw error if an error
                if (err) throw err;
                //Loop over result set and save the Auxiliary in the List of auxiliaries 
                for (let x = 0; x < rows.length; x++) {
                    auxs.push(new Auxiliary(rows[x].auxiliary_id, rows[x].name, rows[x].user_id, rows[x].lift_type, rows[x].description));
                }
                console.log(rows);
                // Do a callback to return the results
                callback(auxs);

            });

            // Release connection in the pool
            connection.release();

        });
    }

    /**
     * CRUD method to return all Auxiliaries for a name
     * @param name name of the user to retrieve auxilaries for  
     * @param callback Callback function with an array of type Auxiliary
     */
    public findAuxiliariesByName(name: string, callback: any) {
        //List of Auxiliaries to return 
        let auxs: Auxiliary[] = [];
        console.log(name);

        // Get pooled database connection and run queries   
        this.pool.getConnection(async function (err: any, connection: any) {
            // Throw error if an error
            if (err) throw err;

            // Use Promisfy Util to make an async function and update Auxiliary
            await connection.query('SELECT * FROM auxiliary WHERE name LIKE ?', ['%' + name + '%'], function (err: any, rows: any, fields: any) {
                // Throw error if an error
                if (err) throw err;

                //Loop over result set and save the Auxiliary in the List of auxiliaries 
                for (let x = 0; x < rows.length; x++) {
                    auxs.push(new Auxiliary(rows[x].auxiliary_id, rows[x].name, rows[x].user_id, rows[x].lift_type, rows[x].description));

                }
                console.log(rows);

                // Do a callback to return the results
                callback(auxs);

            });

            // Release connection in the pool
            connection.release();

        });
    }
    /**
     * CRUD method to return all Auxiliaries for a liftType
     * @param liftType liftType of the user to retrieve auxilaries for  
     * @param callback Callback function with an array of type Auxiliary
     */
     public findAuxiliariesByLiftType(liftType: number, callback: any) {
        //List of Auxiliaries to return 
        let auxs: Auxiliary[] = [];
        console.log(liftType);

        // Get pooled database connection and run queries   
        this.pool.getConnection(async function (err: any, connection: any) {
            // Throw error if an error
            if (err) throw err;

            // Use Promisfy Util to make an async function and update Auxiliary
            await connection.query('SELECT * FROM auxiliary WHERE lift_type=?', [liftType], function (err: any, rows: any, fields: any) {

                // Throw error if an error
                if (err) throw err;

                //Loop over result set and save the Auxiliary in the List of auxiliaries 
                for (let x = 0; x < rows.length; x++) {
                    auxs.push(new Auxiliary(rows[x].auxiliary_id, rows[x].name, rows[x].user_id, rows[x].lift_type, rows[x].description));
                }
                console.log(rows);
                // Do a callback to return the results
                callback(auxs);

            });

            // Release connection in the pool
            connection.release();

        });
    }

    /**
      * CRUD method to return all Auxiliaries for a userId
      * @param userId userId of the user to retrieve auxilaries for  
      * @param callback Callback function with an array of type Auxiliary
     */
    public findAuxiliariesByUserId(userId: number, callback: any) {
        //List of Auxiliaries to return 
        let auxs: Auxiliary[] = [];
        console.log(userId);

        // Get pooled database connection and run queries   
        this.pool.getConnection(async function (err: any, connection: any) {
            // Throw error if an error
            if (err) throw err;

            // Use Promisfy Util to make an async function and update Auxiliary
            await connection.query('SELECT * FROM auxiliary WHERE user_id=?', [userId], function (err: any, rows: any, fields: any) {

                // Throw error if an error
                if (err) throw err;
                //Loop over result set and save the Auxiliary in the List of auxiliaries 
                for (let x = 0; x < rows.length; x++) {
                    auxs.push(new Auxiliary(rows[x].auxiliary_id, rows[x].name, rows[x].user_id, rows[x].lift_type, rows[x].description));
                }
                console.log(rows);
                // Do a callback to return the results
                callback(auxs);

            });

            // Release connection in the pool
            connection.release();

        });
    }

    /**
    * CRUD method to update an Auxiliary.
    * 
    * @param auxiliary auxiliary to update.
    * @param callback Callback function with number of rows updated.  
    */
    public update(auxiliary: Auxiliary, callback: any) {
        // Get pooled database connection and run queries   
        this.pool.getConnection(function (err: any, connection: any) {
            // Throw error if an error
            if (err) throw err;

            // Use Promisfy Util to make an async function and update Auxiliary
            let changes = 0;
            connection.query = util.promisify(connection.query);
            let result1 = connection.query('UPDATE auxiliary SET name=?, user_id=?, lift_type=?, description=? WHERE auxiliary_id=?', [auxiliary.Name, auxiliary.UserId, auxiliary.LiftType, auxiliary.Description, auxiliary.Id]);
            if (result1.changedRows != 0)
                ++changes;
            console.log("Successfully updated: " + JSON.stringify(auxiliary));
            // Release connection in the pool
            connection.release();

            // Do a callback to return the results
            callback(changes);
        });
    }

    /**
    * CRUD method to create an Auxiliary.
    * 
    * @param auxiliary auxiliary to update.
    * @param callback Callback function with -1 if an error else Auxiliary Id
    */
    public create(auxiliary: Auxiliary, callback: any) {
        // Get pooled database connection and run queries   
        this.pool.getConnection(async function (err: any, connection: any) {
            // Throw error if an error
            if (err) throw err;
            connection.query = util.promisify(connection.query);
            let result = await connection.query('INSERT INTO auxiliary (name, user_id, lift_type, description) VALUES (?,?,?,?)', [auxiliary.Name, auxiliary.UserId, auxiliary.LiftType, auxiliary.Description]);

            if (result.affectedRows != 1)
                callback(-1);

            let auxId = result.insertId;
            // Release connection in the pool
            connection.release();

            // Do a callback to return the results
            callback(auxId);
        });
    }

    /**
     * CRUD method to delete an Auxiliary. 
     * 
     * @param auxId Auxiliary Id to delete. 
     * @param callback Callback function with number of rows deleted. 
     */
    public delete(auxId: number, callback: any) {
        //Get pooled database connection and run queries 
        this.pool.getConnection(async function (err: any, connection: any) {
            //Throw error if an error 
            if (err) throw err;

            //Use Promsify Util to make an async function
            let changes = 0;
            connection.query = util.promisify(connection.query);
            let result1 = await connection.query('DELETE FROM auxiliary WHERE auxiliary_id=?', [auxId]);
            changes = changes + result1.affectedRows;

            //Release connection in the pool 
            connection.release();

            //Do a callback to return the results 
            callback(changes);
        });
    }
}






