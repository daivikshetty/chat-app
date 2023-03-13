import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {
  const [backend, setBackend] = useState();

  const data = async() => {
    const res = await Axios.get("http://localhost:5500/home");
    console.log(res.data);
    setBackend(res.data);
  }

  useEffect(() => {
    data()
  },[]);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

export default App;
