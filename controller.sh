#!/bin/bash

rotation=$(cat feasible_sol.txt | grep "Rotation" | awk -F[\(\)] '{print $2}' | cut -d ' ' -f 2-)
carcassonneBoard=$(cat feasible_sol.txt | grep "CarcassonneBoard" | awk -F[\(\)] '{print $2}' | cut -d ' ' -f 2-)

numRows=14
numCols=6
sed -i -E 's/\"row\">[[:digit:]]*/\"row\">'"${numRows}"'/' board.html
sed -i -E 's/\"col\">[[:digit:]]*/\"col\">'"${numCols}"'/' board.html

# If there is already a board or rotation array, get rid of it
sed -i -E 's/\"board\">\[([0-9]+\, )*[0-9]*\]/\"board\">\[\]/' board.html
sed -i -E 's/\"rotation\">\[([0-9]+\, )*[0-9]*\]/\"rotation\">\[\]/' board.html

sed -i -E 's/\"board\">\[\]/\"board\">'"${carcassonneBoard}"'/' board.html

sed -i -E 's/\"rotation\">\[\]/\"rotation\">'"${rotation}"'/' board.html