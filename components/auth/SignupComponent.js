import {useState,useEffect} from 'react';
import {signup,isAuth} from '../../actions/auth';
import Router from 'next/router';


const SignupComponent =()=>{
    const [values,setValues] = useState({
        name:'bhoopendra',
        email:'bhasakr@gmail.com',
        password:'bhaskar4every1',
        error:'',
        loading:false,
        message:'',
        showForm:true
    })

    useEffect(()=>{
        isAuth() && Router.push('/')
      },[]);

    const {name,email,password,error,loading,message,showForm}= values;

    const handleSubmit=(e)=>{ 
      e.preventDefault();
     setValues({...values,loading:true,error:false})
     const user ={name,email,password}

     signup(user)
     .then(data=> 
        {
         if(data.error){
             setValues({...values,error:data.error,loading:false})
         }else{
             setValues({...values,name:'',email:'',password:'',loading:false,message:data.message,showForm:false})
         }
     }
     )
    }

    const handleChange=name=>e=>{
        setValues({...values,error:false,[name]:e.target.value})
    }

    const showLoading =()=>(loading? <div className="alert alert-info">Loading...</div>:"");
    const showError =()=>(error? <div className="alert alert-danger">{error}</div>:"");
    const showMessage =()=>(message? <div className="alert alert-info">{message}</div>:"");

    const signupForm =()=>{
     return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input value={name} onChange={handleChange('name')} type="text" className="form-control" placeholder="Write Your name"/>
            </div>
            <div className="form-group">
                <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Write Your email"/>
            </div> 
            <div className="form-group">
                <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Write Your password"/>
            </div>
            <div>
                <button className="btn btn-md btn-primary">Signup</button>
            </div>
        </form>
    )
}
    return <React.Fragment>
    {showLoading()}
    {showMessage()}
    {showError()}
    {showForm&&signupForm()}
    </React.Fragment>
}

export default SignupComponent;