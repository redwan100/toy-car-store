import { useContext, useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import Loadings from "../Shared/Loadings";
import TabCard from "./TabCard";
import { AuthContext } from "../../Context/AuthProvider";

const CategoryTab = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [btns, setBtns] = useState([]);
  const [activeTab, setActiveTab] = useState("sports");

  const { handleTost } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://cartoystor.vercel.app/categoryItems/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [activeTab]);

  const handleTosts = () => {
    handleTost();
  };

  useEffect(() => {
    fetch(`https://cartoystor.vercel.app/allToys`)
      .then((res) => res.json())
      .then((data) => {
        setBtns(data);
      });
  }, [activeTab]);

  const handleTab = (text) => {
    setActiveTab(text);
  };

  const btnArr = btns.map((p) => p.subcategoryName);

  const btn = [...new Set(btnArr)];

  if (loading) {
    return <Loadings />;
  }

  return (
    <div>
      <div className="btn-group mx-auto block w-max py-4">
        {btn.slice(0, 3).map((b, i) => (
          <button
            className={`btn ${activeTab === b && "bg-red-500"}`}
            key={i}
            onClick={() => handleTab(b)}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {products &&
          products.map((product) => (
            <TabCard handleTost={handleTosts} key={product._id} {...product} />
          ))}
      </div>
    </div>
  );
};
export default CategoryTab;
