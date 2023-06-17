const InputUpdateBarang = ({
  data,
  onDataBarangChange,
  setUpdateStatus,
  onHandleBarangSubmit,
  index,
  dataBarang,
}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.id}</td>
      <td>
        <input
          type="text"
          value={dataBarang.name}
          name="name"
          className="w-full py-1 px-2 rounded-md bg-white border border-gray-400"
          onChange={onDataBarangChange}
        />
      </td>
      <td>
        <input
          type="text"
          value={dataBarang.harga}
          name="harga"
          className="w-full py-1 px-2 rounded-md bg-white border border-gray-400"
          onChange={onDataBarangChange}
        />
      </td>
      <td>
        <input
          type="text"
          value={dataBarang.stock}
          name="stock"
          onChange={onDataBarangChange}
          className="w-full py-1 px-2 rounded-md bg-white border border-gray-400 text-center"
        />
      </td>
      <td>
        <input
          type="text"
          value={dataBarang.image_url}
          name="image_url"
          onChange={onDataBarangChange}
          className="w-full py-1 px-2 rounded-md bg-white border border-gray-400"
        />
      </td>
      <td>
        <textarea
          name="description"
          value={dataBarang.description}
          onChange={onDataBarangChange}
          className=" py-1 px-2 bg-white border border-gray-400 rounded-lg"
          rows="2"
          cols="25"
        >
          {dataBarang.description}
        </textarea>
      </td>
      <td>
        <input
          type="checkbox"
          name="is_diskon"
          checked={dataBarang.is_diskon}
          onChange={onDataBarangChange}
          className="w-full py-1 px-2 rounded-md bg-white border border-gray-400"
        />
      </td>
      <td>
        {dataBarang.is_diskon === true ? (
          <>
            <input
              type="text"
              value={dataBarang.harga_diskon}
              name="harga_diskon"
              onChange={onDataBarangChange}
              className="w-full py-1 px-2 rounded-md bg-white border border-gray-400 text-center"
            />
          </>
        ) : (
          "-"
        )}
      </td>
      <td>
        <select
          name="category"
          value={dataBarang.category}
          className="w-full py-1 px-2 rounded-md bg-white border border-gray-400"
          onChange={onDataBarangChange}
        >
          <option value="teknologi">Teknologi</option>
          <option value="makanan">Makanan</option>
          <option value="minuman">Minuman</option>
          <option value="hiburan">Hiburan</option>
          <option value="kendaraan">Kendaraan</option>
        </select>
      </td>
      <td>
        <div className="flex gap-2">
          <button
            className="text-whit btn-xs btn btn-success text-white"
            onClick={() => onHandleBarangSubmit(data.id)}
          >
            Save
          </button>
          <button
            className="text-white btn btn-xs btn-error"
            onClick={() => setUpdateStatus(false)}
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default InputUpdateBarang;
