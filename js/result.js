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
// console.log(getParam("spti"));
// console.log(getParam("gender"));

$.ajax({
    type: "POST",
    url: `https://upti-api.unnispick.com/result`,
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

const linkBtns = document.querySelectorAll('.link-btn');
for (var i = 0; i < linkBtns.length; i++) {
    linkBtns[i].addEventListener('click', (e) => {
        const data = {
            category: e.target.dataset.category,
            gender: getParam('gender'),
            spti: getParam('spti'),
        };
        console.log(data);
        window.open(e.target.dataset.url, "_blank");
        $.ajax({
            type: "POST",
            url: "https://upti-api.unnispick.com/stats",
            data: JSON.stringify(data),
            success: function (response) {
                
            }
        });
    });
    linkBtns[i].addEventListener('mouseover', (e) => {
        e.target.style.cursor = "pointer";
    });
};

const shareBtn = document.querySelector('#share_btn');

shareBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const url = document.URL;
    const sharedUrl = document.createElement("textarea");
    sharedUrl.type = 'hidden';
    document.body.appendChild(sharedUrl);
    sharedUrl.value = url;
    sharedUrl.select();
    const isSuccess = document.execCommand('copy');
    document.body.removeChild(sharedUrl);
    if (isSuccess) {
        alert("결과 링크가 복사 되었습니다.");
    } else {
        alert("copy fail");
    }
});

// loading page

const loadingWrap = document.querySelector('.loading_wrap');

// 페이지가 로딩되고 2초 후에 디스플레이가 none으로 변경 되면 됨
setTimeout(function () {
    loadingWrap.classList.add('none')
}, 2000);


// whatsApp 버튼을 누르면 결과 url이 바뀌면서 블랭크 처리
const whatsappA =  document.querySelector('.whatsapp a')
const url = document.URL;
whatsappA.href = `https://api.whatsapp.com/send?phone=&text=${url}`