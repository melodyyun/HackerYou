//listen for submit on form ID:input
    //enter or submit will fire submit

//This is a document ready
// $(function(){...});

$(document).ready(function () {
    //auto focus upon page load
    $('input[type=text').focus();

 //---------------------
//EVENT LISTENER SUBMIT
//----------------------
    $('form').on('submit', function(e){
        //by default when you submit a form is will refresh the page
        //e = event
        e.preventDefault();  //e.preventDefault will stop the page from refreshing on submit
        // console.log('form was submitted')  // check to make sure form was submitted

        const $input = $('input[type=text]');//use $name for jQuery 

        
        const todo = $input.val(); // saving string that was typed when submit is fired
        // console.log(todo); // check to make sure the string is saved

        //only add item to list if variable is not empty
        //if not empty add to list (ul)
        console.log(todo.trim());
        if(todo.length > 0 && todo.trim !== ""){ // BONUS what to do if people add spaces
            //create variable that holds new HTML
            const item = `
                <li>
                    <span class="check todo"></span>${todo}
                    <i class="fa fa-times"></i>
                </li>`;
            //add const item into the ul 
            $('ul').append(item);
            //clear text inside input after submit is clicked
            $input.val('');
            // this.reset(); //vanilla JavaScript way of resetting
        }else{
            //show error message 
            $('#error').show();
        }
        $('ul').sortable();
    });

//----------------------------------
//EVENT LISTENER CLICK ON CHECK BOX
//----------------------------------

//listen for click on li
    $('ul').on('click', 'li', function(){  // select ul first because li doesn't exist at page load
        //swap out todo class for done class
        //add class completed to the li

        //toggle class completed && todo and done 
        $(this).toggleClass('completed'); //li wouldn't work because it will select all the li(s)
        //this refers to the li we clicked on
        $(this).find('.check').toggleClass('todo done');
        $('this').appendTo($('ul'));
    });

//----------------------------------
//EVENT LISTENER CLICK ON CLICK of i
//----------------------------------

//listen for click on i to remove item
    $('ul').on('click', '.fa-times', function(){
        //grab li and remove it from the list
        $(this).parent().remove();
    });
    
});
