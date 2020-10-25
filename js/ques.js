const quesNum = document.querySelector('#ques_num');
const ques = document.querySelector('#ques');
const answer1 = document.querySelector('#answer_1');
const answer2 = document.querySelector('#answer_2');

$.ajax({
    type: "GET",
    url: "https://unnis.yonghochoi.com/questions",
    data: {},
    success: function (response) {

        answer1.addEventListener('click', nextQues);
        answer2.addEventListener('click', nextQues);

        let pageNum = 0;

        upDateQues(pageNum)

        // 답 array
        // const answerArr = []

        function nextQues(e) {
            e.preventDefault();

            // 답 저장 array
            // answerArr.push(e.target.name);
            // console.log(answerArr);

            pageNum++
            upDateQues(pageNum)
        };

        function upDateQues(pageNum) {
            quesNum.textContent = `${pageNum + 1}/${response.body.questions.length}`
            ques.textContent = response.body.questions[pageNum].title
            answer1.textContent = response.body.questions[pageNum].answers[0]
            answer2.textContent = response.body.questions[pageNum].answers[1]
        };
    }
});


// 마지막문제를 풀면 result 페이지가 로드되도록 해야함
$.ajax({
    type: "POST",
    url: "https://unnis.yonghochoi.com/result",
    data: {},
    success: function (response) {

        console.log(response)
    }

});

