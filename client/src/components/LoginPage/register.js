import { useState } from "react";

import image from '../../photos/Fdf-D9SWIAEixzn.jpg';


const RegisterForm = () => {
    const toggleForm = () => {
        var cnt = document.querySelector('.container');
        cnt.classList.toggle('active');
    }

    // sendData
    const [username, setValue] = useState('');
    const [email, setValue2] = useState('');
    const [password, setValue3] = useState('');


    //Validation JS
    let confunr = /(\w+\d+\W+)|(\d+\w+\W+)|(\w+\W+\d+)|(\w+\d+)|(\w+\W+)|\w+/;
    let confemail = /(\w+@\d*(gmail|yahoo).com$)/;
    let confpss = /(\w+\d+\W+)|(\d+\w+\W+)|(\w+\W+\d+)/;



    const register = async (e2) => {
        let ui = document.querySelector("[name='UN']");
        let ei = document.querySelector("[name='EM']");
        let pi = document.querySelector("[name='PSS']");
        let pci = document.querySelector("[name='PSSC']");

        let validR1 =document.querySelector("#validR");
        let validR2 = document.querySelector("#validR2");
        let validR3 = document.querySelector("#validR3");
        let validR4 = document.querySelector("#validR4");
        let validR5 = document.querySelector("#validR5");
        let usv = false;
        let emv = false;
        let pssv = false;
        let psscv = false;


        if(ui.value !== "")
        {
            usv = true;
            ui.style.borderBottom = "gray solid 1px";
            validR1.style.visibility = "hidden";
            if(confunr.test(ui.value) === false || ui.value.match(/^\d+/)){         // (^ or \b + text) = Start
                usv = false;
                e2.preventDefault();
                ui.style.borderBottom = "red solid 1px";
                validR1.style.visibility = "visible";
            }
            if(ui.value.match(/\s+/g)){
                // let s = ui.value.replace(/\s+/g, "");
            }
        }
        if(ui.value === ""){
            usv = false;
            ui.focus();
            ui.style.borderBottom = "red solid 1px";
            validR1.style.visibility = "visible";
            e2.preventDefault();
        }

        if(ei.value !== "")
        {
            emv = true;
            ei.style.border = "white solid 1px";
            validR2.style.visibility = "hidden";
            if(confemail.test(ei.value) === false || ei.value.match(/^\d+/)){         // (^ or \b + text) = Start
                emv = false;
                e2.preventDefault();
                ei.style.borderBottom = "red solid 1px";
                validR2.style.visibility = "visible";
                ei.focus();
            }
            if(ei.value.match(/\s+/g)){
                // let s = ei.value.replace(/\s+/g, "");
            }
        }
        if(ei.value === ""){
            if(ui.value !== ""){
                ei.focus();
            }
            emv = false;
            ei.style.borderBottom = "red solid 1px";
            validR2.style.visibility = "visible";
            e2.preventDefault();
        }

        if(pi.value !== "")
        {
            pssv = true;
            pi.style.border = "white solid 1px";
            validR3.style.visibility = "hidden";
            validR5.style.visibility = "hidden";
            if(pi.value.length < 8){
                pssv = false;
                e2.preventDefault();
                validR5.style.visibility = "visible";
                pi.style.borderBottom = "red solid 1px";
                pi.focus();
            }
            if(confpss.test(pi.value) === false){
                pssv = false;
                e2.preventDefault();
                pi.style.borderBottom = "red solid 1px";
                validR3.style.visibility = "visible";
                validR3.innerHTML = "symbols, numbers and letters";
                pi.focus();
            }
        }
        if(pi.value === ""){
            if(ui.value !== "" && ei.value !== ""){
                pi.focus();
            }
            pssv = false;
            pi.style.borderBottom = "red solid 1px";
            validR3.style.visibility = "visible";
            e2.preventDefault();
        }

        if(pci.value !== "" && pci.value === pi.value)
        {
            psscv = true;
            pci.style.borderBottom = "gray solid 1px";
            validR4.style.visibility = "hidden";
            if(ui.value !== "" && ei.value !== "" && pi.value !== "" && pi.value > 8){
                pci.focus();
            }
        }
        if(pci.value === ""){
            psscv = false;
            pci.style.borderBottom = "red solid 1px";
            validR4.style.visibility = "visible";
            e2.preventDefault();
        }
        if(pci.value !== pi.value){
            psscv = false;
            pci.style.borderBottom = "red solid 1px";
            validR4.style.visibility = "visible";
            validR4.innerHTML = "Must equal password";
            e2.preventDefault();
            pci.focus();
        }
        if(usv === false || emv === false || pssv === false || psscv === false)
        {
            e2.preventDefault();
        }
        // const fr = document.getElementById('fr');
        //     fr.addEventListener('submit', (e) => {
        //         e2.preventDefault();
        //         const usernameRegister = fr.UN.value;
        //         const emailRegister = fr.EM.value;
        //         console.log(usernameRegister, emailRegister);
        //     })
        if(usv === true && emv === true && pssv === true && psscv === true){
            const data = {username, email, password};
            try{
                await fetch('http://localhost:8000/api/registers',  {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                    });
            }
            catch(err){
                console.log(err);
            }
        }
    }
    
    return(
        <div className="user singupBx">
                <div className="formBx">
                    <form id="fr">
                        <h1>create an account</h1>
                        <div className="form__group field">
                        <input type="text" placeholder="UserName" name="UN" className="un" value={username} onChange={(e) => setValue(e.target.value)} />
                        <label className="form__label">username</label>
                        <p className="validationR" id="validR">* Fill this field with valid data</p>
                        </div>
                        <div className="form__group field">
                        <input className="em" type="email" placeholder="@ Email Address" name="EM" value={email} onChange={(e) => setValue2(e.target.value)} />
                        <label className="form__label3">email</label>
                        <p className="validationR" id="validR2">* Fill this field with valid data</p>
                        </div>
                        <div className="form__group field">
                        <p className="max" id="validR5">* Minimum 8 character</p>
                        <input className="pssr" type="password" placeholder="Create Password At Least 8" name="PSS" value={password} onChange={(e) => setValue3(e.target.value)} />
                        <label className="form__label4">password</label>
                        <p className="validationR" id="validR3">* Fill this field with valid data</p>
                        </div>
                        <div className="form__group field">
                        <input className="cpss" type="password" placeholder="Confirm Password" name="PSSC" />
                        <label className="form__label5">confirm password</label>
                        <p className="validationR" id="validR4">* Fill this field with valid data</p>
                        </div>
                        <input type="submit" value="Register" id="r" onClick={register} />
                        <p className="signup" id="already">already have an account ? <a href="#222" onClick={ () => toggleForm()}>login</a></p> 
                    </form>
                </div>
                <div className="imgBx"><img src={image} alt="not found" /></div>
            </div>
    );
}
export default RegisterForm;