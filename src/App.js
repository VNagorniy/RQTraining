import { useState, Component } from 'react';

//использование useState
// function Counter() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <main>
//       <p>Clicks: {counter}</p>
//       <button onClick={() => setCounter((value) => value + 1)}>Increment</button>
//     </main>
//   );
// }
// function App() {
//   return <Counter />;
// }
// export default App;

//пример использования useState с разными начальными значениями
// function Counter({ start }) {
//   const [counter, setCounter] = useState(start);
//   return (
//     <main>
//       <p>Counter: {counter}</p>
//       <button onClick={() => setCounter((value) => value + 1)}>Increment</button>
//     </main>
//   );
// }
// function App() {
//   return (
//     <>
//       <Counter start={0} />
//       <Counter start={123} />
//       <Counter start={-64} />
//     </>
//   );
// }
// export default App;

//установка state
// function Accordion() {
//   const [isExpanded, setExpanded] = useState(false);
//   return (
//     <main>
//       <h2 style={{ display: 'flex', gap: '6px' }}>
//         Secret password
//         <button onClick={() => setExpanded(false)}>-</button>
//         <button onClick={() => setExpanded(true)}>+</button>
//       </h2>
//       {isExpanded && (
//         <p>
//           Password: <code>hunter2</code>
//         </p>
//       )}
//     </main>
//   );
// }

// function App() {
//   return <Accordion />;
// }

// export default App;

//настройка функции для state
// const PLUS = (a, b) => a + b;
// const MINUS = (a, b) => a - b;
// const MULTIPLY = (a, b) => a * b;
// function Calculator({ a, b }) {
//   const [operator, setOperator] = useState(() => PLUS);
//   return (
//     <main>
//       <h1>Calculator</h1>
//       <button onClick={() => setOperator(() => PLUS)}>Plus</button>
//       <button onClick={() => setOperator(() => MINUS)}>Minus</button>
//       <button onClick={() => setOperator(() => MULTIPLY)}>Multiply</button>
//       <p>
//         Result of applying operator to {a} and {b}:<code> {operator(a, b)}</code>
//       </p>
//     </main>
//   );
// }

// function App() {
//   return <Calculator a={7} b={4} />;
// }

// export default App;

//рендеринг страницы
// function Counter() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <main>
//       <p>Counter: {counter}</p>
//       <button onClick={() => setCounter((value) => value + 1)}>Increment</button>
//       <button onClick={() => setCounter(0)}>Reset</button>
//     </main>
//   );
// }

//обработка state при передаче ему массива данных
// function App() {
//   return <Counter />;
// }
// export default App;

// function TodoApplication({ initialList }) {
//   const [todos, setTodos] = useState(initialList);
//   return (
//     <main>
//       {todos.map((todo, index) => (
//         <p key={todo}>
//           {todo}
//           <button
//             onClick={() => {
//               todos.splice(index, 1);
//               setTodos(todos);
//             }}
//           >
//             x
//           </button>
//         </p>
//       ))}
//     </main>
//   );
// }

// function TodoApplication({ initialList }) {
//   const [todos, setTodos] = useState(initialList);
//   return (
//     <main>
//       {todos.map((todo, index) => (
//         <p key={todo}>
//           {todo}
//           <button
//             onClick={() => {
//               setTodos((value) => [...value.slice(0, index), ...value.slice(index + 1)]);
//             }}
//           >
//             x
//           </button>
//         </p>
//       ))}
//     </main>
//   );
// }
// function App() {
//   const items = ['Feed the plants', 'Water the dishes', 'Clean the cat'];
//   return <TodoApplication initialList={items} />;
// }
// export default App;

// использование нескольких state

// function markDone(list, index) {
//   return list.map((item, i) => (i === index ? { ...item, done: true } : item));
// }
// function TodoApplication({ initialList }) {
//   const [todos, setTodos] = useState(initialList);
//   const [hideDone, setHideDone] = useState(false);
//   const filteredTodos = hideDone ? todos.filter(({ done }) => !done) : todos;
//   return (
//     <main>
//       <div style={{ display: 'flex' }}>
//         <button onClick={() => setHideDone(false)}>Show all</button>
//         <button onClick={() => setHideDone(true)}>Hide done</button>
//       </div>
//       {filteredTodos.map((todo, index) => (
//         <p key={todo.task}>
//           {todo.done ? (
//             <strike>{todo.task}</strike>
//           ) : (
//             <>
//               {todo.task}
//               <button onClick={() => setTodos((value) => markDone(value, todo.index))}>x</button>
//             </>
//           )}
//         </p>
//       ))}
//     </main>
//   );
// }

// function App() {
//   const items = [
//     { task: 'Feed the plants', done: false, index: 0 },
//     { task: 'Water the dishes', done: false, index: 1 },
//     { task: 'Clean the cat', done: false, index: 2 },
//   ];
//   return <TodoApplication initialList={items} />;
// }
// export default App;

// передача state компонентам
function markDone(list, index) {
  return list.map((item, i) => (i === index ? { ...item, done: true } : item));
}
function FilterButton({ current, flag, setFilter, children }) {
  const style = {
    border: '1px solid dimgray',
    background: current === flag ? 'dimgray' : 'transparent',
    color: current === flag ? 'white' : 'dimgray',
    padding: '4px 10px',
  };
  return (
    <button style={style} onClick={() => setFilter(flag)}>
      {children}
    </button>
  );
}
function Task({ task, done, markDone }) {
  const paragraphStyle = {
    color: done ? 'gray' : 'black',
    borderLeft: '2px solid',
  };
  const buttonStyle = {
    border: 'none',
    background: 'transparent',
    display: 'inline',
    color: 'inherit',
  };
  return (
    <p style={paragraphStyle}>
      <button style={buttonStyle} onClick={done ? null : markDone}>
        {done ? '✓ ' : '◯ '}
      </button>
      {task}
    </p>
  );
}
function TodoApplication({ initialList }) {
  const [todos, setTodos] = useState(initialList);
  const [hideDone, setHideDone] = useState(false);
  const filteredTodos = hideDone ? todos.filter(({ done }) => !done) : todos;
  return (
    <main>
      <div style={{ display: 'flex' }}>
        <FilterButton current={hideDone} flag={false} setFilter={setHideDone}>
          Show all
        </FilterButton>
        <FilterButton current={hideDone} flag={true} setFilter={setHideDone}>
          Hide done
        </FilterButton>
      </div>
      {filteredTodos.map((todo, index) => (
        <Task key={todo.task} task={todo.task} done={todo.done} markDone={() => setTodos((value) => markDone(value, todo.index))} />
      ))}
    </main>
  );
}
function App() {
  const items = [
    { task: 'Feed the plants', done: false, index: 0 },
    { task: 'Water the dishes', done: false, index: 1 },
    { task: 'Clean the cat', done: false, index: 2 },
  ];
  return <TodoApplication initialList={items} />;
}
export default App;
