//----------------
//Countdown Timer
//----------------

//document.ready
(function() {

    
    //focuses on load
    document.querySelector("#timerName").focus();

    $('form').on('submit', function (e) {
        //stops auto refreshing
        e.preventDefault();

        //disable set button
        document.querySelector("input[type=submit]").disabled = true;

        //shows cancel button
        document.querySelector("#cancel").style.display="block";

        //get timer name and save it
        const $timerName = $('input[type=text]');
        const timerName = $timerName.val();
        // console.log(`Name of Timer: ${timerName}`); 

        //get minutes and seconds and save it
        const inputMinutes = document.querySelector('#minutesInput').value;
        const inputSeconds = document.querySelector('#secondsInput').value;

        console.log(`Timer length: ${inputMinutes} minute`);
        console.log(`Timer length: ${inputSeconds} seconds`);

        //change inputs from string to number
        const numMinutes = parseInt(inputMinutes);
        const numSeconds = parseInt(inputSeconds);
        //setup variable to calculate time remaining
        let totalSeconds = numMinutes*60 + numSeconds;
        console.log('total seconds: '+totalSeconds);
        let remainingMinutes = Math.floor(totalSeconds / 60);
        console.log(remainingMinutes);
        let remainingSeconds = Math.floor(totalSeconds % 60);
        console.log(remainingSeconds);


        //Display Timer Name on page
        if(timerName === ""){
            document.getElementById('displayTimerName').innerHTML=`Timer name: ???`;
            document.getElementById('displaySassyRemark').innerHTML=`Too lazy to name your timer?`;
        }else{
            document.getElementById('displayTimerName').innerHTML=timerName;
        }

        const checkTime = () => {
            if (totalSeconds === 0) {
                document.querySelector('#minutes').innerHTML = 0;
                document.querySelector('#seconds').innerHTML = 0;
                document.querySelector('#minutes').classList.add('red');
                document.querySelector('#seconds').classList.add('red');
                document.querySelector('#completed').innerHTML = "Complete!";
            }else{
                if(totalSeconds <= 10){
                    document.querySelector('#minutes').classList.add('red');
                    document.querySelector('#seconds').classList.add('red');
                }
                //recalculate total minutes
                remainingMinutes = Math.floor(totalSeconds / 60);
                remainingSeconds = Math.floor(totalSeconds % 60);
                //update timer on screen
                document.querySelector('#minutes').innerHTML = remainingMinutes;
                document.querySelector('#seconds').innerHTML = remainingSeconds;
                //decrease remaining time for one second
                totalSeconds--;
            }
        }

        $('#cancel').on('click', function (e) {
            console.log("cancel button clicked")
            clearInterval(myTimer);
            document.querySelector('#minutes').innerHTML = "--";
            document.querySelector('#seconds').innerHTML = "--";
            document.querySelector('#minutes').classList.remove('red');
            document.querySelector('#seconds').classList.remove('red');
            document.querySelector('#displayTimerName').innerHTML = `Countdown Timer`;
            document.querySelector('#completed').innerHTML = "";
            //jQuery version
            // $("form")[0].reset();
            document.querySelector("form").reset();
            document.querySelector("input[type=submit]").disabled = false;
        });
    
        //Runs checkTime every second
        const myTimer = setInterval(checkTime, 1000);

    });
})();








 // const set = document.querySelector(input[type=submit]);
    // set.addEventListener('submit', function (e) {
    //     e.preventDefault();
    //     console.log('clicked submit');
    // })