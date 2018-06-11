import 'babel-runtime/regenerator'; // must be loaded first!
import './assets';
import '../scss/master.scss';
import component from '../components/component1/component';
import component2 from '../components/component2/component';
import '../index.html';

document.body.appendChild(component());

if (typeof component2 === 'function') {
  console.log(typeof component2);
}


console.log('logged!');
const fromTheFuture = async (args) => {
  const { a, b } = args;
  await console.log('hello form async', a, b);


  console.log('Done2');
};

fromTheFuture({ a: 1, b: 2 });

