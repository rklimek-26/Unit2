/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Global variables
const listItems = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10;
const divPage = document.querySelector('.page');

// Variable in case if search input is not compatible with any name
const noResultDiv = document.createElement('div');
divPage.appendChild(noResultDiv);

/***
Function showPage hides all the students
except for the ten you want displayed on a given page.
***/
const showPage = (list, page) => {
 const startIndex = (page * itemsPerPage) - itemsPerPage;
 const endIndex = page * itemsPerPage - 1;


   for (let i = 0; i<list.length; i++){
      let li = list[i];
      if (i >= startIndex && i <= endIndex){
         li.style.display = '';
      }
      else {
         li.style.display = 'none';
         }
   }
}

/***
   Creating the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   // Find number of pages depending on list length and items shown per page
   const numberOfPages = Math.ceil(list.length/itemsPerPage);

  // DOM elements for pagination links
   const div= document.createElement('div');
   div.className = 'pagination';
   divPage.appendChild(div);
   const ul = document.createElement('ul');
   div.appendChild(ul);
   const li = ul.children;

// Loop to create page numbers
   for (let i = 1; i <= numberOfPages; i++){
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      li.appendChild(a);
      if (i === 1){
         a.className = 'active';
      }
      a.href = '#';
      a.textContent = i;
   }

// Event listener for switching pages
      ul.addEventListener('click', (e) => {
         for (let i = 0; i < ul.children.length; i++){
            const a = li[i].firstElementChild;
            if (a.className === 'active'){
             a.classList.remove('active');
            }
         }
         showPage(list, e.target.textContent);
         e.target.className = 'active';
      });
}
/***
// Search button and window creation
const addSearch = () => {
   const pageHeader = document.querySelector('.page-header');
   const div = document.createElement('div');
   div.className = "student-search";
   const search = document.createElement('input');
   search.placeholder = "Search for students...";
   const buttonSearch = document.createElement('button');
   buttonSearch.textContent = "Search";
   pageHeader.appendChild(div);
   div.appendChild(search);
   div.appendChild(buttonSearch);

   buttonSearch.addEventListener('click', (e) => {
      e.preventDefault();
      searchFunction(search, listItems);
   });
   search.addEventListener('keyup', () => {
      searchFunction(search, listItems);
   });
}

// Search functionality
const searchFunction = (search, names) => {
   const arr = []; // array for storing search results
   noResultDiv.textContent = ''; //deleting previous message "No results"

   //performing comparison of names and search input
   for (let i = 0; i<names.length; i++){
      names[i].style.display = "none";
      let studentName = names[i].querySelector('h3').textContent.toLowerCase();
      let searchContent = search.value.toLowerCase();
      if (searchContent!== 0 &&
         studentName.includes(searchContent)){
         names[i].style.display = "";
         arr.push(names[i]);
      }
   }
   if(arr.length === 0){
      noResultDiv.textContent = 'No results';
      // how to delete No results??
   };
  pageRefresh(arr);
}

// Rearranging pagination after searh result
const pageRefresh = (arr) => {
   const pageLinks = document.querySelector('.pagination');
   divPage.removeChild(pageLinks);
   showPage(arr,1);
   appendPageLinks(arr);
}
***/
// Call functions. First page is active, when reload
showPage(listItems, 1);
appendPageLinks(listItems);
//addSearch();
