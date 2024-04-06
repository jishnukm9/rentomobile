

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
  
      const data = await response.json();
      
      return data
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error);
    }
  }
  

  