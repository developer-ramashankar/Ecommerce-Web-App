import "./header.css";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import SelectDrop from "../selectDrop/SelectDrop";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import comparelogo from "../../assets/images/icon-compare.svg";
import WishlistIcon from "../../assets/images/icon-heart.svg"
import CartIcon from "../../assets/images/icon-cart.svg"
import UserIcon from "../../assets/images/icon-user.svg"
import Badge from "@mui/material/Badge";
import { useEffect, useState } from "react";
import axios from "axios";
const Header = () => {
  const [category, setCategory] = useState([
    "All Categories",
    "Milks and Dairies",
    "Wines & Drinks",
    "Fresh Seafood",
    "Fast food",
    "Fresh Meat",
    "Pet Foods & Toy",
    "Clothing & beauty",
    "Baking material",
    "Vegetables",
    "Bread and Juice",
    "Fresh Fruit",
  ]);
  useEffect(() => {
    getCountry();
  }, []);

  const countryList = ["Your Location"];
  const getCountry = async () => {
    await axios
      .get("https://countriesnow.space/api/v0.1/countries/")
      .then((res) => {
        if (res !== null)
          res.data.data.map((item) => {
            countryList.push(item.country);
          });
      });
  };

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} alt="" />
            </div>
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <SelectDrop
                  data={category}
                  placeholder="All Categories"
                  icon={false}
                />
                <div className="search">
                  <input type="text" placeholder="Search for products..." />
                  <SearchIcon className="searchIcon" />
                </div>
              </div>
            </div>
            <div className="col-sm-5 d-flex align-items-center">
              <div className="ml-auto d-flex align-item-center">
                <div className="countryWrapper">
                  <SelectDrop
                    data={countryList}
                    placeholder="Your Location"
                    icon={<PlaceOutlinedIcon style={{ opacity: 0.7 }} />}
                  />
                </div>
                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                    <span>
                      {" "}
                      <Badge badgeContent={2} color="success">
                        <img src={comparelogo} className="headerIcon" alt="" />
                      </Badge>
                      Compare
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      {" "}
                      <Badge badgeContent={6} color="success" >
                        <img src={WishlistIcon} alt="" />
                      </Badge>{" "}
                      Wishlist
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      {" "}
                      <Badge badgeContent={5} color="success">
                        <img src={CartIcon} alt="" />
                      </Badge>
                      Cart
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      {" "}
                       
                        <img src={UserIcon} alt="" />
                       
                      Account
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
