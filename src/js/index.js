$(function(){
    //var pageHeight = $(window).height() - 40;
    //$('.main').height(pageHeight)
    var textareaHeight = $(window).height() - 140;
    var textareaHeight2 = $(window).height()/2 -160;
    $('#text').height(textareaHeight);
    $('#code').height(textareaHeight2);
    $('#output').height(textareaHeight2-40)
});
$('#findBtn').click(function(){
    var txt = $('#text').val();
    var regex = $('#code').val();//正则表达式
    var patt1=new RegExp(regex,sy());
    $('#output').val('');
    var i = 0;
    do{
        result=patt1.exec(txt);//检索写法
        if (result!=null){
            $('#output').val($('#output').val() + '[第 '+result.index+' 个字符] '+ result +  ' \r');
            i++;
        }
    }
    while (result!=null);
    $('#regResult').html('匹配到【'+ i + '】个结果。\r')
});
$('#repalceBtn').on('click', function() {
    $('#modelReplace').modal({
        relatedTarget: this,
        onConfirm: function(e) {

            var txt = $('#text').val();
            var regex = $('#code').val();//正则表达式
            var str = txt.replace(eval('/'+regex+'/'+sy()),e.data);

            $('#output').val(str)
            //alert('你输入的是：' + e.data || '')
        },
        onCancel: function(e) {
        }
    });
});
function pipei(txt){
    $('#doc-oc-demo1').offCanvas('close');
    $('#code').val(txt);
    $('#findBtn').click();
}
$('tbody tr td:first-child').click(function(){
    $('#modelMain').modal('close');
    $('#code').val($('#code').val() + $(this).html());
})
function sy(){
    var returnTxt='m';
    if ($("#g-sy").is(':checked') == true){
        returnTxt='g'
    }
    if ($("#i-sy").is(':checked') == true){
        returnTxt=returnTxt+'i'
    }
    return returnTxt;
}
function left(mainStr,lngLen) {
    if (lngLen>0) {return mainStr.substring(0,lngLen)}
    else{return null}
}
function right(mainStr,lngLen) {
// alert(mainStr.length)
    if (mainStr.length-lngLen>=0 && mainStr.length>=0 && mainStr.length-lngLen<=mainStr.length) {
        return mainStr.substring(mainStr.length-lngLen,mainStr.length)}
    else{return null}
}
function mid(mainStr,starnum,endnum){
    if (mainStr.length>=0){
        return mainStr.substr(starnum,endnum)
    }else{return null}
    //mainStr.length
}