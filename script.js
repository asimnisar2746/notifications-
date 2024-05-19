let markRead = document.querySelector(".hover1");
let unreadNots = document.querySelectorAll(".unread");


markRead.addEventListener("click", function(){
    unreadNots.forEach(function(unread){
        unread.style.backgroundColor = 'white';
    })
})

unreadNots.forEach(function(not){
    not.addEventListener('click', function(){
        not.style.backgroundColor = 'white';
    })
})