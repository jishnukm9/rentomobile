import { getLocations } from "../search/locations";







export function dummySearchResultData(pickUp,dropOff,startDate,endDate){


    
  const categoryList = ["Medium Car",'Small car','Large Car',"SUV'S",'People carrier','Estate']



    function calculateDaysBetweenDates(date1, date2) {
        const ONE_DAY = 1000 * 60 * 60 * 24;
        const differenceMs = Math.abs(date2 - date1);
        return Math.round(differenceMs / ONE_DAY);
      }

const days = calculateDaysBetweenDates(endDate,startDate)
    const locations = getLocations()

const cars = {
  vehicles:[{category:{
    make:"Ford",
    model:"Fiesta",
    image_url:"https://cdn2.rcstatic.com/images/car_images_b/web/ford/fiesta_lrg.jpg",
    vehicle_transmission:"Manual"
  },
capacity:{
  seats:4,
  doors:5,
  luggage_capacity:{
    large_suitcase:1,
    small_suitcase:1
  }
},
features:{
  air_conditioned:true
},rate_totals:{
  pay_later:{
    reservation_total:(1134 * days).toFixed(2),

  },
  rate:{
    currency:"INR"
  }
},
type: categoryList[Math.floor(Math.random() * categoryList.length)],
rating: Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
ac:true
},
{category:{
    make:"Hyundai",
    model:"Tucson",
    image_url:"https://cdn2.rcstatic.com/images/car_images_b/web/hyundai/tucson_lrg.jpg",
    vehicle_transmission:"Manual"
  },
capacity:{
  seats:5,
  doors:4,
  luggage_capacity:{
    large_suitcase:3,
    small_suitcase:2
  }
},features:{
  air_conditioned:false
},rate_totals:{
  pay_later:{
    reservation_total:(4418.46 * days).toFixed(2),

  },
  rate:{
    currency:"INR"
  }
}
,type: categoryList[Math.floor(Math.random() * categoryList.length)],
rating: Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
ac:true
},
{category:{
    make:"Hyundai",
    model:"i30",
    image_url:"https://cdn2.rcstatic.com/images/car_images_b/web/hyundai/i30_lrg.jpg",
    vehicle_transmission:"Manual"
  },
capacity:{
  seats:5,
  doors:4,
  luggage_capacity:{
    large_suitcase:1,
    small_suitcase:1
  }
},features:{
  air_conditioned:true
},rate_totals:{
  pay_later:{
    reservation_total:(3740.65 * days).toFixed(2),

  },
  rate:{
    currency:"INR"
  }
},
type: categoryList[Math.floor(Math.random() * categoryList.length)],
rating: Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
ac:true
},
{category:{
    make:"Toyota",
    model:"Corolla",
    image_url:"https://cdn2.rcstatic.com/images/car_images_b/web/toyota/corolla_lrg.jpg",
    vehicle_transmission:"Automatic"
  },
capacity:{
  seats:5,
  doors:4,
  luggage_capacity:{
    large_suitcase:1,
    small_suitcase:1
  }
},features:{
  air_conditioned:true
},rate_totals:{
  pay_later:{
    reservation_total:(3982.99 * days).toFixed(2),

  },
  rate:{
    currency:"INR"
  }
},
type: categoryList[Math.floor(Math.random() * categoryList.length)],
rating: Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
ac:false
},
{category:{
    make:"Ford",
    model:"Ka",
    image_url:"https://cdn2.rcstatic.com/images/car_images_b/web/ford/ka_lrg.jpg",
    vehicle_transmission:"Manual"
  },
capacity:{
  seats:4,
  doors:4,
  luggage_capacity:{
    large_suitcase:1,
    small_suitcase:1
  }
},features:{
  air_conditioned:false
},rate_totals:{
  pay_later:{
    reservation_total:(3301.46 * days).toFixed(2),

  },
  rate:{
    currency:"INR"
  }
},
type: categoryList[Math.floor(Math.random() * categoryList.length)],
rating: Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
ac:true
},
{category:{
    make:"Nissan",
    model:"Qashqai",
    image_url:"https://cdn2.rcstatic.com/images/car_images_b/web/nissan/qashqai_lrg.jpg",
    vehicle_transmission:"Manual"
  },
capacity:{
  seats:5,
  doors:4,
  luggage_capacity:{
    large_suitcase:3,
    small_suitcase:1
  }
},features:{
  air_conditioned:true
},rate_totals:{
  pay_later:{
    reservation_total:(4573.52 * days).toFixed(2),

  },
  rate:{
    currency:"INR"
  }
},
type: categoryList[Math.floor(Math.random() * categoryList.length)],
rating: Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
ac:true
},
{category:{
    make:"Valkswagen",
    model:"Polo",
    image_url:"https://cdn2.rcstatic.com/images/car_images_b/web/volkswagen/polo_lrg.jpg",
    vehicle_transmission:"Manual"
  },
capacity:{
  seats:4,
  doors:4,
  luggage_capacity:{
    large_suitcase:1,
    small_suitcase:1
  }
},features:{
  air_conditioned:true
},rate_totals:{
  pay_later:{
    reservation_total:(3612.51 * days).toFixed(2),

  },
  rate:{
    currency:"INR"
  }
},
type: categoryList[Math.floor(Math.random() * categoryList.length)],
rating: Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
ac:false
},
{category:{
    make:"Ford",
    model:"Focus",
    image_url:"https://cdn2.rcstatic.com/images/car_images_b/web/ford/focus_lrg.jpg",
    vehicle_transmission:"Manual"
  },
capacity:{
  seats:5,
  doors:4,
  luggage_capacity:{
    large_suitcase:1,
    small_suitcase:1
  }
},features:{
  air_conditioned:false
},rate_totals:{
  pay_later:{
    reservation_total:(3746.22 * days).toFixed(2),

  },
  rate:{
    currency:"INR"
  }
},
type: categoryList[Math.floor(Math.random() * categoryList.length)],
rating: Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
ac:true
}],
reservation:{
pickup_location:{
  location:{
    name:locations.find((item)=> item.code === pickUp)?.name ,
    telephone:"+919048857645",
    hours:"Mon - Sat 8 AM"
  },
  address:{address_line_1:"Terminal 1, Departures Gate 3",
    address_line_2:"Airport Business Lounge Entrance",
    city:locations.find((item)=> item.code === pickUp)?.name?.split(" ")[0],
 }
},
dropoff_location:{
  location:{
    name:locations.find((item)=> item.code === dropOff)?.name,
    telephone:"+919048857645",
hours:"Mon - Sat 8 AM"
  },
  address:{address_line_1:"Main Airport Building, Check-in Counter 12",
    address_line_2:"VIP Parking Lot, Slot 45",
    city:locations.find((item)=> item.code === dropOff)?.name?.split(" ")[0],
  }
},
terms:[{}]
}
}

return {cars}
}