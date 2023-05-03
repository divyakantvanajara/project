import React, { Component } from 'react';
class AdminProduct extends Component
{
  constructor(props)
  {
    super(props);
    console.log('constructor');
    this.state = {
      products : []
    }
  }
  componentDidMount(){
    console.log('componentDidMount');
    var url = "https://theeasylearnacademy.com/shop/ws/product.php";
    fetch(url).then((response) => response.json()).then((json)=>{
      console.log(json);
      /*
        [
            0 {"error":"no"},
            1 {"total":2},
            2 {"id":"2","categoryid":"1","title":"dell laptop","price":"200","stock":"100","weight":"3500","size":"15 inch","photo":"dell.jpg","detail":"WINDOWS 10 8 GB DDR3 RAM 512 gb ssd hard disk","islive":"1","isdeleted":"0"},
            3 {"id":"42","categoryid":"0","title":"Apple","price":"1111","stock":"11","weight":"0","size":"","photo":"apple.jpg","detail":"All about apple","islive":"1","isdeleted":"0"}
          ]
      */
          var error = json[0]['error'];
          if(error !== "no")
          {
              alert(error);
          }
          else 
          {
            var total = json[1]['total'];
            console.log(error,total);
            json.splice(0,2);
            console.log(json);
            this.setState({
              products:json
            });
          }
    });
   }
    render()
    {
        return (<div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="h1 border-bottom pb-2 mb-2">Product Management</div>
            <p className="text-end">
              <a href="/admin-insert-product" className="btn btn-primary">Add Product</a>
            </p>
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Existing Product</h3>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered">
                  <tbody><tr>
                      <th width="8%">Sr No</th>
                      <th width="10%">Category</th>
                      <th width="20%">Title</th>
                      <th>Photo</th>
                      <th width="8%">Price</th>
                      <th width="8%">Stock</th>
                      <th>Detail</th>
                      <th width="8%">Operation</th>
                    </tr>
                    {this.state.products.map(function(product){
                      return( <tr>
                        <td>1</td>
                        <td>{product['categoryId']}</td>
                        <td>{product['title']}</td>
                        <td>
                          <img src="https://picsum.photos/100" className="img-fluid" />
                        </td>
                        <td>
                          {product['price']}
                        </td>
                        <td>
                        {product['stock']}
                        </td>
                        <td>
                        {product['detail']}
                        </td>
                        <td>
                          <a href="#"><i className="fa fa-trash fa-2x" /></a>
                          <a href="/admin-edit-product"><i className="fa fa-pencil fa-2x" /></a>
                        </td>
                      </tr>)
                    
                    })}
                   
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
}
export default AdminProduct