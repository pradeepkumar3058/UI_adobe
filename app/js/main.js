$(document).ready(function(){
	var response = '';
	$.ajax({ 
		type: "GET",   
		url: "https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4",   
		async: false,
		success : function(result){
			var i= 0 ;for(var val in result) {  
			 	if(i==0){ var adobe_pri_menu='adobe_pri_menu_' ; }
			 	else if(i==1){ var adobe_pri_menu='adobe_sec_menu_';}
			 	else if(i==2){ var adobe_pri_menu='adobe_trd_menu_'}
				// main menu heading				 		
				$("#header_deatils").append('<li role="presentation" class="inner_menu "><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'+val+'</a><ul id="sub_header_deatils_'+i+'" class="dropdown-menu com_trsrotate">');

				// sub menus here						
				var j=0 ;for(var sub_val in result[val]) { var class_sub = adobe_pri_menu+j;
					const subMeneuDesc = Object.values(result[val][sub_val]); 
					$("#sub_header_deatils_"+i).append('<li role="presentation" class="active '+class_sub+'"><a href="#"><h3>'+result[val][sub_val].title+'</h3><span>'+subMeneuDesc[1]+'</span></a></li>');
					j++;
				}

				$("#sub_header_deatils").append('</ul></li>');
				i++;

				$(".dropdown-menu").addClass('fadeIn animated');
			}
		}
	});

	$('.inner_menu').hover(function(){
		$('.inner_menu, .com_trsrotate').removeClass('active');
		$('.com_trsrotate').removeClass('left');
		$('.com_trsrotate').removeClass('right');
		$(this).addClass('active');
	});

});
