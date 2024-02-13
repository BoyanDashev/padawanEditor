export class PadawanEditor extends HTMLElement {
  constructor() {
    super();

    const div = document.createElement("div");
    div.innerHTML = `
      <style>
        .text-editor {
          border: 1px solid yellow;
          width: 500px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
        }
        .header {
          background-color: #ecf0f1;
          padding: 5px;
        }
        .header .btn {
          border: none;
          outline: none;
          background-color: transparent;
          margin-right: 5px;
          cursor: pointer;
        }
        .content {
          min-height: 200px;
          border: 1px solid #ecf0f1;
          border-top: 0px;
          padding: 20px;
          cursor: pointer;
        }
      </style>
      <div class='text-editor'>
        <div class='header'>
          <button class='btn' type='button' data-element='bold'><i class="fa-solid fa-bold"></i></button>
          <button class='btn' type='button' data-element='italic'><i class="fa-solid fa-italic"></i></button>
          <button class='btn' type='button' data-element='underline'><i class="fa-solid fa-underline"></i></button>
          <button class='btn' type='button' data-element='insertUnorderedList'><i class="fa-solid fa-list"></i></button>
          <button class='btn' type='button' data-element='insertOrderedList'><i class="fa-solid fa-list-ol"></i></button>
          <button class='btn' type='button' data-element='createLink'><i class="fa-solid fa-link"></i></button>
          <button class='btn' type='button' data-element='insertImage'><i class="fa-solid fa-image"></i></button>
        </div>
        <div class='content' contenteditable="true"></div>
      </div>
    `;
    this.appendChild(div);

    const contentEditable = this.querySelector(".content");

    const applyStyle = (style) => {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const span = document.createElement("span");
      span.style[style] = "true";
      range.surroundContents(span);
    };

    const insertLink = () => {
      const url = prompt("Enter the Link here:", "http://");
      if (url) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const link = document.createElement("a");
        link.href = url;
        link.textContent = selection.toString();
        range.deleteContents();
        range.insertNode(link);
      }
    };

    const insertImage = () => {
      const imageUrl = prompt("Enter the Image URL here:");
      if (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        contentEditable.appendChild(img);
      }
    };

    const handleButtonClick = (command) => {
      switch (command) {
        case "bold":
          applyStyle("fontWeight");
          break;
        case "italic":
          applyStyle("fontStyle");
          break;
        case "underline":
          applyStyle("textDecoration");
          break;
        case "createLink":
          insertLink();
          break;
        case "insertImage":
          insertImage();
          break;
        default:
          break;
      }
    };

    const buttons = this.querySelectorAll(".btn");

    buttons.forEach((el) => {
      el.addEventListener("click", () => {
        const command = el.dataset["element"];
        handleButtonClick(command);
      });
    });
  }
}




import "./style.css";



// const elements = document.querySelectorAll('.btn');

// elements.forEach((el) => {
//   el.addEventListener('click', () => {
//     let command = el.dataset['element']
  
//     if (command == 'createLink' || command = 'insertImage'){
//     let url = prompt('Enter the Link here:', 'http://')
//     document.execCommand(command, false, url);

//   }else {
    
//       document.execCommand(command, false, null);
//   }

    


//   })
// })




export class padawanEditor extends HTMLElement {
  constructor() {
    super();

    const div = document.createElement("div");
    div.innerHTML = `
    <style>
  .text-editor{
    border: 1px solid yellow;
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%) translateY(-50%);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19); 

    
    

  }
  .header{
    background-color: #ecf0f1;
    padding: 5px
  }
  .header .btn{
    border: none;
    outline: none;
    background-color: transparent;
    margin-right: 5px;
    cursor: pointer;
  }
  .content{
    min-height: 200px;
    border: 1px solid #ecf0f1;
    border-top: 0px;
    padding: 20px;
    cursor: pointer;

  }
  
</style>
<div class='text-editor'>
<div class='header'>
<button class='btn' type='button' data-element='bold'><i class="fa-solid fa-bold"></i></button>
<button class='btn' type='button' data-element='italic'><i class="fa-solid fa-italic"></i></button>
<button class='btn' type='button' data-element='underline'><i class="fa-solid fa-underline"></i></button>
<button class='btn' type='button' data-element='insertUnorderedList'><i class="fa-solid fa-list"></i></button>
<button class='btn' type='button' data-element='insertOrderedList'><i class="fa-solid fa-list-ol"></i></button>
<button class='btn' type='button' data-element='createLink'><i class="fa-solid fa-link"></i></button>
<button class='btn' type='button' data-element='insertImage'><i class="fa-solid fa-image"></i></button>
</div>
<div class='content' contenteditable="true">

</div>

</div>
`;
    this.appendChild(div);
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((el) => {
      el.addEventListener("click", () => {
        let command = el.dataset["element"];

        if (command === "createLink") {
          let url = prompt("Enter the Link here:", "http://");
          document.execCommand(command, false, url);
        } else if (command === "insertImage") {
            
        } else {
          document.execCommand(command, false, null);
        }
      });
    });

  }
}

// i need to make the styling. i can take some styles from the video.

//i need to check if the icons are too big.
//also i can take the logic from the video the logic.


