import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

document.getElementById("add-comment").addEventListener('click', AddUnsortList)
document.getElementById("remove-comments").addEventListener('click', RemoveAllComments)


function AddUnsortList() 
{  
  const ul = document.getElementsByTagName("ul")[0];
  const textare = document.getElementsByTagName("textarea")[0];  
  
  //alert(textare.value);
  //ul.innerHTML += '<li>' +textare.value +' </li>';       
  var li = document.createElement("li");
  //li.appendChild(document.createTextNode(textare.value));

  const e = document.getElementsByTagName("select")[0];
  var selText = e.options[e.selectedIndex].text;
  
  ///document.getElementsByClassName("comment-rating")[0].textContent = strUser;  

  li.appendChild(document.createTextNode("<div class='comment'><div class='comment-rating'></div>" + selText +
   "<div class='comment-text'></div> " +textare.value +"<div class='editor-mode' style='visibility: hidden'><button class='remove-comment' id='remove-comment'>Submit rates</button></div></div>"));
  ul.appendChild(li);
};

function RemoveAllComments() 
{  
  if (confirm("Do you really wants to delete all the comments?") == true) 
  {  
    const ul = document.getElementsByTagName("UL")[0];
    ul.innerHTML = '';
  } 
};

