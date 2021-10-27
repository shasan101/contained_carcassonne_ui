# contained_carcassonne_ui

This repository is a way to display the output from the challenge found here: https://norvig.com/carcassonne.html.

This is code works by using the output arrays from the Minizinc Model written by team 6 of course: [Modelling for Combinatorial Optimisation (course 1DL451)](http://user.it.uu.se/~pierref/courses/COCP/project.html) taught at the Uppsala University's Computer Science department by [Pierre Flener](http://user.it.uu.se/~pierref/).

How to run:
* Update the dimensions of the board, for which the model ran, in the `feasible_sol.txt`.
* Using the minizinc cli store the found feasible solution in a file called: feasible_sol.txt.
* Then run the the controller.sh, for that simply run the following command from this repo's directory:
    <pre><code>bash controller.sh </code></pre>
* Once this command completes, simply open the board.html file.