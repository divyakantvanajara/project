import React, { Component } from 'react';
class AdminViewOrders extends Component
{
    render()
    {
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
                    </tr>
                  </tbody></table>
                <h3>Order Detail</h3>
                <hr />
                <table className="table table-striped table-bordered">
                  <tbody><tr>
                      <td>No</td>
                      <td>Name</td>
                      <td>Photo</td>
                      <td>Price</td>
                      <td>Quantity</td>
                      <td>Total</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>IPhone - 14</td>
                      <td>
                        <img src="https://picsum.photos/100" alt />
                      </td>
                      <td>135000</td>
                      <td>2</td>
                      <td>2700000</td>
                    </tr>
                    <tr>
                      <td colSpan={5}>
                        Change order status
                      </td>
                      <td>
                        <select className="form-select mb-2">
                          <option value={1}>Confirm</option>
                          <option value={2}>Dispatched</option>
                          <option value={3}>Delivered</option>
                          <option value={4}>Cancel</option>
                        </select>
                        <input type="submit" defaultValue="Change status" className="btn btn-primary w-100" />
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
export default AdminViewOrders