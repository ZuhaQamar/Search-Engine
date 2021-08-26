import axios from "axios";

export default axios.create({
  baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID CvXtfF3Q8u2nADcd2-XPD_oXJtL0CS-fd58EJw7At8M'
        } 
});