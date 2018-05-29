function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const listItems = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < listItems.length; i++){
    listItems[i].innerHTML = parseInt(listItems[i].innerHTML) + n
  }
}

function deepestChild(){
  let grandNode = document.querySelector('#grand-node')

  function goDeeper(){
    if (grandNode.querySelector('div')){
      grandNode = grandNode.querySelector('div')
      goDeeper()
    } 
  }

  goDeeper()
  return grandNode

}
