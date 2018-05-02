$('document').ready(function(){
    $('button#addItem').click(function(){
        //getting the data from input
        var inputText = $('#todoData').val();
        if(inputText.length == 0){
            alert('please write something');
        }else{
            //add input data to list
        }
    });

    $('ul li').click(function(){
        $('li.list-group-item').toggleClass('closed');
    });
})
