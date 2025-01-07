const getTable = (fields) => {
  return `<table style="margin-top: 20px; margin-bottom: 20px;"><tbody>
   ${fields
     .map(({ label, value }, idx) => {
       return `<tr key=${idx}><td>${label}</td><td>: ${value}</td></tr>`;
     })
     .join("")}</tbody></table>`;
};

export default getTable;
