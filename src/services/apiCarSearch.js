import { json } from "react-router-dom"

export async function getCars(pickUpDate, dropOffDate,pickUpTime,dropOffTime ,pickUpLocation,dropOffLocation,brand,countryCode) {

  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

    
  let token;

  try {
    const response = await fetch(`https://stage.abgapiservices.com/oauth/token/v1`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        "client_id": clientId,
        "client_secret":  clientSecret, 
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





  try {
      const response = await fetch(`https://stage.abgapiservices.com/cars/catalog/v1/vehicles?brand=${brand}&pickup_date=${pickUpDate}T${pickUpTime}&pickup_location=${pickUpLocation}&dropoff_date=${dropOffDate}T${dropOffTime}&dropoff_location=${dropOffLocation}&country_code=${countryCode}`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          "client_id": clientId,
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


  }
  

  