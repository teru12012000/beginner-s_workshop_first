/*
勝ち、負け、あいこの結果を出力する
*/

//結果出力のDOMをとってくる
const $result_div = document.getElementById("result")
//結果のリストを配列に格納
const resultList = ["勝ち", "負け", "あいこ"]

//0~2の乱数生成コード
const randomNum = () => {
    return Math.floor(Math.random() * 3)
}

//結果出力の関数
const Init = () => {
    //乱数を算出
    const randomIndex = randomNum()
    //乱数を用いて結果出力のDOMに要素を代入する(textContext)
    $result_div.textContent = resultList[randomIndex]
}

//起動時に関数実行
Init()
