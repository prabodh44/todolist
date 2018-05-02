$('document').ready(function(){
    $('button#addItem').click(function(){
        //getting the data from input
        var inputText = $('#todoData').val();
        if(inputText.length == 0){
            alert('please write something');
        }else{
            //add input data to list
            var $li = document.createElement('li');
            var txt = document.createTextNode(inputText);
            $li.appendChild(txt);
            $('li').addClass('list-group-item');

        }
    });

    $('ul').click(function(event){
        if(event.target.tagName === "LI"){
            event.target.classList.toggle('closed');
        }
    });
})
