// 매개변수 view(html)에서 정보를 넘겨서 script에서 처리. 그때 받는 변수를 
// 매개변수라 한다.

// 내가한것 오류남
// DOM객체 탭메뉴명 변수로 할당
var tab = $('#menu_gnb').find('li');
console.log('탭메뉴 li 갯수 : ' + tab.length);
// EVENT LISTENER
var i;
function tab_menu(num) {
    for(i=0; i<tab.length;i++){
        if(num == i){
            //a. active 클래스 적용
            tab.eq(i).addClass('active');
            $('.tab_content_0'+i).show();
        }else{
            //b. active 클래스 제거
            tab.eq(i).removeClass('active');
            $('.tab_content_0'+i).hide();
        }
    }
}
$('nav li').on({'mouseenter':function(){
    $(this).children('div').stop().slideDown();
},'mouseleave':function(){
    $(this).find('div:visible').stop().slideUp();
}});

