/* トランプのカードの定義 ************************/
// トランプのカードの番号を設定
let playing_cards = [
    [
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
        { src: 'playing_cards/Playing_card_club_Q.jpg', msg: 'Q♧' },
        { src: 'playing_cards/Playing_card_club_K.jpg', msg: 'K♧' }
    ],
    [
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
        { src: 'playing_cards/Playing_card_diamond_Q.jpg', msg: 'Q♢' },
        { src: 'playing_cards/Playing_card_diamond_K.jpg', msg: 'K♢' }
    ],
    [
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
        { src: 'playing_cards/Playing_card_heart_Q.jpg', msg: 'Q♡' },
        { src: 'playing_cards/Playing_card_heart_K.jpg', msg: 'K♡' }
    ],
    [
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
        { src: 'playing_cards/Playing_card_spade_Q.jpg', msg: 'Q♤' },
        { src: 'playing_cards/Playing_card_spade_K.jpg', msg: 'K♤' }
    ]
];

/* プログラムで使用する変数の設定 ***************/
// プログラムの要素を取得
let button = document.getElementById('button');
let cardsFlame = document.getElementById('cardsFlame');
let unsortedCards = document.getElementById('unsorted');
let sortedCards = document.getElementById('sorted');
let unsortedList = unsortedCards.querySelector('ul');
let sortedList = sortedCards.querySelector('ul');

// カードオブジェクトの定義
let cards = [];

/* イベント処理 ***************/
// ポーカーを開始するボタンを押したとき
button.addEventListener('click', function () {
    // ボタンを非表示
    button.style.display = 'none';

    // 未ソートのカードを表示
    cardsFlame.style.display = 'block';
    unsortedCards.style.display = 'block';
    unsortedList.style.display = 'block';

    cards = getCards();
    displayCards(unsortedList, cards);

    // ソート済みのカードを表示
    setTimeout(() => {
        sortedCards.style.display = 'block';
        sortedList.style.display = 'block';

        sortCards(cards);
        displayCards(sortedList, cards);
    }, 500);
});

/* 関数定義 ************************/
// カードを取得する
function getCards() {
    let cards = [];
    for (let i = 0; i < 5; i++) {
        let row = Math.floor(Math.random() * 4);
        let column = Math.floor(Math.random() * 13);
        cards.push({ suit: row, number: column });
    }
    return cards;
}

// カードを並び替える
function sortCards(cards) {
    cards.sort((a, b) => {
        if (a.suit === b.suit) {
            return a.number - b.number;
        }
        return a.suit - b.suit;
    });
}

// カードを表示する
function displayCards(list, cards) {
    list.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        let pokerHand = document.createElement('img');
        pokerHand.setAttribute('src', playing_cards[cards[i].suit][cards[i].number].src);
        pokerHand.setAttribute('alt', playing_cards[cards[i].suit][cards[i].number].msg);

        let cardMsg = document.createElement('p');
        cardMsg.innerText = pokerHand.alt;

        let cardItem = document.createElement('li');
        cardItem.insertBefore(pokerHand, null);
        cardItem.insertBefore(cardMsg, null);
        list.insertBefore(cardItem, null);
    }
}