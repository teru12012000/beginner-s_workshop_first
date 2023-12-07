const battleBtn = document.getElementsByClassName("btn")
const resultBox = document.getElementById("result")

const resultList = ["勝ち", "負け", "あいこ"]

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
            resultBox.textContent = "ぽん"
            await sleep(1000)
            const resultIndex = randomNum()
            resultBox.textContent = resultList[resultIndex]
            isEvented = false
        } else {
            return
        }
    })
}
