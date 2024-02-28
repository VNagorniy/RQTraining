import { useState } from 'react';
// function Add({ handleAdd, handleCancel }) {
//   const [data, setData] = useState({
//     title: '',
//     category: '',
//     date: '',
//   });
//   const onChange = (evt) => {
//     const key = evt.target.name;
//     const value = evt.target.value;
//     setData((oldData) => ({ ...oldData, [key]: value }));
//   };
//   const onSubmit = (evt) => {
//     handleAdd(data);
//     evt.preventDefault();
//   };
//   return (
//     <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//       <label>
//         Title:
//         <input value={data.title} name='title' onChange={onChange} />
//       </label>
//       <label>
//         Category:
//         <input value={data.category} name='category' onChange={onChange} />
//       </label>
//       <label>
//         Due date:
//         <input type='date' value={data.date} name='date' onChange={onChange} />
//       </label>
//       <div>
//         <button>Submit</button>
//         <button type='button' onClick={handleCancel}>
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// }
// export default Add;

// использование radio атрибута для формы
// function Radio({ value, label, onChange, current }) {
//   return (
//     <label>
//       <input type='radio' name='importance' checked={value === current} value={value} onChange={onChange} />
//       {label}
//     </label>
//   );
// }
// function Add({ handleAdd, handleCancel }) {
//   const [data, setData] = useState({ title: '', importance: 'low' });
//   const onChangeTitle = (evt) => setData((oldData) => ({ ...oldData, title: evt.target.value }));
//   const onChangeImportance = (evt) => setData((oldData) => ({ ...oldData, importance: evt.target.value }));
//   const onSubmit = (evt) => {
//     handleAdd(data);
//     evt.preventDefault();
//   };
//   return (
//     <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//       <label>
//         Title: <input value={data.title} name='title' onChange={onChangeTitle} />{' '}
//       </label>
//       <Radio value='low' label='Low' current={data.importance} onChange={onChangeImportance} />
//       <Radio value='medium' label='Medium' current={data.importance} onChange={onChangeImportance} />
//       <Radio value='high' label='High' current={data.importance} onChange={onChangeImportance} />
//       <Radio value='urgent' label='Urgent' current={data.importance} onChange={onChangeImportance} />
//       <div>
//         <button>Submit</button>
//         <button type='button' onClick={handleCancel}>
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// }
// export default Add;
