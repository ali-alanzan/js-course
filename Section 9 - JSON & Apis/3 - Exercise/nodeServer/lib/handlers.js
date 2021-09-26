/**
 * Request handlers
 * 
 */
// Dependencies

var _data = require('./data');
// var helpers = require('./helpers');
// var config = require('./config');

// Defaine a handlers
var handlers = {};

// Ping handler
handlers.ping = function (data, callback) {
    callback(200);
};

// requests
handlers.requests = function (data, callback) {
    var acceptableMethods = ['post', 'get'];
    console.log(data.method);
    if(acceptableMethods.indexOf(data.method) > -1){
        handlers._requests[data.method](data, callback);
    }
};

// Container for the requests submethods
handlers._requests = {};

// Requests - post
/* 
Required data: memberName, phone, avatar, description, services
** var test = condition ? valueIfTtue
*/

handlers._requests.post = function (data, callback) {
    // Check that all required fields are filled out
    var memberName = typeof(data.payload.memberName) == 'string' && data.payload.memberName.trim().length > 0 ? data.payload.memberName.trim() : false;
    var phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length > 0 ? data.payload.phone.trim() : false;
    var avatar = typeof(data.payload.avatar) == 'string' && data.payload.avatar.trim().length > 0 ? data.payload.avatar.trim() : false;
    var description = typeof(data.payload.description) == 'string' && data.payload.description.trim().length <= 254 ? data.payload.description.trim() : false;
    var services = typeof(data.payload.services) == 'object' && data.payload.services.length > 0 ? data.payload.services : false;

    if(memberName && phone && avatar && description && services ) {
    // Make sure that the request doesnt already exist by phone
        _data.read('requests', phone,function (err, data) {
            if(err){
                // Create the request object
                var requestObject = {
                    'memberName': memberName,
                    'phone': phone,
                    'avatar': avatar,
                    'description': description,
                    'services': services
                };

                // Store the request

                _data.create('requests', phone, requestObject, function (err) {
                    if(!err){
                        callback(200, {'success' : 1, 'message': `Your request has been added successfuly by your phone number ( ${phone} ), thank you`});
                    } else {
                        callback(404, {'error': 'Could not create a new request'});
                    }
                });

                // update the members file
                _data.read('requests', 'members', function (err, membersNumbers) {
                    var members = [];
                    if(err) {
                        members = [phone];
                        _data.create('requests', 'members', members, function (err) {
                            if(!err){
                                // callback(200, {'message': `Your request has been added successfuly with your phone numebr( ${phone} ), thank you`});
                            } else {
                                callback(404, {'error': 'Could not create the members.json file in /.data/requests directory'});
                            }
                        });
                    } else {
                        members = [phone, ...membersNumbers];
                        _data.update('requests', 'members', members, function (err) {
                            if(!err){
                                // callback(200);
                            } else {
                                callback(500, {'error': 'Could not update the members file'});
                            }
                        });
                    }
                    
                  
                });

            } else {

                callback(400, {'error': 'You can register only once per phone number'});
            }
        });        
    } else {
        callback(404, {'error': 'Missing required fields'});
    }


};




// Requests - get
// Required data: none
// Optional data: page, limit
handlers._requests.get = function (data, callback) {
    // check the limit & page
    var phone = data.queryStringObject.get('phone'); 

    var page = typeof(data.queryStringObject.get('page')) == 'string' && Number(data.queryStringObject.get('page')) > 0 ? Number(data.queryStringObject.get('page')) : 1;
    var limit = typeof(data.queryStringObject.get('limit')) == 'string' && Number(data.queryStringObject.get('limit')) > 0 ? Number(data.queryStringObject.get('limit')) : 3;     
    var phone = typeof(data.queryStringObject.get('phone')) == 'string' && data.queryStringObject.get('phone').trim().length > 0 ? data.queryStringObject.get('phone').trim() : false;     
    


    var numbers = [],
    start = (page * limit) - limit,
    end = page * limit;


    if( phone != false ) {
        _data.read('requests', phone,function (err, data) {
            if(err) {
                callback(400, {'message': 'no data exist for this phone number '});
            } else {
                    callback(200, data);
            }
        });
    } else {
        _data.read('requests', 'members',function (err, data) {
            var finalRespnseData = {};

            if(err) {
                callback(400, {'message': 'from the nodeServer root the file ( /.data/requests/members.json ) not exist, please create it and try again'});
                data = [];         
            }
            numbers = data.slice(start, end);
            
            finalRespnseData.total = data.length;
            finalRespnseData.numbers = numbers;
            finalRespnseData.limit = limit;
            finalRespnseData.page = page;

            if(numbers.length > 0) {
                callback(200, finalRespnseData);
            } else {
                callback(200, {'error': 'no valid data to show'});
            }
            
        });
    }
    
};


// Not found handler
handlers.notFound = function (data, callback) {
    callback(404);
};


// Export the module
module.exports = handlers;