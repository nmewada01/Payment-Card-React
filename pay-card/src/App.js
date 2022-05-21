import "./App.css";
import React from "react";
import Card from "./components/Card";

const d = new Date();
const curDate = d.toLocaleDateString()
const curDates = d.toDateString();



function App() {
 return (
	  <>
    <Card
      date={curDate}
	  icon={<i className="fa-brands fa-amazon fa-5x"></i>}
      title="Case Study"
      CompTitle="Amazon"
	  ComTitle="Pay"
      mode="Desktop-Mobile"
	  
    />
	<Card
	date={curDate}
	icon={<i className="fa-brands fa-amazon fa-5x"></i>}
	title="Case Study"
	CompTitle="Amazon"
	ComTitle="Pay"
	mode="Desktop-Mobile"
	
  />
  <Card
  bgcolor="apple"
  date={curDates}
  icon={<i className="fa-brands fa-apple fa-5x"></i>}
  title="Case Study"
  CompTitle="Apple Gift"
  ComTitle="Payment"
  mode="MacOS-Mobile"
  
/>

</>
	
  );
}

export default App;
