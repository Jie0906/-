$(function(){
    var $li = $('ul.tab-title li');
        $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.content').hide();
    
        $li.click(function(){
            $($(this).find('a'). attr ('href')).show().siblings ('.content').hide();
            $(this).addClass('active'). siblings ('.active').removeClass('active');
        });
    });