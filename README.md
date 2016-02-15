# egit
A dead-simple program to add, commit, and push at one time
## Installation
This program relies on the use of git, simple-git, node, and npm. Depending on your distribution, the install methods of git, node, and npm will be different. Please consult those guides then come back here. To install `egit` type this command in your preferred terminal emulator:

`npm install -g egit`

Done! (sudo may be necessary depending on system configuration)

## Usage
This program is intended to make it as simple as possible for someone to git add, commit, and push all at once. This can be done by executing:

`egit [file.example] 'commit message' [branch]`

And that's it! This is equivalent to executing:
```
git add [file.example]
git commit -m 'commit message'
git push origin [branch]
```
Now the lengthy process of adding, commiting, and pushing over multiple lines is gone!