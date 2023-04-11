import React, { Component } from 'react';
class AdminUsers extends Component
{
    render(){
        return(<div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="h1 border-bottom pb-2 mb-2">User Management</div>
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Existing Users</h3>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered">
                  <tbody><tr>
                      <th width="8%">Sr No</th>
                      <th>Email</th>
                      <th width="40%">Mobile</th>
                      <th width="15%">View Orders</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>ankit@gmail.com</td>
                      <td>1234567890</td>
                      <td>
                        <a href="#"><i className="fa fa-eye fa-2x" /></a>
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
export default AdminUsers