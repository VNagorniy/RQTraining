import React, { Component, useMemo } from 'react';

class App extends Component {
  render() {
    return (
      <main>
        <h1>Animals</h1>
        <Gallery />
      </main>
    );
  }
}

//Вариант 1 - когда мы просто рендерим компонент

class Gallery extends Component {
  render() {
    return (
      <section style={{ display: 'flex' }}>
        <Image index='1003' title='Deer' />
        <Image index='1020' title='Bear' />
        <Image index='1024' title='Vulture' />
        <Image index='1084' title='Walrus' />
      </section>
    );
  }
}

// function Gallery() {
//   return (
//     <section style={{ display: 'flex' }}>
//       <Image index='1003' title='Deer' />
//       <Image index='1020' title='Bear' />
//       <Image index='1024' title='Vulture' />
//       <Image index='1084' title='Walrus' />
//     </section>
//   );
// }

// class Image extends Component {
//   render() {
//     return (
//       <figure style={{ margin: '5px' }}>
//         <img src={`//picsum.photos/id/${this.props.index}/150/150/`} alt={this.props.title} />
//         <figcaption>
//           <h3>Species: {this.props.title}</h3>
//         </figcaption>
//       </figure>
//     );
//   }
// }

// function Image({ index, title }) {
//   return (
//     <figure style={{ margin: '5px' }}>
//       <img src={`//picsum.photos/id/${index}/150/150/`} alt={title} />
//       <figcaption>
//         <h3>Species: {title}</h3>
//       </figcaption>
//     </figure>
//   );
// }

// Вариант-2, когда метод прописан утилита (URL картинки)

// class Image extends Component {
//   getImageSource(index) {
//     return `//picsum.photos/id/${index}/150/150/`;
//   }
//   render() {
//     return (
//       <figure style={{ margin: '5px' }}>
//         <img src={this.getImageSource(this.props.index)} alt={this.props.title} />
//         <figcaption>
//           <h3>Species: {this.props.title}</h3>
//         </figcaption>
//       </figure>
//     );
//   }
// }

// function getImageSource(index) {
//   return `//picsum.photos/200/100/animals/${index}/`;
// }
// function Image({ index, title }) {
//   return (
//     <figure style={{ margin: '5px' }}>
//       <img src={getImageSource(index)} alt={title} />
//       <figcaption>Species: {title}</figcaption>
//     </figure>
//   );
// }

// Вариант-3, когда метод внутри класса

// class Image extends Component {
//   getImageSource() {
//     return `//picsum.photos/id/${this.props.index}/150/150/`;
//   }
//   render() {
//     return (
//       <figure style={{ margin: '5px' }}>
//         <img src={this.getImageSource()} alt={this.props.title} />
//         <figcaption>
//           <h3>Species: {this.props.title}</h3>
//         </figcaption>
//       </figure>
//     );
//   }
// }

// function Image({ index, title }) {
//   const getImageSource = () => `//picsum.photos/id/${index}/150/150/`;
//   return (
//     <figure style={{ margin: '5px' }}>
//       <img src={getImageSource()} alt={title} />
//       <figcaption>
//         <h3>Species: {title}</h3>
//       </figcaption>
//     </figure>
//   );
// }

//Вариант-4, с использованием конструктора

// class Image extends Component {
//   constructor(props) {
//     super(props);
//     this.id = `image-${Math.floor(Math.random() * 1000000)}`;
//   }
//   render() {
//     return (
//       <figure style={{ margin: '5px' }} id={this.id}>
//         <img src={`//picsum.photos/id/${this.props.index}/150/150/`} alt={this.props.title} />
//         <figcaption>
//           <h3>Species: {this.props.title}</h3>
//         </figcaption>
//       </figure>
//     );
//   }
// }

function Image({ index, title }) {
  const id = useMemo(() => `image-${Math.floor(Math.random() * 1000000)}`, []);
  return (
    <figure style={{ margin: '5px' }} id={id}>
      <img src={`//picsum.photos/id/${index}/150/150/`} alt={title} />
      <figcaption>
        <h3>Species: {title}</h3>
      </figcaption>
    </figure>
  );
}

export default App;
