// トランプデータの作成
let playing_cards = [
    { src: 'playing_cards/Playing_card_club_2.svg', msg: '2♧' },
    { src: 'playing_cards/Playing_card_club_3.svg', msg: '3♧' },
    { src: 'playing_cards/Playing_card_club_4.svg', msg: '4♧' },
    { src: 'playing_cards/Playing_card_club_5.svg', msg: '5♧' },
    { src: 'playing_cards/Playing_card_club_6.svg', msg: '6♧' }
];

// 最初のデータを表示しておく
let mainImage = document.createElement('svg');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('svg');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function (event) {
    if (event.target.src) {
        mainImage.src = event.target.src;
        mainMsg.innerText = event.target.alt;
    }
});
