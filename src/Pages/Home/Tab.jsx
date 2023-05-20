import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

//  [
//   {
//     "category": "sports",
//     "cars": [
//       {
//         "id": "1",
//         "name": "Lightning Strike",
//         "category": "Sports",
//         "price": "23",
//         "img": "https://images.pexels.com/photos/62276/pexels-photo-62276.jpeg?auto=compress&cs=tinysrgb&w=600",
//       },
//       {
//         "id": "2",
//         "name": "Thunderbolt",
//         "category": "Racing",
//         "price": "223",
//         "img": "https://images.pexels.com/photos/760979/pexels-photo-760979.jpeg?auto=compress&cs=tinysrgb&w=600",
//       },
//       {
//         "id": "3",
//         "name": "Speed Demon",
//         "category": "Racing",
//         "price": "234",
//         "img": "https://images.pexels.com/photos/69359/pexels-photo-69359.jpeg?auto=compress&cs=tinysrgb&w=600",
//       },
//     ],
//   },
//   {
//     "category": "reqular",
//     "cars": [
//       {
//         "id": "1",
//         "name": "Lightning Strike",
//         "category": "Sports",
//         "price": "23",
//         "img": "https://images.pexels.com/photos/62276/pexels-photo-62276.jpeg?auto=compress&cs=tinysrgb&w=600",
//       },
//       {
//         "id": "2",
//         "name": "Thunderbolt",
//         "category": "Racing",
//         "price": "223",
//         "img": "https://images.pexels.com/photos/760979/pexels-photo-760979.jpeg?auto=compress&cs=tinysrgb&w=600",
//       },
//       {
//         "id": "3",
//         "name": "Speed Demon",
//         "category": "Racing",
//         "price": "234",
//         "img": "https://images.pexels.com/photos/69359/pexels-photo-69359.jpeg?auto=compress&cs=tinysrgb&w=600",
//       },
//     ],
//   },
//   {
//     "category": "truck",
//     "cars": [
//       {
//         "id": "1",
//         "name": "Lightning Strike",
//         "category": "Sports",
//         "price": "23",
//         "img": "https://images.pexels.com/photos/62276/pexels-photo-62276.jpeg?auto=compress&cs=tinysrgb&w=600",
//       },
//       {
//         "id": "2",
//         "name": "Thunderbolt",
//         "category": "Racing",
//         "price": "223",
//         "img": "https://images.pexels.com/photos/760979/pexels-photo-760979.jpeg?auto=compress&cs=tinysrgb&w=600",
//       },
//       {
//         "id": "3",
//         "name": "Speed Demon",
//         "category": "Racing",
//         "price": "234",
//         "img": "https://images.pexels.com/photos/69359/pexels-photo-69359.jpeg?auto=compress&cs=tinysrgb&w=600",
//       },
//     ],
//   },
// ]

import data from '../../../tab.json'
const CategoryTab = () => {
 
//  const [products, setProducts] = useState([])

//  useEffect(()=>{
//   fetch(data)
//   .then(res => res.json())
//   .then(data => setProducts(data))
//  },[])
  
// console.log(products);
  return (
    <div>
      <div className="btn-group">
        <button className="btn btn-active">Sports</button>
        <button className="btn">Regular</button>
        <button className="btn">Truck</button>
      </div>
    </div>
  );
}
export default CategoryTab;
