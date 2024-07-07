const addbtn = document.querySelector("#addbtn");
const main = document.querySelector(".main");

const  saveNotes = ()=>{
     const Notes = document.querySelectorAll(".note textarea");
     console.log(Notes);
     const data =[];
     Notes.forEach=()=>{
        (Note) => {
            data.push(Note.value)
        }  
     }
    //  console.log(data)  
     localStorage.setItem("Notes", JSON,stringify(data))
}
addbtn.addEventListener(
    "click",
    function () {
        addnote()
    }
)
//  <div class="Note">
// <div class="tool">
//     <i class="fas fa-trash"></i>
//     <i class="fas fa-save"></i>
// </div>
// <textarea></textarea>
// </div>
const  addnote = () => {
    const Note = document.createElement("div")
    Note.classList.add("Note")
    Note.innerHTML = `
    <div class="tool">
    <i class=" trash fas fa-trash"></i>
    <i class=" save fas fa-save"></i>
 </div>
<textarea></textarea>
    `
    Note.querySelector(".trash").addEventListener(
        "click",
        function() {
            Note.remove()
            saveNotes()
        }
    )
    Note.querySelector(".save").addEventListener(
        "click",
        function () {
            saveNotes()
        }
    )
    main.appendChild(Note);
    saveNotes()
}
