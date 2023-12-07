const battleBtn = document.getElementsByClassName("btn")
const resultBox = document.getElementById("result")

const resultList = ["👊", "✌️", "✋"]
const judge = [
    ["あいこです", "勝ちです", "負けです"],
    ["負けです", "あいこです", "勝ちです"],
    ["勝ちです", "負けです", "あいこです"],
]

const btnLength = battleBtn.length

//連打防止判定の変数
let isEvented = false

//0~2の乱数生成コード
const randomNum = () => {
    return Math.floor(Math.random() * 3)
}

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

for (let i = 0; i < btnLength; i++) {
    battleBtn[i].addEventListener("click", async () => {
        if (!isEvented) {
            isEvented = true
            resultBox.textContent = "じゃんけん"
            await sleep(1000)
            const resultIndex = randomNum()
            resultBox.textContent = resultList[resultIndex]
            await sleep(1000)
            alert(judge[i][resultIndex])
            isEvented = false
            resultBox.textContent = "ボタンをクリックしてみてね！"
        } else {
            return
        }
    })
}
