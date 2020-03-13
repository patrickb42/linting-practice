# linting-practice
hideous code that gives you a chance to lint a plethora of styling errors.

run eslint --init in order to set your linting settings.

## mac/linux
option 1) run sudo npm i -g eslint to globally install eslint so you call run eslint --init.
option 2) run npx eslint --init to make eslint get downloaded and then run without installing it.

## windows with GitBash
run npm i -g eslint and then run eslint --init

## vs code
add the eslint plugin (it's pretty popular)

## context (you really should read this)
There are some errors that prevent the code from functioning, everything else is just really bad code styling. Of note, if you are using Prettier, one error will be harder to find because Prettier simply covers up the mistake. This mistake is in here specifically to denote the importance of linting your code as your write it so you can more easily catch your mistakes.

The file badName.js is named this to demonstrate the importance of choosing good names for file, functions, variables, etc. You can't tell from the file name what it actually does. Figure out what the code actually does and give the file and key function better names.

Some of the error messages that you will receive might sound like nonsense to you; google them!!!

Here's the fun part, and I recommend you give it a try, lint to your own personal style. Don't use a style guide, just make the code look like how your normally code. Don't change functionality, don't fix any logical errors your find, just change spacing, naming, syntax, whatever - just don't do anything that would change the intended behavior. After you've done that, turn on linting and see how many "problems" it finds (if you're not using the plugin, then you're going to have to use command-line/terminal; you know who you are. You know how to look up the eslint docs).
