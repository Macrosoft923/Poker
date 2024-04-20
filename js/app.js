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

/* イベント処理 ***************/
// ポーカーを開始するボタンを押したとき
button.addEventListener('click', function () {
    // カードオブジェクトの定義
    let cards = [];

    // ボタンを非表示
    button.style.display = 'none';

    // 未ソートのカードを表示
    unsortedCards.style.display = 'block';
    unsortedList.style.display = 'block';

    // cards = getTestCards();
    cards = getCards();
    displayCards(unsortedList, cards);

    // 1.0秒後にカードを並び替える
    setTimeout(() => {
        // 未ソートのカードを非表示
        unsortedCards.style.display = 'none';
        unsortedList.style.display = 'none';

        // ソート済みのカードを表示
        sortedCards.style.display = 'block';
        sortedList.style.display = 'block';

        sortCards(cards);
        displayCards(sortedList, cards);

        // 0.5秒後に最終的な結果のメッセージ
        setTimeout(() => {
            // ソート済みのカードを非表示
            // sortedCards.style.display = 'none';
            // sortedList.style.display = 'none';

            // 結果の判定
            getResult(cards);

            // ボタンを表示
            // button.style.display = 'block';
        }, 500);
    }, 1000);
});

/* 関数定義 ************************/
// テスト用のカードを取得する
function getTestCards() {
    let cards = [];
    let random = Math.floor(Math.random() * 9);
    for (let i = 0; i < 5; i++) {
        let row = Math.floor(Math.random() * 4);
        let column = random + i;
        cards.push({ suit: row, number: column });
    }
    return cards;
}

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
        if (a.number === b.number) {
            return a.suit - b.suit;
        }
        return a.number - b.number;
    });
}

// カードを表示する
function displayCards(list, cards) {
    let items = list.querySelectorAll('li');
    for (let i = 0; i < 5; i++) {
        let pokerHand = document.createElement('img');
        pokerHand.setAttribute('src', playing_cards[cards[i].suit][cards[i].number].src);
        pokerHand.setAttribute('alt', playing_cards[cards[i].suit][cards[i].number].msg);

        let cardMsg = document.createElement('p');
        cardMsg.innerText = pokerHand.alt;

        let cardItem = document.createElement('li');
        items[i].insertBefore(pokerHand, null);
        items[i].insertBefore(cardMsg, null);
    }
}

// 結果の判定
function getResult(cards) {
    let suits = cards.map(card => card.suit);
    let values = cards.map(card => card.number);

    let countMap = new Map();
    values.forEach(value => {
        let count = countMap.get(value) || 0;
        countMap.set(value, count + 1);
    });

    let countPair = 0;
    let countTrio = 0;
    let countQuartet = 0;
    countMap.forEach(element => {
        if (element === 2) {
            countPair++;
        } else if (element === 3) {
            countTrio++;
        } else if (element === 4) {
            countQuartet++;
        }
    });

    function isStraightFlush(values, suits) {
        if (isStraight(values) && isFlush(suits)) {
            return true;
        }
        return false;
    }

    function isQuads(countQuartet) {
        if (countQuartet === 1) {
            return true;
        }
        return false;
    }

    function isFullHouse(countPair, countTrio) {
        if (isOnePair(countPair) && isTrips(countTrio)) {
            return true;
        }
        return false;
    }

    function isFlush(suits) {
        for (let i = 1; i < 5; i++) {
            if (suits[i] !== suits[i - 1]) {
                return false;
            }
        }
        return true;
    }

    function isStraight(values) {
        for (let i = 1; i < 4; i++) {
            if (values[i] !== values[i - 1] + 1) {
                return false;
            }
        }
        return true;
    }

    function isTrips(countTrio) {
        if (countTrio === 1) {
            return true;
        }
        return false;
    }

    function isTwoPair(countPair) {
        if (countPair === 2) {
            return true;
        }
        return false;
    }

    function isOnePair(countPair) {
        if (countPair === 1) {
            return true;
        }
        return false;
    }

    if (isStraightFlush(values, suits)) {
        alert('ストレートフラッシュ');
    } else if (isQuads(countQuartet)) {
        alert('フォー・オブ・ア・カインド');
    } else if (isFullHouse(countPair, countTrio)) {
        alert('フルハウス');
    } else if (isFlush(suits)) {
        alert('フラッシュ');
    } else if (isStraight(values)) {
        alert('ストレート');
    } else if (isTrips(countTrio)) {
        alert('スリー・オブ・ア・カインド');
    } else if (isTwoPair(countPair)) {
        alert('ツーペア');
    } else if (isOnePair(countPair)) {
        alert('ワンペア');
    } else {
        alert('ハイカード');
    }
}