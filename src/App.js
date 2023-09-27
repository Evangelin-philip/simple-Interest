
import { useState } from 'react';
import './App.css';
import { TextField,Stack,Button} from '@mui/material';

function App() {


  const [principle,setPrinciple]=useState(0)
  const [rate,setrate]=useState(0)
  const [Interest,setinterest]=useState(0)
  const [year,setyear]=useState(0)
  const [isprincepleValid,setprincepleIsvalid]=useState(true)
  
  const [israteValid,setrateIsvalid]=useState(true)
  
  const [isyearValid,setyearIsvalid]=useState(true)


  const validate_inputs=(e)=>{
    const {value,name}=e.target
    if(!!value.match(/^[0-9]+$/) || value==""){
      if(name=="priciple"){
        setPrinciple(value)
        setprincepleIsvalid(true)
      }else if(name=="rate"){
        setrate(value)
        setrateIsvalid(true)
      }else{
        setyear(value)
        setyearIsvalid(true)
      }
      
    }else{
      if(name=="priciple"){
        setPrinciple(value)
        setprincepleIsvalid(false)
      }else if(name=="rate"){
        setrate(value)
        setrateIsvalid(false)
      }else{
        setyear(value)
        setyearIsvalid(false)
      }
    }
  }


  const handle_calculate=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert(" PLease Fill The Form")
    }
    else{
      setinterest(principle*rate*year/100)
    }
  }
  console.log(principle,rate,year,Interest)


  const handle_reset=()=>{
    setinterest(0)
    setPrinciple(0)
    setrate(0)
    setyear(0)
    setprincepleIsvalid(true)
    setrateIsvalid(true)
    setyearIsvalid(true)
    
  }


  
  return (
    <div className='w-100 d-flex justify-content-center align-items-center bg-dark' style={{height:"100vh"}}>
      <div className='bg-light  p-5 rounded' style={{width:"500px",height:"100vh"}}>
        <div className='heading'>
            <h3>Simple Interest Calculator</h3>
            <p>Calculate Your Simple Interest Easily</p>
        </div>
        {/*  to make content center d-flex */}
        <div className="interest_card d-flex flex-column justify-content-center align-items-center rounded bg-primary w-100 shadow" style={{height:"150px"}} >
          <h1>₹ {''} {Interest}</h1>
            <p className='fw-bold'>Total Simple Interest</p>
        </div>


        <form className='mt-3' onSubmit={handle_calculate}>
          <div className='mb-3'>
          <TextField className="w-100" id="outlined-basic" label=" ₹ Principle Amount" variant="outlined" 
          name="priciple" value={principle || ""} onChange={(e)=>validate_inputs(e)}/>
          </div>

          {
            !isprincepleValid &&
            <div className='mb-3 text-danger'>
              * Invalid input
          </div>}

          <div className='mb-3'>
          <TextField className="w-100" id="outlined-basic2" label="Rate of interest ( p.a )%" variant="outlined" 
          name="rate" value={rate || ""} onChange={(e)=>validate_inputs(e)}/>
          </div>
          {
            !israteValid &&
            <div className='mb-3 text-danger'>
              * Invalid input
          </div>}

          <div className='mb-3'>
          <TextField className="w-100" id="outlined-basic3" label="Time Period (Yr )" variant="outlined" 
          name="year" value={year || ""} onChange={(e)=>validate_inputs(e)}/>
          </div>
          {
            !isyearValid &&
            <div className='mb-3 text-danger'>
              * Invalid input
          </div>}

          <Stack direction="row" spacing={2}>
            {/*  on click of calculate btn ..submit event should work so, buttton type="submit" */}
          <Button type="submit" style={{height:"50px", width:"200px",color:"#000000"}}  variant="contained"
          disabled={isprincepleValid && israteValid && isyearValid?false:true}>Calculate</Button>
          <Button  style={{height:"50px", width:"200px"}} variant="outlined" onClick={handle_reset}>Reset</Button>
          </Stack>


        </form>
      </div>
    </div>
  );
}

export default App;
