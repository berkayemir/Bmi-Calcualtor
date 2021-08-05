import React from 'react'

import { useHistory } from "react-router-dom";
import styled from 'styled-components'

const Button = styled.button`

background-color: #f44336;
padding: 10px 30px;
border-radius: 4px,
font-size:16px,
font-family: 'STIX Two Text', serif;
`



function UnderWeight() {


    const isim = localStorage.getItem("name");
    const soyisim = localStorage.getItem("surname");
    const index = localStorage.getItem("bmi");



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
                        Your BMI = {index} (Underweight)
                    </div>
                    <div>
                        <a href="https://www.nhs.uk/live-well/healthy-weight/advice-for-underweight-adults/">Learn more about underweight!</a>
                    </div>
                    <div>
                        <a href="https://www.wizardpharmacy.com.au/content/underweight-diet">Learn more about diets!</a>
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

export default UnderWeight
