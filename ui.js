$(document).ready(function($) {

		//reset Filter..
		localStorage.clear()

		urutan=0;

		/*
		$('.image').mosaic({
			animation	:	'slide',	//fade or slide
			anchor_y	:	'top'		//Vertical anchor position
		});
		*/

		//$('body').on('click', '.ribbon.label', function() {

		$("body").on('click', ".ui.card", function(){
			console.log($(this).html());
			//$('#popup').modal('show');
		});


		$("body").on('dblclick', ".ui.card", function(){
			/*$(this).dimmer({duration: 
					{show :200, hide: 500}
				}).dimmer('show'); */
			
			//setTimeout$(this).find('teal.icon').transition('pulse');
			$(this).find('.corner.label').fadeIn(350);
			
			$(this).find('.heart').animate({'top': -5}, 150).animate({'top': 8}, 170);
				
			
		});

		$("body").on('mousemove', ".ui.card", function(){
			$(".ui.card").dimmer('hide');
		});


		$("body").on('mouseenter', "article", function(){
			$(this).find('.lower_card').dimmer({duration: 
					{show :150, hide: 250}}).dimmer('show');
		/*
			$(this).find('.price').animate({'top':+30}, 250).animate({'top':0});
			$(this).find('.price').fadeIn(500).fadeOut(500);
		*/
		})


		$("body").on('mouseleave', ".white-panel", function(){ //MOUSE-OUT KAGAK BISA CUYY
			$(this).find('.lower_card').dimmer('hide');
		})


		$("body").on('mouseover', ".lower_card", function(){
			//ga perlu lagi, karena on hover ui.card sekarang muncul
			//$(this).dimmer('show');				
		});

		$("body").on('mouseout', ".image", function(){
			//$(this).next('.lower_card').dimmer('hide'); // klo kluar image, dimmer malah berkedip
			//$('.lower.dimmer').dimmer('hide'); --> ini all lower_dimmer yg ilang
		});

		$("body").on('click', ".spot", function(){
			$(this).dimmer({duration: 
					{show :200, hide: 500, opacity:0.9}
				});

			$(this).parent().parent().parent().parent().parent().parent().dimmer('show');
			$(this).parent().parent().parent().parent().parent().parent().find('.corner.label').show();
			$(this).parent().parent().parent().parent().parent().parent().parent().find('.ui.lower.dimmer').dimmer('hide');

		});


/*
    $('#blog-landing').pinterest_grid({
	no_columns: 4,
	padding_x: 10,
	padding_y: 10,
	margin_bottom: 50,
	single_column_breakpoint: 700
    });
*/

	//HANDLEBAR
	var templateSource = $("#targetnya").html();
	var template = Handlebars.compile(templateSource);

	$.ajax({
	url: '1.json',
	dataType: 'json',
	cache: false,
	success: function(reply){
		$("#blog-landing").html(template(reply))

		
		$('#blog-landing').isotope({
		  // options
		  itemSelector: '.white-panel',
		  //layoutMode: 'masonry'
		  masonry:	{
				columnWidth: 6
			}
		}).isotope('layout');   // IMPORTANT TO RELAYOUT!! else will be overlapping
		
	
		$('.lower.dimmer').each(function(){
			if( $(this).data('ending'))
				$(this).dimmer('show');
		});
	
		function boing(){
		$(".ribbon.label").each(function (){		
			$(this).find('.ends').transition('set looping').transition('jiggle', '1150ms');
			$(this).find('.firstBid').transition('set looping').transition('pulse', '1350ms');
		});

		$(".flag.icon").each(function() {
			$(this).transition('set looping').transition('tada', '1200ms');
		});
		}
		
		boing();
		
		/*
		var loop = setInterval (boing, 1500);

		setTimeout(function(){
				clearInterval(loop);
			}, 7000);
		*/


	}
	});	


	//CAROUSEL functions..
	  var carousel = document.getElementById('carousel'),
		  navButtons = document.querySelectorAll('#navigation button'),
		  panelCount = carousel.children.length,
		  transformProp = Modernizr.prefixed('transform'),
		  theta = 0;

	
		var looping = setInterval (function(){
						increment = 1;
						theta += ( 360 / panelCount ) * increment * -1;
						carousel.style[ transformProp ] = 'translateZ( -288px ) rotateY(' + theta + 'deg)';
					}, 2500);
	

	// MODAL inititaion..
	var modalTemplateSource = $("#modal_target").html();
	var modalTemplate = Handlebars.compile(templateSource);

		$("#popup").html(modalTemplate())

});


function load_more() {
	var templateSource = $("#targetnya").html();
	var template = Handlebars.compile(templateSource);

	var url = ( (++urutan % 3 + 1 )  ) + '.json'

	$.ajax({
	url: url,
	dataType: 'json',
	cache: false,
	success: function(reply){
		//$("#blog-landing").append(template(reply))
	
		console.log(reply);
		if ( typeof localStorage.filter != 'undefined' )
			$('#blog-landing').isotope({ filter: localStorage.filter });
		else
			$('#blog-landing').append(template(reply)).isotope({filter:''}).isotope( 'reloadItems')
		
		//$('#blog-landing').isotope( 'addItems', template(reply) )

	}

	});	
}
