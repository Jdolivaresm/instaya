
import Home from "./Components/Home";
import CreateOrder from "./Components/CreateOrder";
import UpdateOrder from "./Components/UpdateOrder";
import OrderManagement from "./Components/OrderManagement";

function App() {
  return (
    <div className="container mx-auto font-[Manrope]">
      <Home />
      <OrderManagement />
      <CreateOrder />
      <UpdateOrder />
    </div>
    
  );
}

export default App;
