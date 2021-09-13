Tasks

Design: https://whimsical.com/cash-app-RTkWnjd9aCvbFzT86QuwPr

## Have a transaction list with Date, Payee, Category, Source, Comment, Amount

```javascript
const dummyData = [

 date: new Date(),
    payee: "Péter",
    category: "Szórakozás",
    source: "Kártya",
    comment: "Élvezet",
    amount: -3500
];
```

## Have a form where you can add new transactions

-✅ Add an input for all 6 fields

- make amount a number only ⭐️
- ✅ make date a date picker ⭐️⭐️️⭐️

https://www.npmjs.com/package/react-datepicker

- ✅make category a selector from a list ⭐️⭐️⭐️️⭐️
- ✅make source a selector from a list
- ✅Clear all fields when transaction is added ⭐️

## Make list prettier

- ✅ Add a delete button next to all transactions ⭐️ /
- ✅ Make the delete button work:
  - When you're adding a transaction, add a unique id to each
    - ✅ nanoid package ⭐️️⭐️
  - ✅ When a delete button is pressed, find the item in the list by id, and use `array.filter` to remove it ⭐️⭐️⭐️
- Truncate the length of comment to X characters, and show an `alert()` when pressed showing the whole content of it ⭐️

## Have a balance that shows the running total of all transactions on that balance

- ✅similar to the dummyTransactions, add dummySources for accounts, like ⭐️

```javascript
{
  id: 1,
  name: "Cash",
}
```

It's a good idea to do it the same way the Form component works: pass in the list of sources, and a function that let's you add new ones, but keep the state in the App component, so it can be used anywhere else

- ✅Show each source/account as a card like div on top ⭐️⭐️
  see this for some classes you can use: https://getbootstrap.com/docs/5.1/components/card/#background-and-color

- ✅ under each source name, show the sum of all transaction values that have the same id ⭐️⭐️⭐️⭐️

For this: when you're saving the transaction date in the form, make sure it's saved as a number
(input type number)

- ✅ pass the list of sources to the Form component, and have the source selector only allow sources that exist ⭐️⭐️⭐️⭐️

- ✅ Add a button next to the cards, that let's you add a new transaction source ⭐️⭐️

- make the source name an input, and if the value is changed, rename the balance there, and everywhere else (even inside transactions) ️⭐️️⭐️️⭐️
  (add a new field, name. use the source.source as id in the "database", but display the name instead)

For this, it's good idea for the transactions to not store the balance name, but an id, and look up the name everywhere it's used

Own ideas:

- Create an "Expense" and an "Income" button in place of "ADD" button.
  That make amount is a negative or a positive balance change

- Add rules like, Cash can't be negative
