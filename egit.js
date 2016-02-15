var simpleGit = require('simple-git');
var addFile = process.argv[2];
var commitMessage = process.argv[3];
var branch = process.argv[4];

require('simple-git')()
    .add(addFile)
    .commit(commitMessage)
    .push('origin', branch);

