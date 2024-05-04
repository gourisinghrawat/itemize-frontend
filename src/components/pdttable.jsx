const PdtTable = () => {
    return (
        <div className="pdttable">
              <table>
                <tr>
                  <th className="id1">ID</th>
                  <th className="name6">Name</th>
                  <th className="brand">brand</th>
                  <th className="supplier">supplier</th>
                  <th className="price">price</th>
                  <th className="status2">status</th>
                  <div className="stocks">stock</div>
                </tr>
                {pdtdata.map((val, key) => {
                    return (
                      <tr>
                  <th className="id1">{val.id}</th>
                  <th className="name6">{val.name}</th>
                  <th className="brand">{val.brand}</th>
                  <th className="supplier">{val.supplier}</th>
                  <th className="price">{val.price}</th>
                  <th className="status2">{val.status}</th>
                  <div className="stocks">{val.stock}</div>
                </tr>
                    )
                })}
              </table>
            </div>
    );
}
 
export default PdtTable;
const pdtdata=[{id:1, name:"toothpaste", brand:"colgate", supplier:"s1", price:234,status:"in stock", stock:23}]