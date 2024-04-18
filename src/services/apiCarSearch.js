import { json } from "react-router-dom"


export async function getCars(pickUpDate, dropOffDate,pickUpTime,dropOffTime ,pickUpLocation,dropOffLocation,brand,countryCode) {


    
  let token;

  try {
    const response = await fetch(`https://stage.abgapiservices.com/oauth/token/v1`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        "client_id": "c55a0427",
        "client_secret":  "bbefe5c6c3daf7dc20fb7c74f4398e1b", 
      },

    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    token = data.access_token
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error);
  }


  console.log("searh query from getCars",pickUpDate, dropOffDate,pickUpTime,dropOffTime ,pickUpLocation,dropOffLocation,brand,countryCode,token)


  try {
      const response = await fetch(`https://stage.abgapiservices.com/cars/catalog/v1/vehicles?brand=${brand}&pickup_date=${pickUpDate}T${pickUpTime}&pickup_location=${pickUpLocation}&dropoff_date=${dropOffDate}T${dropOffTime}&dropoff_location=${dropOffLocation}&country_code=${countryCode}`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          "client_id": "c55a0427",
          'Authorization': `Bearer ${token}` 
        },

      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} `);
      }
  
      let data = await response.json();

    
      const categoryList = ["Medium Car",'Small car','Large Car',"SUV'S",'People carrier','Estate']
      

      data.vehicles.map((item)=> {
        item['type']=categoryList[Math.floor(Math.random() * categoryList.length)]
  item['rating'] =  Math.round((Math.random() * 0.4 + 7.5) * 10) / 10
      })
      console.log("data-343",data)
      console.log("data above")
      return data
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error);
    }

  // return {}
//   return JSON.parse({
//     "status": {
//         "request_time": "2024-04-11T03:47:22Z",
//         "success": [
//             {
//                 "code": "200",
//                 "message": "Success",
//                 "details": "The vehicle availability was successfully retrieved."
//             }
//         ]
//     },
//     "transaction": {
//         "transaction_id": "c7f46912-102a-4538-8253-5775eef76845"
//     },
//     "product": {
//         "brand": "Avis"
//     },
//     "vehicles": [
//         {
//             "category": {
//                 "name": "Group D - Maruti Dzire Chauffeur Drive Only or similar",
//                 "make": "Maruti Dzire",
//                 "model": "Chauffeur Drive Only",
//                 "vehicle_class_code": "D",
//                 "vehicle_class_name": "Standard Manual",
//                 "vehicle_transmission": "Manual",
//                 "image_url": "https://www.avis.com/content/dam/cars/l/2016/suzuki/2016-suzuki-swift-dzire-zxi-sedan-white.png"
//             },
//             "features": {
//                 "bluetooth_equipped": false,
//                 "air_conditioned": true,
//                 "connected_car": false
//             },
//             "capacity": {
//                 "doors": "4",
//                 "seats": "5",
//                 "luggage_capacity": {
//                     "large_suitcase": "1",
//                     "small_suitcase": "1"
//                 }
//             },
//             "rate_totals": {
//                 "rate": {
//                     "currency": "INR",
//                     "rate_code": "GBI",
//                     "coupon_applied": false,
//                     "under_age_fee_applied": false,
//                     "coupon_discount_amount": 0
//                 },
//                 "pay_later": {
//                     "vehicle_total": 2340,
//                     "reservation_total": 24996.8
//                 }
//             },
//             "type": "Medium Car",
//             'rating': Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
//         },
//         {
//             "category": {
//                 "name": "Group F - Honda Amaze Chauffeur Drive Only or similar",
//                 "make": "Honda Amaze",
//                 "model": "Chauffeur Drive Only",
//                 "sipp_code": "CCMR",
//                 "vehicle_class_code": "F",
//                 "vehicle_class_name": "Intermediate Manual",
//                 "vehicle_transmission": "Manual",
//                 "image_url": "https://www.avis.com/content/dam/cars/l/2016/honda/2016-honda-amaze-s-mt-diesel-sedan-white.png"
//             },
//             "features": {
//                 "bluetooth_equipped": false,
//                 "air_conditioned": true,
//                 "connected_car": false
//             },
//             "capacity": {
//                 "doors": "4",
//                 "seats": "4",
//                 "luggage_capacity": {
//                     "large_suitcase": "1",
//                     "small_suitcase": "2"
//                 }
//             },
//             "rate_totals": {
//                 "rate": {
//                     "currency": "INR",
//                     "rate_code": "3GI",
//                     "coupon_applied": false,
//                     "under_age_fee_applied": false,
//                     "coupon_discount_amount": 0
//                 },
//                 "pay_later": {
//                     "vehicle_total": 2202.98,
//                     "reservation_total": 24602.98
//                 }
//             },
//             "type": "People carrier",
//             'rating': Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
//         },
//         {
//             "category": {
//                 "name": "Group G - Toyota Etios Chauffeur Drive Only or similar",
//                 "make": "Toyota Etios",
//                 "model": "Chauffeur Drive Only",
//                 "sipp_code": "CDMR",
//                 "vehicle_class_code": "G",
//                 "vehicle_class_name": "Intermediate Manual",
//                 "vehicle_transmission": "Manual",
//                 "image_url": "https://www.avis.com/content/dam/cars/l/2014/toyota/2014-toyota-etios-cross-hatchback-white.png"
//             },
//             "features": {
//                 "bluetooth_equipped": false,
//                 "air_conditioned": true,
//                 "connected_car": false
//             },
//             "capacity": {
//                 "doors": "4",
//                 "seats": "4",
//                 "luggage_capacity": {
//                     "large_suitcase": "1",
//                     "small_suitcase": "2"
//                 }
//             },
//             "rate_totals": {
//                 "rate": {
//                     "currency": "INR",
//                     "rate_code": "3GI",
//                     "coupon_applied": false,
//                     "under_age_fee_applied": false,
//                     "coupon_discount_amount": 0
//                 },
//                 "pay_later": {
//                     "vehicle_total": 2789.19,
//                     "reservation_total": 25189.19
//                 }
//             },
//             "type": "People carrier",
//             'rating': Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
//         },
//         {
//             "category": {
//                 "name": "Group H - Toyota Innova Crysta Chauffeur Drive Only or similar",
//                 "make": "Toyota Innova Crysta",
//                 "model": "Chauffeur Drive Only",
//                 "sipp_code": "IVMR",
//                 "vehicle_class_code": "H",
//                 "vehicle_class_name": "Full-Size Van Manual",
//                 "vehicle_transmission": "Manual",
//                 "image_url": "https://www.avis.com/content/dam/cars/l/2016/toyota/2016-toyota-innova-crysta-z-muvs-white.png"
//             },
//             "features": {
//                 "bluetooth_equipped": false,
//                 "air_conditioned": true,
//                 "connected_car": false
//             },
//             "capacity": {
//                 "doors": "4",
//                 "seats": "6",
//                 "luggage_capacity": {
//                     "large_suitcase": "2",
//                     "small_suitcase": "2"
//                 }
//             },
//             "rate_totals": {
//                 "rate": {
//                     "currency": "USD",
//                     "rate_code": "I1I",
//                     "coupon_applied": false,
//                     "under_age_fee_applied": false,
//                     "coupon_discount_amount": 0
//                 },
//                 "pay_later": {
//                     "vehicle_total": 47.45,
//                     "reservation_total": 317.92
//                 }
//             },
//             "type": "Medium Car",
//             'rating': Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
//         },
//         {
//             "category": {
//                 "name": "Group J - Honda City Chauffeur Drive Only or similar",
//                 "make": "Honda City",
//                 "model": "Chauffeur Drive Only",
//                 "sipp_code": "IDMR",
//                 "vehicle_class_code": "J",
//                 "vehicle_class_name": "Luxury Manual",
//                 "vehicle_transmission": "Manual",
//                 "image_url": "https://www.avis.com/content/dam/cars/l/2017/honda/2017-honda-new-city-sedan-white.png"
//             },
//             "features": {
//                 "bluetooth_equipped": false,
//                 "air_conditioned": true,
//                 "connected_car": false
//             },
//             "capacity": {
//                 "doors": "4",
//                 "seats": "4",
//                 "luggage_capacity": {
//                     "large_suitcase": "1",
//                     "small_suitcase": "2"
//                 }
//             },
//             "rate_totals": {
//                 "rate": {
//                     "currency": "INR",
//                     "rate_code": "3GI",
//                     "coupon_applied": false,
//                     "under_age_fee_applied": false,
//                     "coupon_discount_amount": 0
//                 },
//                 "pay_later": {
//                     "vehicle_total": 3375.24,
//                     "reservation_total": 25775.24
//                 }
//             },
//             "type": "People carrier",
//             'rating': Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
//         },
//         {
//             "category": {
//                 "name": "Group M - Toyota Camry Chauffeur Drive Only or similar",
//                 "make": "Toyota Camry",
//                 "model": "Chauffeur Drive Only",
//                 "sipp_code": "SDAR",
//                 "vehicle_class_code": "M",
//                 "vehicle_class_name": "Intermediate Manual",
//                 "vehicle_transmission": "Manual",
//                 "image_url": "https://www.avis.com/content/dam/cars/l/2018/toyota/2018-toyota-camry-hybrid-xle-sedan-white.png"
//             },
//             "features": {
//                 "bluetooth_equipped": false,
//                 "air_conditioned": true,
//                 "connected_car": false
//             },
//             "capacity": {
//                 "doors": "4",
//                 "seats": "4",
//                 "luggage_capacity": {
//                     "large_suitcase": "2",
//                     "small_suitcase": "2"
//                 }
//             },
//             "rate_totals": {
//                 "rate": {
//                     "currency": "INR",
//                     "rate_code": "GBI",
//                     "coupon_applied": false,
//                     "under_age_fee_applied": false,
//                     "coupon_discount_amount": 0
//                 },
//                 "pay_later": {
//                     "vehicle_total": 2840,
//                     "reservation_total": 25556.8
//                 }
//             },
//             "type": "People carrier",
//             'rating': Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
//         },
//         {
//             "category": {
//                 "name": "Group N - Mercedes-Benz EClass Chauffeur Drive Only or similar",
//                 "make": "Mercedes-Benz EClass",
//                 "model": "Chauffeur Drive Only",
//                 "sipp_code": "PDAR",
//                 "vehicle_class_code": "N",
//                 "vehicle_class_name": "Premium",
//                 "vehicle_transmission": "Automatic",
//                 "image_url": "https://www.avis.com/content/dam/cars/l/2021/mercedes/2021-mercedes-benz-e-class-63-s-amg-4wd-sedan-white.png"
//             },
//             "features": {
//                 "bluetooth_equipped": false,
//                 "connected_car": false
//             },
//             "capacity": {
//                 "doors": "4",
//                 "luggage_capacity": {
//                     "large_suitcase": "2",
//                     "small_suitcase": "2"
//                 }
//             },
//             "rate_totals": {
//                 "rate": {
//                     "currency": "INR",
//                     "rate_code": "GBI",
//                     "coupon_applied": false,
//                     "under_age_fee_applied": false,
//                     "coupon_discount_amount": 0
//                 },
//                 "pay_later": {
//                     "vehicle_total": 3040,
//                     "reservation_total": 25780.8
//                 }
//             },
//             "type": "People carrier",
//             'rating': Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
//         },
//         {
//             "category": {
//                 "name": "Group O - Mercedes-Benz SClass Chauffeur Drive Only or similar",
//                 "make": "Mercedes-Benz SClass",
//                 "model": "Chauffeur Drive Only",
//                 "vehicle_class_code": "O",
//                 "vehicle_class_name": "Luxury",
//                 "vehicle_transmission": "Automatic",
//                 "image_url": "https://www.avis.com/content/dam/cars/l/2021/mercedes/2021-mercedes-benz-s-class-350d-l-sedan-white.png"
//             },
//             "features": {
//                 "bluetooth_equipped": false,
//                 "air_conditioned": true,
//                 "connected_car": false
//             },
//             "capacity": {
//                 "doors": "4",
//                 "seats": "4",
//                 "luggage_capacity": {
//                     "large_suitcase": "2",
//                     "small_suitcase": "2"
//                 }
//             },
//             "rate_totals": {
//                 "rate": {
//                     "currency": "INR",
//                     "rate_code": "GBI",
//                     "coupon_applied": false,
//                     "under_age_fee_applied": false,
//                     "coupon_discount_amount": 0
//                 },
//                 "pay_later": {
//                     "vehicle_total": 10200,
//                     "reservation_total": 33800
//                 }
//             },
//             "type": "Small car",
//             'rating': Math.round((Math.random() * 0.4 + 7.5) * 10) / 10,
//         }
//     ],
//     "reservation": {
//         "pickup_location": {
//             "location": {
//                 "code": "BOM",
//                 "name": "Mumbai Airport",
//                 "telephone": "(91) 1244724850",
//                 "hours": "Sun - Sat open 24 hrs",
//                 "airport_location": true
//             },
//             "address": {
//                 "address_line_1": "Meet And Greet Service",
//                 "address_line_2": "Chatrapati Shivaji Int Apt",
//                 "city": "Mumbai",
//                 "state_name": "XX",
//                 "postal_code": "69",
//                 "country_code": "IN"
//             }
//         },
//         "dropoff_location": {
//             "location": {
//                 "code": "MAA",
//                 "name": "Chennai Airport",
//                 "telephone": "(91) 1244724850",
//                 "hours": "Sun - Sat open 24 hrs",
//                 "airport_location": true
//             },
//             "address": {
//                 "address_line_1": "Fairfield Sripermumbud Marriot",
//                 "address_line_2": "Sf 1536a Sipcot Industrial",
//                 "city": "Chennai",
//                 "state_name": "XX",
//                 "postal_code": "600 018",
//                 "country_code": "IN"
//             }
//         },
//         "terms": [
//             {
//                 "type": "location",
//                 "method": "GET",
//                 "endpoint": "https://stage.abgapiservices.com/terms/v1/location/Avis/IN/BOM/en_US"
//             }
//         ]
//     }
// })



  }
  

  