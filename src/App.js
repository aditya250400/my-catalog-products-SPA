import { useEffect, useState } from "react";
import axios from "axios";
import CatalogBarang from "./components/CatalogBarang";
import FormBarang from "./components/FormBarang";

function App() {
  const [datas, setData] = useState([]);
  const myFetchData = async () => {
    try {
      let response = await axios.get(
        "https://api-project.amandemy.co.id/api/products"
      );
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    myFetchData();
  }, []);

  return (
    <div className="md:px-16 py-4">
      <FormBarang 
          myFetchData={myFetchData}
          datas={datas} 
      />
      
      <div className="mx-auto">
          <h1 className="text-cyan-500 text-3xl text-center">Catalog Products</h1>
        </div>
      <div className="flex justify-center flex-col p-2 lg:flex-row lg:flex-wrap lg:items-stretch gap-4 items-center md:p-4 mt-4">
      {
        datas.length > 0 ? 
          datas.map((data, index) => 
            <CatalogBarang 
              data={data} 
              key={data.id} 
            />
          )
         : <p>Belum ada produk</p>
      }
      </div>
    </div>
  );
}

export default App;
