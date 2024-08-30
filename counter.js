let counter = 0;

const countIncrease = () => {
  if(counter < 10){
    counter = counter + 1;
  }
   
};

const countDecrease = () => {
  if(counter > 0){
    counter = counter - 1;
  }
};


const countReset = () => {
  counter = 0;
};
