import React ,{useRef ,useState} from 'react'
import RepoList from './RepoList'
function Userlist() {
    const[loading ,setloading] =useState(false);
    const[repos,setrepos] = useState([]);
    const[error ,seterror]=useState(null);
    const inputref=useRef();
    const fetchData= async(userName)=>{
        const res = await fetch(`https://api.github.com/users/${userName}/repos`);
        const data =await res.json();
        setloading(false);
        if(res.status===404){
            seterror(data.message);
            return;
        }
        setrepos(data);
        console.log(data);
    }
    const FormSubmitHandler=(e)=>{
        e.preventDefault();
        setloading(true);
         console.log(inputref.current.value);
         if(inputref.current.value.trim().length===0){
            // form will not submit
            return;
         }
       fetchData(inputref.current.value);
    }
  return (
    <div>
        <form onSubmit={FormSubmitHandler} >
      <input type="text" placeholder="name" ref={inputref} />
      <button >Submit</button>
      </form>
      {loading && <h3>loading.....</h3>}
      {error && !loading && <h3>{error}</h3>}
      {!error && !loading && repos.length !==0 && <RepoList repos={repos} />}
        
    </div>
  )
}

export default Userlist
