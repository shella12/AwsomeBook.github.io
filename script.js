const section=document.querySelector('.awesome');

let bookArrayList = [];
const bookObject = {
    title: '',
    author: ''
};

const heading=document.createElement('h1');
heading.innerHTML="Awesome Books"
section.appendChild(heading);

const bookList=document.createElement('ul');
bookList.className="book-list";
section.appendChild(bookList);

const inputDiv=document.createElement('div');
inputDiv.className="input-fields"
section.appendChild(inputDiv);

const bookTitle=document.createElement('input');
bookTitle.type="text";
bookTitle.name="title";
bookTitle.className="input title";
bookTitle.id="title";
bookTitle.placeholder="title";
inputDiv.appendChild(bookTitle);

const bookAuthor=document.createElement('input');
bookAuthor.type="text";
bookAuthor.id="author";
bookAuthor.className="input author";
bookAuthor.name="author"
bookAuthor.placeholder="author"
inputDiv.appendChild(bookAuthor);

const addButton=document.createElement('button');
addButton.className="input add";
addButton.innerHTML="Add";
inputDiv.appendChild(addButton);

addButton.addEventListener('click',function() {

    const allList = document.querySelectorAll('.list');

    allList.forEach((each) => {
        bookList.removeChild(each);
    })

    const valueOfTitle = document.querySelector('.title').value;
    const valueOfAuthor = document.querySelector('.author').value;

    const newObj = Object.create(bookObject);
    newObj.title = valueOfTitle;
    newObj.author = valueOfAuthor;

    bookArrayList.push(newObj);

    // test.textContent = JSON.stringify(newObj);

    bookArrayList.forEach((each,book_id) => {

        const list=document.createElement('li');
        list.className="list"

        const title=document.createElement('h2');
        title.innerHTML= each.title;
        list.appendChild(title);

        const author=document.createElement('h2');
        author.innerHTML=each.author;
        list.appendChild(author);

        const removeButton=document.createElement('button');
        removeButton.className="remove";
        removeButton.id=`${book_id}`;
        removeButton.innerHTML="Remove";
        
        list.appendChild(removeButton);

        bookList.appendChild(list);


removeButton.addEventListener('click', function(){
    const getListId = this.id;

    let indexNumber=0;
    while(indexNumber<bookArrayList.length){
        if(indexNumber == getListId){
            bookArrayList.splice(indexNumber,1);
            
        }

        indexNumber++;
    }

    console.log(getListId)
    console.log(bookArrayList);
    list.remove();
});
    });
});


