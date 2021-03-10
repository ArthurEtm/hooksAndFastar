import React, {useState} from "react";
import {FaStar} from "react-icons/fa"

const createArray = (length) =>[
  ...Array(length)
];

function Star({selected=false, onSelect}){
  return ( 
  <FaStar color={selected ? "red" : "purple"}
  onClick={onSelect}
  />
);
}

function StarRating({totalStars}){
  const [
    selectedStars, 
    setSelectedStars
  ] = useState(0);
  return <>
  {createArray(totalStars).map((n,i) => (
  < Star  key={i}
  selected={selectedStars >i} 
  onSelect = {  () => setSelectedStars(i + 1) } 
    />
    ))}
     <p>{selectedStars} of {totalStars}</p>
     </>
}

function App() {
  return (
    <div className="App">
     <StarRating totalStars={5}/>
    </div>
  );
}

export default App;
