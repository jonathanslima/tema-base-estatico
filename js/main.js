$(document).ready(function($) {

	// Corrige placeholder no IE9

	if (document.createElement('input').placeholder != ""){

	    $('[placeholder]').focus(function() {
	        var i = $(this);
	        if(i.val() == i.attr('placeholder')) {
	          i.val('').removeClass('placeholder');
	          if(i.hasClass('password')) {
	            i.removeClass('password');
	            this.type='password';
	          }     
	        }
	  }).blur(function() {
	    var i = $(this);  
	    if(i.val() == '' || i.val() == i.attr('placeholder')) {
	      if(this.type=='password') {
	        i.addClass('password');
	        this.type='text';
	      }
	      i.addClass('placeholder').val(i.attr('placeholder'));
	    }
	  }).blur().parents('form').submit(function() {
	      $(this).find('[placeholder]').each(function() {
	        var i = $(this);
	        if(i.val() == i.attr('placeholder'))
	          i.val('');
	          i.removeClass('placeholder');

	      })
	  });

	} // Fim Fix IE9
	//

	// MASKS
	$(".telefone").mask("(99)9999-9999?9");
	$(".hora").mask("99:99");

	// FLATPICKR
	// flatpickr(".data", {
	// 	altInput: true,
	// 	locale: "pt",
	// 	altFormat: "d/m/Y"
	// });
});

//FACEBOOK
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

