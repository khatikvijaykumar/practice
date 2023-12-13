const emoju = ["😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","🥰","😗","😙","🥲",
              "😚","🙂","🤗","🤩","🤔","🫡","🤨","😐","😑","😶","🫥","😶‍🌫️","🙄","😏","😣","😥","😮","🤐",
              "😯","😪","😫","🥱","😴","😌","😛","😜","😝","🤤","😒","😓","😔","😕","🫤","🙃","🫠","🤑","🙁",
              "😞","😟","😤","😢","😭","😦","😧","😨","😩","🤯","😬","😮‍💨","😰","😱","🥵","🥶","😳","🤪","😵",
              "😵‍💫","🥴","😠","😡","🤬","😷","🤒","🤕","🤢","🤧","😇","🥳","🥸","🥺","🥹","🤠","🤡","🤥","🫨",
              "🤫","🤭","🫢","🫣","🧐","🤓","😈","👹","👺","💀","☠️","👻","👽","👾","🤖","💩"]
const a =["kesa laga mera joke","aaj dil garden garden ho gaya",
          "dil to pagal hai ha ha ha","gadhari korveya teri abcd oye",
        "toh kese hai aap log","dil se bura lagta hai bhai","Mogambo Khush Hua",
        "Main apna favorite hoon hahaha","Khul ke ro nahi sakogi, toh khul ke has kaise paogi?",
     "Mere paas Maa hai","Jaa Simran, jaa. Jeele apni zindagi","All izz well",
     "Tussi ja rahe ho? Tussi na jao!","Tension lene ka nahi, sirf dene ka",
    "Har team main bas ek hi gunda ho sakta hai aur iss team ka gunda main hoon!",
    "bhai aaj toh tera moye moye ho gaya"]

function getemoja(){
    let emo = emoju[Math.floor
        (Math.random()*emoju.length)]
        
        document.getElementById("emoj").textContent = emo

    let b = a[Math.floor
        (Math.random()*a.length)]
           
        document.getElementById("btnemo").value = b

}
getemoja()