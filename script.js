dragElement(document.getElementsById('plant1'));
dragElement(document.getElementsById('plant2'));
dragElement(document.getElementsById('plant3'));
dragElement(document.getElementsById('plant4'));
dragElement(document.getElementsById('plant5'));
dragElement(document.getElementsById('plant6'));
dragElement(document.getElementsById('plant7'));
dragElement(document.getElementsById('plant8'));
dragElement(document.getElementsById('plant9'));
dragElement(document.getElementsById('plant10'));
dragElement(document.getElementsById('plant11'));
dragElement(document.getElementsById('plant12'));
dragElement(document.getElementsById('plant13'));
dragElement(document.getElementsById('plant14'));

function dragElement(terrariumElement) {
    let pos1=0,
        pos2=0,
        pos3=0,
        pos4=0;
    terrariumElement.onpointerdown = pointerDrag;
}
function pointerDrag(e) {
    e.preventDefault();
    console.log(e);
    pos3 = e.clientX;
    pos4 = e.clientY;
}