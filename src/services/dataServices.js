var catalog = [
  {
    _id: "1",
    title: "Ballons",
    image: "ballons.jpeg",
    price: 12.0,
    category: "Decoration",
  },
  {
    _id: "2",
    title: "Part Blowouts",
    image: "partyblowout.jpeg",
    price: 20.0,
    category: "Misc",
  },
  {
    _id: "3",
    title: "partyhats",
    image: "partyhats.jpeg",
    price: 2.0,
    category: "Hats",
  },
  {
    _id: "4",
    title: "Red Cups",
    image: "red-cups.jpeg",
    price: 23.0,
    category: "Drinks",
  },
];

class DataService {
  function;

  getCatalog() {
    // create http request
    // to retrieve data from the server
    // return mock data
    return catalog;
  }
  registerProduct() {
    //
  }
}

export default DataService;
