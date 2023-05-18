import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategoryTab = () => {
    const [tabs, setTabs] = useState([])
    const [tabName, setTabName] = useState([])

    
  useEffect(()=>{
   const fetchData = async() => {
    //  fetch("http://localhost:5000/subcategory")
    //    .then((response) => response.json())
    //    .then((result) => {
    //      console.log(result.toyName);
    //      setTabs(result);
    //      console.log(result.toyName);
    //    })
    //    .catch((error) => console.log("error", error));

    const res =await fetch("http://localhost:5000/subcategory");
    const data =await res.json()
    setTabs(data)

    
  }
  
  fetchData()
  },[])


  useEffect(() => {
    const filtered = tabs.map((item) => item.toyName);
    setTabName(filtered);
    console.log(tabName);
  }, [tabs]);



  return (
    <div className="">
      <Tabs>
        <TabList>
          <Tab>Racing Car</Tab>
          <Tab>Action Car</Tab>
          <Tab>Normal Car</Tab>
        </TabList>

        {tabs.map((tab) => {
          const { subcategory,toyName } = tab;
          const {  quantity, subcatPhoto1, subcatPhoto2 } =
            subcategory[0];
          return (
            <>
              <Tabs>
                <TabList>
                  <Tab>{toyName}</Tab>
                  <Tab>{toyName}</Tab>
                  <Tab>{toyName}</Tab>
                </TabList>

                <TabPanel>
                  <h1>{quantity}</h1>
                  <img src={subcatPhoto1} alt="" />
                  <img src={subcatPhoto2} alt="" />
                </TabPanel>
              </Tabs>
            </>
          );
        })}
      </Tabs>


      {/* <Tabs>
        <TabList>
          <Tab>Racing Car</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.pexels.com/photos/2922140/pexels-photo-2922140.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Movie"
                className="h-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tyres{tabs.length}</h2>
              <p>
                <span> Slick Tires</span>: Slick tires have a smooth surface
                without any tread patterns. They maximize contact between the
                tire and the road, providing optimal grip on dry surfaces. Slick
                tires are commonly used in Formula 1, circuit racing, and other
                dry track conditions.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs> */}
    </div>
  );
};

export default CategoryTab;
