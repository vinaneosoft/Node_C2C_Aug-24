class Book{
    bookId;bookName;bookPrice;bookImage

    constructor(id=0,name="abc",price=0){
        this.bookId=id;
        this.bookName=name;
        this.bookPrice=price;
    }
    // if 10% discount on all books
    getDiscountPrice(){
        return this.bookPrice-this.bookPrice*0.1
    }
}

let books=[
    new Book(1, "Java Tech", 560),
    new Book(3, "Java Easy Way", 460),
    new Book(2, "Learn Python", 700.45),
    new Book(4, "Basics of Web", 340),
    new Book(),
    new Book(7,"Unit Testing Learning")
]

books.forEach(book=>console.log(book))
books.forEach(book=>console.log(Math.round(book.getDiscountPrice())))