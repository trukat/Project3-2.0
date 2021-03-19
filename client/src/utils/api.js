import axios from "axios";

function eventData() {

    const options = {
      method: 'GET',
      url: 'https://seatgeek-seatgeekcom.p.rapidapi.com/events',
      headers: {
        'x-rapidapi-key': '102e0fee92mshced132a3d779a81p1b9eb5jsnb602debd05bb',
        'x-rapidapi-host': 'seatgeek-seatgeekcom.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
};

export default eventData;