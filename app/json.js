

$(function () {
    $('#form').submit(function (e) {
        e.preventDefault();
        var book = $('#input').val();
        var apiKey= 'AIzaSyCUbg1h6Ms0FzyoMYfWURaKmmS0leFba4U';

        var url = 'https://www.googleapis.com/books/v1/volumes?' + apiKey + '&q=' + book + '&maxResults=40';
        
        $.getJSON(url,function(book){
            console.log(book);

            $.each(book.items, function (i, value) {
                console.log(value);
                
                $('#result').append(`<div class="col-3"><img allt="Det finns ingen bild." src="${value.volumeInfo.imageLinks.thumbnail}"></div>+
<div class="col-3" class="over"><h2>${value.volumeInfo.title}</h2><h3>Authors:<br>${value.volumeInfo.authors}</h3>
<p class="des"><b>the date od publish:<br></b>${value.volumeInfo.publishedDate}</p></div>                
                `);
    
            });

        });
        
        
    });
    
});