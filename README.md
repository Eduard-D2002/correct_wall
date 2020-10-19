# Wall check
The program checks if the wall can be built from some bricks. User inputs the width and height of wall, the wall's schema, the count of brick's sorts, list of parameters of every brick (file or usual input).
### Input example
 5 3\
 11000\
 00111\
 11111\
 3\
 1 2 8\
 1 4 5\
 2 2 2\
Where:\
 1: width and height of wall's shape matrix - two positive integers separated by the space on their own line\
 2: wall's shape matrix - H strings each of length W, formed just '1' and'0' symbols with every string on its own line\
 3: the count of brick's sorts - the positive integer C.\
 4: list of bricks - C lines each containing three positive integers separated by space - width of brick, height of brick and count of such bricks in the set 
### Output example
 yes

### Installation
1. Load index.html, main.js and style.css on your machine.
1. Run index.html.

### How it works
1. Verifies user choose (file input or usual input).
1. Inputs data(depending on the choice).
1. Checks the coincidence of height and width from scheme and W H
1. Checks if the count of conditional unit of size at bricks more than at scheme.
1. Selects individual blocks
1. Checks if this blocks can consist of our bricks
1. Returns result

#### Main functions
1. input() implements input from file or usual input
1. openFile(event) implements reading from file.
1. setData() sets data from file.
1. schema_cell_num(schema) calculate count of '1'(conditional unit of size) at scheme.
1. bricks_cell_num (bricks) calculate count of conditional unit of size at bricks.
1. max_w_h(arr) calculate max width and height of wall (at scheme).
1. getShapes(A) returns the shapes formed by the scheme and numbers each individual block.
1. isNeighbor(arr) checks if shape at the current floor has neighbor at others floor.
1. find_bricks(str) find all required bricks.
1. all_verifications() checks the validity of all conditions.
1. out_solution() output solution.

 ##### Was developed at VS Code