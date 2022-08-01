const section=document.querySelector('.awesome');

// const heading=document.createElement('h1');

const test = document.querySelector('.test');

const bookArrayList = [];

const bookObject = {
    title: '',
    author: ''
};


// heading.innerHTML="Awesome Books"
// section.appendChild(heading);

const bookList=document.createElement('ul');
bookList.className="book-list"
section.appendChild(bookList);

// const inputDiv=document.createElement('div');
// inputDiv.className="input-fields"
// section.appendChild(inputDiv);

const bookTitle=document.createElement('input');
bookTitle.type="text";
bookTitle.name="title";
bookTitle.className="input title";
bookTitle.id="title";
bookTitle.placeholder="title";
section.appendChild(bookTitle);

const bookAuthor=document.createElement('input');
bookAuthor.type="text";
bookAuthor.id="author";
bookAuthor.className="input author";
bookAuthor.name="author"
bookAuthor.placeholder="author"
section.appendChild(bookAuthor);

const addButton=document.createElement('button');
addButton.className="input add";
addButton.innerHTML="Add";
section.appendChild(addButton);

addButton.addEventListener('click',function() {

    const valueOfTitle = document.querySelector('.title').value;
    const valueOfAuthor = document.querySelector('.author').value;

    const newObj = Object.create(bookObject);
    newObj.title = valueOfTitle;
    newObj.author = valueOfAuthor;

    bookArrayList.push(newObj);

    // test.textContent = JSON.stringify(newObj);
    const list=document.createElement('li');

    const title=document.createElement('h2');
    title.innerHTML= newObj.title;
    list.appendChild(title);

    const author=document.createElement('h2');
    author.innerHTML=newObj.author;
    list.appendChild(author);


    const removeButton=document.createElement('button');
    removeButton.className="remove";
    removeButton.innerHTML="Remove";
    list.appendChild(removeButton);

    bookList.appendChild(list);

    // removeButton.addEventListener('click', function(){
    // list.remove();
    // });
});



