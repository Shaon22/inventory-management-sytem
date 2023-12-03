import { AiOutlineSkin } from "react-icons/ai";
import { FaShopify, FaUserCheck, FaUserFriends } from "react-icons/fa";
const UserStats = () => {
    return (
      <div>
        <h1 className="text-4xl font-bold text-center my-32">Statistics</h1>
          <div className="bg-black p-10 -mt-1 z-50">
          
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-white justify-between items-center md:p-10 p-3">
          <div className="flex justify-center flex-col items-center md:text-xl">
          <FaUserFriends className="md:text-5xl text-xl text-cyan-400"/>
            <div className="flex justify-center flex-col items-center text-sm">
              <p>15000+</p>
              <p>Total user</p>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center text-xl">
          <FaShopify className="md:text-5xl text-xl text-cyan-400"/>
            
            <div className="flex justify-center flex-col items-center text-sm">
              <p>1967+</p>
              <p>Shops</p>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center text-xl">
          <FaUserCheck className="md:text-5xl text-xl text-cyan-400"/>
            <div className="flex justify-center flex-col items-center text-sm">
              <p>1390+</p>
              <p>Active Users</p>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center text-xl">
          <AiOutlineSkin  className="md:text-5xl text-xl text-cyan-400" />
            <div className="flex justify-center flex-col items-center text-sm">
              <p>8770+</p>
              <p>Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
};

export default UserStats;