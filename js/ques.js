const quesNum = document.querySelector('#ques_num');
const ques = document.querySelector('#ques');
const answer1 = document.querySelector('#answer_1');
const answer2 = document.querySelector('#answer_2');


// api를 여기다가 만들고

const questions = [{
        title: "성별을 알려 주세요",
        answers: [
            `남자`, // E
            `여자` // I 
        ]
    },
    {
        title: "친구와의 약속이 취소됐을 때 나는",
        answers: [
            `"뭐야…ㅡ-ㅡ" 다른 친구에게 연락해서 나오라고 한다.`, // E
            `"올ㅋ 개이득" 혼자 집에서 뒹굴뒹굴 거린다.` // I 
        ]
    },
    {
        title: "예전에 한번 봤던 화장품에 대해서 나는",
        answers: [
            `한 번 써봤지만 느낌을 생생하게 기억한다.`, // E
            `한번 써봤는데 어떻게 알아?` // I 
        ]
    },
    {
        title: "내가 사용하는 화장품이 피부에 좋지 않다고 소문이 났을때는 나는",
        answers: [
            `"나한텐 잘 맞으니깐…" 아랑곳하지 않고 계속 사용한다.`, // E
            `"그래서 요즘 여드름이 나나?" 괜히 피부가 문제가 있는것 처럼 느껴진다` // I 
        ]
    },
    {
        title: "시험기간에 나는",
        answers: [
            `"오늘은 5번까지 공부해야 겠다." 계획대로 차근차근 공부한다.`, // S 
            `"아직 48시간 남았으니 충분하네~ 잠안자고 하면돼" 놀다가 벼락치기 한다.` // N 
        ]
    },
    {
        title: "사람이 많은 엘리베이터에서 방구가 나왔을때",
        answers: [
            `큰 소리로 "헛 기침"을 하며 다른 사람을 쳐다본다.`, // S
            `꾹 참고 집에와서 이불 킥한다.` // N 
        ]
    },
    {
        title: "내가 사용하는 화장품에 대해 친구한테 설명할때는 나는",
        answers: [
            `"그 화장품은 말이야, 사용하기 전에는 어땠고, 사용후에는~"이라고 구체적으로 설명한다.`, // S
            `"그냥 넘 좋아" 하고 단순하게 설명한다.` // N
        ]
    },
    {
        title: "친구가 아프다며 전화가 왔을 때 나는",
        answers: [
            `"약 먹었어?" 라고 물어본다"`, // t 
            `"많이 아프겠다 어떡해 "라며 걱정한다` //f 
        ]
    },
    {
        title: "친구가 시험에 떨어졌다고 연락이 왔을 때 나는",
        answers: [
            `"몇 점 넘어야 하는데? 무슨 시험인데?" 라고 물어본다`, // t 
            `"다음에 잘 볼 수 있을 거야" 라며 격려한다"` //f 
        ]
    },
    {
        title: "오랜만에 정말 괜찮은 화장품을 찾았을때 나는",
        answers: [
            `"이 화장품 진짜 장난아니야, 다들 좀 써봐" 하고 동네방네 추천한다.`, //t 
            `'오~ 이거 좀 괜찮은데..' 라고 혼자 생각한다.` //f 
        ]
    },
    {
        title: "화장품을 고를 때 나는",
        answers: [
            `"역시 이게 짱이지"하고 원래 사용하던 화장품을 선택한다.`, // j 
            `"오 새로운 제품이네"하고 신상을 선택한다.` // p 
        ]
    },
    {
        title: "팀 프로젝트를 할 때 나는",
        answers: [
            `"참여안하면 out" 하고 팀원을 퇴출시킨다.`, // j
            `"사정이 있겠지"하고 봐준다` // p
        ]
    },
    {
        title: "친구가 우리집에 놀러와서 물건을 찾을 때 나는",
        answers: [
            `"그거 왼쪽 서랍 세번째 칸에 있어" 라고 정확히 알고 있다.`, // j
            `"음 책상 쪽 한번 봐봐" 대충은 안다.` //p 
        ]
    }
];

answer1.addEventListener('click', nextQues);
answer2.addEventListener('click', nextQues);

// default page 설정
let pageNum = 0;
const answerArr = [];
upDateQues(pageNum);

function nextQues(e) {
    e.preventDefault();
    pageNum++
    // 답 저장 array

    const answerNum = parseInt(e.target.name)
    answerArr.push(answerNum)

    console.log(answerArr)

    if (pageNum >= questions.length) {

        resultF()

        function resultF() {
            const result = [
                answerArr[1] + answerArr[2] + answerArr[3] > 0 ? "e" : "i",
                answerArr[4] + answerArr[5] + answerArr[6] > 0 ? "s" : "n",
                answerArr[7] + answerArr[8] + answerArr[9] > 0 ? "t" : "f",
                answerArr[10] + answerArr[11] + answerArr[12] > 0 ? "j" : "p",
            ]

            const sptiResult = result[0] + result[1] + result[2] + result[3]

            // 마지막 질문에서 결과 페이지로 넘어가는 if문


            window.location.href = `/result_page.html?spti=${sptiResult}`
            // console.log(`/result_page.html?spti=${sptiResult}`)
        }
    } else {
        upDateQues(pageNum);
    }


}

function upDateQues(pageNum) {
    quesNum.textContent = `${pageNum + 1}/${questions.length}`
    ques.textContent = questions[pageNum].title
    answer1.textContent = questions[pageNum].answers[0]
    answer2.textContent = questions[pageNum].answers[1]
}