var row_size = document.getElementById("row").innerText;
var col_size = document.getElementById("col").innerText;
var total_tiles = row_size * col_size;
var transformation_degrees = [0 , 90, 180, 270]

var tile_num = document.getElementById("board").innerText;
tile_num_arr = tile_num.slice(1,tile_num.length - 1).split(", ");

var tile_angle = document.getElementById("rotation").innerText;
tile_angle_arr = tile_angle.slice(1,tile_angle.length - 1).split(", ");
console.log(tile_angle_arr);

var board_page = window.open('', '', 'height=500, width=3000');
board_page.document.write('<html>');
board_page.document.write('<body > <h1>The Game of Carcassonne: <br>');

var curr_tile = 0;

for (let row_idx = 0; row_idx < row_size; row_idx++) {
    for (let col_idx = 0; col_idx < col_size; col_idx++) {
        var img_to_print = './tiles_ordered/tile' + tile_num_arr[curr_tile] + '.png';
        board_page.document.write('<img src=' + img_to_print + ' alt="tile num' + tile_num_arr[curr_tile] + '" style="transform:rotate(' + transformation_degrees[tile_angle_arr[tile_num_arr[curr_tile] - 1]] + 'deg);" width="50" height="50">');
        curr_tile++;
    }
    board_page.document.write('<br>');
}

board_page.document.write('</body></html>');
board_page.document.close();