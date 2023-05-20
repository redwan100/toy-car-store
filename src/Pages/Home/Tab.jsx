import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loadings from "../Shared/Loadings";

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

const CategoryTab = () => {
 const [loading, setLoading] = useState(true)
 const [products, setProducts] = useState(null)
 const [activeTab, setActiveTab] = useState('sports')

 

 useEffect(()=>{
  fetch(`http://localhost:5000/categoryItems/${activeTab}`)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      setLoading(false);
    });
 },[activeTab])

 const handleTab = (text) => {
  setActiveTab(text)
 }

 
 if(loading) {
  return <Loadings />
 }


  return (
    <div>
      <div className="btn-group">
        <button className="btn btn-active" onClick={() => handleTab("sports")}>
          Sports
        </button>
        <button className="btn" onClick={() => handleTab("regular")}>
          Regular
        </button>
        <button className="btn" onClick={() => handleTab("truck")}>
          Truck
        </button>
      </div>

      {products &&
        products.map((product, i) => (
          <div key={i}>
            <h1>{product.categoryName}</h1>
            <h1>{product.description }</h1>
            <img src={product.photoUrl} alt="" />
          </div>
        ))}
    </div>
  );
}
export default CategoryTab;
