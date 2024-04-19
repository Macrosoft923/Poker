// トランプカードの作成
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

// 最初のカードを表示しておく
let mainFlame = document.querySelector('#cards');
let cardList = document.createElement('ul');
let cards = [];
for (let i = 0; i < 5; i++) {
    let mainCard = document.createElement('img');
    let row = Math.floor(Math.random() * 4);
    let column = Math.floor(Math.random() * 13);
    mainCard.setAttribute('src', playing_cards[row][column].src);
    mainCard.setAttribute('alt', playing_cards[row][column].msg);

    let mainMsg = document.createElement('p');
    mainMsg.innerText = mainCard.alt;

    let cardItem = document.createElement('li');
    cardItem.insertBefore(mainCard, null);
    cardItem.insertBefore(mainMsg, null);
    cardList.insertBefore(cardItem, null);

    cards.push({ suit: row, number: column });
}
mainFlame.appendChild(cardList);

// カードを並び替える
setTimeout(() => {
    cards.sort((a, b) => {
        if (a.suit === b.suit) {
            return a.number - b.number;
        }
        return a.suit - b.suit;
    });

    for (let i = 0; i < 5; i++) {
        let mainCard = document.createElement('img');
        mainCard.setAttribute('src', playing_cards[cards[i].suit][cards[i].number].src);
        mainCard.setAttribute('alt', playing_cards[cards[i].suit][cards[i].number].msg);

        let mainMsg = document.createElement('p');
        mainMsg.innerText = mainCard.alt;

        let cardItem = document.createElement('li');
        cardItem.insertBefore(mainCard, null);
        cardItem.insertBefore(mainMsg, null);
        cardList.insertBefore(cardItem, null);
    }
}, 3000);