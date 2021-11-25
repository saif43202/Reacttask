import React from "react";

function New(){
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
const a=["java","python","react","js","C"];
const fname="saif";
const age=25;
const aa=` my name is ${fname} and my age is ${age}`;
//document.write(numbersCombined);

  return (
    <div>
      <h1>{numbersCombined}</h1>
      <h1>{aa}</h1>
    </div>
  );
  }

export default New;
