import { nanoid } from "nanoid";
import { useState } from "react";
import DatePicker from "react-datepicker";
import CreatableSelect from "react-select/creatable";
import "react-datepicker/dist/react-datepicker.css";

export default function Form(props) {
  const add_transaction = props.add_transaction;
  const source_opt = props.balances.map((b) => b.source);
  const [id, setid] = useState(nanoid(5));
  const [date, setdate] = useState(new Date());
  const [payee, setpayee] = useState();
  const [category, setcategory] = useState("Not in category");
  const [source, setsource] = useState();
  const [comment, setcomment] = useState();
  const [amount, setamount] = useState();
  const [category_list, setcategory_list] = useState([
    "Fun",
    "Fuel",
    "Rent",
    "Other"
  ]);

  const clearform = () => {
    // setdate("");
    setpayee("");
    setcategory("Not in category");
    setcomment("");
    setsource("");
    setamount("");
  };

  return (
    <div>
      <DatePicker selected={date} onChange={(newdate) => setdate(newdate)} />
      <input
        placeholder="Payee"
        value={payee}
        onChange={(e) => {
          setpayee(e.target.value);
        }}
      />

      <CreatableSelect
        isClearable
        options={category_list.map((s) => ({ value: s, label: s }))}
        onChange={(newValue) => {
          if (newValue.__isNew__ === true) {
            setcategory_list([...category_list, newValue.value]);
          }
          setcategory(newValue.value);
        }}
      />

      <CreatableSelect
        isClearable
        options={source_opt.map((s) => ({ value: s, label: s }))}
        onChange={(newValue) => {
          console.log(source_opt);
          if (newValue.__isNew__) {
            // console.log(newValue);
            //console.log(newValue.value);
            //  if (newValue.value !== "") {
            // source_opt.push(newValue.value); //}
          }
          setsource(newValue.value);
        }}
      />

      <input
        placeholder="Comment"
        value={comment}
        onChange={(e) => {
          setcomment(e.target.value);
        }}
      />
      <input
        placeholder="Amount"
        value={amount}
        type="number"
        onChange={(e) => {
          setamount(e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          setid(nanoid(5));
          add_transaction(
            {
              id: id,
              date: date,
              payee: payee,
              category: category,
              source: source,
              comment: comment,
              amount: amount
            },
            clearform()
          );
        }}
      >
        Add
      </button>
      <br />
      <br />
    </div>
  );
}
