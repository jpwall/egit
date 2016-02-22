#!/usr/bin/env node

var simpleGit = require('simple-git');
var addFile = process.argv[2];
var commitMessage = process.argv[3];
var branch = process.argv[4];

if (addFile == undefined || commitMessage == undefined || branch == undefined) {
    console.log('Please enter valid parameters to use egit (easy-git) \n');
    console.log('To push example.txt to branch master with commit message "test" execute:');
    console.log('egit example.txt "test" master \n');
}
else {
    require('simple-git')()
	.add(addFile, function (err, data) {
	    if(err) {
		console.log('Please enter a valid file name');
	    }
	})

	.commit(commitMessage, function (err, data) {
	})

	.push('origin', branch, function (err, data) {
	    if(err) {
		console.log(branch + ' does not seem to be a valid branch');
	    }
	});

}

