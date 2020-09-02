
const checkOutDate = document.querySelectorAll('.checkout-date');
const checkOutButton = document.querySelector('#checkout-button');
const returnBookButton = document.querySelector('#return-button');
const checkedOutBook = document.querySelector('#checkedout-book')


//**overdueBook should run in the login function**//

function overdueBook(checkoutDate){
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

//to send out an email other than an alert would probably need to create a Windows Service Application that keeps track and sends out a pre-filled email with User and Book info string interpolated into the format.

//**BookTracking should run in the login function**//
function BookTracking(checkoutDate){
    //this is ideally how I would set up the problem, not 100% if this code would actually work because I am not using a dataset
    const datesArray = Array.from(checkOutDate);

    datesArray.forEach(date => {
        const today = new Date();
        const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const checkOutD = checkOutDate.innerText
        const Difference_In_Time = currentDate.getTime() - checkOutD.getTime();
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

       const daysLeftTilOverdue = document.createElement('ul')
       daysLeftTilOverdue.innerText = Difference_In_Days

       const daysLeftList = document.querySelector('.days-left-list')

       daysLeftList.appendChild(daysLeftTilOverdue)
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

   const bookList = document.querySelector('.checkedout-books');
   bookList.appendChild(addedBook);

   fetch(checkedOutBooksURL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(checkedOutBook)})
}


returnBookButton.addEventListener('click', returnBook())
function returnBook(){
    checkedOutBook.remove();

    fetch(`${checkedOutBooksURL}/${CheckedOutBook.Id}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'}
    })
}