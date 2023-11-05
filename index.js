$(".edit-btn").click(
    function () {
        userName = window.prompt("名前を入力してください", "")
        if (userName != null) {
            $(".student-comment h2").text(userName);
        } else {
            alert("入力欄が空白です")
        }
        info = window.prompt("書き込む内容を入力してください", "")
        if (info != null) {
            $(".student-comment h2").text(userName);
        } else {
            alert("入力欄が空白です")
        }
    })