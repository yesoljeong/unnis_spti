// result page
const pic = document.querySelector('#pic');
const title = document.querySelector('#title');
const pName = document.querySelector('#pname');
const desc = document.querySelector('#desc');

const reItemPic = document.querySelector('#re_item_pic')
const itemTitle = document.querySelector('#item')
const reCharacterPic = document.querySelector('#re_character_pic')
const characterTitle = document.querySelector('#character')

// alert('당신의 STPI = ' + getParam("spti"));
console.log(getParam("spti"));

$.ajax({
    type: "POST",
    url: "https://unnis.yonghochoi.com/result",
    data: {}, // spti : getParam("spti")
    success: function (response) {    
        console.log(response)

        const data = response.body

        // MAIN INFO
        pic.src = data.pic
        title.textContent = data.title
        pName.textContent = data.name

        for(let i=0; i<desc.length; i++){
            const newLi = document.createElement('li'); // test.length만큼 li를 만든다 
            desc.appendChild(newLi) // desc자식요소로 li를 넣는다
        
            desc.children[i].textContent = desc[i]
        }

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