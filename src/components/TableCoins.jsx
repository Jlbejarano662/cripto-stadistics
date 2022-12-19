import "./tableCoins.css";
import CoinRow from "./CoinRow";

function TableCoins({ coins }) {
  //console.log(coins);
  return (
    <div className="table-responsive">

      <table>
        <thead className="thead">
          <tr>
            <th>#</th>
            <th>Moneda</th>
            <th>Precios</th>
            <th>24h</th>
            <th>Vol. total</th>
            <th>Cap. mercado</th>
            <th>Últimos 7 días</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {coins.map((coin, index) => (
            <CoinRow coin={coin} key={index} index={index + 1} />
          ))}
        </tbody>
      </table>
      </div>
  );
}

export default TableCoins;
