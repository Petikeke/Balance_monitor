import { useState } from "react";
import "./styles.css";
import Form from "./Form";
import { Balances } from "./balances";
import { nanoid } from "nanoid";
import sum from "lodash.sum";

const dummyData = [
  {
    date: new Date(),
    payee: "Péter",
    category: "Fun",
    source: "Cash",
    comment: "Party",
    amount: 3500,
    id: nanoid(5)
  },
  {
    date: new Date(),
    payee: "Kovács",
    category: "Fun",
    source: "Credit card",
    comment: "Party",
    amount: 20,
    id: nanoid(5)
  }
];

const Alertf = (comment) => {
  if (comment.length > 10) {
    alert(comment);
  }
};

const calculateBalances = (transactions) => {
  // Kell egy lista arról milten forrásaid vannak
  const sources = Array.from(
    new Set(
      transactions.map((transaction) => {
        return transaction.source;
      })
    )
  );
  const balances = sources.map((source) => {
    return {
      source,
      amount: sum(
        transactions
          // Végigmész rajta, hogy milyen tranzakciók tartoznak az adott listához
          .filter((transaction) => transaction.source === source)
          // összeadod az adott tranzakciók értékét
          .map((transaction) => {
            return parseInt(transaction.amount, 10);
          })
      )
    };
  });
  return balances;
};

export default function App() {
  const [transactions, setTransactions] = useState(dummyData);

  const balances = calculateBalances(transactions);

  const add_transaction = (transaction) => {
    console.log(transaction);
    if (transaction.source !== undefined) {
      setTransactions([...transactions, transaction]);
    }
  };

  const handleRemoveItem = (e, a, s) => {
    const Newtransactions = transactions.filter(
      (transaction) => transaction.id !== e
    );
    setTransactions(Newtransactions);
  };

  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> ID </th>
            <th scope="col">Date</th>
            <th scope="col">Payee</th>
            <th scope="col">Category</th>
            <th scope="col">Source</th>
            <th scope="col">Comment</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.date.toDateString()}</td>
                <td>{transaction.payee}</td>
                <td>{transaction.category}</td>
                <td>{transaction.source}</td>
                <td onClick={() => Alertf(transaction.comment)}>
                  {transaction.comment.substr(0, 10)}
                </td>
                <td>{transaction.amount}</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemoveItem(
                        transaction.id,
                        transaction.amount,
                        transaction.source
                      );
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Form add_transaction={add_transaction} balances={balances} />
      <Balances balances={balances} />
    </div>
  );
}
