var target = document.querySelector('#target');

console.log(target);

target.onmouseover = function(){
        target.style.background = "#BF360C";
}
target.onmouseout = function(){
        target.style.background = "#33691E";
}