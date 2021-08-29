document.getElementById('border').addEventListener('click',function(){
    const border=document.getElementById('friend-container');
    border.style.border='3px solid green';
});
function backgroung(){
    const players=document.getElementsByClassName('player');
    for(const player of players){
        player.style.background='red';
    }
};
document.getElementById('add-friend').addEventListener('click',function(){
    const friendcontainer=document.getElementById('friend-container');
    const div=document.createElement('div');
    div.classList.add('player');
    div.innerHTML=` <h2>player-3</h2>
    <p>Lorem, ipsum.</p>`;
    friendcontainer.appendChild(div);

})