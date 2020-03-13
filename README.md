# linting-practice
hideous code that gives you a chance to lint a plethora of styling errors.

run eslint --init in order to set your linting settings.

## mac/linux
option 1) run sudo npm i -g eslint to globally install eslint so you call run eslint --init.
option 2) run npx eslint --init to make eslint get downloaded and then run without installing it.

## windows with GitBash
run npm i -g eslint and then run eslint --init

## Context (you really should read this)
There is one error that prevents the code from functioning, everything else is just really bad code styling. Of note, if you are using Prettier, the error will be harder to find as Prettier simply covers up the mistake. This mistake is in here specifically to denote the importance of linting your code as your write it so you can more easily catch your mistakes.

The file badName.js is named this to demonstrate the importance of choosing good names for file, functions, variables, etc. You can't tell from the file name what it actually does. Figure out what the code actually does and give the file and key function better names.

Some of the errors that you will receive might sound like nonsense to you; google them!!!
