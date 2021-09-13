import sum from "lodash.sum";

export const Balances = (props) => {
  const sum_b = sum(props.balances.map((balance) => balance.amount));

  return (
    <div className="row">
      {
        <div className="col col-md-3 card text-white bg-primary mb-3">
          <div className="card-header">Total balance</div>
          <div className="card-body">
            <h5 className="card-title">{sum_b}</h5>
            <p className="card-text"> Ft</p>
          </div>
        </div>
      }

      {props.balances.map((balance) => (
        <div
          key={balance.source}
          className="col col-md-3 card text-dark bg-light mb-3"
        >
          <div className="card-header">{balance.source}</div>
          <div className="card-body">
            <h5 className="card-title">{balance.amount}</h5>
            <p className="card-text">Ft</p>
          </div>
        </div>
      ))}
    </div>
  );
};
