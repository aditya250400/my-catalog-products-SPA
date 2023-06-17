import axios from "axios";
import { useEffect, useState } from "react";
import DataTabelBarang from "./DataTabelBarang";
import InputUpdateBarang from "./InputUpdateBarang";
const UpdateBarang = ({ data, index, myFetchData, onDelete }) => {
  const [updateStatus, setUpdateStatus] = useState(false);
  const [dataBarang, setDataBarang] = useState({
    id: 0,
    name: "",
    harga: 0,
    stock: 0,
    description: "",
    image_url: "",
    is_diskon: false,
    harga_diskon: 0,
    category: "",
  });

  const onHandleBarangSubmit = async (id) => {
    try {
      // eslint-disable-next-line
      let response = await axios.put(
        `https://api-project.amandemy.co.id/api/products/${id}`,
        dataBarang
      );
      alert(`Berhasil Update Barang dengan id ${id}`);
      myFetchData();
      setUpdateStatus(false);
    } catch (error) {
      alert(error.response.data.info);
    }
  };

  const onDataBarangChange = (event) => {
    const isNameChecked =
      event.target.name === "is_diskon"
        ? event.target.checked
        : event.target.value;
    setDataBarang({ ...dataBarang, [event.target.name]: isNameChecked });
  };

  useEffect(() => {
    setDataBarang({
      id: data.id,
      name: data.name,
      harga: data.harga,
      stock: data.stock,
      description: data.description,
      image_url: data.image_url,
      is_diskon: data.is_diskon,
      harga_diskon: data.harga_diskon,
      category: data.category,
    });
    // eslint-disable-next-line
  }, [data.name]);
  return (
    <>
      {updateStatus === true ? (
        <InputUpdateBarang
          data={data}
          index={index}
          onHandleBarangSubmit={onHandleBarangSubmit}
          setUpdateStatus={setUpdateStatus}
          onDataBarangChange={onDataBarangChange}
          dataBarang={dataBarang}
          setDataBarang={setDataBarang}
        />
      ) : (
        <DataTabelBarang
          data={data}
          index={index}
          onDelete={onDelete}
          setUpdateStatus={setUpdateStatus}
        />
      )}
    </>
  );
};

export default UpdateBarang;
