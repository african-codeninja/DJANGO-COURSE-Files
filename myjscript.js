//Restart
var restart = document.querySelector("#b");

//Grabs all the squares
var squares = document.querySelectorAll('td');

//clears all the cells
function clearBoard(){
  for (var i = 0; i < squares.length; i++){
    squares[i].textContent = '';
  }
}
restart.addEventListener('click',clearBoard);
//checks
var cellOne = document.querySelector('#one')




//for loop to add event listeners
