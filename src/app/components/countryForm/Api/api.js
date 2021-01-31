import Axios from "axios";
// get countries
export const getCountryList = async (setter) => {
  try {
    const res = await Axios.get(`https://restcountries.eu/rest/v2/all`);
    if (res.status === 200 && res?.data) {
      setter(res?.data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
