import React,{useState} from "react";
import './App.css';
import Filter from "./components/Flter";
import Header from "./components/Header";
import Data from "./Data";
import LaterSearch from "./components/LatesrSearch";
import Card2 from "./components/Card3";


function App() {
  const [showDatepicker, setShowDatePicker] = useState(false);
  const [isActive, setIsActive] = useState("Amazing views")
  const searchClickHandler = ()=>{
    setShowDatePicker(!showDatepicker);
  }
  const closeDatePicker = ()=>{
    setShowDatePicker(false);
  }
  const fliterClickHandler = (hotelType) =>{
    setIsActive(hotelType);
    console.log(hotelType)
  }
  const FilteredHotel = Data.filter(hotel => {
    return isActive === hotel.hotelType;
  })
  const kk = new Date("Feb 1, 2007")  
  const kl = kk.getMonth();
  
  return (
    <div className="App">
      
      <Header onClick={searchClickHandler} />
      {showDatepicker && <LaterSearch onClose={closeDatePicker} />}
      <Filter Active={isActive} activeHotelType={fliterClickHandler}/>
      <Card2 data={FilteredHotel}/>
      {console.log(kl)}
      
      {/* {console.log("Hello I am there".trim())} */}
      {/* <IconsSlider/> */}
      {/* <TotalPrice/> */}
      {/* <CardContainer/> */}
    </div>
  );
}

export default App;
