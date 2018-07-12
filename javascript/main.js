;(function(){
    var cards = [
        '<header class="header">kokoko</header>',
        '<footer class="footer" onclick = "addCard()"> Add card...</footer>'
    ];
    var defaultCard = ' <div class="card"></div>';
    var group = document.getElementsByClassName('group')[0];
    group.innerHTML = cards;

    window.addCard = function(){
        cards.splice(cards.length - 1, 0 , defaultCard);
        group.innerHTML = cards;
    };

})()
