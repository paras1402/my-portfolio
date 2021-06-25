import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import { DisplayPortfolio } from "../DisplayPortfolio/DisplayPortfolio";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [selectedList, setSelectedList] = useState(featuredPortfolio);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    if (selected === "featured") {
      setSelectedList(featuredPortfolio);
    }
    if (selected === "web") {
      setSelectedList(webPortfolio);
    }
    if (selected === "mobile") {
      setSelectedList(mobilePortfolio);
    }
    if (selected === "design") {
      setSelectedList(designPortfolio);
    }
    if (selected === "content") {
      setSelectedList(contentPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            active={selected === item.id}
            key={item.id}
            title={item.title}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="containerproject">
        {selectedList.map((item) => (
          <DisplayPortfolio
            key={item.id}
            title={item.title}
            image={item.img}
          ></DisplayPortfolio>
        ))}
        {/* <div className="item">
          <img
            src="https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
