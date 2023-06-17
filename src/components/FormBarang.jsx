import axios from "axios";
import { useState } from "react";
import InputFormBarang from "./InputFormBarang";
import UpdateBarang from "./UpdateBarang";

const FormBarang = ({ myFetchData, datas }) => {
  const [statusUpdate, setStatusUpdate] = useState(false);
  const [statusCancel, setstatusCancel] = useState(false);
  const [inputData, setDataInput] = useState({
    name: "",
    harga: 0,
    stock: 0,
    description: "",
    image_url: "",
    is_diskon: false,
    harga_diskon: 0,
    category: "",
  });

  const handleInputChange = (event) => {
    const isChecked =
      event.target.name === "is_diskon"
        ? event.target.checked
        : event.target.value;
    setDataInput({ ...inputData, [event.target.name]: isChecked });
    setstatusCancel(event.target.value !== "" ? true : false);
  };

  const onCancel = () => {
    setDataInput({
      name: "",
      harga: 0,
      stock: 0,
      description: "",
      image_url: "",
      is_diskon: false,
      harga_diskon: 0,
      category: "",
    });
    setstatusCancel(false);
  };
  const onDelete = async (id) => {
    try {
      // eslint-disable-next-line
      let response = await axios.delete(
        `https://api-project.amandemy.co.id/api/products/${id}`
      );
      alert(`Berhasil hapus barang dengan id ${id}`);
      myFetchData();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const onSubmit = async () => {
    try {
      // eslint-disable-next-line
      let postData = await axios.post(
        "https://api-project.amandemy.co.id/api/products",
        inputData
      );
      alert("Berhasil membuat data barang");
      myFetchData();
      setDataInput({
        name: "",
        harga: 0,
        stock: 0,
        description: "",
        image_url: "",
        is_diskon: false,
        harga_diskon: 0,
        category: "",
      });
      setstatusCancel(false);
    } catch (error) {
      alert(error.response.data.info);
      console.log(error.response.data.info);
    }
  };
  return (
    <div className="px-3 md:px-8">
      <section className="max-w-6xl mx-auto shadow-lg rounded-lg bg-white p-8 my-8">
        <h1 className="text-2xl text-cyan-500 text-center">
          {statusUpdate ? "Update Barang" : "Create Product"}
        </h1>
        <div className="flex flex-col md:grid md:grid-cols-5 gap-x-6 gap-y-4 my-2 overflow-x-auto">
          {statusUpdate ? (
            <table className="table table-xs text-center">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Id Barang</th>
                  <th>Nama Barang</th>
                  <th>Harga Barang</th>
                  <th>Stock Barang</th>
                  <th>Gambar Barang</th>
                  <th>Deskripsi Barang</th>
                  <th>Status Diskon</th>
                  <th>Harga Diskon</th>
                  <th>Kategori Barang</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((data, index) => (
                  <UpdateBarang
                    data={data}
                    index={index}
                    myFetchData={myFetchData}
                    onDelete={onDelete}
                    key={data.id}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <InputFormBarang
              inputData={inputData}
              handleInputChange={handleInputChange}
            />
          )}
        </div>

        <div className="md:flex md:justify-end grid grid-1 gap-4 my-4">
          {statusUpdate ? (
            <button
              className="text-cyan-500 border-2 border-cyan-500 px-4 py-1 rounded-lg"
              onClick={() => setStatusUpdate(false)}
            >
              Back
            </button>
          ) : (
            <>
              {statusCancel && (
                <button
                  className="btn btn-success px-4 py-1 text-slate-600"
                  onClick={onSubmit}
                >
                  Create
                </button>
              )}
              <button
                className="btn btn-info px-4 py-1 text-slate-600"
                onClick={() => setStatusUpdate(true)}
              >
                Update
              </button>
              {statusCancel && (
                <>
                  <button
                    className="btn btn-error px-4 py-1 text-white"
                    onClick={onCancel}
                  >
                    Cancel
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default FormBarang;
