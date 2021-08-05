import React from 'react'
import '../App.css';
import { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom'



function Home() {
    const [name, setName] = useState(" ");
    const [surname, setSurname] = useState(" ");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const history=useHistory();


    useEffect(()=>{
        localStorage.setItem("name",name)
    },[name]);

    useEffect(()=>{
        localStorage.setItem("surname",surname)
    },[surname]);
    useEffect(()=>{
        localStorage.setItem("bmi",bmi)
    })

    const nameChange=(e)=>{
        setName(e.target.value)   
    }
    
    

    const surnameChange=(e)=>{
        setSurname(e.target.value)
        
    }
    

    const heightChange=(e)=>{
        setHeight(e.target.value)
        
    }
    console.log(height);

    const weightChange=(e)=>{
        setWeight(e.target.value)
        
    }
    console.log(weight);

    const numberController=(e)=>{
        if(e.target.value<0){
            e.target.value=e.target.value * -1
        }

    }

   const handleClick=()=>{
      if(bmi<18.5){
          history.push("/underweight");
      }
      if(bmi>18.5 && bmi<25){
          history.push("/normalweight");
      }
      if(bmi>25 && bmi<29.9){
          history.push("/overweight");
      }
      if(bmi>=30){
          history.push("/obesity");
      }
   }
    const bmi=(weight/((height*height)/10000))
    return (
        <div className="Home">
            <div className="container" style={{ marginTop: 40 }}>
                <div className="row">
                    <div className="col-8" style={{ display: "flex", justifyContent: "start" }}>
                        <div className="main-header">
                            <h3>Calculate You Body Mass Index</h3>
                        </div>



                    </div>
                    <hr />
                    <div className="main-article" style={{ display: "flex", justifyContent: "start", textAlign: "center" }}>
                        Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. View the BMI tables or use the tool below to compute yours.
                    </div>
                    <ul className="main-orders" style={{ marginTop: 30, marginLeft: 30, listStyle: "square" }}>
                        <li>Enter your name,surname,weight and height using metric measures.</li>
                        <li>Select "Compute BMI" and your BMI will appear below.</li>
                    </ul>
                </div>
                <div className="row">
                    <div className="calculate-area col-6">
                        <div style={{ marginTop: 20, marginLeft: 20 }}>
                            <div>
                                <label style={{ fontFamily: "cursive" }} htmlFor="">Name</label>
                            </div>
                            <div>
                                <input onChange={nameChange} type="text" key="random1" />
                            </div>
                            <div>
                                <label style={{ fontFamily: "cursive" }} htmlFor="" >Surname</label>
                            </div>
                            <div>
                                <input onChange={surnameChange} type="text"  />
                            </div>
                            <div>
                                <label style={{ fontFamily: "cursive" }} htmlFor="">Your Height</label>
                            </div>
                            <div>
                                <input type="number" onChange={heightChange} min="1" onKeyUp={numberController}/>
                            </div>
                            <div>
                                <label style={{ fontFamily: "cursive" }} htmlFor="">Your Weight</label>
                            </div>
                            <div>
                                <input style={{ boxShadow: "revert" }} type="number" onKeyUp={numberController} onChange={weightChange} min="1" />
                            </div>
                        </div>
                        <div style={{ marginTop: 20, marginLeft: 20 }}>
                            <button className="btn btn-outline-primary" type="button" onClick={handleClick} >Compute BMI</button>
                        </div>
                    </div>
                    <div className="col-sm-6 main-right">
                        <div>
                            <h3 style={{ fontFamily: "cursive" }}>BMI formula</h3>
                            <p>Below are the equations used for calculating BMI in the International System of Units (SI) and the US customary system (USC) using a 5'10", 160-pound individual as an example:</p>
                            <div>
                                <h4 >USC Units:</h4>
                            </div>
                            <p>
                                BMI = 703 ×
                                mass (lbs)
                                height2 (in)
                                = 703 ×
                                160
                                702
                                = 22.96
                                kg
                                m2
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontFamily: "cursive" }}>Ponderal Index</h3>
                            <p>The Ponderal Index (PI) is similar to BMI in that it measures the leanness or corpulence of a person based on their height and weight. The main difference between the PI and BMI is the cubing rather than squaring of the height in the formula (provided below). While BMI can be a useful tool when considering large populations, it is not reliable for determining leanness or corpulence in individuals. :</p>
                        </div>
                        <div>
                            <h4>USC Units:</h4>
                        </div>
                        <p>PI =
                            height (in)
                            ∛mass (lbs)
                            =
                            70
                            ∛160
                            = 12.89
                            in
                            ∛lbs
                        </p>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
