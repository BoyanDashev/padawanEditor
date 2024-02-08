import './style.css';

function component() {
  const element = document.getElementById("root");
  const shadowRoot = element.attachShadow({ mode: "open" });

  
  // Set inner HTML content of the shadow DOM
  shadowRoot.innerHTML = `<div contenteditable="true"><p>Editor</p>  </div>`;

  let hello = document.createElement("span");
  hello.textContent = "Hi I am shadowed but wrapped in span";

  shadowRoot.appendChild(hello);

  return element;
}

component();


// let el = document.querySelector(".dom");
// el.attachShadow({ mode: "open" });
// // Just like prototype & constructor bi-directional references, we have...
// el.shadowRoot; // the shadow root.
// el.shadowRoot.host; // the element itself.

// // Put something in shadow DOM
// el.shadowRoot.innerHTML = "Hi I am shadowed!";

// // Like any other normal DOM operation.
// let hello = document.createElement("span");
// hello.textContent = "Hi I am shadowed but wrapped in span";
// el.shadowRoot.appendChild(hello);

// let el = document.querySelector(".dom");
// el.attachShadow({ mode: "open" });
// // Just like prototype & constructor bi-directional references, we have...
// el.shadowRoot; // the shadow root.
// el.shadowRoot.host; // the element itself.

// // Put something in shadow DOM
// el.shadowRoot.innerHTML = "Hi I am shadowed!";

// // Like any other normal DOM operation.
// let hello = document.createElement("span");
// hello.textContent = "Hi I am shadowed but wrapped in span";
// el.shadowRoot.appendChild(hello);

// document.body.appendChild(component());

// //<div contenteditable="true"> </div>

//   init();

//   function init() {
//     // The element
//     let el = document.querySelector(".element");

//     // Attaching Shadow DOM to the element
//     el.attachShadow({ mode: "open" });

//     // At this point, open Devtools, inspect the element
//     // and expand the element.

//     // You'll see the shadow root as in Elements panel as...
//     // <div class="element">
//     //   #shadow-root (open)
//     // </div>

//     // Now, head over to the console.
//     console.log("Hello! I am the Element - `el` :", el);
//     console.log(
//       "Hello! I am the Shadow Root - `el.shadowRoot` :",
//       el.shadowRoot
//     );
//     console.log(
//       "Hello! I am the Element, again! - `el.shadowRoot.host` :",
//       el.shadowRoot.host
//     );
//   }