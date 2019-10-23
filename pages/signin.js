import Layout from '../components/Layout';
import SigninComponent from '../components/auth/SigninComponent';

const Signin = ()=>{
   return <Layout>
       <h1 className="alert alert-danger text-center pt-4 mb-4">Signin</h1>
       <div className="col-md-6 offset-md-3">
       <SigninComponent/>
       </div>  
   </Layout>
}

export default Signin;