import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogCreate from '../../../components/crud/BlogCreate';
import Link from "next/link";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5 mb-5">
              <h2 className="alert alert-info">Create and Manage Blogs</h2>
            </div>
            <div className="col-md-12">
              <ul className="list-group">
                <BlogCreate />
              </ul>
            </div>
            <div className="col-md-12">
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default CategoryTag;
