
	{{#each items}}
	<article class="white-panel {{tags}}" {{#if ending}} style="background-color: rgb(198, 36, 36); border: 2px dashed rgba(120, 198, 79, 1);"{{/if}}>


	<div class=" extra {{#if ending}} price-light {{else}} price {{/if}}" style=margin-top:-6px;>

		Rp {{highestBid}}

		{{#if ending}}
			<a class="ui yellow image label" STYLE=left:10px;top:6px;position:absolute;float:left;height:35px>
				&nbsp;&nbsp;Ending&nbsp;
				 <!-- <div class="detail">Ending</div> -->
			</a>
		{{/if}}
			
			
	</div>
		
	<div class="ui card" style=background-color:beige>
	  
	  <div class="image " style=z-index:0>
	
		
	{{#if bids}}
		{{#if ending}}
		
		{{else}}

		
		  <a class="price_top" style="display:none;float:left;position:fixed;text-align:center;color:maroon;width:93.5%;height:28px;margin-top:-1px;padding-top:5px;font-size:16px;font-family:'PT Sans',sans-serif; background-color: rgba(200,170,170, 0.5);border-color:rgba(0,0,0,0);text-shadow:2px 1px 1px #999;letter-spacing:0.4pt">
			<b>&nbsp;&nbsp;&nbsp;{{ETA}} lagi...</b>
		  </a>
		
		{{/if}}

	{{/if}}
	

		<!-- 
		<a href="http://www.nonsensesociety.com/2010/12/i-am-not-human-portraits/" target="_blank" class="mosaic-overlay">
			<div class="details" >
				<h4>I Am Not Human - Unique Self Portraits</h4><br/>
				<p>via the Nonsense Society (photo credit: Dan Deroches)</p>
			</div>
		</a> 
		-->

		  <a class="ui left corner label" style=display:none>
			<i class="heart big red icon"></i>
		  </a>

		  {{#if bids}}
			  {{#if ending}} 
				<!-- 
				<a class="ui yellow right ribbon label" style=padding-left:13px;padding-top:8px;font-size:14px;margin-top:-7px><i>Ending Soon..!!</i></a>
				 -->
			  {{/if}}
		  {{else}}
			  {{#if ending}} 
				<!-- 
				<a class="ui yellow right ribbon label" style=padding-left:15px;padding-top:9px;font-size:14px;margin-top:-7px><i>Ending Soon..!!</i></a>
				 -->
			  {{else}}
				<a class="ui green	right ribbon label" style="text-shadow:1px 1px 1px #000;padding-left:21px;padding-top:9px;font-size:13px;margin-top:-5px"><i>Be the first bidder!!</i></a>
			  {{/if}}
		  {{/if}}

		<img src="images/{{imgURL}}.jpg" alt="ALT" > <!-- class='mosaic-backdrop' -->
	 
	   {{#if description}}
			<span style="" class="caption ">
						<p>{{description}}</p>
			</span>
	   {{/if}}

	  </div>
	  
		  <div style="z-index:20" class="ui content lower_card">
			<a class="header">{{itemName}}</a>
			<div class="meta">
			  <span class="date">viewed {{viewCount}} times</span>
			</div>
			
			<!-- <div class="description">
			  {{description}}
			</div> -->


		  <div class="ui lower dimmer" {{#if ending}} data-ending=1{{/if}}>
			<div class="content">
			  <div class="center">
				<h3 class="ui inverted header"><span style=color:red>{{ETA}}</span> left!<!/h3> {{#if ending}}<br>{{/if}}
				<div class="ui  button">View Item</div>
				<div class="ui primary button spot" ><i class="icon unhide normal"></i>Spot!</div>
			  </div>
			</div>
		  </div>


		  </div>



		  <div class="extra content" style="background-color:white;height:50px;width:100%;padding-top:11px;">

<a>
				<div style=position:absolute;float:left;font-size:10px;margin-top:-5px;margin-left:32px;>
					<b>Seller:</b>
				</div>
				  <img style=float:left class="ui avatar image" src=images/angga.jpg>
				  
				 <div style=margin-top:9px;margin-left:5px;>
				  <i >{{seller}}</i>			
				</div>

				</a>

		  </div>



	<div class="ui dimmer">
		<div class="content" style=margin-top:-50px;>
		  <div class="center" >
			<!-- <img  src=images/383_-_binoculars-128.png> -->
				<i class="huge icons" style=opacity:0.45>
				  <i class="big teal square outline icon"></i>
				  <i class="unhide teal icon" style=margin-left:-1px;margin-top:-5px;></i>
				</i>
		  </div>
		</div>
	</div>

  </div>

	</article>
	{{/each}}
