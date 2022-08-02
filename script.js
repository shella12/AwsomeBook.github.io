const section = document.querySelector('.awesome');
class Books {
  constructor() {
    this.book = {};
    this.bookArrayList = [];
  }

  addBook(title, author) {
    this.book = { title, author };
    this.bookArrayList.push(this.book);
    localStorage.setItem('data', JSON.stringify(this.bookArrayList));
  }

  removeBook(getListId) {
    console.log("id is" + getListId);
    let indexNumber = 0;
    while (indexNumber < this.bookArrayList.length) {
      console.log("iindexNumber" + indexNumber.toString() +" and "+getListId );
      if (indexNumber.toString() === getListId) {
        console.log("Remove loop");
        this.bookArrayList.splice(indexNumber, 1);
        localStorage.setItem('data', JSON.stringify(this.bookArrayList));
      }

      indexNumber += 1;
    }
    console.log("Remove");
    console.log(this.bookArrayList);
  }
}

const books = new Books();

const heading = document.createElement('h1');
heading.innerHTML = 'All awesome books';
section.appendChild(heading);

const bookList = document.createElement('ul');
const line = document.createElement('hr');
line.className = 'underline';

bookList.className = 'book-list';
section.appendChild(bookList);
section.appendChild(line);

const anyRandomNAme = () => {
  console.log("anyRandomName");
  console.log(books.bookArrayList);
  books.bookArrayList.forEach((each, bookId) => {
    const list = document.createElement('li');
    list.className = 'list';

    const title = document.createElement('h2');
    title.innerHTML = `"${each.title}" by`;
    list.appendChild(title);

    const author = document.createElement('h2');
    author.innerHTML = each.author;
    list.appendChild(author);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove';
    console.log(bookId);
    removeButton.id = `${bookId}`;
    removeButton.innerHTML = 'Remove';
    list.appendChild(removeButton);

    bookList.appendChild(list);

    removeButton.addEventListener('click', function removeBtnHandler() {
      const getListId = this.id;
      books.removeBook(getListId);
      bookList.innerHTML='';
      anyRandomNAme();
    });
  });
};

const inputDiv = document.createElement('div');
const formHeading = document.createElement('h3');
formHeading.className = 'form-heading';
formHeading.textContent = 'Add a new book';

inputDiv.className = 'input-fields';
inputDiv.appendChild(formHeading);
section.appendChild(inputDiv);

const bookTitle = document.createElement('input');
bookTitle.type = 'text';
bookTitle.name = 'title';
bookTitle.className = 'input title';
bookTitle.id = 'title';
bookTitle.placeholder = 'Title';
inputDiv.appendChild(bookTitle);

const bookAuthor = document.createElement('input');
bookAuthor.type = 'text';
bookAuthor.id = 'author';
bookAuthor.className = 'input author';
bookAuthor.name = 'author';
bookAuthor.placeholder = 'Author';
inputDiv.appendChild(bookAuthor);

const addButton = document.createElement('button');
addButton.className = 'input add';
addButton.innerHTML = 'Add';
inputDiv.appendChild(addButton);

addButton.addEventListener('click', () => {
  bookList.innerHTML='';

  const valueOfTitle = document.querySelector('.title').value;
  const valueOfAuthor = document.querySelector('.author').value;

  books.addBook(valueOfTitle, valueOfAuthor);
    anyRandomNAme();
});

const fetchDataList = localStorage.getItem('data');

if (fetchDataList !== null) {
  books.bookArrayList = JSON.parse(fetchDataList);
  anyRandomNAme();
}