function navButton(ob) {
    $(ob).css("background-color", "#333399").siblings().css("background-color", "#C0C0C0");
    $(ob).parent().siblings().css("display", "block");
}
function panelJump(come, type, ob){
    $(".tableShow").css("display", "block");
    $("#"+ come).show().siblings().hide();
    $("#" + come + type).addClass("currentCode").show()
        .siblings().removeClass("currentCode").hide();
    $(".execBar").show();
    $(ob).css("background-color", "#333399").siblings().css("background-color", "#C0C0C0");
    $("#tbody").html("");
    return true;
}
//写入表格前清空表格中原有内容
function clearTable(){
    $('table tbody').empty();
}
//每次只写一行的表格
function displayTable(name, value, comment){
    var tbody = document.getElementById("tbody");
    var Td = document.createElement("td");
    var Tr = document.createElement("tr");
    var insertText = document.createTextNode(name);
    Td.appendChild(insertText);
    Tr.appendChild(Td);

    Td = document.createElement("td");
    insertText = document.createTextNode(value);
    Td.appendChild(insertText);
    Tr.appendChild(Td);

    Td = document.createElement("td");
    insertText = document.createTextNode(comment);
    Td.appendChild(insertText);
    Tr.appendChild(Td);
    tbody.appendChild(Tr);
}
function drawText(text, fontSize, moveX, moveY){
    return draw.text(text)
        .font({
            family: "Times New Roman",
            size: fontSize,
            anchor: "middle",
            weight: "bold"
        })
        .move(moveX, moveY);
}
function drawRect(w, h, x, y){
    return draw.rect(w, h)
        .move(x, y)
        .attr({fill: "#E0FFFF", "fill-opacity": 0, stroke: "black", "stroke-width": 4});
}
//清除当前所有的高亮显示的代码
function hasCurHigh(){
    var $curhigh = $(".highlight");
    var $tmp = $curhigh;
    if($curhigh.length > 0){
        $curhigh.removeClass("highlight");
    }
    return $tmp;
}
function high(pClass) {
    hasCurHigh();
    var $pClass = $("." + pClass);
    if ($pClass.length > 0) {
        $pClass.addClass("highlight");
        $(".codeShow").scrollTop($pClass.position().top);
    }
}