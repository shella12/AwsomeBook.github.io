const section = document.querySelector('.awesome');

// let bookArrayList = [];
// const bookObject = {
//   title: '',
//   author: '',
// };
// class Book{

// constructor(title=null,author=null){
// this.title=title;
// this.author=author;

// }

// }
class Books{
    // bookArrayList=[];
    constructor(){

       this.book={};
       this.bookArrayList=[];

    }
    addBook(title,author){
    
     console.log(title,author);
     this.book={title,author};
     this.bookArrayList.push(this.book);
    localStorage.setItem('data', JSON.stringify(this.bookArrayList));
     console.log(this.bookArrayList);

    }
    removeBook(getListId){
        // console.log(title,author);
        // this.bookArrayList=this.bookArrayList.filter((each)=>{
        //     if(each.title !== title){
        //         return each;
        //     }
        // });
        // console.log(this.bookArrayList);
        
    let indexNumber = 0;
      while (indexNumber < this.bookArrayList.length) {
        if (indexNumber.toString() === getListId) {
          this.bookArrayList.splice(indexNumber, 1);
          localStorage.setItem('data', JSON.stringify(this.bookArrayList));
        }

        indexNumber += 1;
      }
    //   list.remove();
    }
}

const books=new Books();

const heading = document.createElement('h1');
heading.innerHTML = 'Awesome Books';
section.appendChild(heading);

const bookList = document.createElement('ul');
bookList.className = 'book-list';
section.appendChild(bookList);

const anyRandomNAme = () => {
  books.bookArrayList.forEach((each, bookId) => {
    const list = document.createElement('li');
    list.className = 'list';

    const title = document.createElement('h2');
    title.innerHTML = each.title;
    list.appendChild(title);

    const author = document.createElement('h2');
    author.innerHTML = each.author;
    list.appendChild(author);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove';
    removeButton.id = `${bookId}`;
    removeButton.innerHTML = 'Remove';

    list.appendChild(removeButton);

    bookList.appendChild(list);

    removeButton.addEventListener('click', function () {
      const getListId = this.id;
      books.removeBook(getListId);

    //   let indexNumber = 0;
    //   while (indexNumber < books.bookArrayList.length) {
    //     if (indexNumber.toString() === getListId) {
    //       books.bookArrayList.splice(indexNumber, 1);
    //       localStorage.setItem('data', JSON.stringify(books.bookArrayList));
    //     }

    //     indexNumber += 1;
    //   }
      list.remove();
    }
    );
  });
};

const inputDiv = document.createElement('div');
inputDiv.className = 'input-fields';
section.appendChild(inputDiv);

const bookTitle = document.createElement('input');
bookTitle.type = 'text';
bookTitle.name = 'title';
bookTitle.className = 'input title';
bookTitle.id = 'title';
bookTitle.placeholder = 'title';
inputDiv.appendChild(bookTitle);

const bookAuthor = document.createElement('input');
bookAuthor.type = 'text';
bookAuthor.id = 'author';
bookAuthor.className = 'input author';
bookAuthor.name = 'author';
bookAuthor.placeholder = 'author';
inputDiv.appendChild(bookAuthor);

const addButton = document.createElement('button');
addButton.className = 'input add';
addButton.innerHTML = 'Add';
inputDiv.appendChild(addButton);

addButton.addEventListener('click', () => {
  const allList = document.querySelectorAll('.list');

  allList.forEach((each) => {
    bookList.removeChild(each);
  });

  const valueOfTitle = document.querySelector('.title').value;
  const valueOfAuthor = document.querySelector('.author').value;

  books.addBook(valueOfTitle,valueOfAuthor);

//   const newObj = Object.create(bookObject);
//   newObj.title = valueOfTitle;
//   newObj.author = valueOfAuthor;

//   bookArrayList.push(newObj);
//   localStorage.setItem('data', JSON.stringify(bookArrayList));

//   // test.textContent = JSON.stringify(newObj);
  anyRandomNAme();
});

// addButton.addEventListener('click',books.addBook('title','author'));

const fetchDataList = localStorage.getItem('data');

if (fetchDataList !== null) {
  books.bookArrayList = JSON.parse(fetchDataList);
  anyRandomNAme();
}