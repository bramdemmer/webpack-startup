console.log('Component2 JS loaded.');
import './component.scss';

export default (text = "Hello world") => {
  const element = document.createElement("div");

  element.innerHTML = text;

  return element;
};
