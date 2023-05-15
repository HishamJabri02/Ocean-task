const TableHead = () => {
  return (
    <tr>
      <th className="w-[35%] text-sm text-[#919191] font-normal">
        Description
      </th>
      <th className="w-[10%] text-sm text-[#919191] font-normal">Size</th>
      <th className="w-[20%] text-sm text-[#919191] font-normal">Quantity</th>
      <th className="w-[10%] text-sm text-[#919191] font-normal">Remove</th>
      <th className="w-[25%] text-sm text-[#919191] font-normal">Price</th>
    </tr>
  );
};

export default TableHead;
