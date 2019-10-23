import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';

const Signup = ()=>{
   return <Layout>
      <h1 className="alert alert-info text-center pt-4 mb-4">Signup</h1>
       <div className="col-md-6 offset-md-3">
       <SignupComponent/>
       </div>       
   </Layout>
}

export default Signup;