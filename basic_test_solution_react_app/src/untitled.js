import { useEffect, useState } from "react";
import './App.css';
import input from "./input.txt";

let input_data = '';
const add = (a, b) => {  
  return a + b; 
};
const subtract = (a, b) => {  
  return a - b; 
};
const multiply = (a, b) => {  
  return a * b; 
};
const division = (a, b) => {  
  return a / b; 
};

const operations = {'add': add, 'sub': subtract, 'mul': multiply, 'div': division};

function App() {
  const [inputd, setInputd] = useState("");
  useEffect(() => {
  fetch(input).then(function(res){
                return res.text();
            }).then(function (data) {
            setInputd(data);
        })
  });
  let instr_list = inputd.split('\n');
  let apply_val = parseInt(instr_list[instr_list.length-1].split(' ')[1]);
    if (instr_list.length == 1) {
      return apply_val;
    }
  // for(let i=0; i<instr_list.length-1; i++){
  //   let a = instr_list[i].split(' ');
  //   let funct = a[0];
  //   let val = a[1];
  //   // if (funct == 'div' && val == '0'){
  //   //   return "Zero Division Error";
  //   // }
  //   apply_val = operations[funct](apply_val, parseInt(val));
  }
  return (
     <div className="App">
     {instr_list.map((i) => (
      let a = instr_list[i].split(' ');
    let funct = a[0];
    let val = a[1];
    // if (funct == 'div' && val == '0'){
    //   return "Zero Division Error";
    // }
    apply_val = operations[funct](apply_val, parseInt(val));
    return '<h1> Result is --- {apply_val}';
        
      ))}
    </div>
    
  );

}

export default App;
