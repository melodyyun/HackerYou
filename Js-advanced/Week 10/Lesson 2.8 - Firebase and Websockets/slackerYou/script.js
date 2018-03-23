const chatApp ={};

chatApp.config = () => {
    //firebase initialization
    const config = {
        apiKey: "AIzaSyBSw1TSiBh2DHhREDPxl4yJMX5Q2907YU0",
        authDomain: "slackeryou-a6638.firebaseapp.com",
        databaseURL: "https://slackeryou-a6638.firebaseio.com",
        projectId: "slackeryou-a6638",
        storageBucket: "",
        messagingSenderId: "1077760232539"
    };
    firebase.initializeApp(config);
    //console.log(firebase); //use to see all methods in firebase
    //getting reference to firebase database
    chatApp.database = firebase.database(); //database is a method
    //getting reference to chat object in database
    chatApp.chat = chatApp.database.ref(`/chat`);
    
};

chatApp.getWeather = () => {
    $.ajax({
        url: 'http://api.wunderground.com/api/cdc4cff5c910d710/conditions/q/zmw:00000.176.71508.json',
        method: 'GET',
        dataType: 'json'
    }).then((res)=>{
        console.log(res);
    });
};

chatApp.init = () => {
    chatApp.getWeather();

    // ADD MESSAGE CODE
    //------------------
    // on form submission
    $('.chat').on('submit', function (e) {
        e.preventDefault();
        //save input from form
        const message = {
            name: chatApp.nameField.val(),
            text: chatApp.messageField.val(),
        };
        console.log(message); 
        //pushing to database
        chatApp.chat.push(message);
        chatApp.messageField.val("");
    });

    //listen to changes in firebase database, listenining to the chat reference to see if anything is added
    //limited to 10 messages
    //limitToLast is only for firebase
    //child_added is only for firebase
    chatApp.chat.limitToLast(10).on('child_added', function (message) {
        const id = message.key;
        const data = message.val();
        const text = data.text;
        //name is optional
        const name = data.name || 'Unknown';
        const li = `<li>
                        <strong>${name}</strong>
                        <p>${text}</p>
                        <button class="delete" id=${id}>
                            <i class="fas fa-times-circle"></i>
                        </button>
                    </li>`;

        //adds new message to page
        chatApp.messageList.append(li);
        //always scroll to the bottom;
        chatApp.messageList[0].scrollTop = chatApp.messageList[0].scrollHeight;
    });

    // REMOVE MESSAGE CODE
    //---------------------
    //don't use $('.delete').on('click', function () {};
    //above code won't work because the class of .delete on the button doesn't exist at the beginning when the DOM is being loaded
    chatApp.messageList.on('click', '.delete', function () {
        const id = $(this).attr('id');
        console.log(id);
        chatApp.database.ref(`/chat/${id}`).remove();
    });

    //listening to the delete of data on firebase
    chatApp.chat.limitToLast(10).on('child_removed', function (message) {
        //get the id of the message being deleted
        const id = message.key;
        //find the message with that id and delete the li closest to it
        //if you don't use closest li then it will only remove the button
        chatApp.messageList.find(`#${id}`).closest('li').remove();
    });
};

$(function () {
    chatApp.config();
    chatApp.messageField = $('#messageInput');
    chatApp.nameField = $('#nameInput');
    chatApp.messageList = $('.messages');
    //init will have all the event handlers
    chatApp.init();
});
//form submit
    //add msg to msg list && add to firebase
    //tell firebase to tell us when database has changed

//listen for click on remove button
    //tell firebase to delete a message

//---------------
// My Firebase
//---------------

// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBCjABuY-DxtIrM86Xl9W40bPux07Wzzw8",
//     authDomain: "melody-chat.firebaseapp.com",
//     databaseURL: "https://melody-chat.firebaseio.com",
//     projectId: "melody-chat",
//     storageBucket: "",
//     messagingSenderId: "1066902135366"
// };
// firebase.initializeApp(config);