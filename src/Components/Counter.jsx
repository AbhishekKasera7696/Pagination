import React from 'react';


function Counter() {
  const [count, setCount] = React.useState(0);
  const [products, setProducts] = React.useState([]);

  console.log("line5");

  React.useEffect(() => {
    console.log("inside useEffect")
    // getData();
    document.title = `Counter Count : ${count}`
  }, [count]);
 


  React.useEffect(() => {
      console.log("page is mount for the first time");
      getData();
  },[])

  console.log("line9");

  const getData = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
    .catch(err =>console.log(err))
    .finally(() => console.log("finally we are done"));
  }

  return(
     <div>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount((count + 1))}>ADD</button>
      {
        products.map((item) => <div>{item.title}</div>)
      }
     </div>
  )
}

export {Counter};
