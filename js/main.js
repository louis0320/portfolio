$(function(){
	$('#fullpage').fullpage({
		//options here
        anchors:['section1', 'section2', 'section3', 'section4', 'section5'],
        autoScrolling:false,
        keyboardScrolling: true,
        navigation:true,
        navigationPosition:'bottom',
        sectionsColor : ['#000','#fff','#fff','#000','#484848'],
        loopBottom:true,
        afterLoad: function(anchorLink, index){
            console.log("현재 섹션은  " + index);
            // if(index == 5) {
            //     alert('aaa');
            // }
        },
        paddingBottom: '3rem',
	});
	
});