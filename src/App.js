import { useState, useEffect, useRef } from 'react';

//получение внешних данных (необходимо только монтирование компонента)
// function RemoteDropdown() {
//   const [options, setOptions] = useState([]);
//   useEffect(() => {
//     fetch('//www.swapi.tech/api/people')
//       .then((res) => res.json())
//       .then((data) => setOptions(data.results.map(({ name }) => name)));
//   }, []);
//   return (
//     <select>
//       {options.map((option) => (
//         <option key={option}>{option}</option>
//       ))}
//     </select>
//   );
// }
// function App() {
//   return <RemoteDropdown />;
// }
// export default App;

//монтирование и размонтирование компонента
// function Stopwatch() {
//   const [seconds, setSeconds] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => setSeconds((seconds) => seconds + 1), 1000);
//     return () => clearInterval(interval);
//   }, []);
//   return <h1>Seconds: {seconds}</h1>;
// }
// function App() {
//   const [showWatch, setShowWatch] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShowWatch((b) => !b)}>Toggle watch</button>
//       {showWatch && <Stopwatch />}
//     </>
//   );
// }
// export default App;

//отмена запроса в функции 1й варинт (предпочтительнее)
// useEffect(() => {
//   const controller = new AbortController();
//   fetch(url, { controller }).then((data) => {
//     // handle the data
//   });
//   return () => {
//     controller.abort();
//   };
// }, []);

//отмена запроса в функции 2й вариант
// useEffect(() => {
//   let mounted = true;
//   fetch(url).then((data) => {
//     if (!mounted) {
//       return;
//     }
//     // handle the data
//   });
//   return () => {
//     mounted = false;
//   };
// }, []);

// запуск очистки при размонтировании
// function Dialog() {
//   useEffect(() => () => trackEvent('dialog_dismissed'), []);
// rest of component goes here
// }

//использование массива зависимостей
// function BlogPost({ title, body }) {
//   useEffect(() => {
//     document.title = title;
//   }, [title]);
//   return (
//     <article>
//       <h1>{title}</h1>
//       {body}
//     </article>
//   );
// }
// function App() {
//   return (
//     <main>
//       <BlogPost title='First post' body={<p>Welcome to my cool website.</p>} />
//     </main>
//   );
// }
// export default App;

// function EmailInput({ value }) {
//   const [email, setEmail] = useState('');
//   useEffect(() => setEmail(value), [value]);
//   return (
//     <label>
//       Email address:
//       <input type='email' value={email} onChange={(evt) => setEmail(evt.target.value)} />
//     </label>
//   );
// }
// const EMAIL1 = 'daffyduck@looneytunes.invalid';
// const EMAIL2 = 'bugsbunny@looneytunes.invalid';
// const EMAIL3 = 'elmerfudd@looneytunes.invalid';
// function App() {
//   const [defaultEmail, setDefaultEmail] = useState(EMAIL1);
//   return (
//     <main>
//       <button onClick={() => setDefaultEmail(EMAIL1)}>Use {EMAIL1}</button>
//       <br />
//       <button onClick={() => setDefaultEmail(EMAIL2)}>Use {EMAIL2}</button>
//       <br />
//       <button onClick={() => setDefaultEmail(EMAIL3)}>Use {EMAIL3}</button>
//       <br />
//       <EmailInput value={defaultEmail} />
//     </main>
//   );
// }
// export default App;

//очистка некоторых рендеров

// function Countdown({ from }) {
//   const [seconds, setSeconds] = useState(from);
//   const [isRunning, setRunning] = useState(false);
//   useEffect(() => {
//     if (!isRunning) {
//       return;
//     }
//     const interval = setInterval(
//       () =>
//         setSeconds((value) => {
//           if (value <= 1) {
//             setRunning(false);
//           }
//           return value - 1;
//         }),
//       1000
//     );
//     return () => clearInterval(interval);
//   }, [isRunning]);
//   return (
//     <section>
//       <h2>Time left: {seconds} seconds</h2>
//       <button onClick={() => setSeconds(from)}>Reset</button>
//       <button onClick={() => setRunning((v) => !v)} disabled={seconds === 0}>
//         {isRunning ? 'Pause' : 'Resume'}
//       </button>
//     </section>
//   );
// }
// function App() {
//   return <Countdown from={10} />;
// }
// export default App;

//пример как не рендерить компонент в родительском компоненте
// function Die() {
//   const style = {
//     border: '2px solid black',
//     display: 'inline-block',
//     width: '2em',
//     height: '2em',
//     textAlign: 'center',
//     lineHeight: 2,
//   };
//   const value = Math.floor(6 * Math.random());
//   return <span style={style}>{value}</span>;
// }
// function DiceRoller() {
//   const [rolls, setRolls] = useState(1);
//   return (
//     <main>
//       <h1>Rolls: {rolls}</h1>
//       <button onClick={() => setRolls((r) => r + 1)}>Re-roll</button>
//       <div>
//         <Die />
//         <Die />
//         <Die />
//       </div>
//     </main>
//   );
// }
// function App() {
//   return <DiceRoller />;
// }
// export default App;

//пример рендеринга на основе state
//плохой вариант
// function BlinkingBackground() {
//   const [left, setLeft] = useState(0);
//   const onMouseMove = (evt) => setLeft(evt.nativeEvent.offsetX);
//   const style = {
//     backgroundColor: left < 100 ? 'blue' : 'red',
//   };
//   return <div style={style} onMouseMove={onMouseMove} />;
// }

//хороший вариант
// function BlinkingBackground() {
//   const [isLeft, setLeft] = useState(true);
//   const onMouseMove = (evt) => setLeft(evt.nativeEvent.offsetX < 100);
//   const style = {
//     backgroundColor: isLeft ? 'blue' : 'red',
//   };
//   return <div style={style} onMouseMove={onMouseMove} />;
// }

// управление элементом через DOM
// function PhantomCursor() {
//   const element = useRef();
//   const onMouseMove = (evt) => {
//     element.current.style.left = `${evt.nativeEvent.offsetX}px`;
//     element.current.style.top = `${evt.nativeEvent.offsetY}px`;
//   };
//   return (
//     <div style={{ position: 'relative' }} onMouseMove={onMouseMove}>
//       <img style={{ position: 'absolute' }} ref={element} src='/images/fake_cursor.png' alt='' />
//     </div>
//   );
// }

//пример рендера внутри функций

function Icon({ type }) {
  return <img src={`https://reactquickly.dev/builds/ch06/rq06-push-button/images/${type}.png`} width='16' alt='' />;
}
function Button({ label, ButtonIcon }) {
  const [pressed, setPressed] = useState(false);
  return (
    <button onClick={() => setPressed((p) => !p)}>
      <ButtonIcon pressed={pressed} />
      {label}
    </button>
  );
}
function LockIcon({ pressed }) {
  return pressed ? <Icon type='lock' /> : <Icon type='unlock' />;
}
function LockButton() {
  return <Button label='Lock' ButtonIcon={LockIcon} />;
}

function App() {
  return <LockButton />;
}
export default App;
