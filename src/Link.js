import React, { Component } from 'react';

// class Link extends Component {
//   render() {
//     // return (
//     //   <p>
//     //     <a href='//react.dev'>Read more about React</a>
//     //   </p>
//     // );
//     const dateTimeNow = new Date().toLocaleString();
//     return <span>Current date and time is {dateTimeNow}.</span>;
//   }
// }

// class ButtonList extends Component {
//   getButton(text) {
//     return <button disabled={this.props.disabled}>{text}</button>;
//   }
//   render() {
//     return (
//       <aside>
//         {this.getButton('Up')}
//         {this.getButton('Down')}
//       </aside>
//     );
//   }
// }

// class ProfileLink extends React.Component {
//   render() {
//     return (
//       <a href={this.props.url} title={this.props.label} target='_blank'>
//         Profile
//       </a>
//     );
//   }
// }

class Link extends Component {
  render() {
    return (
      <p>
        <a href={this.props.url}>{this.props.children}</a>
      </p>
    );
  }
}

// return используя условие
// class Countdown extends Component {
//   render() {
//     if (this.props.remaining === 0) {
//       return null;
//     }
//     const seconds = this.props.remaining % 60;
//     const minutes = Math.floor(this.props.remaining / 60);
//     return (
//       <p>
//         {minutes}:{seconds}
//       </p>
//     );
//   }
// }

//тернарный оператор
// class ShoppingCart extends Component {
//   render() {
//     return (
//       <aside>
//         <h1>Shopping cart</h1>
//         {this.props.items.length === 0 ? <p>Your cart is empty. Go buy something!</p> : <CartItems items={this.props.items} />}
//       </aside>
//     );
//   }
// }

//использование оператора &&
// class UserName extends Component {
//   render() {
//     return (
//       <p>
//         {this.props.username}
//         {this.props.isVerified && <Checkmark />}
//       </p>
//     );
//   }
// }

//использование объекта в разных случаях
// const status2icon = {
//   draft: <DraftIcon />,
//   published: <PublishedIcon />,
//   deleted: <TrashIcon />,
// };
// class PostStatus extends Component {
//   render() {
//     return status2icon[this.props.status];
//   }
// }

//сравнение объекта с массивов
// class App extends Component {
//   render() {
//     const items = ['apples', 'pears', 'playstations'];
//     return <Select items={items} />;
//   }
// }
// class Select extends Component {
//   render() {
//     return (
//       <select>
//         {this.props.items.map((item) => (
//           <option key={item}>{item}</option>
//         ))}
//       </select>
//     );
//   }
// }

export default Link;
// export default ButtonList;
// export default ProfileLink;
