const INIT_STATE = [
    { id: 1, title : 'Helmet', link : 'http://bobscycle-cdn.sa.metacdn.com/media/catalog/product/4392204.JPG'},
    { id: 2, title : 'Gloves', link : 'https://i.ytimg.com/vi/0ZrcjSQCMMo/maxresdefault.jpg'},
    { id: 3, title : 'Boots', link : 'https://i.ytimg.com/vi/AtUr_J4QXVQ/maxresdefault.jpg'},
    { id: 4, title : 'Lock', link : 'http://geppe.us/images/products/GEPPE-LK-10-a.jpg'},
    { id: 5, title : 'Armored Jacket', link : 'http://static.webshopapp.com/shops/014327/files/068136368/587x547x2/ixs-eliott.jpg'},
    { id: 6, title : 'Armored Pants', link : 'http://static.webshopapp.com/shops/014327/files/083023226/ugly-bros-ton-up-men.jpg'},
];

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
