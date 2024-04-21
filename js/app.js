/* トランプのカードの定義 ************************/
// トランプのカードの番号と絵柄を設定する配列
let playing_cards = [
    // クラブ
    [
        { src: 'playing_cards/Playing_card_club_A.jpg', msg: 'A♧', cnt: 1 },
        { src: 'playing_cards/Playing_card_club_2.jpg', msg: '2♧', cnt: 1 },
        { src: 'playing_cards/Playing_card_club_3.jpg', msg: '3♧', cnt: 1 },
        { src: 'playing_cards/Playing_card_club_4.jpg', msg: '4♧', cnt: 1 },
        { src: 'playing_cards/Playing_card_club_5.jpg', msg: '5♧', cnt: 1 },
        { src: 'playing_cards/Playing_card_club_6.jpg', msg: '6♧', cnt: 1 },
        { src: 'playing_cards/Playing_card_club_7.jpg', msg: '7♧', cnt: 1 },
        { src: 'playing_cards/Playing_card_club_8.jpg', msg: '8♧', cnt: 1 },
        { src: 'playing_cards/Playing_card_club_9.jpg', msg: '9♧', cnt: 1 },
        { src: 'playing_cards/Playing_card_club_10.jpg', msg: '10♧', cnt: 1 },
        { src: 'playing_cards/Playing_card_club_J.jpg', msg: 'J♧', cnt: 1 },
        { src: 'playing_cards/Playing_card_club_Q.jpg', msg: 'Q♧', cnt: 1 },
        { src: 'playing_cards/Playing_card_club_K.jpg', msg: 'K♧', cnt: 1 }
    ],
    // ダイヤ
    [
        { src: 'playing_cards/Playing_card_diamond_A.jpg', msg: 'A♢', cnt: 1 },
        { src: 'playing_cards/Playing_card_diamond_2.jpg', msg: '2♢', cnt: 1 },
        { src: 'playing_cards/Playing_card_diamond_3.jpg', msg: '3♢', cnt: 1 },
        { src: 'playing_cards/Playing_card_diamond_4.jpg', msg: '4♢', cnt: 1 },
        { src: 'playing_cards/Playing_card_diamond_5.jpg', msg: '5♢', cnt: 1 },
        { src: 'playing_cards/Playing_card_diamond_6.jpg', msg: '6♢', cnt: 1 },
        { src: 'playing_cards/Playing_card_diamond_7.jpg', msg: '7♢', cnt: 1 },
        { src: 'playing_cards/Playing_card_diamond_8.jpg', msg: '8♢', cnt: 1 },
        { src: 'playing_cards/Playing_card_diamond_9.jpg', msg: '9♢', cnt: 1 },
        { src: 'playing_cards/Playing_card_diamond_10.jpg', msg: '10♢', cnt: 1 },
        { src: 'playing_cards/Playing_card_diamond_J.jpg', msg: 'J♢', cnt: 1 },
        { src: 'playing_cards/Playing_card_diamond_Q.jpg', msg: 'Q♢', cnt: 1 },
        { src: 'playing_cards/Playing_card_diamond_K.jpg', msg: 'K♢', cnt: 1 }
    ],
    // ハート
    [
        { src: 'playing_cards/Playing_card_heart_A.jpg', msg: 'A♡', cnt: 1 },
        { src: 'playing_cards/Playing_card_heart_2.jpg', msg: '2♡', cnt: 1 },
        { src: 'playing_cards/Playing_card_heart_3.jpg', msg: '3♡', cnt: 1 },
        { src: 'playing_cards/Playing_card_heart_4.jpg', msg: '4♡', cnt: 1 },
        { src: 'playing_cards/Playing_card_heart_5.jpg', msg: '5♡', cnt: 1 },
        { src: 'playing_cards/Playing_card_heart_6.jpg', msg: '6♡', cnt: 1 },
        { src: 'playing_cards/Playing_card_heart_7.jpg', msg: '7♡', cnt: 1 },
        { src: 'playing_cards/Playing_card_heart_8.jpg', msg: '8♡', cnt: 1 },
        { src: 'playing_cards/Playing_card_heart_9.jpg', msg: '9♡', cnt: 1 },
        { src: 'playing_cards/Playing_card_heart_10.jpg', msg: '10♡', cnt: 1 },
        { src: 'playing_cards/Playing_card_heart_J.jpg', msg: 'J♡', cnt: 1 },
        { src: 'playing_cards/Playing_card_heart_Q.jpg', msg: 'Q♡', cnt: 1 },
        { src: 'playing_cards/Playing_card_heart_K.jpg', msg: 'K♡', cnt: 1 }
    ],
    // スペード
    [
        { src: 'playing_cards/Playing_card_spade_A.jpg', msg: 'A♤', cnt: 1 },
        { src: 'playing_cards/Playing_card_spade_2.jpg', msg: '2♤', cnt: 1 },
        { src: 'playing_cards/Playing_card_spade_3.jpg', msg: '3♤', cnt: 1 },
        { src: 'playing_cards/Playing_card_spade_4.jpg', msg: '4♤', cnt: 1 },
        { src: 'playing_cards/Playing_card_spade_5.jpg', msg: '5♤', cnt: 1 },
        { src: 'playing_cards/Playing_card_spade_6.jpg', msg: '6♤', cnt: 1 },
        { src: 'playing_cards/Playing_card_spade_7.jpg', msg: '7♤', cnt: 1 },
        { src: 'playing_cards/Playing_card_spade_8.jpg', msg: '8♤', cnt: 1 },
        { src: 'playing_cards/Playing_card_spade_9.jpg', msg: '9♤', cnt: 1 },
        { src: 'playing_cards/Playing_card_spade_10.jpg', msg: '10♤', cnt: 1 },
        { src: 'playing_cards/Playing_card_spade_J.jpg', msg: 'J♤', cnt: 1 },
        { src: 'playing_cards/Playing_card_spade_Q.jpg', msg: 'Q♤', cnt: 1 },
        { src: 'playing_cards/Playing_card_spade_K.jpg', msg: 'K♤', cnt: 1 }
    ]
];

/* プログラムで使用する変数の設定 ***************/
// プログラムの要素を取得する変数
let button = document.getElementById('button');
let cardsFlame = document.getElementById('cardsFlame');
let unsortedCards = document.getElementById('unsorted');
let sortedCards = document.getElementById('sorted');
let unsortedList = unsortedCards.querySelector('ul');
let sortedList = sortedCards.querySelector('ul');

/* イベント処理 ***************/
// ポーカーを開始するボタンを押したときの処理
button.addEventListener('click', function () {
    // カードオブジェクトを格納する配列
    let cards = [];

    // ボタンを非表示にする
    button.style.display = 'none';

    // 未ソートのカードを表示する
    unsortedCards.style.display = 'block';
    unsortedList.style.display = 'block';

    // カードを取得し、未ソートのリストに表示する
    // cards = getTestCards(playing_cards);
    cards = getCards(playing_cards);
    displayCards(unsortedList, cards);

    // 1.0秒後にカードを並び替える
    setTimeout(() => {
        // 未ソートのカードを非表示にする
        unsortedCards.style.display = 'none';
        unsortedList.style.display = 'none';

        // ソート済みのカードを表示する
        sortedCards.style.display = 'block';
        sortedList.style.display = 'block';

        // カードを並び替え、ソート済みのリストに表示する
        sortCards(cards);
        displayCards(sortedList, cards);

        // 0.5秒後に最終的な結果のメッセージを表示する
        setTimeout(() => {
            // 結果の判定を行い、アラートを表示する
            alert(getResultMsg(cards));
        }, 500);
    }, 1000);
});

/* 関数定義 ************************/
// テスト用のカードを取得する関数
function getTestCards(playing_cards) {
    let cards = [];
    while (cards.length < 5) {
        let row = 0;
        let column = Math.floor(Math.random() * 13);
        if (playing_cards[row][column].cnt === 1) {
            playing_cards[row][column].cnt--;
            cards.push({ suit: row, number: column });
        }
    }
    return cards;
}

// カードを取得する関数
function getCards(playing_cards) {
    let cards = [];
    while (cards.length < 5) {
        let row = Math.floor(Math.random() * 4);
        let column = Math.floor(Math.random() * 13);
        if (playing_cards[row][column].cnt === 1) {
            playing_cards[row][column].cnt--;
            cards.push({ suit: row, number: column });
        }
    }
    return cards;
}

// カードを並び替える関数
function sortCards(cards) {
    cards.sort((a, b) => {
        if (a.number === b.number) {
            return a.suit - b.suit;
        }
        return a.number - b.number;
    });
}

// カードを表示する関数
function displayCards(list, cards) {
    let items = list.querySelectorAll('li');
    for (let i = 0; i < 5; i++) {
        let pokerHand = document.createElement('img');
        pokerHand.setAttribute('src', playing_cards[cards[i].suit][cards[i].number].src);
        pokerHand.setAttribute('alt', playing_cards[cards[i].suit][cards[i].number].msg);

        let cardMsg = document.createElement('p');
        cardMsg.innerText = pokerHand.alt;

        items[i].insertBefore(pokerHand, null);
        items[i].insertBefore(cardMsg, null);
    }
}

// 結果の判定を行う関数
function getResult(cards) {
    // カードの絵柄と数字の値を取得する
    let suits = cards.map(card => card.suit);
    let values = cards.map(card => card.number);

    // カード番号の出現回数を数えるためのMapオブジェクト
    let countMap = new Map();
    values.forEach(value => {
        let count = countMap.get(value) || 0;
        countMap.set(value, count + 1);
    });

    // ペア、スリーカード、フォーカードの個数を初期化
    let countPair = 0;
    let countTrio = 0;
    let countQuartet = 0;

    // 各カード番号の出現回数に応じて、ペア、スリーカード、フォーカードの個数をカウントする
    countMap.forEach(element => {
        if (element === 2) {
            countPair++;
        } else if (element === 3) {
            countTrio++;
        } else if (element === 4) {
            countQuartet++;
        }
    });

    // ストレートフラッシュを判定する関数
    function isStraightFlush(values, suits) {
        if (isStraight(values) && isFlush(suits)) {
            return true;
        }
        return false;
    }

    // フォー・オブ・ア・カインドを判定する関数
    function isQuads(countQuartet) {
        if (countQuartet === 1) {
            return true;
        }
        return false;
    }

    // フルハウスを判定する関数
    function isFullHouse(countPair, countTrio) {
        if (isOnePair(countPair) && isTrips(countTrio)) {
            return true;
        }
        return false;
    }

    // フラッシュを判定する関数
    function isFlush(suits) {
        for (let i = 1; i < 5; i++) {
            if (suits[i] !== suits[i - 1]) {
                return false;
            }
        }
        return true;
    }

    // ストレートを判定する関数
    function isStraight(values) {
        for (let i = 1; i < 4; i++) {
            if (values[i] !== values[i - 1] + 1) {
                return false;
            }
        }
        return true;
    }

    // スリー・オブ・ア・カインドを判定する関数
    function isTrips(countTrio) {
        if (countTrio === 1) {
            return true;
        }
        return false;
    }

    // ツーペアを判定する関数
    function isTwoPair(countPair) {
        if (countPair === 2) {
            return true;
        }
        return false;
    }

    // ワンペアを判定する関数
    function isOnePair(countPair) {
        if (countPair === 1) {
            return true;
        }
        return false;
    }

    // 役の強さに応じて結果を返す
    if (isStraightFlush(values, suits)) {
        return 'ストレートフラッシュ';
    } else if (isQuads(countQuartet)) {
        return 'フォー・オブ・ア・カインド';
    } else if (isFullHouse(countPair, countTrio)) {
        return 'フルハウス';
    } else if (isFlush(suits)) {
        return 'フラッシュ';
    } else if (isStraight(values)) {
        return 'ストレート';
    } else if (isTrips(countTrio)) {
        return 'スリー・オブ・ア・カインド';
    } else if (isTwoPair(countPair)) {
        return 'ツーペア';
    } else if (isOnePair(countPair)) {
        return 'ワンペア';
    } else {
        return 'ハイカード';
    }
}

// 最終的な結果のメッセージを生成する関数
function getResultMsg(cards) {
    return 'ポーカー・ハンドは「' + getResult(cards) + '」でした';
}