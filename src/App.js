import { useState, useEffect, useRef } from 'react';
import List from './List';
import Add from './Add';

// пример управляемой формы
// function Sum() {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);
//   const onChangeFirst = (evt) => setFirst(evt.target.valueAsNumber);
//   const onChangeSecond = (evt) => setSecond(evt.target.valueAsNumber);
//   return (
//     <form style={{ display: 'flex', flexDirection: 'column' }}>
//       <label>
//         A:
//         <input type='number' value={first} onChange={onChangeFirst} />
//       </label>
//       <label>
//         B:
//         <input type='number' value={second} onChange={onChangeSecond} />
//       </label>
//       <div>A+B: {first + second}</div>
//     </form>
//   );
// }
// function App() {
//   return <Sum />;
// }
// export default App;

// применение фильтра на форме
// const PLACEHOLDER = `conic-gradient(
//   gray 0.25turn, white 0 0.5turn,
//   gray 0 0.75turn, white 0 1turn
//   )`;
// function HexColor() {
//   const [color, setColor] = useState('BADA55');
//   const onChange = (evt) => setColor(evt.target.value.replace(/[^0-9a-f]/gi, '').toUpperCase());
//   const outputStyle = {
//     width: '20px',
//     border: '1px solid',
//     background: color.length === 6 ? `#${color}` : PLACEHOLDER,
//   };
//   return (
//     <form style={{ display: 'flex' }}>
//       <label>
//         Hex color:
//         <input value={color} onChange={onChange} />
//       </label>
//       <span style={outputStyle} />
//     </form>
//   );
// }
// function App() {
//   return <HexColor />;
// }
// export default App;

// применение placeholder на форму
// function TicketNumber() {
//   const [ticketNumber, setTicketNumber] = useState('');
//   const onChange = (evt) => {
//     const [first = '', second = ''] = evt.target.value
//       .replace(/[^0-9a-z]/gi, '')
//       .slice(0, 6)
//       .match(/.{0,3}/g);
//     const value = first.length === 3 ? `${first}-${second}` : first;
//     setTicketNumber(value.toUpperCase());
//   };
//   const isValid = ticketNumber.length === 7;
//   return (
//     <form style={{ display: 'flex' }}>
//       <label>
//         Ticket number:
//         <input value={ticketNumber} onChange={onChange} placeholder='E.g. R1S-T2U' />
//       </label>
//       <span>{isValid ? '✓' : '✗'}</span>
//     </form>
//   );
// }
// function App() {
//   return <TicketNumber />;
// }
// export default App;

// пример когда множество входных данных на форме

// function Address() {
//   const [data, setData] = useState({
//     address1: '',
//     address2: '',
//     zip: '',
//     city: '',
//     state: '',
//     country: '',
//   });
//   const onChange = (key) => (evt) => {
//     setData((oldData) => ({ ...oldData, [key]: evt.target.value }));
//   };
//   return (
//     <form style={{ display: 'flex', flexDirection: 'column' }}>
//       <label>
//         Address line 1:
//         <input value={data.address1} onChange={onChange('address1')} />
//       </label>
//       <label>
//         Address line 2:
//         <input value={data.address2} onChange={onChange('address2')} />
//       </label>
//       <label>
//         Zip:
//         <input value={data.zip} onChange={onChange('zip')} />
//       </label>
//       <label>
//         City:
//         <input value={data.city} onChange={onChange('city')} />
//       </label>
//       <label>
//         State:
//         <input value={data.state} onChange={onChange('state')} />
//       </label>
//       <label>
//         Country:
//         <input value={data.country} onChange={onChange('country')} />
//       </label>
//     </form>
//   );
// }
// function App() {
//   return <Address />;
// }
// export default App;

// оформление ToDo листа

// function App() {
//   const [items, setItems] = useState([]);
//   const [isAdding, setAdding] = useState(false);
//   const handleDelete = (item) => setItems((oldItems) => oldItems.filter((oldItem) => oldItem !== item));
//   const handleAdd = (newItem) => {
//     setItems((oldItems) => oldItems.concat([newItem]));
//     setAdding(false);
//   };
//   const handleCancel = () => setAdding(false);
//   return (
//     <main>
//       <nav>
//         <button onClick={() => setAdding(false)}>View list</button>
//         <button onClick={() => setAdding(true)}>Add new item</button>
//       </nav>
//       {isAdding ? <Add handleAdd={handleAdd} handleCancel={handleCancel} /> : <List items={items} handleDelete={handleDelete} />}
//     </main>
//   );
// }
// export default App;

// работа с неконтролируемым инпутом
// function NaturalSum() {
//   const [sum, setSum] = useState(0);
//   const onSubmit = (evt) => {
//     const value = evt.target.elements.operand.valueAsNumber;
//     const naturalSum = (value * (value + 1)) / 2;
//     setSum(naturalSum);
//     evt.preventDefault();
//   };
//   return (
//     <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//       <label>
//         Number:
//         <input type='number' min='1' defaultValue='1' name='operand' />
//       </label>
//       <div>
//         <button>Submit</button>
//       </div>
//       <div>Sum: {sum}</div>
//     </form>
//   );
// }
// function App() {
//   return <NaturalSum />;
// }
// export default App;

// пример когда множество входных данных на форме

const URL = '//salespower.invalid/api/address';
// function Address() {
//   const [data, setData] = useState({
//     address1: '',
//     address2: '',
//     zip: '',
//     city: '',
//     state: '',
//     country: '',
//   });
//   const onChange = (evt) => {
//     const key = evt.target.name;
//     const value = evt.target.value;
//     setData((oldData) => ({ ...oldData, [key]: value }));
//   };
//   const onSubmit = (evt) => {
//     fetch(URL, {
//       method: 'POST',
//       body: JSON.stringify(data),
//     });
//     evt.preventDefault();
//   };
//   return (
//     <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//       <label>
//         Address line 1:
//         <input value={data.address1} name='address1' onChange={onChange} />
//       </label>
//       <label>
//         Address line 2:
//         <input value={data.address2} name='address2' onChange={onChange} />
//       </label>
//       <label>
//         Zip:
//         <input value={data.zip} name='zip' onChange={onChange} />
//       </label>
//       <label>
//         City:
//         <input value={data.city} name='city' onChange={onChange} />
//       </label>
//       <label>
//         State:
//         <input value={data.state} name='state' onChange={onChange} />
//       </label>
//       <label>
//         Country:
//         <input value={data.country} name='country' onChange={onChange} />
//       </label>
//       <button>Submit</button>
//     </form>
//   );
// }
// export default Address;

function Address() {
  const onSubmit = (evt) => {
    const data = Object.fromEntries(
      Array.from(evt.target.elements)
        .slice(0, 6)
        .map((input) => [input.name, input.value])
    );
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    evt.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <label>
        Address line 1:
        <input name='address1' />
      </label>
      <label>
        Address line 2:
        <input name='address2' />
      </label>
      <label>
        Zip:
        <input name='zip' />
      </label>
      <label>
        City:
        <input name='city' />
      </label>
      <label>
        State:
        <input name='state' />
      </label>
      <label>
        Country:
        <input name='country' />
      </label>
      <button>Submit</button>
    </form>
  );
}
export default Address;
