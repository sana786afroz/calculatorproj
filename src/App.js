import React,{useState} from 'react'
import './App.css';

function App() {
  const[data,setData] =useState("")

  function changeDta(e){
    setData(data.concat(e.target.value))
  }

  function getResult(){
    setData(eval(data).toString())
  }

  function allClear(){
    setData(" ")
  }
  return (
   
    <div className='calc' >
    <input type="text" placeholder="Calculate" id="data" value={data}/>
    <input type="button" value="9" className="button" onClick={changeDta}/>
    <input type="button" value="8" className="button" onClick={changeDta}/>
    <input type="button" value="7" className="button" onClick={changeDta}/>
    <input type="button" value="6" className="button" onClick={changeDta}/>
    <input type="button" value="5" className="button" onClick={changeDta}/>
    <input type="button" value="4" className="button" onClick={changeDta}/>
    <input type="button" value="3" className="button" onClick={changeDta}/>
    <input type="button" value="2" className="button" onClick={changeDta}/>
    <input type="button" value="1" className="button" onClick={changeDta}/>
    <input type="button" value="0" className="button" onClick={changeDta}/>
    <input type="button" value="." className="button" onClick={changeDta}/>
    <input type="button" value="%" className="button" onClick={changeDta}/>
    <input type="button" value="*" className="button" onClick={changeDta}/>
    <input type="button" value="+" className="button" onClick={changeDta}/>
    <input type="button" value="-" className="button" onClick={changeDta}/>
    <input type="button" value="/" className="button" onClick={changeDta}/>

    <input type="button" value="=" className="button2 button2"onClick={getResult}/>
    <input type="button" value="ac" className="button2 button2"onClick={allClear}/>
    </div>
    
  )
}

export default App;
