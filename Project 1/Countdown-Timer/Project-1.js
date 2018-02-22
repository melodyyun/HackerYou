//----------------
//Countdown Timer
//----------------

//document.ready
(function() {
    //focuses on load 
    document.querySelector("#timerName").focus();

    //when form is submitted...
    $('form').on('submit', function (e) {
        //stops auto refreshing
        e.preventDefault();

        //disable set button once it has been pressed
        document.querySelector("input[type=submit]").disabled = true;

        //shows cancel button once timer starts
        document.querySelector("#cancel").style.display="block";

        //get timer name and save it
        const $timerName = $('input[type=text]');
        const timerName = $timerName.val();

        //get hours, minutes, and seconds and save it
        const inputHours = document.querySelector('#hoursInput').value;
        const inputMinutes = document.querySelector('#minutesInput').value;
        const inputSeconds = document.querySelector('#secondsInput').value;

        //change inputs from string to number
        const numHours = parseInt(inputHours);
        const numMinutes = parseInt(inputMinutes);
        const numSeconds = parseInt(inputSeconds);

        //setup variable to calculate time remaining
        let totalSeconds = numHours*3600 + numMinutes*60 + numSeconds;
        let remainingHours = Math.floor(totalSeconds / 3600);
        let remainingMinutes = Math.floor((totalSeconds%3600)/ 60);
        let remainingSeconds = Math.floor(totalSeconds % 60);

        //Display Timer Name on page
        if(timerName === ""){
            document.getElementById('displayTimerName').innerHTML=`Timer name: ???`;
            document.getElementById('displaySassyRemark').innerHTML=`Too lazy to name your timer?`;
        }else{
            document.getElementById('displayTimerName').innerHTML=timerName;
        }

        //--------------------
        //logic to check time
        //--------------------
        const checkTime = () => {
            if (totalSeconds === 0) {
                document.querySelector('#hours').innerHTML = 0;
                document.querySelector('#minutes').innerHTML = 0;
                document.querySelector('#seconds').innerHTML = 0;
                document.querySelector('#completed').innerHTML = "Complete!";
            }else{
                if(totalSeconds <= 10){
                    document.querySelector('#hours').classList.add('red');
                    document.querySelector('#minutes').classList.add('red');
                    document.querySelector('#seconds').classList.add('red');
                }
                //recalculate total minutes
                remainingHours = Math.floor(totalSeconds / 3600);
                remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
                remainingSeconds = Math.floor(totalSeconds % 60);

                //update timer on screen
                document.querySelector('#hours').innerHTML = remainingHours;
                document.querySelector('#minutes').innerHTML = remainingMinutes;
                document.querySelector('#seconds').innerHTML = remainingSeconds;
                //decrease remaining time for one second
                totalSeconds--;
            }
        }

        //--------------
        //Cancel button
        //--------------
        $('#cancel').on('click', function (e) {
            console.log("cancel button clicked")
            clearInterval(myTimer);
            document.querySelector('#hours').innerHTML = "--";
            document.querySelector('#minutes').innerHTML = "--";
            document.querySelector('#seconds').innerHTML = "--";
            document.querySelector('#hours').classList.remove('red');
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