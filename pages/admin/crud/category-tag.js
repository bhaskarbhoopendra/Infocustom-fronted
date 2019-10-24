import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Category from "../../../components/crud/Category";
import Tag from "../../../components/crud/Tag";
import Link from "next/link";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5 mb-5">
              <h2 className="alert alert-primary">Manage Category and Tags</h2>
            </div>
            <div className="col-md-6 side">
              <ul className="list-group">
                <Category />
              </ul>
            </div>
            <div className="col-md-6">
            <ul className="list-group">
                <Tag />
              </ul>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default CategoryTag;
