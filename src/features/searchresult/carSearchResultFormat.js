


export function carSearchResultsFormatFunc(data){



    
    console.log('result',data)

   
      const dataFinal = data?.vehicles?.map((item) => ({
        name: `${item.category.make} ${item.category.model}` ,
        image: item.category.image_url,
        seats:item.capacity.seats,
        doors:item.capacity.doors,
        largeLuggage : item.capacity.luggage_capacity.large_suitcase,
        smallLuggage : item.capacity.luggage_capacity.small_suitcase,
        transmission : item.category?.vehicle_transmission,
        price : `${item.rate_totals.pay_later.reservation_total} ${item.rate_totals.rate.currency}`,
        rating: Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
      }));

      const pickUp = data?.reservation?.pickup_location?.location?.name;
      const locDetails = data?.reservation;
      const terms = data?.reservation?.terms[0];






return {data:dataFinal,pickUp:pickUp,locDetails:locDetails,terms:terms}



}