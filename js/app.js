// トランプデータの作成
let playing_cards = [
    { src: 'playing_cards/Playing_card_club_2.jpg', msg: '2♧' },
    { src: 'playing_cards/Playing_card_club_3.jpg', msg: '3♧' },
    { src: 'playing_cards/Playing_card_club_4.jpg', msg: '4♧' },
    { src: 'playing_cards/Playing_card_club_5.jpg', msg: '5♧' },
    { src: 'playing_cards/Playing_card_club_6.jpg', msg: '6♧' }
];

// 最初のデータを表示しておく
let mainImage = document.createElement('jpg');
mainImage.setAttribute('src', playing_cards[0].src);
mainImage.setAttribute('alt', playing_cards[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < playing_cards.length; i++) {
    let thumbImage = document.createElement('jpg');
    thumbImage.setAttribute('src', playing_cards[i].src);
    thumbImage.setAttribute('alt', playing_cards[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function (event) {
    if (event.target.src) {
        mainImage.src = event.target.src;
        mainMsg.innerText = event.target.alt;
    }
});
