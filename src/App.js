import React,{useState} from "react";
import './App.css';
import Header from "./components/Header";
import Data from "./Data";
import LaterSearch from "./components/LatesrSearch";
import Card2 from "./components/Card3";


function App() {
  const [showDatepicker, setShowDatePicker] = useState(false);
  const searchClickHandler = ()=>{
    setShowDatePicker(!showDatepicker);
  }
  const closeDatePicker = ()=>{
    setShowDatePicker(false);
  }
  
  return (
    <div className="App">
      
      <Header onClick={searchClickHandler} />
      {showDatepicker && <LaterSearch onClose={closeDatePicker} />}
      <Card2 data={Data}/>

      {/* <IconsSlider/> */}
      {/* <TotalPrice/> */}
      {/* <CardContainer/> */}
    </div>
  );
}

export default App;
