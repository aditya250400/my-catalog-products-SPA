const InputForm = ({ inputData, handleInputChange }) => {
  return (
    <>
      <div className="col-span-3">
        <label className="block mb-1"> Nama Barang</label>
        <input
          type="text"
          name="name"
          value={inputData.name}
          className="block border border-gray-400 rounded-md w-full px-2 py-1 text-sm"
          placeholder="Masukkan Nama Barang"
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-2">
        <label className="block mb-1"> Stock Barang</label>
        <input
          type="text"
          name="stock"
          value={inputData.stock}
          className="block border border-gray-400 rounded-md w-full px-2 py-1 text-sm"
          placeholder="Masukkan Stock Barang"
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-2">
        <label className="block mb-1"> Harga Barang</label>
        <input
          type="text"
          name="harga"
          value={inputData.harga}
          className="block border border-gray-400 rounded-md w-full px-2 py-1 text-sm"
          placeholder="Masukkan Harga Barang"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex items-center justify-center mt-4 gap-3">
        <input
          type="checkbox"
          className=""
          checked={inputData.is_diskon}
          name="is_diskon"
          onChange={handleInputChange}
        />
        <label className="">Status Diskon</label>
      </div>
      <div className="col-span-2">
        {inputData.is_diskon === true && (
          <>
            <label className="block mb-1"> Harga Diskon</label>
            <input
              type="text"
              name="harga_diskon"
              value={inputData.harga_diskon}
              onChange={handleInputChange}
              className="block border border-gray-400 rounded-md w-full px-2 py-1 text-sm"
              placeholder="Masukkan Harga Diskon"
            />
          </>
        )}
      </div>
      <div className="col-span-2">
        <label className="block mb-1"> Kategori Barang</label>
        <select
          name="category"
          value={inputData.category}
          className="w-full py-1 px-2 rounded-md bg-white border border-gray-400"
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Pilih Kategori
          </option>
          <option value="teknologi">Teknologi</option>
          <option value="makanan">Makanan</option>
          <option value="minuman">Minuman</option>
          <option value="hiburan">Hiburan</option>
          <option value="kendaraan">Kendaraan</option>
        </select>
      </div>
      <div className="col-span-2">
        <label className="block mb-1">Gambar Barang</label>
        <input
          type="text"
          name="image_url"
          value={inputData.image_url}
          className="block border border-gray-400 rounded-md w-full px-2 py-1 text-sm"
          placeholder="Masukkan Image URL"
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-5">
        <label className="block mb-1">Deskripsi</label>
        <textarea
          name="description"
          rows="6"
          className="w-full py-1 px-2 rounded-md bg-white border border-gray-400"
          value={inputData.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
    </>
  );
};

export default InputForm;
