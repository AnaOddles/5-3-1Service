"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuxiliaryDAO = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Auxiliary = require("../models/Auxiliary");

var util = _interopRequireWildcard(require("util"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AuxiliaryDAO = /*#__PURE__*/function () {
  //Class members 

  /**
   * Non-default constructor.
   * @param pool Connection pool
   */
  function AuxiliaryDAO(pool) {
    (0, _classCallCheck2.default)(this, AuxiliaryDAO);
    (0, _defineProperty2.default)(this, "pool", void 0);
    // Set all class properties 
    this.pool = pool;
  }
  /**
  * CRUD method to return all Auxiliaries. 
  * 
  * @param callback Callback function with an array of type Auxiliary. 
  */


  (0, _createClass2.default)(AuxiliaryDAO, [{
    key: "findAuxiliaries",
    value: function findAuxiliaries(callback) {
      //List of Auxiliary to return 
      var auxs = []; //Get a pooled connection to the database, run the query to get all the distinct Auxiliaries, and return the List of Auxiliaries 

      this.pool.getConnection(function (err, connection) {
        //Throw error if an error
        if (err) throw err; //Run query 

        connection.query('SELECT * FROM auxiliary', function (err, rows, fields) {
          //Throw error if an error 
          if (err) throw err; //Loop over result set and save the Auxiliary into list

          for (var x = 0; x < rows.length; x++) {
            auxs.push(new _Auxiliary.Auxiliary(rows[x].auxiliary_id, rows[x].name, rows[x].user_id, rows[x].lift_type, rows[x].description));
          }

          console.log(rows); //Do a callback to return the results 

          callback(auxs);
        }); //Release connection in the pool 

        connection.release();
      });
    }
    /**
     * CRUD method to return all Auxiliaries for a auxId
     * @param auxId userId of the user to retrieve auxilaries for  
     * @param callback Callback function with an array of type Auxiliary
     */

  }, {
    key: "findAuxiliariesByAuxId",
    value: function findAuxiliariesByAuxId(auxId, callback) {
      //List of Auxiliaries to return 
      var auxs = [];
      console.log(auxId); // Get pooled database connection and run queries   

      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(err, connection) {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!err) {
                    _context.next = 2;
                    break;
                  }

                  throw err;

                case 2:
                  _context.next = 4;
                  return connection.query('SELECT * FROM auxiliary WHERE auxiliary_id=?', [auxId], function (err, rows, fields) {
                    // Throw error if an error
                    if (err) throw err; //Loop over result set and save the Auxiliary in the List of auxiliaries 

                    //Loop over result set and save the Auxiliary in the List of auxiliaries 
                    for (var x = 0; x < rows.length; x++) {
                      auxs.push(new _Auxiliary.Auxiliary(rows[x].auxiliary_id, rows[x].name, rows[x].user_id, rows[x].lift_type, rows[x].description));
                    }

                    console.log(rows); // Do a callback to return the results

                    // Do a callback to return the results
                    callback(auxs);
                  });

                case 4:
                  // Release connection in the pool
                  connection.release();

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    /**
     * CRUD method to return all Auxiliaries for a name
     * @param name name of the user to retrieve auxilaries for  
     * @param callback Callback function with an array of type Auxiliary
     */

  }, {
    key: "findAuxiliariesByName",
    value: function findAuxiliariesByName(name, callback) {
      //List of Auxiliaries to return 
      var auxs = [];
      console.log(name); // Get pooled database connection and run queries   

      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(err, connection) {
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!err) {
                    _context2.next = 2;
                    break;
                  }

                  throw err;

                case 2:
                  _context2.next = 4;
                  return connection.query('SELECT * FROM auxiliary WHERE name LIKE ?', ['%' + name + '%'], function (err, rows, fields) {
                    // Throw error if an error
                    if (err) throw err; //Loop over result set and save the Auxiliary in the List of auxiliaries 

                    //Loop over result set and save the Auxiliary in the List of auxiliaries 
                    for (var x = 0; x < rows.length; x++) {
                      auxs.push(new _Auxiliary.Auxiliary(rows[x].auxiliary_id, rows[x].name, rows[x].user_id, rows[x].lift_type, rows[x].description));
                    }

                    console.log(rows); // Do a callback to return the results

                    // Do a callback to return the results
                    callback(auxs);
                  });

                case 4:
                  // Release connection in the pool
                  connection.release();

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
    /**
     * CRUD method to return all Auxiliaries for a liftType
     * @param liftType liftType of the user to retrieve auxilaries for  
     * @param callback Callback function with an array of type Auxiliary
     */

  }, {
    key: "findAuxiliariesByLiftType",
    value: function findAuxiliariesByLiftType(liftType, callback) {
      //List of Auxiliaries to return 
      var auxs = [];
      console.log(liftType); // Get pooled database connection and run queries   

      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(err, connection) {
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!err) {
                    _context3.next = 2;
                    break;
                  }

                  throw err;

                case 2:
                  _context3.next = 4;
                  return connection.query('SELECT * FROM auxiliary WHERE lift_type=?', [liftType], function (err, rows, fields) {
                    // Throw error if an error
                    if (err) throw err; //Loop over result set and save the Auxiliary in the List of auxiliaries 

                    //Loop over result set and save the Auxiliary in the List of auxiliaries 
                    for (var x = 0; x < rows.length; x++) {
                      auxs.push(new _Auxiliary.Auxiliary(rows[x].auxiliary_id, rows[x].name, rows[x].user_id, rows[x].lift_type, rows[x].description));
                    }

                    console.log(rows); // Do a callback to return the results

                    // Do a callback to return the results
                    callback(auxs);
                  });

                case 4:
                  // Release connection in the pool
                  connection.release();

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
    /**
      * CRUD method to return all Auxiliaries for a userId
      * @param userId userId of the user to retrieve auxilaries for  
      * @param callback Callback function with an array of type Auxiliary
     */

  }, {
    key: "findAuxiliariesByUserId",
    value: function findAuxiliariesByUserId(userId, callback) {
      //List of Auxiliaries to return 
      var auxs = [];
      console.log(userId); // Get pooled database connection and run queries   

      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(err, connection) {
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!err) {
                    _context4.next = 2;
                    break;
                  }

                  throw err;

                case 2:
                  _context4.next = 4;
                  return connection.query('SELECT * FROM auxiliary WHERE user_id=?', [userId], function (err, rows, fields) {
                    // Throw error if an error
                    if (err) throw err; //Loop over result set and save the Auxiliary in the List of auxiliaries 

                    //Loop over result set and save the Auxiliary in the List of auxiliaries 
                    for (var x = 0; x < rows.length; x++) {
                      auxs.push(new _Auxiliary.Auxiliary(rows[x].auxiliary_id, rows[x].name, rows[x].user_id, rows[x].lift_type, rows[x].description));
                    }

                    console.log(rows); // Do a callback to return the results

                    // Do a callback to return the results
                    callback(auxs);
                  });

                case 4:
                  // Release connection in the pool
                  connection.release();

                case 5:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
    /**
    * CRUD method to update an Auxiliary.
    * 
    * @param auxiliary auxiliary to update.
    * @param callback Callback function with number of rows updated.  
    */

  }, {
    key: "update",
    value: function update(auxiliary, callback) {
      // Get pooled database connection and run queries   
      this.pool.getConnection(function (err, connection) {
        // Throw error if an error
        if (err) throw err; // Use Promisfy Util to make an async function and update Auxiliary

        var changes = 0;
        connection.query = util.promisify(connection.query);
        var result1 = connection.query('UPDATE auxiliary SET name=?, user_id=?, lift_type=?, description=? WHERE auxiliary_id=?', [auxiliary.Name, auxiliary.UserId, auxiliary.LiftType, auxiliary.Description, auxiliary.Id]);
        if (result1.changedRows != 0) ++changes;
        console.log("Successfully updated: " + JSON.stringify(auxiliary)); // Release connection in the pool

        connection.release(); // Do a callback to return the results

        callback(changes);
      });
    }
    /**
    * CRUD method to create an Auxiliary.
    * 
    * @param auxiliary auxiliary to update.
    * @param callback Callback function with -1 if an error else Auxiliary Id
    */

  }, {
    key: "create",
    value: function create(auxiliary, callback) {
      // Get pooled database connection and run queries   
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(err, connection) {
          var result, auxId;
          return _regenerator.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!err) {
                    _context5.next = 2;
                    break;
                  }

                  throw err;

                case 2:
                  connection.query = util.promisify(connection.query);
                  _context5.next = 5;
                  return connection.query('INSERT INTO auxiliary (name, user_id, lift_type, description) VALUES (?,?,?,?)', [auxiliary.Name, auxiliary.UserId, auxiliary.LiftType, auxiliary.Description]);

                case 5:
                  result = _context5.sent;
                  if (result.affectedRows != 1) callback(-1);
                  auxId = result.insertId; // Release connection in the pool

                  connection.release(); // Do a callback to return the results

                  callback(auxId);

                case 10:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
    /**
     * CRUD method to delete an Auxiliary. 
     * 
     * @param auxId Auxiliary Id to delete. 
     * @param callback Callback function with number of rows deleted. 
     */

  }, {
    key: "delete",
    value: function _delete(auxId, callback) {
      //Get pooled database connection and run queries 
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(err, connection) {
          var changes, result1;
          return _regenerator.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!err) {
                    _context6.next = 2;
                    break;
                  }

                  throw err;

                case 2:
                  //Use Promsify Util to make an async function
                  changes = 0;
                  connection.query = util.promisify(connection.query);
                  _context6.next = 6;
                  return connection.query('DELETE FROM auxiliary WHERE auxiliary_id=?', [auxId]);

                case 6:
                  result1 = _context6.sent;
                  changes = changes + result1.affectedRows; //Release connection in the pool 

                  connection.release(); //Do a callback to return the results 

                  callback(changes);

                case 10:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x11, _x12) {
          return _ref6.apply(this, arguments);
        };
      }());
    }
  }]);
  return AuxiliaryDAO;
}();

exports.AuxiliaryDAO = AuxiliaryDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYXRhYmFzZS9BdXhpbGlhcnlEQU8udHMiXSwibmFtZXMiOlsiQXV4aWxpYXJ5REFPIiwicG9vbCIsImNhbGxiYWNrIiwiYXV4cyIsImdldENvbm5lY3Rpb24iLCJlcnIiLCJjb25uZWN0aW9uIiwicXVlcnkiLCJyb3dzIiwiZmllbGRzIiwieCIsImxlbmd0aCIsInB1c2giLCJBdXhpbGlhcnkiLCJhdXhpbGlhcnlfaWQiLCJuYW1lIiwidXNlcl9pZCIsImxpZnRfdHlwZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsInJlbGVhc2UiLCJhdXhJZCIsImxpZnRUeXBlIiwidXNlcklkIiwiYXV4aWxpYXJ5IiwiY2hhbmdlcyIsInV0aWwiLCJwcm9taXNpZnkiLCJyZXN1bHQxIiwiTmFtZSIsIlVzZXJJZCIsIkxpZnRUeXBlIiwiRGVzY3JpcHRpb24iLCJJZCIsImNoYW5nZWRSb3dzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImFmZmVjdGVkUm93cyIsImluc2VydElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0lBRWFBLFk7QUFDVDs7QUFHQTtBQUNKO0FBQ0E7QUFDQTtBQUNJLHdCQUFZQyxJQUFaLEVBQXVCO0FBQUE7QUFBQTtBQUNuQjtBQUNBLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7Ozs7V0FDSSx5QkFBdUJDLFFBQXZCLEVBQXNDO0FBQ2xDO0FBQ0EsVUFBSUMsSUFBaUIsR0FBRyxFQUF4QixDQUZrQyxDQUtsQzs7QUFDQSxXQUFLRixJQUFMLENBQVVHLGFBQVYsQ0FBd0IsVUFBVUMsR0FBVixFQUFvQkMsVUFBcEIsRUFBcUM7QUFFekQ7QUFDQSxZQUFJRCxHQUFKLEVBQVMsTUFBTUEsR0FBTixDQUhnRCxDQU16RDs7QUFDQUMsUUFBQUEsVUFBVSxDQUFDQyxLQUFYLENBQWlCLHlCQUFqQixFQUE0QyxV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QUFDQTs7OztXQUNJLGlCQUFjQSxLQUFkLEVBQTZCcEIsUUFBN0IsRUFBNEM7QUFDeEM7QUFDQSxXQUFLRCxJQUFMLENBQVVHLGFBQVY7QUFBQSw0RkFBd0Isa0JBQWdCQyxHQUFoQixFQUEwQkMsVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRWhCRCxHQUZnQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSx3QkFFTEEsR0FGSzs7QUFBQTtBQUlwQjtBQUNJcUIsa0JBQUFBLE9BTGdCLEdBS04sQ0FMTTtBQU1wQnBCLGtCQUFBQSxVQUFVLENBQUNDLEtBQVgsR0FBbUJvQixJQUFJLENBQUNDLFNBQUwsQ0FBZXRCLFVBQVUsQ0FBQ0MsS0FBMUIsQ0FBbkI7QUFOb0I7QUFBQSx5QkFPQUQsVUFBVSxDQUFDQyxLQUFYLENBQWlCLDRDQUFqQixFQUErRCxDQUFDZSxLQUFELENBQS9ELENBUEE7O0FBQUE7QUFPaEJPLGtCQUFBQSxPQVBnQjtBQVFwQkgsa0JBQUFBLE9BQU8sR0FBR0EsT0FBTyxHQUFHRyxPQUFPLENBQUNVLFlBQTVCLENBUm9CLENBVXBCOztBQUNBakMsa0JBQUFBLFVBQVUsQ0FBQ2UsT0FBWCxHQVhvQixDQWFwQjs7QUFDQW5CLGtCQUFBQSxRQUFRLENBQUN3QixPQUFELENBQVI7O0FBZG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV4aWxpYXJ5IH0gZnJvbSBcIi4uL21vZGVscy9BdXhpbGlhcnlcIjtcbmltcG9ydCAqIGFzIG15c3FsIGZyb20gXCJteXNxbFwiO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwidXRpbFwiO1xuXG5leHBvcnQgY2xhc3MgQXV4aWxpYXJ5REFPIHtcbiAgICAvL0NsYXNzIG1lbWJlcnMgXG4gICAgcHJpdmF0ZSBwb29sO1xuXG4gICAgLyoqXG4gICAgICogTm9uLWRlZmF1bHQgY29uc3RydWN0b3IuXG4gICAgICogQHBhcmFtIHBvb2wgQ29ubmVjdGlvbiBwb29sXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocG9vbDogYW55KSB7XG4gICAgICAgIC8vIFNldCBhbGwgY2xhc3MgcHJvcGVydGllcyBcbiAgICAgICAgdGhpcy5wb29sID0gcG9vbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICogQ1JVRCBtZXRob2QgdG8gcmV0dXJuIGFsbCBBdXhpbGlhcmllcy4gXG4gICAqIFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhbiBhcnJheSBvZiB0eXBlIEF1eGlsaWFyeS4gXG4gICAqL1xuICAgIHB1YmxpYyBmaW5kQXV4aWxpYXJpZXMoY2FsbGJhY2s6IGFueSkge1xuICAgICAgICAvL0xpc3Qgb2YgQXV4aWxpYXJ5IHRvIHJldHVybiBcbiAgICAgICAgbGV0IGF1eHM6IEF1eGlsaWFyeVtdID0gW107XG5cblxuICAgICAgICAvL0dldCBhIHBvb2xlZCBjb25uZWN0aW9uIHRvIHRoZSBkYXRhYmFzZSwgcnVuIHRoZSBxdWVyeSB0byBnZXQgYWxsIHRoZSBkaXN0aW5jdCBBdXhpbGlhcmllcywgYW5kIHJldHVybiB0aGUgTGlzdCBvZiBBdXhpbGlhcmllcyBcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oZnVuY3Rpb24gKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpIHtcblxuICAgICAgICAgICAgLy9UaHJvdyBlcnJvciBpZiBhbiBlcnJvclxuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyXG5cblxuICAgICAgICAgICAgLy9SdW4gcXVlcnkgXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIGF1eGlsaWFyeScsIGZ1bmN0aW9uIChlcnI6IGFueSwgcm93czogYW55LCBmaWVsZHM6IGFueSkge1xuICAgICAgICAgICAgICAgIC8vVGhyb3cgZXJyb3IgaWYgYW4gZXJyb3IgXG4gICAgICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyXG5cbiAgICAgICAgICAgICAgICAvL0xvb3Agb3ZlciByZXN1bHQgc2V0IGFuZCBzYXZlIHRoZSBBdXhpbGlhcnkgaW50byBsaXN0XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCByb3dzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1eHMucHVzaChuZXcgQXV4aWxpYXJ5KHJvd3NbeF0uYXV4aWxpYXJ5X2lkLCByb3dzW3hdLm5hbWUsIHJvd3NbeF0udXNlcl9pZCwgcm93c1t4XS5saWZ0X3R5cGUsIHJvd3NbeF0uZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm93cyk7XG4gICAgICAgICAgICAgICAgLy9EbyBhIGNhbGxiYWNrIHRvIHJldHVybiB0aGUgcmVzdWx0cyBcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhdXhzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9SZWxlYXNlIGNvbm5lY3Rpb24gaW4gdGhlIHBvb2wgXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ1JVRCBtZXRob2QgdG8gcmV0dXJuIGFsbCBBdXhpbGlhcmllcyBmb3IgYSBhdXhJZFxuICAgICAqIEBwYXJhbSBhdXhJZCB1c2VySWQgb2YgdGhlIHVzZXIgdG8gcmV0cmlldmUgYXV4aWxhcmllcyBmb3IgIFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiB3aXRoIGFuIGFycmF5IG9mIHR5cGUgQXV4aWxpYXJ5XG4gICAgICovXG4gICAgcHVibGljIGZpbmRBdXhpbGlhcmllc0J5QXV4SWQoYXV4SWQ6IG51bWJlciwgY2FsbGJhY2s6IGFueSkge1xuICAgICAgICAvL0xpc3Qgb2YgQXV4aWxpYXJpZXMgdG8gcmV0dXJuIFxuICAgICAgICBsZXQgYXV4czogQXV4aWxpYXJ5W10gPSBbXTtcbiAgICAgICAgY29uc29sZS5sb2coYXV4SWQpO1xuXG4gICAgICAgIC8vIEdldCBwb29sZWQgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgcnVuIHF1ZXJpZXMgICBcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24gKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIFRocm93IGVycm9yIGlmIGFuIGVycm9yXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIC8vIFVzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHVwZGF0ZSBBdXhpbGlhcnlcbiAgICAgICAgICAgIGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gYXV4aWxpYXJ5IFdIRVJFIGF1eGlsaWFyeV9pZD0/JywgW2F1eElkXSwgZnVuY3Rpb24gKGVycjogYW55LCByb3dzOiBhbnksIGZpZWxkczogYW55KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBhbiBlcnJvclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAvL0xvb3Agb3ZlciByZXN1bHQgc2V0IGFuZCBzYXZlIHRoZSBBdXhpbGlhcnkgaW4gdGhlIExpc3Qgb2YgYXV4aWxpYXJpZXMgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCByb3dzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1eHMucHVzaChuZXcgQXV4aWxpYXJ5KHJvd3NbeF0uYXV4aWxpYXJ5X2lkLCByb3dzW3hdLm5hbWUsIHJvd3NbeF0udXNlcl9pZCwgcm93c1t4XS5saWZ0X3R5cGUsIHJvd3NbeF0uZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm93cyk7XG4gICAgICAgICAgICAgICAgLy8gRG8gYSBjYWxsYmFjayB0byByZXR1cm4gdGhlIHJlc3VsdHNcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhdXhzKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlbGVhc2UgY29ubmVjdGlvbiBpbiB0aGUgcG9vbFxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ1JVRCBtZXRob2QgdG8gcmV0dXJuIGFsbCBBdXhpbGlhcmllcyBmb3IgYSBuYW1lXG4gICAgICogQHBhcmFtIG5hbWUgbmFtZSBvZiB0aGUgdXNlciB0byByZXRyaWV2ZSBhdXhpbGFyaWVzIGZvciAgXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIHdpdGggYW4gYXJyYXkgb2YgdHlwZSBBdXhpbGlhcnlcbiAgICAgKi9cbiAgICBwdWJsaWMgZmluZEF1eGlsaWFyaWVzQnlOYW1lKG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IGFueSkge1xuICAgICAgICAvL0xpc3Qgb2YgQXV4aWxpYXJpZXMgdG8gcmV0dXJuIFxuICAgICAgICBsZXQgYXV4czogQXV4aWxpYXJ5W10gPSBbXTtcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSk7XG5cbiAgICAgICAgLy8gR2V0IHBvb2xlZCBkYXRhYmFzZSBjb25uZWN0aW9uIGFuZCBydW4gcXVlcmllcyAgIFxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbiAoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSkge1xuICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgYW4gZXJyb3JcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcblxuICAgICAgICAgICAgLy8gVXNlIFByb21pc2Z5IFV0aWwgdG8gbWFrZSBhbiBhc3luYyBmdW5jdGlvbiBhbmQgdXBkYXRlIEF1eGlsaWFyeVxuICAgICAgICAgICAgYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBhdXhpbGlhcnkgV0hFUkUgbmFtZSBMSUtFID8nLCBbJyUnICsgbmFtZSArICclJ10sIGZ1bmN0aW9uIChlcnI6IGFueSwgcm93czogYW55LCBmaWVsZHM6IGFueSkge1xuICAgICAgICAgICAgICAgIC8vIFRocm93IGVycm9yIGlmIGFuIGVycm9yXG4gICAgICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuXG4gICAgICAgICAgICAgICAgLy9Mb29wIG92ZXIgcmVzdWx0IHNldCBhbmQgc2F2ZSB0aGUgQXV4aWxpYXJ5IGluIHRoZSBMaXN0IG9mIGF1eGlsaWFyaWVzIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcm93cy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBhdXhzLnB1c2gobmV3IEF1eGlsaWFyeShyb3dzW3hdLmF1eGlsaWFyeV9pZCwgcm93c1t4XS5uYW1lLCByb3dzW3hdLnVzZXJfaWQsIHJvd3NbeF0ubGlmdF90eXBlLCByb3dzW3hdLmRlc2NyaXB0aW9uKSk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm93cyk7XG5cbiAgICAgICAgICAgICAgICAvLyBEbyBhIGNhbGxiYWNrIHRvIHJldHVybiB0aGUgcmVzdWx0c1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGF1eHMpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ1JVRCBtZXRob2QgdG8gcmV0dXJuIGFsbCBBdXhpbGlhcmllcyBmb3IgYSBsaWZ0VHlwZVxuICAgICAqIEBwYXJhbSBsaWZ0VHlwZSBsaWZ0VHlwZSBvZiB0aGUgdXNlciB0byByZXRyaWV2ZSBhdXhpbGFyaWVzIGZvciAgXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIHdpdGggYW4gYXJyYXkgb2YgdHlwZSBBdXhpbGlhcnlcbiAgICAgKi9cbiAgICAgcHVibGljIGZpbmRBdXhpbGlhcmllc0J5TGlmdFR5cGUobGlmdFR5cGU6IG51bWJlciwgY2FsbGJhY2s6IGFueSkge1xuICAgICAgICAvL0xpc3Qgb2YgQXV4aWxpYXJpZXMgdG8gcmV0dXJuIFxuICAgICAgICBsZXQgYXV4czogQXV4aWxpYXJ5W10gPSBbXTtcbiAgICAgICAgY29uc29sZS5sb2cobGlmdFR5cGUpO1xuXG4gICAgICAgIC8vIEdldCBwb29sZWQgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgcnVuIHF1ZXJpZXMgICBcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24gKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIFRocm93IGVycm9yIGlmIGFuIGVycm9yXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIC8vIFVzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHVwZGF0ZSBBdXhpbGlhcnlcbiAgICAgICAgICAgIGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gYXV4aWxpYXJ5IFdIRVJFIGxpZnRfdHlwZT0/JywgW2xpZnRUeXBlXSwgZnVuY3Rpb24gKGVycjogYW55LCByb3dzOiBhbnksIGZpZWxkczogYW55KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBhbiBlcnJvclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcblxuICAgICAgICAgICAgICAgIC8vTG9vcCBvdmVyIHJlc3VsdCBzZXQgYW5kIHNhdmUgdGhlIEF1eGlsaWFyeSBpbiB0aGUgTGlzdCBvZiBhdXhpbGlhcmllcyBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHJvd3MubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXV4cy5wdXNoKG5ldyBBdXhpbGlhcnkocm93c1t4XS5hdXhpbGlhcnlfaWQsIHJvd3NbeF0ubmFtZSwgcm93c1t4XS51c2VyX2lkLCByb3dzW3hdLmxpZnRfdHlwZSwgcm93c1t4XS5kZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb3dzKTtcbiAgICAgICAgICAgICAgICAvLyBEbyBhIGNhbGxiYWNrIHRvIHJldHVybiB0aGUgcmVzdWx0c1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGF1eHMpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICogQ1JVRCBtZXRob2QgdG8gcmV0dXJuIGFsbCBBdXhpbGlhcmllcyBmb3IgYSB1c2VySWRcbiAgICAgICogQHBhcmFtIHVzZXJJZCB1c2VySWQgb2YgdGhlIHVzZXIgdG8gcmV0cmlldmUgYXV4aWxhcmllcyBmb3IgIFxuICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhbiBhcnJheSBvZiB0eXBlIEF1eGlsaWFyeVxuICAgICAqL1xuICAgIHB1YmxpYyBmaW5kQXV4aWxpYXJpZXNCeVVzZXJJZCh1c2VySWQ6IG51bWJlciwgY2FsbGJhY2s6IGFueSkge1xuICAgICAgICAvL0xpc3Qgb2YgQXV4aWxpYXJpZXMgdG8gcmV0dXJuIFxuICAgICAgICBsZXQgYXV4czogQXV4aWxpYXJ5W10gPSBbXTtcbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKTtcblxuICAgICAgICAvLyBHZXQgcG9vbGVkIGRhdGFiYXNlIGNvbm5lY3Rpb24gYW5kIHJ1biBxdWVyaWVzICAgXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uIChlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KSB7XG4gICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBhbiBlcnJvclxuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuXG4gICAgICAgICAgICAvLyBVc2UgUHJvbWlzZnkgVXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCB1cGRhdGUgQXV4aWxpYXJ5XG4gICAgICAgICAgICBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIGF1eGlsaWFyeSBXSEVSRSB1c2VyX2lkPT8nLCBbdXNlcklkXSwgZnVuY3Rpb24gKGVycjogYW55LCByb3dzOiBhbnksIGZpZWxkczogYW55KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBhbiBlcnJvclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAvL0xvb3Agb3ZlciByZXN1bHQgc2V0IGFuZCBzYXZlIHRoZSBBdXhpbGlhcnkgaW4gdGhlIExpc3Qgb2YgYXV4aWxpYXJpZXMgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCByb3dzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1eHMucHVzaChuZXcgQXV4aWxpYXJ5KHJvd3NbeF0uYXV4aWxpYXJ5X2lkLCByb3dzW3hdLm5hbWUsIHJvd3NbeF0udXNlcl9pZCwgcm93c1t4XS5saWZ0X3R5cGUsIHJvd3NbeF0uZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm93cyk7XG4gICAgICAgICAgICAgICAgLy8gRG8gYSBjYWxsYmFjayB0byByZXR1cm4gdGhlIHJlc3VsdHNcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhdXhzKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlbGVhc2UgY29ubmVjdGlvbiBpbiB0aGUgcG9vbFxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDUlVEIG1ldGhvZCB0byB1cGRhdGUgYW4gQXV4aWxpYXJ5LlxuICAgICogXG4gICAgKiBAcGFyYW0gYXV4aWxpYXJ5IGF1eGlsaWFyeSB0byB1cGRhdGUuXG4gICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBudW1iZXIgb2Ygcm93cyB1cGRhdGVkLiAgXG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKGF1eGlsaWFyeTogQXV4aWxpYXJ5LCBjYWxsYmFjazogYW55KSB7XG4gICAgICAgIC8vIEdldCBwb29sZWQgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgcnVuIHF1ZXJpZXMgICBcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oZnVuY3Rpb24gKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIFRocm93IGVycm9yIGlmIGFuIGVycm9yXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIC8vIFVzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHVwZGF0ZSBBdXhpbGlhcnlcbiAgICAgICAgICAgIGxldCBjaGFuZ2VzID0gMDtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcbiAgICAgICAgICAgIGxldCByZXN1bHQxID0gY29ubmVjdGlvbi5xdWVyeSgnVVBEQVRFIGF1eGlsaWFyeSBTRVQgbmFtZT0/LCB1c2VyX2lkPT8sIGxpZnRfdHlwZT0/LCBkZXNjcmlwdGlvbj0/IFdIRVJFIGF1eGlsaWFyeV9pZD0/JywgW2F1eGlsaWFyeS5OYW1lLCBhdXhpbGlhcnkuVXNlcklkLCBhdXhpbGlhcnkuTGlmdFR5cGUsIGF1eGlsaWFyeS5EZXNjcmlwdGlvbiwgYXV4aWxpYXJ5LklkXSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0MS5jaGFuZ2VkUm93cyAhPSAwKVxuICAgICAgICAgICAgICAgICsrY2hhbmdlcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoYXV4aWxpYXJ5KSk7XG4gICAgICAgICAgICAvLyBSZWxlYXNlIGNvbm5lY3Rpb24gaW4gdGhlIHBvb2xcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuXG4gICAgICAgICAgICAvLyBEbyBhIGNhbGxiYWNrIHRvIHJldHVybiB0aGUgcmVzdWx0c1xuICAgICAgICAgICAgY2FsbGJhY2soY2hhbmdlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ1JVRCBtZXRob2QgdG8gY3JlYXRlIGFuIEF1eGlsaWFyeS5cbiAgICAqIFxuICAgICogQHBhcmFtIGF1eGlsaWFyeSBhdXhpbGlhcnkgdG8gdXBkYXRlLlxuICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIHdpdGggLTEgaWYgYW4gZXJyb3IgZWxzZSBBdXhpbGlhcnkgSWRcbiAgICAqL1xuICAgIHB1YmxpYyBjcmVhdGUoYXV4aWxpYXJ5OiBBdXhpbGlhcnksIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAgICAgLy8gR2V0IHBvb2xlZCBkYXRhYmFzZSBjb25uZWN0aW9uIGFuZCBydW4gcXVlcmllcyAgIFxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbiAoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSkge1xuICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgYW4gZXJyb3JcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdJTlNFUlQgSU5UTyBhdXhpbGlhcnkgKG5hbWUsIHVzZXJfaWQsIGxpZnRfdHlwZSwgZGVzY3JpcHRpb24pIFZBTFVFUyAoPyw/LD8sPyknLCBbYXV4aWxpYXJ5Lk5hbWUsIGF1eGlsaWFyeS5Vc2VySWQsIGF1eGlsaWFyeS5MaWZ0VHlwZSwgYXV4aWxpYXJ5LkRlc2NyaXB0aW9uXSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuYWZmZWN0ZWRSb3dzICE9IDEpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soLTEpO1xuXG4gICAgICAgICAgICBsZXQgYXV4SWQgPSByZXN1bHQuaW5zZXJ0SWQ7XG4gICAgICAgICAgICAvLyBSZWxlYXNlIGNvbm5lY3Rpb24gaW4gdGhlIHBvb2xcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuXG4gICAgICAgICAgICAvLyBEbyBhIGNhbGxiYWNrIHRvIHJldHVybiB0aGUgcmVzdWx0c1xuICAgICAgICAgICAgY2FsbGJhY2soYXV4SWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDUlVEIG1ldGhvZCB0byBkZWxldGUgYW4gQXV4aWxpYXJ5LiBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gYXV4SWQgQXV4aWxpYXJ5IElkIHRvIGRlbGV0ZS4gXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIHdpdGggbnVtYmVyIG9mIHJvd3MgZGVsZXRlZC4gXG4gICAgICovXG4gICAgcHVibGljIGRlbGV0ZShhdXhJZDogbnVtYmVyLCBjYWxsYmFjazogYW55KSB7XG4gICAgICAgIC8vR2V0IHBvb2xlZCBkYXRhYmFzZSBjb25uZWN0aW9uIGFuZCBydW4gcXVlcmllcyBcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24gKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpIHtcbiAgICAgICAgICAgIC8vVGhyb3cgZXJyb3IgaWYgYW4gZXJyb3IgXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIC8vVXNlIFByb21zaWZ5IFV0aWwgdG8gbWFrZSBhbiBhc3luYyBmdW5jdGlvblxuICAgICAgICAgICAgbGV0IGNoYW5nZXMgPSAwO1xuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdERUxFVEUgRlJPTSBhdXhpbGlhcnkgV0hFUkUgYXV4aWxpYXJ5X2lkPT8nLCBbYXV4SWRdKTtcbiAgICAgICAgICAgIGNoYW5nZXMgPSBjaGFuZ2VzICsgcmVzdWx0MS5hZmZlY3RlZFJvd3M7XG5cbiAgICAgICAgICAgIC8vUmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sIFxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cbiAgICAgICAgICAgIC8vRG8gYSBjYWxsYmFjayB0byByZXR1cm4gdGhlIHJlc3VsdHMgXG4gICAgICAgICAgICBjYWxsYmFjayhjaGFuZ2VzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuXG5cblxuIl19