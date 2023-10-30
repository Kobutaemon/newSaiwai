$(".edit-btn").click(
    function () {
        userName = window.prompt("名前を入力してください", "")
        info = window.prompt("書き込む内容を入力してください", "")
        $(".student-comment h2").text(userName);
        $(".student-comment p").text(info);
    })