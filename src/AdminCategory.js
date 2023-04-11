import React, { Component } from 'react';
class AdminCategory extends Component {
    render() {
        return (<div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="h1 border-bottom pb-2 mb-2">Category Management</div>
            <p className="text-end">
              <a href="/admin_insert_category" className="btn btn-primary">Add Category</a>
            </p>
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Existing Cateories</h3>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered">
                  <tbody><tr>
                      <th width="8%">Sr No</th>
                      <th>Title</th>
                      <th>Photo</th>
                      <th width="8%">Is Live</th>
                      <th width="8%">Edit</th>
                      <th width="8%">Delete</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mobile</td>
                      <td>
                        <img src="https://picsum.photos/100" className="img-fluid" />
                      </td>
                      <td>
                        Yes
                      </td>
                      <td>
                        <a href="/admin_edit_category"><i className="fa fa-pencil fa-2x" /></a>
                      </td>
                      <td>
                        <a href="#"><i className="fa fa-trash fa-2x" /></a>
                      </td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
}
export default AdminCategory