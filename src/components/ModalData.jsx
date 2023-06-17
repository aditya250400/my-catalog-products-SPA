import Modal from "react-modal";

const ModalData = ({ data, setModalIsOpen, modalIsOpen, closeModal }) => {
  return (
    <Modal
      appElement={document.getElementById("root")}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="rounded-lg mx-8 mt-8 h-4/5 overflow-auto "
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div className="max-w-6xl mx-auto rounded-lg bg-white py-8">
        <div className="flex justify-end px-8">
          <button className="text-2xl bold" onClick={closeModal}>
            x
          </button>
        </div>
        <div className="md:flex md:gap-4 md:my-10">
          <div className="mx-auto w-60 my-auto w- md:w-1/2 md:ml-20">
            <img
              src={data.image_url}
              className="md:rounded-lg md:h-96"
              alt={data.name}
            />
          </div>
          <div className="basis-1/2 px-20">
            <h1 className="text-2xl md:text-3xl">{data.name}</h1>
            <p className="text-sm text-gray-400">{data.category}</p>
            <div className="md:py-8 ">
              <div className="">
                {data.isDiskon !== false && data.harga_diskon !== 0 ? (
                  <>
                    <h1 className="line-through text-2xl mb-1">
                      {data.harga_display}
                    </h1>
                    <h2 className="text-lg text-red-400 text-4xl">
                      {data.harga_diskon_display}
                    </h2>
                  </>
                ) : (
                  <h2 className="text-lg text-red-400 text-4xl">
                    {data.harga_display}
                  </h2>
                )}
              </div>
            </div>
            <h2 className="text-2xl">Deskripsi</h2>
            <p>{data.description}</p>
            <div className="">
              <p className="text-cyan-500 mt-2 font-bold">
                Stock : {data.stock}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalData;
