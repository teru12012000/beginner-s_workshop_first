const btnDom = document.getElementsByClassName("btn")
const imgDom = document.getElementById("js-img")
const resultDom = document.getElementById("resultBox")

const picturePath = [
    "../images/gu-enemy.png",
    "../images/choki-enemy.png",
    "../images/pa-enemy.png",
]

const judge = [
    ["あいこです", "勝ちです", "負けです"],
    ["負けです", "あいこです", "勝ちです"],
    ["勝ちです", "負けです", "あいこです"],
]

let isWait = false

const btnLength = btnDom.length

const randomNum = () => {
    return Math.floor(Math.random() * 3)
}

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

for (let i = 0; i < btnLength; i++) {
    btnDom[i].addEventListener("click", async () => {
        if (!isWait) {
            isWait = true
            resultDom.textContent = "じゃんけん"
            imgDom.src = "../images/gu-enemy.png"
            await sleep(1000)
            resultDom.textContent = "ぽん！！"
            const randomIndex = randomNum()
            imgDom.src = picturePath[randomIndex]
            await sleep(1000)
            alert(judge[i][randomIndex])
            imgDom.src = "../images/enemy.jpeg"
            resultDom.textContent = ""
            isWait = false
        } else {
            return
        }
    })
}
