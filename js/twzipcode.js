var nDefCity,nDefArea ;

function setCityArea() {
	$("#Area option").remove();
	$("#Area").append("<option value=''>請選擇</option>").append($("#jAllArea option[c="+$("#City").val()+"]").clone());
	if ($("#City").val() == nDefCity && nDefCity !== "") $("#Area option[value='"+nDefArea+"']").attr("selected",true);
}


function setZip() {
    //顯示郵遞區號
	$("#ZIP").val($("#Area option:selected").attr("z"));
}


$(function() {
	//複製新Area並隱藏
	$("#Area").after('<select name="jAllArea" id="jAllArea"></select>');
	$("#jAllArea").hide().append($("#Area option").clone());
	
	$("#City").change(function() {
		setCityArea($(this).val());
		setZip();
	});
	$("#Area").change(function() {
		setZip();
	});
	
	setCityArea();
});