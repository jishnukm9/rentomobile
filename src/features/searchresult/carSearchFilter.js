


export function carSearchResultFilter(result,priceFilter,categoryFilter,acFilter,doorsFilter,transmissionFilter){


    let resultFinal;
    if (categoryFilter && priceFilter.length > 0) {

      const filnalFilter = priceFilter.map((item)=> {return item.split('-').map(Number)})

    

      console.log("Filtering by category and price range:", categoryFilter, priceFilter);
      resultFinal = result.filter(item => {
          const price = parseFloat(item.price);
          
          for (let index = 0; index < filnalFilter.length; index++) {
            const element = filnalFilter[index];

   
            const minPrice = element[0];
            const maxPrice = element[1]  || Infinity
            console.log(maxPrice,minPrice)
            if (item.type === categoryFilter && price >= minPrice && price <= maxPrice ){
             
              return  item
            }
            
          }
      });
  } else if (categoryFilter) {
      console.log("Filtering by category only");
      resultFinal = result.filter(item => item.type === categoryFilter);
  }  else if (doorsFilter.length == 2 ) {
  console.log("Filtering by doors and ac only");
  console.log("doors",result)
  resultFinal = result.filter(item => (item.doors > 4 || item.ac === true));
} else if (doorsFilter.length == 1 & doorsFilter[0] == '4+ Doors' ) {
  console.log("Filtering by doors  only");
  console.log("doors",result)
  resultFinal = result.filter(item => (item.doors > 4));
}  else if (doorsFilter.length == 1 & doorsFilter[0] == 'Air Conditioning' ) {
  console.log("Filtering by ac  only");
  console.log("doors",result)
  resultFinal = result.filter(item => ( item.ac === true));
} else if (transmissionFilter.length > 0) {
  console.log("Filtering by transmission only");
  console.log("transm",transmissionFilter)
  if (transmissionFilter.length === 1){
    resultFinal = result.filter(item => item.transmission === transmissionFilter[0])
  }else{
    resultFinal = result.filter(item => (item.transmission === transmissionFilter[0] || item.transmission === transmissionFilter[1]))
  }
  
}else if (priceFilter.length > 0) {
      console.log("Filtering by price only");
      const filnalFilter  = priceFilter.map((item)=> {return item.split('-').map(Number)})

      // const filnalFilter = newPriceFilter.flat().sort((a, b) => a - b)

      console.log(filnalFilter)
      resultFinal = result.filter(item => {
          const price = parseFloat(item.price);
          
          for (let index = 0; index < filnalFilter.length; index++) {
            const element = filnalFilter[index];

        
            const minPrice = element[0];
            const maxPrice = element[1]  || Infinity
            console.log(maxPrice,minPrice)
            if (price >= minPrice && price <= maxPrice ){
              console.log(price >= minPrice && price <= maxPrice ,"price")
              return  item
            }
            
          }
      });
  } else {
      resultFinal = result;
  }



    return resultFinal
}