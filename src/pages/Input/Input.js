import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Input() {
const navigate = useNavigate();
const [data, setData] = useState([])
const [nama, setNama] = useState("")
const [refetch, setRefetch] = useState(true)


function handleTambahuser(e) {
    axios.post(`https://632afed0713d41bc8e7d42aa.mockapi.io/todos`,{
      task : nama,
    })
    .then(() => navigate('/'))
  }


  function getUsers() {
    axios.get("https://632afed0713d41bc8e7d42aa.mockapi.io/todos").then((response) => {
      setData(response.data);
      setRefetch(false);
    });
  }

  useEffect(() => {
    if (refetch) getUsers();
  }, [refetch]);




return (
  <>
  <div className="container"> 
    <div className="row">
        <div className="col-10 col-md-8 mx-auto mt-4"> 
            <h3 className="text-capitalize text-center">TodoInput</h3>


            <div className="card card-body my-3">
                <form className='row'>
                <div className="input-group">    
                    <div className="input-group-prepend">
                    <div className="input-group-text bg-success text-white">
                        <i className="fas fa-book" />
                    </div>
                    </div>  
                        <input className='col-sm-5' type="text" placeholder='Inputkan TODO' value={nama} onChange={(e)=>setNama(e.target.value)}/>
                </div>

                <div class="row justify-content-between">
                
              
               
                    <button onClick={
                          (e)=>{ e.preventDefault(e) 
                            handleTambahuser()
                          }} className={`btn btn-success mt-3 col-sm-3 `}>SUBMIT TODO</button>
                </div>                      
                </form>
                </div>
    </div>
    </div>
    </div>

  
  </>
)
}