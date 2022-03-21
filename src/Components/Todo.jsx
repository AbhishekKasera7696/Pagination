import React from 'react';

const Todo = () =>{
    
    const [inputValue, setInputValue] = React.useState("");
    const [todos,setTodos] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const [page, setPage] = React.useState(1);


    React.useEffect(() =>{
        getTodos();
    }, [page] );

    const getTodos = () => {
        setIsLoading(true);
        fetch(`http://localhost:3005/todos?_page=${page}&_limit=3`)
        .then((res) => res.json())
        .then((res) => {
            setTodos(res);
            setIsError(false);
        })
        .catch((err) => setIsError(true))
        .finally(()=>setIsLoading(false));
    }

    const handleAdd = () => {
        console.log(inputValue)
        const payload = {
            title : inputValue,
            staus : false
        };

        const payloadjson = JSON.stringify(payload);
 
        setIsLoading(true);

         fetch(`http://localhost:3005/todos` , {
              method: 'POST',
              body:payloadjson,
              headers:{
                  "content-type":"application/json"
              }
         }).then(() => {
            getTodos()
         })
         .catch((err) => setIsError(true))
         .finally(() => setIsLoading(false));

    };

    return isLoading ? (<div>...Loading</div>  ) 
    : isError ? <div>Error...something went wrong</div> : (
        <div>
           <input placeholder='Add Todos' 
           values={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
           />
           <button onClick={handleAdd}>ADD</button>
           {
               todos.map((item) => {
                   return <div>{item.title}</div>
               })
           }
          <button onClick={() => setPage(page - 1)} disabled={page===1}>Less</button>
          <button onClick={() => setPage(page + 1)}>More</button>
        </div>
        
    );
}

export {Todo}