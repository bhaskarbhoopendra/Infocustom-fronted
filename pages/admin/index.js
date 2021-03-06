import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link'


const AdminIndex = ()=>{
   return <Layout>
       <Admin>
           <div className="container">
          <div className="row">
              <div className="col-md-12 mt-5 mb-5"> <h2 className="alert alert-success">Admin Dashborad</h2></div>
              <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item">
                    <Link href="/admin/crud/category-tag">
                        <a>Create Category</a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link href="/admin/crud/category-tag">
                        <a>Create Tags</a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <a href="/admin/crud/blog">
                        <a>Create Blog</a>
                    </a>
                </li>
                <li className="list-group-item">
                    <Link href="/admin/crud/blogs">
                        <a>Update/Delete Blog</a>
                    </Link>
                </li>
              </ul>
              </div>
              <div className="col-md-8">Right</div>
          </div>
          </div>
       </Admin>       
   </Layout>
}

export default AdminIndex;