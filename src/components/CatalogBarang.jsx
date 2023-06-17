import ModalData from "./ModalData";
import { useState } from "react";

const CatalogBarang = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <button onClick={openModal}>
          <figure className="hover:bg-slate-200">
            <img
              src={data.image_url}
              alt={data.name}
              className="w-full h-44 lg:h-64 object-cover rounded-t-lg "
            />
          </figure>
        </button>
        <div className="card-body mt-8">
          <h2 className="card-title">
            {data.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          {data.isDiskon !== false && data.harga_diskon !== 0 ? (
            <>
              <h1 className="line-through">{data.harga_display}</h1>
              <h2 className="text-lg text-red-400">
                {data.harga_diskon_display}
              </h2>
            </>
          ) : (
            <h2 className="text-lg text-red-400 mt-4">{data.harga_display}</h2>
          )}
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{data.category}</div>
          </div>
        </div>
      </div>
      <ModalData
        data={data}
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default CatalogBarang;
