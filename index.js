
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li');
  
  for( var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}


function deepestChild() {
  let grandNode = document.querySelector('#grand-node')
  let nextNode = grandNode.children[0];
  
  while (nextNode) {
    grandNode = nextNode;
    nextNode = grandNode.children[0];
  }
  return grandNode
}
