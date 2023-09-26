import image from '../../photos/The Teen Girls Calling Out Sexual Assault at Concerts.jpg';

const LoginForm = () => {
    const toggleForm = () => {
        var cnt = document.querySelector('.container');
        cnt.classList.toggle('active');
    }
    let confunl = /(\w+@\d*(gmail|yahoo).com$)|(\w+\d+\W+)|(\d+\w+\W+)|(\w+\W+\d+)|(\w+\d+)|(\w+\W+)|\w+/;  // ($ or text + \b) = End
    let confpss = /(\w+\d+\W+)|(\d+\w+\W+)|(\w+\W+\d+)/;
    

    const submit = (e) => {
        let u = document.querySelector("[name='U']");
        let p = document.querySelector("[name='P']");
        let valid1 =document.querySelector("#valid");
        let valid2 = document.querySelector("#valid2");
        let valid3 = document.querySelector("#valid3");
        let User = false;
        let Pass = false;
        if(u.value !== "")
        {
            User = true;
            u.style.borderBottom = "gray solid 2px";
            valid1.style.visibility = "hidden";
            valid3.style.visibility = "hidden";
            if(confunl.test(u.value) === false || u.value.match(/^\d+/)){         // (^ or \b + text) = Start
                e.preventDefault();
                u.style.borderBottom = "red solid 1px";
                valid1.style.visibility = "visible";
            }
            if(u.value.match(/\s+/g)){
                // let s = u.value.replace(/\s+/g, "");
            }
        }
        if(u.value === ""){
            u.focus();
            u.style.borderBottom = "red solid 1px";
            valid1.style.visibility = "visible";
            e.preventDefault();
        }

        if(p.value !== "")
        {
            Pass = true;
            p.style.borderBottom = "gray solid 1px";
            valid2.style.visibility = "hidden";
            valid3.style.visibility = "hidden";
            if(p.value.length < 8){
                Pass = false;
                e.preventDefault();
                valid3.style.visibility = "visible";
                p.style.borderBottom = "red solid 1px";
                p.focus();
            }
            if(confpss.test(p.value) === false){
                Pass = false;
                e.preventDefault();
                p.style.borderBottom = "red solid 1px";
                valid2.style.visibility = "visible";
                valid2.innerHTML = "symbols, numbers and letters";
            }
        }
        if(p.value === ""){
            Pass = false;
            p.style.borderBottom = "red solid 1px";
            valid2.style.visibility = "visible";
            e.preventDefault();
        }
        if(User === false || Pass === false)
        {
            e.preventDefault();
        }
        if(User === true && Pass === true){
            // const blog = {userNameJSON, passwordJSON};
            //     fetch('http://localhost:8000/dataLogin',  {
            //     method: "POST",
            //     headers: {"Content-Type": "application/json"},
            //     body: JSON.stringify(blog)
            //     }).then(() => {
            //         console.log("OK");
            //     })
        }
        
    }

    return(
        <div className="user singinBx">
                <div className="imgBx"><img src={image} alt="not found" /></div>
                <div className="formBx">
                    <form onSubmit={submit}>
                        <h1>log in</h1>
                        <div className="form__group field">
                        <input  type="text" placeholder="Username or Email" name="U" className="un"  />
                        <label className="form__label">username or email</label>
                        <p className="validation" id='valid'>* Fill this field with valid data</p>
                        </div>
                        <div className="form__group field">
                        <p className="max" id="valid3">* Minimum 8 character</p>
                        <input type="password" className="pss" placeholder="Password" name="P"   />
                        <label className="form__label2">password</label>
                        <p className="validation" id="valid2">* Fill this field with valid data</p>
                        </div>
                        <input type="submit" value="Login" id='l' />
                        <p className="signup">don't have an account ? <a href="#111" id='reg' onClick={() => toggleForm()}>register</a></p>
                    </form>
                </div>
        </div>
    );
}
export default LoginForm;