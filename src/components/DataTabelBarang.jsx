const DataTabelBarang = ({ data, index, setUpdateStatus, onDelete }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.harga}</td>
      <td>{data.stock}</td>
      <td>
        <img src={data.image_url} alt={data.nama} />
      </td>
      <td>
        <div className="h-32 overflow-auto">{data.description}</div>
      </td>
      <td>{data.is_diskon ? "Aktif" : "Tidak Aktif"}</td>
      <td>{data.harga_diskon === 0 ? "-" : data.harga_diskon}</td>
      <td>{data.category}</td>
      <td>
        <div className="flex gap-2">
          <button
            className="text-white btn btn-xs btn-success"
            onClick={() => setUpdateStatus(true)}
          >
            Update
          </button>
          <button
            className="text-white btn-xs btn btn-error"
            onClick={() => onDelete(data.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DataTabelBarang;
