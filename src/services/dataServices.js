import axios from "axios";

var catalog = [
  {
    _id: "143jkjkrje",
    title: "Ballons",
    image: "ballons.jpeg",
    price: 12.0,
    category: "Decoration",
  },
  {
    _id: "2r3rnjhf",
    title: "Part Blowouts",
    image: "partyblowout.jpeg",
    price: 20.0,
    category: "Misc",
  },
  {
    _id: "349393jkjkn",
    title: "partyhats",
    image: "partyhats.jpeg",
    price: 2.0,
    category: "Hats",
  },
  {
    _id: "4fekhj3u9",
    title: "Red Cups",
    image: "red-cups.jpeg",
    price: 23.0,
    category: "Drinks",
  },
];

class DataService {
  function;

  async getCatalog() {
    // create http request
    // to retrieve data from the server
    // return mock data
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    console.log("test", response.data);
    return response.data;

    //return catalog;
  }
  registerProduct() {
    //
  }
}

export default DataService;
