#!/usr/bin/env node

var simpleGit = require('simple-git');
var addFile = process.argv[2];
var commitMessage = process.argv[3];
var branch = process.argv[4];

require('simple-git')()
    .add(addFile, function (err, data) {
	if(err) {
	    console.log('Please enter a valid file name');
	}
    })

    .commit(commitMessage, function (err, data) {
	if(err) {
	    console.log(err);
	}
    })

    .push('origin', branch, function (err, data) {
	if(err) {
	    console.log(branch + ' does not seem to be a valid branch');
	}
	//console.log(data);
    });

