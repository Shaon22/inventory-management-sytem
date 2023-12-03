import { Link } from "react-router-dom";
import UseProducts from "../../Hooks/UseProductsInfo/UseProducts";
import Sales from "./Sales";

const SalesPage = () => {
  const [ProductInfo] = UseProducts()

  return (
    <div>
      <h1 className="text-4xl text-bold text-center mt-5">Sales</h1>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Quantity</th>
              <th>Discount</th>
              <th>Selling Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              ProductInfo.map((item, index) => <Sales item={item} index={index} key={item?._id}></Sales>)
            }
          </tbody>
        </table>
       <div className="text-center my-10">
       <Link to={'/dashboard/checkOut'}> <button className="btn btn-sm bg-cyan-400 ">Proceed To Checkout</button> </Link>
       </div>
      </div>
    </div>
  );
};

export default SalesPage;