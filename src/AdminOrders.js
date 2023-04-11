import React, { Component } from 'react';
class AdminOrders extends Component
{
    render(){
        return(<div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="h1 border-bottom pb-2 mb-2">User Management</div>
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Existing Orders</h3>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered">
                  <tbody><tr>
                      <th width="8%">Sr No</th>
                      <th width="40%">Customer Detail</th>
                      <th width={10}>Date</th>
                      <th width={10}>Amount</th>
                      <th width={10}>Status</th>
                      <th width="15%">View Detail</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        Ram Kumar  <br />
                        Hill Drive, opp aksharwadi temple <br />
                        Waghawadi Road <br />
                        Bhavnagar - 364001 
                      </td>
                      <td>01-01-2023</td>
                      <td>25000</td>
                      <td>Confirmed</td>
                      <td>
                        <a href="/admin_view_orders">
                          <i className="fa fa-eye fa-2x" />
                        </a>
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
export default AdminOrders