import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Input() {
const navigate = useNavigate();
const [data, setData] = useState([])
const {id}= useParams() 
console.log(id)
console.log(data)


  function editData(e) {
    e.preventDefault()
        axios.put(`https://632afed0713d41bc8e7d42aa.mockapi.io/todos/${id}`,{
            task : data, 
        }).then(()=> navigate('/'))
  }

  function getUsers() {
    axios.get(`https://632afed0713d41bc8e7d42aa.mockapi.io/todos/${id}`).then((response) => {
      setData(response.data.task);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);



return (
  <>
  <div className="container"> 
    <div className="row">
        <div className="col-10 col-md-8 mx-auto mt-4"> 
            <h3 className="text-capitalize text-center">EDIT Todo</h3>


            <div className="card card-body my-3">
                <form className='row'>
                <div className="input-group">    
                    <div className="input-group-prepend">
                    <div className="input-group-text bg-success text-white">
                        <i className="fas fa-book" />
                    </div>
                    </div>  
                        <input className='col-sm-5' type="text" placeholder='Inputkan Nama' value={data} onChange={(e)=>setData(e.target.value)}/>

                </div>

                <div class="row justify-content-between">
                  <button onClick={editData} className={`btn btn-success mt-3 col-sm-3 `}>Submit Edit TODO</button>
                </div>                      
                </form>
                </div>
    </div>
    </div>
    </div>

  
  </>
)
}