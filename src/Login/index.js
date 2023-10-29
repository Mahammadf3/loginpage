import {useState} from "react"

import {SubmitButton,DivContainer,SubmitForm,InputData,Passage,Passage1,Heading} from "../stylecomponent"



const Login=()=>{

    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")
    const[error1,setError1]=useState("")
    const[error2,setError2]=useState("")
    const[write,setRight]=useState("")


const setName1=(event)=>{
    setName(event.target.value)
}

const setPassword1=event=>{
    setPassword(event.target.value)
}



const submitData = (event) => {
    event.preventDefault();
   

    if (name === "" || password === "") {
      setError("Username and Password are required.");
      setError1("")
      setError2("")
      setRight("")
      setName("");
      setPassword("");
    } else if (name.length < 3) {
      setError1("UserName must be at least 3 characters.");
      setError("")
      setError2("")
      setRight("")
      setName("");
      setPassword("");

    } else if (password.length < 6) {
        setError2("password must be at least 6 characters.");
        setError1("")
        setError("")
        setRight("")
        setName("");
        setPassword("");
    }
    else {
        setRight("login SuccessFully")
        setError1("")
        setError2("")
        setError("")
        setName("");
        setPassword("");
     
         // Clear any previous errors

      // You can proceed with form submission or other actions here
    }
  };
    return(
        <DivContainer>
            <SubmitForm onSubmit={submitData}>
            <Heading>Login Page</Heading>
                <InputData type="text" onChange={setName1} value={name}placeholder="UserName"/>
                < Passage>{error1}</ Passage>
                <InputData type="password" onChange={setPassword1} value={password}placeholder="password" />
                < Passage>{error2}</ Passage>
                <SubmitButton type="submit" >sign in</SubmitButton>
                < Passage>{error}</ Passage>
                 
            <Passage1>{write}</Passage1>
            </SubmitForm>
          
           
          
        </DivContainer>
    )
}

export default Login