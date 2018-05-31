import 'babel-runtime/regenerator'; // must be first!
import '../scss/master.scss';
import component from "../components/component1/component";
import component2 from "../components/component2/component";
import '../index.html';

document.body.appendChild(component());


const fromTheFuture = async (args) => {
  const {a, b} = args;
  await console.log('hello form async', a, b);

  console.log('Done2');
}

fromTheFuture({a: 1, b: 2});
