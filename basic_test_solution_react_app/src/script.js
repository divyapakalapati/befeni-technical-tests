//this file contains all the operations that are avaialble for this add.
//Additional operations need to be added only here.

export const add = (a, b) => {  
  return a + b; 
};
export const subtract = (a, b) => {  
  return a - b; 
};
export const multiply = (a, b) => {  
  return a * b; 
};
export const division = (a, b) => {  
  return a / b;  //since javascript has the infinity keyword, no need to handle zerodivision error.
};

export const operations = {'add': add, 'subtract': subtract, 'multiply': multiply, 'div': division};

