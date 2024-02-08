import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello World!';
  

  return element;
}

document.body.appendChild(component());

//<div contenteditable="true"> </div>

  init();

  function init() {
    // The element
    let el = document.querySelector(".element");

    // Attaching Shadow DOM to the element
    el.attachShadow({ mode: "open" });

    // At this point, open Devtools, inspect the element
    // and expand the element.

    // You'll see the shadow root as in Elements panel as...
    // <div class="element">
    //   #shadow-root (open)
    // </div>

    // Now, head over to the console.
    console.log("Hello! I am the Element - `el` :", el);
    console.log(
      "Hello! I am the Shadow Root - `el.shadowRoot` :",
      el.shadowRoot
    );
    console.log(
      "Hello! I am the Element, again! - `el.shadowRoot.host` :",
      el.shadowRoot.host
    );
  }