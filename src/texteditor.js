import "./style.css";





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
<button class='btn' id='btn-bold' type='button' data-element='bold'><i class="fa-solid fa-bold"></i></button>
<button class='btn' id='btn-italic' type='button' data-element='italic'><i class="fa-solid fa-italic"></i></button>
<button class='btn' id='btn-underline' type='button' data-element='underline'><i class="fa-solid fa-underline"></i></button>
<button class='btn' id='insert-ul' type='button' data-element='insertUnorderedList'><i class="fa-solid fa-list"></i></button>
<button class='btn' id='insert-ol' type='button' data-element='insertOrderedList'><i class="fa-solid fa-list-ol"></i></button>
<button class='btn' id='create-link' type='button' data-element='createLink'><i class="fa-solid fa-link"></i></button>
<button class='btn' id='upload-image' type='button' data-element='insertImage'><i class="fa-solid fa-image"></i></button>
</div>
<div class='content' contenteditable="true">

</div>

</div>
`;
    this.appendChild(div);
    const buttons = document.querySelectorAll(".btn");
    const boldbutton = document.getElementById('btn-bold');
    const italicbutton = document.getElementById('btn-italic');
    const underlinebutton = document.getElementById('btn-underline')
    const insertUl = document.getElementById('insert-ul');
    const insertOl = document.getElementById('insert-ol');
    const createLink = document.getElementById('create-link');
    const uploadImage = document.getElementById('upload-image');


    const applyStyle = (style, value) => {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const span = document.createElement("span");
        span.style[style] = value;
        range.surroundContents(span);
      }
    };

       let isBold = false;
    
     boldbutton.addEventListener("click", () => {
       if (!isBold) {
         applyStyle("fontWeight", "bold");
       } else {
         applyStyle("fontWeight", "normal");
         applyStyle("fontStyle", "normal");
       }
       isBold = !isBold;
     });
    
    let isBold2 = false;

    italicbutton.addEventListener('click', () => {
      
      if (!isBold2) {
        applyStyle("fontStyle", "italic");
      } else {
        applyStyle("fontStyle", "normal");
        applyStyle("fontWeight", "normal");
      }
      isBold2 = !isBold2;
    });
   

    underlinebutton.addEventListener('click', () => {
      applyStyle("textDecoration", "underline")
    })


  }
}

// i need to make the styling. i can take some styles from the video.

//i need to check if the icons are too big.
//also i can take the logic from the video the logic.

