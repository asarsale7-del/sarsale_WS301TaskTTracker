const element=document.getElementById('Summary');
console.log(element)
let paragraph=document.querySelector('#paragraph');
console.log(paragraph)

let next = paragraph.nextSibling;
console.log(next)

let change = document.getElementById('paragraph');
change.textContent="New Description";

console.log(paragraph)

let color=document.getElementById('paragraph');