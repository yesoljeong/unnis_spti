// result page
const pic = document.querySelector('#pic');
const title = document.querySelector('#title');
const pName = document.querySelector('#pname');
const desc = document.querySelector('#desc');

const reItemPic = document.querySelector('#re_item_pic')
const itemTitle = document.querySelector('#item')
const itemDesc = document.querySelector('#item_desc')
const reCharacterPic = document.querySelector('#re_character_pic')
const characterTitle = document.querySelector('#character')
const characterDesc = document.querySelector('#character_desc')

// alert('당신의 STPI = ' + getParam("spti"));
console.log(getParam("spti"));
console.log(getParam("gender"));

$.ajax({
    type: "POST",
    url: `https://unnis.yonghochoi.com/result`,
    data: JSON.stringify({
        "spti": getParam("spti"),
        "gender": getParam("gender")
    }),
    contentType: "text/plain",
    dataType: "json",
    success: function (response) {
        console.log(response)

        const data = response.body

        // MAIN INFO
        pic.src = data.pic
        title.textContent = data.title
        pName.textContent = data.name

        for (let i = 0; i < data.desc.length; i++) {

            const newLi = document.createElement('li'); // test.length만큼 li를 만든다 
            desc.appendChild(newLi); // desc자식요소로 li를 넣는다 
            desc.children[i].textContent = data.desc[i]
        }

        // SUB INFO
        itemTitle.textContent = data.recommendItem.name
        reItemPic.src = data.recommendItem.pic
        itemDesc.textContent = data.recommendItem.desc
        characterTitle.textContent = data.recommendCharacter.name
        reCharacterPic.src = data.recommendCharacter.pic
        characterDesc.textContent = data.recommendCharacter.desc

    }

});

// url 에서 parameter 추출

function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";

    params = params.split("&");

    for (var i = 0; i < params.length; i++) {

        temp = params[i].split("=");
        if ([temp[0]] == sname) {
            sval = temp[1];
        }
    }

    return sval;

}