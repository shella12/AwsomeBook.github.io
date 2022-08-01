const section=document.querySelector('.awesome');

const heading=document.createElement('h1');
heading.innerHTML="Awesome Books"
section.appendChild(heading);

const bookList=document.createElement('ul');
bookList.className="book-list"
section.appendChild(bookList);

const inputDiv=document.createElement('div');
inputDiv.className="input-fields"
section.appendChild(inputDiv);

const bookTitle=document.createElement('input');
bookTitle.type="text"
bookTitle.id="title"
bookTitle.name="title"
bookTitle.placeholder="title"
section.appendChild(bookTitle);

const bookAuthor=document.createElement('input');
bookAuthor.type="text"
bookAuthor.id="author"
bookAuthor.name="author"
bookAuthor.placeholder="author"
section.appendChild(bookAuthor);

const addButton=document.createElement('button');
addButton.className="add";
addButton.innerHTML="Add";
section.appendChild(addButton);

addButton.addEventListener('click',function() {

    const list=document.createElement('li');
    bookList.appendChild(list);

    const title=document.createElement('h2');
    title.innerHTML="title";
    list.appendChild(title);

    const author=document.createElement('h2');
    author.innerHTML="author";
    list.appendChild(author);

    const removeButton=document.createElement('button');
    removeButton.className="remove";
    removeButton.innerHTML="Remove";
    list.appendChild(removeButton);

    removeButton.addEventListener('click', function(){
    list.remove();
    });
});



