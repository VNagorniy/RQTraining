import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Menu />
      </main>
    );
  }
}

//пример классового компонента с props
// class Menu extends Component {
//   render() {
//     return (
//       <nav className='navbar'>
//         <h1 className='title'>TheMenuCompany</h1>
//         <ul className='menu'>
//           <MenuItem label='Home' href='/' />
//           <MenuItem label='About' href='/about/' />
//           <MenuItem label='Blog' href='/blog' />
//         </ul>
//       </nav>
//     );
//   }
// }

//пример функционального компонента
function Menu() {
  return (
    <nav className='navbar'>
      <h1 className='title'>TheMenuCompany</h1>
      <ul className='menu'>
        <MenuItem label='Home' href='/' />
        <MenuItem label='About' href='/about/' />
        <MenuItem label='Blog' href='/blog' />
      </ul>
    </nav>
  );
}

//пример классового компонента с props
// class MenuItem extends Component {
//   render() {
//     return (
//       <li className='menu-item'>
//         <a className='menu-link' href={this.props.href}>
//           {this.props.label}
//         </a>
//       </li>
//     );
//   }
// }

//пример функционального компонента с props
// function MenuItem(props) {
//   return (
//     <li className='menu-item'>
//       <a className='menu-link' href={props.href}>
//         {props.label}
//       </a>
//     </li>
//   );
// }

//деструктуризация пропсов
// function MenuItem({ href, label }) {
//   return (
//     <li className='menu-item'>
//       <a className='menu-link' href={href}>
//         {label}
//       </a>
//     </li>
//   );
// }

//указание деструктуризации внутри компонента
// function MenuItem({ props }) {
//   const { href, label } = props;
//   return (
//     <li className='menu-item'>
//       <a className='menu-link' href={href}>
//         {label}
//       </a>
//     </li>
//   );
// }

//использование rest и spread в функциональном компоненте
function MenuItem({ label, href, ...rest }) {
  return (
    <li className='menu-item'>
      <a className='menu-link' href={href} {...rest}>
        {label}
      </a>
    </li>
  );
}

export default App;
