
const checkOutDate = document.querySelectorAll('.checkout-date');
const checkOutButton = document.querySelector('#checkout-button');
const returnBookButton = document.querySelector('#return-button');
const checkedOutBook = document.querySelector('#checkedout-book')


//**overDueBook should run in the login function**//

function overDueBook(checkoutDate){
    //this is ideally how I would set up the problem, not 100% if this code would actually work because I am not using a dataset
    const datesArray = Array.from(checkOutDate);

    datesArray.forEach(date => {
        const today = new Date();
        const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const checkOutD = checkOutDate.innerText
        const Difference_In_Time = currentDate.getTime() - checkOutD.getTime();
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

        if (Difference_In_Days >= 14){
            alert("One of your books is overdue!");
        }
    })
}

// checkOutBook and returnBook are click and submit events 
checkOutButton.addEventListener('submit', checkOutBook())
function checkOutBook(){
   event.preventDefault();
   const today = new Date();
   const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

   const checkedOutBook = {
       title = Book.title
       date = currentDate
   }

   const addedBook = document.createElement('li')
   addedBook.textContent = checkedOutBook

   const bookList = document.querySelector('ol');
   bookList.appendChild(addedBook);

   fetch(checkedOutBooksURL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(checkedOutBook)})
}


returnBookButton.addEventListener('click', returnBook())
function returnBook(){
    checkedOutBook.remove();

    fetch(`${checkedOutBooksURL}/${Book.Id}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'}
    })
}