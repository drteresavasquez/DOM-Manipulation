
let colors = [
    '#F4ECF7',
    '#800000',
    '#FFFF00',
    '#FA8072',
    '#138D75',
    '#943126',
    '#A04000'
  ];
  
  function makeBoxes(howMany){
    let colorAmt = colors.length;
    let currColor = 0;
    let myElement;
    let myNode = document.querySelector('.boxes');
  
    for(let i = 0; i < howMany; i++){
  
      myElement = document.createElement('div');
      myElement.className = 'box';
      myElement.style = 'background-color: ' + colors[currColor];
      myNode.appendChild(myElement);
  
      if(currColor === colorAmt - 1){
        currColor = 0;
      }else{
        currColor++;
      }
    }

    myNode.addEventListener('click', function(e){
        e.target.parentNode.removeChild(e.target)
    }, false);
  }
  
  makeBoxes(20);