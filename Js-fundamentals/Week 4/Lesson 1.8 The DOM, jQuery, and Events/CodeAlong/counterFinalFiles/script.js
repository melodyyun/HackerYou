
const initiate = () => {
    //create counter variable
    let counter = 0;
    //create goal variable (get from user, input type text)
    let goal;

    //tell your user the goal is reached with check function
    //alert user : console: "You've reached your goal of ---!".
        const check = () => {
            // console.log(typeof counter, typeof goal);
            if (counter === goal) {
                alert(`You reached your goal of ${goal}`);
                $('input[type=text').removeClass('set');
                $('input[type=submit').removeClass('submitted');
                $('input[type=text]').val('');
            }
        }
    //increment: add, listen for click, and then add one to the count
        $("#add").on('click', ()=>{
            //update the count
            counter++;
            $("span.counter").text(counter);
            //check if count is equal to goal after each action
            check();
        })
        
    //decrease: subtract, listen for click, and then subtract one from the count
        $("#subtract").on("click", ()=>{
            //update the count
            counter--;
            $("span.counter").text(counter);
            //check if count is equal to goal after each action
            check();
        })

        //(get from user, input type text)
        $('form').on('submit', (event) => {
            //stops page from refreshing
            event.preventDefault();
            // console.log("event", event);
            //value or val() -> can set or get value
            //use Number to turn goal string into a number
            goal = Number($('input[type=text').val());
            console.log(goal);
            $('input[type=text').addClass('set');
            $('input[type=submit').addClass('submitted');
        });


    //reset goal points once goal is reached 
   

}

$(document).ready(()=>{
    // test connecting:
    // console.log("ready");
    initiate();
});