/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Author: Rachel Klimek

Project goals: aiming for meets expectations
Resources used: Treehouse videos, study guide, developer.mozilla.org, slack channel, student examples
******************************************/

//initiate global variables
const stuList = document.getElementsByClassName('student-item cf');
const itmPerPg = 10;
const divPage = document.querySelector('.page');

//Create a function to show only 10 items at a time. Must be flexible for any amount of list items
const showPage = (list, page) => {
  const startIndex = (page * itmPerPg) - itmPerPg;
  const endIndex = (page * itmPerPg - 1);

//For loop to decide how many li entries there are
  for (let i=0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      list[i].style.display = '';

  } else {
    list[i].style.display = 'none';
}}}

// appendPageLinks function generates, appends, and adds functionality to pagination buttons.
const appendPageLinks = (list) => {
  const totPages = Math.ceil(list.length / itmPerPg);
  const newDiv = document.createElement("div");
  newDiv.className = 'pagination';
  divPage.appendChild(newDiv);

  const newUl = document.createElement("ul");
  newDiv.appendChild(newUl);
  const li = newUl.children;


  for (let i=1; i <= totPages; i++) {
    const li = document.createElement('li');
    newUl.appendChild(li);
    const a = document.createElement("a");
    li.appendChild(a);

    if (i===1) {
        a.className = 'active';
     }
     a.href = '#';
     a.textContent = i;
   }
//Add event listener to show the page that corresponds to the page button that was selected by the user
      newUl.addEventListener('click', (e) => {
        for (let i=0; i < newUl.children.length; i++) {
          const a = li[i].firstElementChild;
          if (a.className === 'active'){
           a.classList.remove('active');
        }
      }
          const pageNum = e.target.textContent;
          showPage(list, pageNum);
           e.target.className = 'active';
      });
    }

//Load page by calling the showPage and appendPageLinks functions
showPage(stuList, 1);
appendPageLinks(stuList);
