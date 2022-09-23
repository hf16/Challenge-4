import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';


function App() {
  const [data, setData] = useState([])
  const [refetch, setRefetch] = useState(true)
  const [inputSearch, setInputSearch]= useState("")

  const navigate = useNavigate();



  function handleHapusdata(id){
    axios
    .delete(`https://632afed0713d41bc8e7d42aa.mockapi.io/todos/${id}`)
    .then((response) => setRefetch(true))
  }

  function getUsers() {
    axios.get("https://632afed0713d41bc8e7d42aa.mockapi.io/todos").then((response) => {
      setData(response.data);
      setRefetch(false);
    });
  }


  function completeTrue(){
    axios.get("https://632afed0713d41bc8e7d42aa.mockapi.io/todos/?complete=true").then((response) => {
      setData(response.data);
      setRefetch(false);
    });

  }

  function completeFalse(){
    axios.get("https://632afed0713d41bc8e7d42aa.mockapi.io/todos/?complete=false").then((response) => {
      setData(response.data);
      setRefetch(false);
    });

  }

  const hasilSearchTODO = data.filter((user) =>
  user.task.toLowerCase().includes(inputSearch.toLowerCase())
  ) 
//   console.log(hasilSearchTODO)
 

  useEffect(() => {
    if (refetch) getUsers();
  }, [refetch]);

 

 return (
  <>
  <div className="container"> 
    <div className="row">
        <div className=" col-md-8 col-10 mx-auto mt-4"> 
            <h2 className="font-weight-bold text-center ">TodoSearch</h2>
              <div className="card card-body my-3">
                <form className='row'>
                 <div className="input-group">    
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-success text-white">
                          <i className="fas fa-home" />
                      </div>
                    </div>  
                        <input className='col-sm-5' type="text" placeholder='Search TODO' value={inputSearch} onChange={(event)=>setInputSearch(event.target.value)}/>
                </div>
                <div class="row justify-content-between">  
                  <button className='btn btn-success mt-3 col-sm-6' type="button" onClick={() => inputSearch}>Serach</button>
                  <button onClick={() => navigate("/Input")} className="btn btn-success mt-3 col-sm-3" >Add New Task</button>
                </div>                      
                </form>
              </div>

                
            <h3 className="text-center">Todo List</h3>
            <div className="row justify-content-between">
                <button  type="button" className="btn btn-success  mt-1 col-md-3" onClick={() => getUsers()}>
                    All
                </button>
              
                <button  type="button" className="btn btn-success mt-1 col-md-3" onClick={() =>completeTrue()}>
                Done
                </button>
                    
                <button  type="button"className="btn btn-success mt-1 col-md-3"onClick={() => completeFalse()}>
                Todo
                </button>          
            </div>
            <ul className="list-group my-4"> 
                {hasilSearchTODO?.map((user)=> (
                  <div key={user.id}>

                    <li className="list-group-item d-flex justify-content-between my-2">
                    {!user.complete ? 
                    (<h6 className='mt-1 mb-0 align-middle'> {user.task} </h6>) 
                    :
                    (<h6 className='mt-1 mb-0 align-middle text-danger'> <strike> {user.task} </strike> </h6>)
                    }
                      

                    <div className="todo-icon">
                    <span>
                        <input type="checkbox" checked={user.complete} onChange={() => {
                            axios.put(`https://632afed0713d41bc8e7d42aa.mockapi.io/todos/${user.id}`,
                            {
                              complete: !user.complete 
                            }).then(()=>{
                              setRefetch(true)
                            })


                        }}/>
                    </span>


                    <span 
                        className="mx-2 text-warning"
                        onClick={()=>{                                                  
                        navigate(`/Update/${user.id}`)
                    }}>
                        <i className="fas fa-pen"/>
                    </span>
                    <span 
                        className="mx-2 text-danger"
                        onClick={() => handleHapusdata(user.id)
                    }
                    >
                        <i className="fas fa-trash" />
                    </span>                       
                    </div>

                    </li>
                    </div>
                
                )
                )}
            </ul>

            
</div>
</div>
</div>
  </>
 )
}

export default App;
