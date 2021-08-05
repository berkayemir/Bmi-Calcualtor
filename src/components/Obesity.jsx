import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";


const Button = styled.button`

background-color: #f44336;
padding: 10px 30px;
border-radius: 4px,
font-size:16px,
font-family: 'STIX Two Text', serif;
`

function Obesity() {
    const isim=localStorage.getItem("name");
    const soyisim=localStorage.getItem("surname");
    const index=localStorage.getItem("bmi");


    let history = useHistory();

    function backClick() {
        history.push("/")
    }
    return (
        <div className="container" style={{ marginTop: 30 }}>
            <div className="row">
                <div className="col-sm">
                    <div className="main-article">
                        Dear {isim} {soyisim}
                    </div>
                    <hr />
                    <div>
                        Your BMI = {index} (Obesity)
                    </div>
                    <div>
                        <a href="https://www.nhlbi.nih.gov/health-topics/overweight-and-obesity">Learn more about obesity!</a>
                    </div>
                    <div>
                        <a href="https://www.hsph.harvard.edu/obesity-prevention-source/diet-lifestyle-to-prevent-obesity/">Learn more about diets!</a>
                    </div>
                </div>
            </div>
            <div>
                <form action="" onSubmit={backClick}>
                    <Button style={{ marginTop: 20 }}>
                        Back
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default Obesity
