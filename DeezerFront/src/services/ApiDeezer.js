import axios from 'axios';
async function searchArtist(artist) {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/?search=${artist}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return res;
}
export { searchArtist };
