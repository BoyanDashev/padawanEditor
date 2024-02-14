import "./style.css";

export class padawanEditor extends HTMLElement {
  constructor() {
    super();

    const div = document.createElement("div");
    div.innerHTML = `
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
<div id='content-editor' class='content' contenteditable="true">

</div>
<div class='image-container'>
<input type="file" id="imageInput" style="display: none;">
</div>

</div>

`;
    this.appendChild(div);

    const boldbutton = document.getElementById("btn-bold");
    const italicbutton = document.getElementById("btn-italic");
    const underlinebutton = document.getElementById("btn-underline");
    const insertUl = document.getElementById("insert-ul");
    const insertOl = document.getElementById("insert-ol");
    const createLink = document.getElementById("create-link");
    const uploadImage = document.getElementById("upload-image");
    const imageInput = document.getElementById("imageInput");

    const contentEditor = document.getElementById('content-editor');

    const elements = document.querySelectorAll(".btn");

    elements.forEach((el) => {
      el.addEventListener("click", () => {
        let command = el.dataset["element"];
        
        
        if (command == "createLink") {
          
          let url = prompt("Enter the Link here:", "http://");

          if (url.trim()) {
            // i need to make it so that when I click the link with the left button of the mouse the link should be opened.
            // i need also to make so that the anchor tag to be undone.
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

          
        } else if (command == "insertImage") {
          imageInput.click()
        } else {
          document.execCommand(command, false, null);
        }
      });
    });

    imageInput.addEventListener("change", () => {
      const file = imageInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          const imageUrl = event.target.result;

          
          const containerDiv = document.createElement("div");

          const img = document.createElement("img");
          img.src = imageUrl;
          img.style.maxWidth = "30vw";
          img.style.maxHeight = "40vw";
          img.className = "uneditable";
          containerDiv.className = 'container-img-btn'

          const deleteBtn = document.createElement("button");
          deleteBtn.id = "delete-image";
          deleteBtn.type = "button";
          deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

         
          containerDiv.appendChild(img);
          containerDiv.appendChild(deleteBtn);

          
          const imageContainer = document.querySelector(".image-container");
          imageContainer.appendChild(containerDiv);

          deleteBtn.addEventListener('click', () => {
            containerDiv.remove();
          });
        };
        reader.readAsDataURL(file);

        
      }
    });


  }
}








// i need to make the styling. i can take some styles from the video.

//i need to check if the icons are too big.
//also i can take the logic from the video the logic.


// const applyStyle = (style, value) => {
//   const selection = window.getSelection();
//   if (selection.rangeCount > 0) {
//     const range = selection.getRangeAt(0);
//     const span = document.createElement("span");
//     span.style[style] = value;
//     range.surroundContents(span);
//   }
// };

// let isBold = false;

// boldbutton.addEventListener("click", () => {
//   if (!isBold) {
//     applyStyle("fontWeight", "bold");
//   } else {
//     applyStyle("fontWeight", "normal");
//     applyStyle("fontStyle", "normal");
//   }
//   isBold = !isBold;
// });

// let isBold2 = false;

// italicbutton.addEventListener("click", () => {
//   if (!isBold2) {
//     applyStyle("fontStyle", "italic");
//   } else {
//     applyStyle("fontStyle", "normal");
//   }
//   isBold2 = !isBold2;
// });
// let underlined = false;
// underlinebutton.addEventListener("click", () => {
//   if (!underlined) {
//     applyStyle("textDecoration", "underline");
//   } else {
//     applyStyle("textDecoration", "none");
//   }
//   underlined = !underlined;
// });
// //the problem is that the first function is applyiing the styles to it but whe n the second function is run then the
// insertUl.addEventListener("click", () => {
//   const selection = window.getSelection();
//   if (selection.rangeCount > 0) {
//     const range = selection.getRangeAt(0);
//     const ul = document.createElement("ul");
//     const selectedText = range.extractContents();
//     const lines = selectedText.textContent.split("\n");

//     lines.forEach((line) => {
//       const li = document.createElement("li");
//       li.appendChild(document.createTextNode(line));
//       ul.appendChild(li);
//     });

//     range.insertNode(ul);
//   }
// });

// insertOl.addEventListener("click", () => {
//   const selection = window.getSelection();
//   if (selection.rangeCount > 0) {
//     const range = selection.getRangeAt(0);
//     const ol = document.createElement("ol");
//     const selectedText = range.extractContents();
//     const lines = selectedText.textContent.split("\n");

//     lines.forEach((line) => {
//       const li = document.createElement("li");
//       li.appendChild(document.createTextNode(line));
//       ol.appendChild(li);
//     });

//     range.insertNode(ol);
//   }
// });

// createLink.addEventListener("click", () => {
//   const selection = window.getSelection();
//   const range = selection.getRangeAt(0);
//   const url = prompt("Enter the URL:", "http://");

//   if (url) {
//     const linkContainer = document.createElement("div");
//     linkContainer.contentEditable = false;

//     const link = document.createElement("a");
//     link.href = url;
//     link.textContent = selection.toString();
//     link.target = "_blank";

//     linkContainer.appendChild(link);
//     //now when i use the anchor tag i cannot use anymore the other part of the textEditor.
//     range.deleteContents();
//     range.insertNode(linkContainer);
//   }
// });

// uploadImage.addEventListener("click", () => {
//   imageInput.click();
// });



// imageInput.addEventListener("change", () => {
//   const file = imageInput.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (event) {
//       const imageUrl = event.target.result;
//       const img = document.createElement("img");
//       img.src = imageUrl;
//       img.style.width = "300px";
//       img.style.height = "250px";

//       const selection = window.getSelection();
//       if (selection.rangeCount > 0) {
//         const range = selection.getRangeAt(0);
//         range.insertNode(img);
//       }
//     };
//     reader.readAsDataURL(file);
//   }
// });