import 'svgxuse'; // needed for IE 11 SVG icons
import '../scss/master.scss';
import component from '../components/component1/component';
import component2 from '../components/component2/component';
import '../../vue/index';
// require.context('../images/', true, /\.(png|svg|jp(e*)g|gif)$/);
// require.context('../fonts/', true, /\.(woff|woff2|eot|ttf|otf)$/);
// require.context('../favicons/', true, /\.(svg|png|ico|xml|json|webmanifest)$/);


document.body.appendChild(component());


if (typeof component2 === 'function') {
  console.log(typeof component2);
}

console.log('logged!');

const fromTheFuture = async (args) => {
  const { a, b } = args;
  await console.log('hello form async', a, b);


  console.log('Done2.2');
};

fromTheFuture({ a: 1, b: 2 });


console.log(Array.from(document.querySelectorAll('div')));

console.log('foobar'.includes('foo'));
