setMiddle();
function setMiddle(){
    var box = $(".page");
    var leftPos =  -(1920-box.width())/2 + "px";
    $(".background,.main").css("left",leftPos);
}
//banner图片在调整窗口时剧中显示
$(window).resize(function(){
    setMiddle();
})
$(".action2").on('mouseover',"a", function(event) {
	event.preventDefault();
	/* Act on the event */
	$(this).find("img").show();
});
$(".action2").on('mouseout',"a", function(event) {
    event.preventDefault();
    /* Act on the event */
    $(this).find("img").hide();
});
var imgIndex=1;
function changeImg(){
    if(imgIndex>=15){
        imgIndex=0;
    }
    imgIndex++;
    $("#snowfixed img").attr("src","image/divfixed"+imgIndex+".png")
}
setInterval("changeImg()",1000);

function getcpns1(cpns_id) {
    $.ajax({
        method: "POST",
        url: "/index.php/coupayget-get_cpns.html",
        data: {
            coupaylog_info_id: cpns_id
        }
    }).always(function(data) {
        data = JSON.parse(data);
        if (data.res == "error") {
            console.log(data.msg);
            console.log(data.msg == '请先登录');
            if (data.msg == '请先登录') {
                alert(data.msg);
                location.href = "/index.php/member.html";
            } else {
                alert(data.msg);
            }
        } else if (data.res == "success") {
            alert("领取成功，请到会员中心-我的优惠劵查看。");
        }
    });
}
$(".discount").on("click", function() {
    getcpns1($(this).attr("data-discount"));
});