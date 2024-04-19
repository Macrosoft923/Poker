// トランプデータの作成
let playing_cards = [
    { src: 'playing_cards/Playing_card_club_A.jpg', msg: 'A♧' },
    { src: 'playing_cards/Playing_card_club_2.jpg', msg: '2♧' },
    { src: 'playing_cards/Playing_card_club_3.jpg', msg: '3♧' },
    { src: 'playing_cards/Playing_card_club_4.jpg', msg: '4♧' },
    { src: 'playing_cards/Playing_card_club_5.jpg', msg: '5♧' },
    { src: 'playing_cards/Playing_card_club_6.jpg', msg: '6♧' },
    { src: 'playing_cards/Playing_card_club_7.jpg', msg: '7♧' },
    { src: 'playing_cards/Playing_card_club_8.jpg', msg: '8♧' },
    { src: 'playing_cards/Playing_card_club_9.jpg', msg: '9♧' },
    { src: 'playing_cards/Playing_card_club_10.jpg', msg: '10♧' },
    { src: 'playing_cards/Playing_card_club_J.jpg', msg: 'J♧' },
    { src: 'playing_cards/Playing_card_club_K.jpg', msg: 'K♧' },
    { src: 'playing_cards/Playing_card_club_Q.jpg', msg: 'Q♧' },
    { src: 'playing_cards/Playing_card_diamond_A.jpg', msg: 'A♢' },
    { src: 'playing_cards/Playing_card_diamond_2.jpg', msg: '2♢' },
    { src: 'playing_cards/Playing_card_diamond_3.jpg', msg: '3♢' },
    { src: 'playing_cards/Playing_card_diamond_4.jpg', msg: '4♢' },
    { src: 'playing_cards/Playing_card_diamond_5.jpg', msg: '5♢' },
    { src: 'playing_cards/Playing_card_diamond_6.jpg', msg: '6♢' },
    { src: 'playing_cards/Playing_card_diamond_7.jpg', msg: '7♢' },
    { src: 'playing_cards/Playing_card_diamond_8.jpg', msg: '8♢' },
    { src: 'playing_cards/Playing_card_diamond_9.jpg', msg: '9♢' },
    { src: 'playing_cards/Playing_card_diamond_10.jpg', msg: '10♢' },
    { src: 'playing_cards/Playing_card_diamond_J.jpg', msg: 'J♢' },
    { src: 'playing_cards/Playing_card_diamond_K.jpg', msg: 'K♢' },
    { src: 'playing_cards/Playing_card_diamond_Q.jpg', msg: 'Q♢' },
    { src: 'playing_cards/Playing_card_heart_A.jpg', msg: 'A♡' },
    { src: 'playing_cards/Playing_card_heart_2.jpg', msg: '2♡' },
    { src: 'playing_cards/Playing_card_heart_3.jpg', msg: '3♡' },
    { src: 'playing_cards/Playing_card_heart_4.jpg', msg: '4♡' },
    { src: 'playing_cards/Playing_card_heart_5.jpg', msg: '5♡' },
    { src: 'playing_cards/Playing_card_heart_6.jpg', msg: '6♡' },
    { src: 'playing_cards/Playing_card_heart_7.jpg', msg: '7♡' },
    { src: 'playing_cards/Playing_card_heart_8.jpg', msg: '8♡' },
    { src: 'playing_cards/Playing_card_heart_9.jpg', msg: '9♡' },
    { src: 'playing_cards/Playing_card_heart_10.jpg', msg: '10♡' },
    { src: 'playing_cards/Playing_card_heart_J.jpg', msg: 'J♡' },
    { src: 'playing_cards/Playing_card_heart_K.jpg', msg: 'K♡' },
    { src: 'playing_cards/Playing_card_heart_Q.jpg', msg: 'Q♡' },
    { src: 'playing_cards/Playing_card_spade_A.jpg', msg: 'A♤' },
    { src: 'playing_cards/Playing_card_spade_2.jpg', msg: '2♤' },
    { src: 'playing_cards/Playing_card_spade_3.jpg', msg: '3♤' },
    { src: 'playing_cards/Playing_card_spade_4.jpg', msg: '4♤' },
    { src: 'playing_cards/Playing_card_spade_5.jpg', msg: '5♤' },
    { src: 'playing_cards/Playing_card_spade_6.jpg', msg: '6♤' },
    { src: 'playing_cards/Playing_card_spade_7.jpg', msg: '7♤' },
    { src: 'playing_cards/Playing_card_spade_8.jpg', msg: '8♤' },
    { src: 'playing_cards/Playing_card_spade_9.jpg', msg: '9♤' },
    { src: 'playing_cards/Playing_card_spade_10.jpg', msg: '10♤' },
    { src: 'playing_cards/Playing_card_spade_J.jpg', msg: 'J♤' },
    { src: 'playing_cards/Playing_card_spade_K.jpg', msg: 'K♤' },
    { src: 'playing_cards/Playing_card_spade_Q.jpg', msg: 'Q♤' }
];

// 最初のデータを表示しておく
let mainFlame = document.querySelector('#cards');
let cardList = document.createElement('ul');
for (let i = 0; i < 5; i++) {
    let mainCard = document.createElement('img');
    let index = Math.floor(Math.random() * 52);
    mainCard.setAttribute('src', playing_cards[index].src);
    mainCard.setAttribute('alt', playing_cards[index].msg);

    let mainMsg = document.createElement('p');
    mainMsg.innerText = mainCard.alt;

    let cardItem = document.createElement('li');
    cardItem.appendChild(mainCard);
    cardItem.appendChild(mainMsg);
    cardList.appendChild(cardItem);
}
mainFlame.appendChild(cardList);

// // サムネイル画像の表示
// let thumbFlame = document.querySelector('#gallery .thumb');
// for (let i = 0; i < playing_cards.length; i++) {
//     let thumbImage = document.createElement('img');
//     thumbImage.setAttribute('src', playing_cards[i].src);
//     thumbImage.setAttribute('alt', playing_cards[i].msg);
//     thumbFlame.insertBefore(thumbImage, null);
// }

// // クリックした画像をメインにする
// thumbFlame.addEventListener('click', function (event) {
//     if (event.target.src) {
//         mainImage.src = event.target.src;
//         mainMsg.innerText = event.target.alt;
//     }
// });
