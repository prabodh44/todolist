$('document').ready(function(){
    $('button#addItem').click(function(){
        //getting the data from input
        var inputText = $('#todoData').val();
        if(inputText.length == 0){
            alert('please write something');
        }else{
            var $li = "<li class = 'list-group-item'>" + inputText + " </li>";
            $('ul').append($li);

        }
    });

    $('ul').click(function(event){
        if(event.target.tagName === "LI"){
            event.target.classList.toggle('closed');
        }
    });
})
