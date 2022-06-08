function res(e) {
  let lis = document.getElementsByClassName('1');
  for (let li of lis) {
    let bien = li.parentElement.children[3].textContent;
    if(e.target.value.textContent == bien){
      console.log(bien);
  }
 }
}
