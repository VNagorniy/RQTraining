import { useState, useEffect, useRef } from 'react';

// Пример объявления события
// function Counter() {
//   const [counter, setCounter] = useState(0);
//   const onClick = () => {
//     setCounter((value) => value + 1);
//   };
//   return (
//     <>
//       <h1>Value:{counter}</h1>
//       <button onClick={onClick}>Increment</button>
//     </>
//   );
// }
// function App() {
//   return <Counter />;
// }
// export default App;

// function MouseStatus() {
//   const [isMoving, setMoving] = useState(false);
//   const onMouseMove = () => setMoving(true);
//   useEffect(() => {
//     if (!isMoving) return;
//     const timeout = setTimeout(() => setMoving(false), 500);
//     return () => clearTimeout(timeout);
//   }, [isMoving]);
//   return (
//     <section onMouseMove={onMouseMove}>
//       <h2>
//         The mouse is {!isMoving && 'not'} moving: {isMoving ? '✓' : '✗'}
//       </h2>
//     </section>
//   );
// }
// function App() {
//   return <MouseStatus />;
// }
// export default App;

// const VIDEO_SRC = '//images-assets.nasa.gov/video/One Small Step/One Small Step~orig.mp4';
// function VideoPlayer() {
//   const [isPlaying, setPlaying] = useState(false);
//   const onPlay = () => setPlaying(true);
//   const onPause = () => setPlaying(false);
//   const onClickPlay = () => video.current.play();
//   const onClickPause = () => video.current.pause();
//   const video = useRef();
//   return (
//     <section>
//       <video ref={video} src={VIDEO_SRC} controls width='480' onPlay={onPlay} onPause={onPause} />
//       <button onClick={isPlaying ? onClickPause : onClickPlay}>{isPlaying ? 'Pause' : 'Play'}</button>
//     </section>
//   );
// }
// function App() {
//   return <VideoPlayer />;
// }
// export default App;

// использования для обработки события - объекта события
// function Counter() {
//   const [counter, setCounter] = useState(0);
//   const increment = useRef();
//   const onClick = (evt) => {
//     const delta = evt.target === increment.current ? 1 : -1;
//     setCounter((value) => value + delta);
//   };
//   return (
//     <section>
//       <h1>Value: {counter}</h1>
//       <button ref={increment} onClick={onClick}>
//         Increment
//       </button>
//       <button onClick={onClick}>Decrement</button>
//     </section>
//   );
// }
// function App() {
//   return <Counter />;
// }
// export default App;

//пример сохранения события в версии выше 16.8
// function DropdownCounter() {
//   const [counter, setCounter] = useState(0);
//   const onChange = (evt) => setCounter((value) => value + parseInt(evt.target.value));
//   const values = [1, 2, 3, 4, 5];
//   return (
//     <section>
//       <h1>Counter: {counter}</h1>
//       <select onChange={onChange}>
//         {values.map((value) => (
//           <option key={value} value={value}>
//             {value}
//           </option>
//         ))}
//       </select>
//     </section>
//   );
// }
// function App() {
//   return <DropdownCounter />;
// }
// export default App;

//прослушиватель событий

// const FOCUS_NONE = 0;
// const FOCUS_USER = 1;
// const FOCUS_REQUEST = 2;
// function getStyle(isActive) {
//   return {
//     display: 'flex',
//     flexDirection: 'column',
//     backgroundColor: isActive ? 'oldlace' : 'transparent',
//   };
// }
// function Field({ label, children }) {
//   return (
//     <label>
//       {label}:
//       <br />
//       {children}
//     </label>
//   );
// }
// function Contact() {
//   const [focus, setFocus] = useState(FOCUS_NONE);
//   const onUserFocus = () => setFocus(FOCUS_USER);
//   const onRequestFocus = () => setFocus(FOCUS_REQUEST);
//   const onBlur = () => setFocus(FOCUS_NONE);
//   return (
//     <form onBlur={onBlur}>
//       <h1>Contact</h1>
//       <fieldset onFocus={onUserFocus} style={getStyle(focus === FOCUS_USER)}>
//         <legend>User</legend>
//         <Field label='Name'>
//           <input />
//         </Field>
//         <Field label='Email'>
//           <input type='email' />
//         </Field>
//       </fieldset>
//       <fieldset onFocus={onRequestFocus} style={getStyle(focus === FOCUS_REQUEST)}>
//         <legend>Request</legend>
//         <Field label='Subject'>
//           <input />
//         </Field>
//         <Field label='Body'>
//           <textarea />
//         </Field>
//       </fieldset>
//     </form>
//   );
// }
// function App() {
//   return <Contact />;
// }
// export default App;

// пример поведения дефолтных событий и исправление его
// function Admin() {
//   const [password, setPassword] = useState('');
//   const [isAdmin, setAdmin] = useState(false);
//   // const onClick = () => {
//   //   if (password === 'platypus') {
//   //     setAdmin(true);
//   //   }
//   // };
//   const onSubmit = (evt) => {
//     evt.preventDefault();
//     if (password === 'platypus') {
//       setAdmin(true);
//     }
//   };
//   // return (
//   // <>
//   //   {isAdmin && <h1>Bacon is delicious!</h1>}
//   //   <form>
//   //     <input type='password' onChange={(evt) => setPassword(evt.target.value)} />
//   //     <button onClick={onClick}>Login</button>
//   //   </form>
//   // </>
//   // );
//   return isAdmin ? (
//     <h1>Bacon is delicious!</h1>
//   ) : (
//     <form onSubmit={onSubmit}>
//       <input type='password' onChange={(evt) => setPassword(evt.target.value)} />
//       <button>Login</button>
//     </form>
//   );
// }
// function App() {
//   return <Admin />;
// }
// export default App;

// пример назначения событий из пропсов

// function Button({ handleClick, label }) {
//   const buttonStyle = {
//     color: 'blue',
//     border: '1px solid',
//     background: 'transparent',
//     borderRadius: '.25em',
//     padding: '.5em 1em',
//     margin: '.5em',
//   };
//   const onClick = () => handleClick();
//   return (
//     <button style={buttonStyle} onClick={onClick}>
//       {label}
//     </button>
//   );
//   // return (
//   //   <button style={buttonStyle} onClick={handleClick}>
//   //     {label}
//   //   </button>
//   // );
// }
// function StyledCounter() {
//   const [counter, setCounter] = useState(0);
//   const update = (d) => setCounter((v) => v + d);
//   return (
//     <section>
//       <h1>Counter: {counter}</h1>
//       <div>
//         <Button handleClick={() => update(1)} label='Increment' />
//         <Button handleClick={() => update(-1)} label='Decrement' />
//       </div>
//     </section>
//   );
// }
// function App() {
//   return <StyledCounter />;
// }
// export default App;

// использование прослушивателей непосредственно в DOM дереве
// использование прослушивателя на объекте window
// function getWindowSize() {
//   return `${window.innerWidth}x${window.innerHeight}`;
// }
// function WindowSize() {
//   const [size, setSize] = useState(getWindowSize());
//   useEffect(() => {
//     const onResize = () => setSize(getWindowSize());
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, [setSize]);
//   return <h1>Window size: {size}</h1>;
// }
// function App() {
//   return <WindowSize />;
// }
// export default App;

// работа с неподдерживаемыми прослушивателями HTML (например transition события)

// function Transition() {
//   const [isRunning, setRunning] = useState(false);
//   const div = useRef();
//   useEffect(() => {
//     const onStart = () => setRunning(true);
//     const onEnd = () => setRunning(false);
//     const node = div.current;
//     node.addEventListener('transitionstart', onStart);
//     node.addEventListener('transitionend', onEnd);
//     return () => {
//       node.removeEventListener('transitionstart', onStart);
//       node.removeEventListener('transitionend', onEnd);
//     };
//   }, [setRunning]);
//   return (
//     <section>
//       <h1>Transition is {!isRunning && 'not'} running</h1>
//       <div style={{ color: 'red', transition: 'color 1s linear' }} ref={div}>
//         COLORFUL TEXT
//       </div>
//       <button onClick={() => (div.current.style.color = 'blue')}>Go blue</button>
//       <button onClick={() => (div.current.style.color = 'red')}>Go red</button>
//     </section>
//   );
// }
// function App() {
//   return <Transition />;
// }
// export default App;

// объединение событий React и DOM

// function Menu() {
//   const [isExpanded, setExpanded] = useState(false);
//   useEffect(() => {
//     if (!isExpanded) {
//       return;
//     }
//     const onWindowClick = () => setExpanded(false);
//     window.addEventListener('pointerdown', onWindowClick);
//     return () => window.removeEventListener('pointerdown', onWindowClick);
//   }, [isExpanded]);
//   return (
//     <main>
//       <button onClick={() => setExpanded(true)}>Show menu</button>
//       {isExpanded && <div style={{ border: '1px solid black', padding: '1em' }}>This is the menu</div>}
//     </main>
//   );
// }
// function App() {
//   return <Menu />;
// }
// export default App;

function Menu() {
  const [isExpanded, setExpanded] = useState(false);
  useEffect(() => {
    if (!isExpanded) {
      return;
    }
    const onWindowClick = () => setExpanded(false);
    const onMenuClick = (evt) => evt.stopPropagation();
    const menu = menuRef.current;
    window.addEventListener('pointerdown', onWindowClick);
    menu.addEventListener('pointerdown', onMenuClick);
    return () => {
      window.removeEventListener('pointerdown', onWindowClick);
      menu.removeEventListener('pointerdown', onMenuClick);
    };
  }, [isExpanded]);
  const menuRef = useRef();
  return (
    <main>
      <button onClick={() => setExpanded(true)}>Show menu</button>
      {isExpanded && (
        <div ref={menuRef} style={{ border: '1px solid black', padding: '1em' }}>
          This is the menu
        </div>
      )}
    </main>
  );
}
function App() {
  return <Menu />;
}
export default App;
