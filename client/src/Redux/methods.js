

export const quickSort=(array) =>{
 
    if(array.length>1){
      let right = [];
      let left = [];
      let pivote = [array[0]];
    for(let i=1 ; i<array.length ; i++){
      if(array[i].hscore>=array[0].hscore){
            right.push(array[i]);
      } else { left.push(array[i]);
      }
    } array = (quickSort(left).concat(pivote)).concat(quickSort(right))
    } 
    return array;
    }


export const quickSortABC = (array) =>{
  const letras = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] ;
    if(array.length>1){
      let right = [];
      let left = [];
      let pivote = [array[0]];
      for(let i=1 ; i<array.length ; i++){
        if(letras.indexOf(array[i].name.slice(0,1))>=letras.indexOf(array[0].name.slice(0,1))){
              right.push(array[i]);
        } else { left.push(array[i]);
        }
      } array = (quickSortABC(left).concat(pivote)).concat(quickSortABC(right))
      } 
      return array;
      }
