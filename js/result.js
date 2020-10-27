// result page

const pic = document.querySelector('#pic');
const title = document.querySelector('#title');
const pName = document.querySelector('#pname');
const desc = document.querySelector('#desc');

const reItemPic = document.querySelector('#re_item_pic')
const itemTitle = document.querySelector('#item')
const reCharacterPic = document.querySelector('#re_character_pic')
const characterTitle = document.querySelector('#character')

console.log(getParam("spti"));
// console.log(name, desc, title, pic, itemTitle,reItemPic, characterTitle, reCharacterPic)

// 마지막문제를 풀면 result 페이지가 로드되도록 해야함
$.ajax({
    type: "POST",
    url: "https://unnis.yonghochoi.com/result",
    data: {spti : getParam("spti")},
    success: function (response) {

        console.log(response)

        const data = response.body

        // MAIN INFO
        pic.src = data.pic
        title.textContent = data.title
        pName.textContent = data.name
        desc.textContent = data.desc

        // SUB INFO
        itemTitle.textContent = data.recommendItem.alias + data.recommendItem.namelo
        characterTitle.textContent = data.recommendCharacter.alias + data.recommendCharacter.name

    }

});

// url 에서 parameter 추출

function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";

    params = params.split("&");

    for (var i = 0; i < params.length; i++) {

        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }

    return sval;

}