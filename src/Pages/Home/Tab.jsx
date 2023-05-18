import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategoryTab = () => {
  return (
    <div>
      <Tabs>
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
              <h2 className="card-title">Tyres</h2>
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

        <TabPanel>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.pexels.com/photos/15489247/pexels-photo-15489247.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Movie"
                className="h-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Engine</h2>
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

        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTab;
