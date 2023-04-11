import React, { Component } from 'react';
class AdminProduct extends Component
{
    render(){
        return(<div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="h1 border-bottom pb-2 mb-2">Product Management</div>
            <p className="text-end">
              <a href="/admin_insert_product" className="btn btn-primary">Add Product</a>
            </p>
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Existing Product</h3>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered">
                  <tbody><tr>
                      <th width="8%">Sr No</th>
                      <th width="20%">Title</th>
                      <th>Photo</th>
                      <th width="8%">Price</th>
                      <th width="8%">Stock</th>
                      <th>Detail</th>
                      <th width="8%">Edit</th>
                      <th width="8%">Delete</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>IPhone -13</td>
                      <td>
                        <img src="https://picsum.photos/100" className="img-fluid" />
                      </td>
                      <td>
                        125000
                      </td>
                      <td>
                        25
                      </td>
                      <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi fuga commodi delectus aliquid, ullam consequuntur esse illum temporibus nobis laboriosam veritatis quo voluptas, assumenda, sunt impedit error voluptates ab.
                      </td>
                      <td>
                        <a href="/admin_edit_product"><i className="fa fa-pencil fa-2x" /></a>
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
export default AdminProduct