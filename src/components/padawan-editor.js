import "./padawan-styles.css";

export class padawanEditor extends HTMLElement {
  constructor() {
    super();

    const div = document.createElement("div");
    div.className = "text-editor-container";
    div.innerHTML = `
    
      <div class='text-editor'>
        <div class='header'>
        <button class='btn' id='btn-submit' type='submit'>TEST</button>
          <button class='btn' id='btn-bold' type='button' data-element='bold'><i class="fa-solid fa-bold"></i></button>
          <button class='btn' id='btn-italic' type='button' data-element='italic'><i class="fa-solid fa-italic"></i></button>
          <button class='btn' id='btn-underline' type='button' data-element='underline'><i class="fa-solid fa-underline"></i></button>
          <button class='btn' id='insert-ul' type='button' data-element='insertUnorderedList'><i class="fa-solid fa-list"></i></button>
          <button class='btn' id='insert-ol' type='button' data-element='insertOrderedList'><i class="fa-solid fa-list-ol"></i></button>
          <button class='btn' id='create-link' type='button' data-element='createLink'><i class="fa-solid fa-link"></i></button>
          </div>
        <div id='content-editor' name='output' class='content' contenteditable="true">
        </div>
        
      </div>
      
`;
    this.appendChild(div);

    const createLink = document.getElementById("create-link");
    const contentEditor = document.getElementById("content-editor");
    const btnTest = document.getElementById("btn-test");
    const elements = document.querySelectorAll(".btn");
    const submitElement = document.getElementById('btn-submit')
    

    submitElement.addEventListener("click", function getData(event) {
      event.preventDefault();
      const output = document.getElementById('content-editor').innerHTML;
        console.log("Name:", output);
        });
    

    
    elements.forEach((el) => {
      el.addEventListener("click", () => {
        let command = el.dataset["element"];

        if (command == "createLink") {
          let url = prompt("Enter the Link here:", "http://");

          if (url.trim()) {
            const span = document.createElement("span");
            span.contentEditable = false;
            document.execCommand(command, false, url);

            const links = document.querySelectorAll("a");
            links.forEach((link) => {
              link.target = "_blank";
              span.append(link);
            });

            contentEditor.appendChild(span);
          } else {
            console.log("Content is empty");
          }
        } else {
          document.execCommand(command, false, null);
        }
      });
    });
  }
}

customElements.define("padawan-editor", padawanEditor);
