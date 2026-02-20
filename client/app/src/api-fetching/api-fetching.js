import axios from "axios";

export const retrieveBrandByDomain = async () => {
  const url = 'https://api.brand.dev/v1/brand/retrieve';


  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error('Error retrieving branddfhghfd data:', error);
  }
}


