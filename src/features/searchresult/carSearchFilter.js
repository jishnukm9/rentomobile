


export function carSearchResultFilter(result,priceFilter,categoryFilter,acFilter,doorsFilter,transmissionFilter){


    let resultFinal;
    if (categoryFilter && priceFilter.length > 0) {

      const filnalFilter = priceFilter.map((item)=> {return item.split('-').map(Number)})

    

    
      resultFinal = result.filter(item => {
          const price = parseFloat(item.price);
          
          for (let index = 0; index < filnalFilter.length; index++) {
            const element = filnalFilter[index];

   
            const minPrice = element[0];
            const maxPrice = element[1]  || Infinity
          
            if (item.type === categoryFilter && price >= minPrice && price <= maxPrice ){
             
              return  item
            }
            
          }
      });
  } else if (categoryFilter) {
      
      resultFinal = result.filter(item => item.type === categoryFilter);
  }  else if (doorsFilter.length == 2 ) {
 
  resultFinal = result.filter(item => (item.doors > 4 || item.ac === true));
} else if (doorsFilter.length == 1 & doorsFilter[0] == '4+ Doors' ) {

  resultFinal = result.filter(item => (item.doors > 4));
}  else if (doorsFilter.length == 1 & doorsFilter[0] == 'Air Conditioning' ) {
 
  resultFinal = result.filter(item => ( item.ac === true));
} else if (transmissionFilter.length > 0) {
  
  
  if (transmissionFilter.length === 1){
    resultFinal = result.filter(item => item.transmission === transmissionFilter[0])
  }else{
    resultFinal = result.filter(item => (item.transmission === transmissionFilter[0] || item.transmission === transmissionFilter[1]))
  }
  
}else if (priceFilter.length > 0) {
     
      const filnalFilter  = priceFilter.map((item)=> {return item.split('-').map(Number)})

      // const filnalFilter = newPriceFilter.flat().sort((a, b) => a - b)

     
      resultFinal = result.filter(item => {
          const price = parseFloat(item.price);
          
          for (let index = 0; index < filnalFilter.length; index++) {
            const element = filnalFilter[index];

        
            const minPrice = element[0];
            const maxPrice = element[1]  || Infinity
        
            if (price >= minPrice && price <= maxPrice ){
             
              return  item
            }
            
          }
      });
  } else {
      resultFinal = result;
  }



    return resultFinal
}