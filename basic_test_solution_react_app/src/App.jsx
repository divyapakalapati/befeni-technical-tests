import { useEffect, useState } from "react";
import './App.css';
import input from "./input.txt";
import * as calc from './script';
function App() {

  // Get the input data from input.txt file
  const [inputd, setInputd] = useState("");
  useEffect(() => {
  fetch(input).then(function(res){
              return res.text();
            }).then(function (data) {
            setInputd(data);
        })
  });

  //remove any blank lines given in input file.
  let input_string = inputd.split(/\r?\n/) // Split input text into an array of lines
    .filter(line => line.trim() !== "") // Filter out lines that are empty or contain only whitespace
    .join("\n"); // Join line array into a string
  
  //Retrieve the apply value
  let instr_list = input_string.split('\n');
  let apply_val = parseInt(instr_list[instr_list.length-1].split(' ')[1]);

  //edge case
  if (instr_list.length === 1) {
    return apply_val;
  }

  //map each instruciton with its corresponding function
  instr_list.map(i => {
      let a = i.split(' ');
      let funct = a[0];
      let val = a[1];
      if (funct === 'apply') return;
      apply_val = calc.operations[funct](apply_val, parseInt(val));
  });

  return (
     <div className="App">
     <h1> Result is {apply_val}</h1>   
    </div>
    
  );
}

export default App;
