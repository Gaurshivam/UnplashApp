import './App.css';
import axios from 'axios';
import {useState} from 'react'
import Card from './Component/Card';

function App() {
  const [photo, setPhoto] = useState([])

  const getImage = () =>{
    axios.get("https://api.unsplash.com/search/photos?page=1&query=office&client_id=bDUPJkSt0OAs4nlFyS4NWtJWqaucFYKpVzkXuTtHK6Q")
    .then((res)=>{
      console.log(res.data.results);
      setPhoto(res.data.results)
    })
  }
  return (
    <div className="App">
      <h2 style={{color:"white"}}>Unplash Photo App</h2>
      <button onClick={getImage} style={{color:"white",backgroundColor:"blue",padding:"10px", width:"180px",borderRadius:"20px"}}>Get Image</button>
      <div style={{display:"flex",flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>
       <Card photo={photo} />
      </div>
    </div>
  );
}

export default App;
