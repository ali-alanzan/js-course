/**
 * Library for storing and editing data
 * 
 */

// Dependencies
var fs = require('fs');

var path = require('path');
var helpers = require('./helpers');

// Container for module ( tp be exported )
var lib = {};

// Base directory of the data folder
lib.baseDir = path.join(__dirname, '/../.data/');


// write data to a file
lib.create = function (dir, file, data, callback) {
    // Open the file for writting
    fs.open(lib.baseDir+dir+'/'+file+'.json', 'wx', function (err, fileDescriptor) {
        if(!err && fileDescriptor){
            // Convert data to string
            var stringData = JSON.stringify(data);

            // Write to file and close it
            fs.writeFile(fileDescriptor, stringData, function (err) {
                if(!err){
                    fs.close(fileDescriptor, function (err) {
                        if(!err){
                            callback(false);
                        } else {
                            callback('Error closing new file');
                        }
                    });
                } else {
                    callback('Error writing to new file');
                }
            });

        } else {
            callback('Could not create new file, it may already exist');
        }
    });
}


// Read data from a file
lib.read = function (dir, file, callback) {
    fs.readFile(lib.baseDir+dir+'/'+file+'.json', 'utf8', function (err, data) {
        if(!err && data){
            var parsedData = helpers.parseJsonToObject(data);
            callback(false, parsedData);
        } else {
            callback(err, data);
        }
    });
}

// Update data inside a file
lib.update = function (dir, file, data, callback) {
    // Open the file for writing
    fs.open(lib.baseDir+dir+'/'+file+'.json', 'r+', function (err, fileDescriptor) {
        if( !err && fileDescriptor ) {
            // Convert data to string
            var stringData = JSON.stringify(data);

            // Truncate the file
            fs.ftruncate(fileDescriptor, function (err) {
                if(!err){
                    // Write to the file and close it
                    fs.writeFile(fileDescriptor, stringData, function (err) {
                        if(!err){
                            fs.close(fileDescriptor, function (err) {
                                if(!err){
                                    callback(false);
                                } else {
                                    callback('Error closing existing file');
                                }
                            });
                        } else {
                            callback('Error writing to existing file');
                        }
                    });

                } else {
                    callback('Error truncating the file');
                }
            });
        } else {
            callback('Could not open the file updating, it may not existyet');
        }
    });
}

// Delete a file
lib.delete = function(dir, file, callback) {
    // Unlike the file
    fs.unlink(lib.baseDir+dir+'/'+file+'.json', function (err) {
        if(!err){
            callback(false);
        } else {
            callback('Error deleting file');
        }
    });
}








module.exports = lib;