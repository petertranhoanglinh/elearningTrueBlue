google.charts.load('current', {'packages':['corechart', 'bar']});
function drawAgeChart(result, idchart, title, width, height) {
	var data = 	[];
	data.push(['Age', 'Ratio', { role: 'style' }]);
	
	for(var i = 0; i < result.length; i++){
		data.push([result[i].age, parseFloat(result[i].rate), '#398dbb']);
	}
	
	data = google.visualization.arrayToDataTable(data);
					
	var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                  { calc: "stringify",
                    sourceColumn: 1,
                    type: "string",
                    role: "annotation" },
                    2]);					
    var options = {
	    title: title,
	    subtitle: '',
	    width: width,
        bar: {groupWidth: "70%"},
        legend: { position: "none" },
        chartArea:{left:40,top:20, width: '100%', height: height},
	  // chartArea:{width:"80%"},
     	vAxis: {
			minValue: 0,
		    maxValue: 100,				    	          
			format: '#\'%\'',
			
		}
       };

   	var chart = new google.visualization.ColumnChart(document.getElementById(idchart));
   	chart.draw(view, options);
}

function loadChartAge(url, idChart, title) {
		
	$.ajax({
		url: url,
		type: "GET",
		success: function(result){
			
				data	= google.visualization.arrayToDataTable([
			          ['Age', 'Ratio', {role : 'style'}],
			          ['10',  parseFloat(result.age10), '#398dbb'],
			          ['20',  parseFloat(result.age20), '#398dbb'],
					  ['30', parseFloat(result.age30), '#398dbb'],
					  ['40',  parseFloat(result.age40), '#398dbb'],
					  ['50',  parseFloat(result.age50), '#398dbb'],
					  ['60', parseFloat(result.age60), '#398dbb'],
					  ['70', parseFloat(result.age70), '#398dbb'],
		        ]);
								
				var view = new google.visualization.DataView(data);
			      view.setColumns([0, 1,
			                       { calc: "stringify",
			                         sourceColumn: 1,
			                         type: "string",
			                         role: "annotation" },
			                         2
			                      	 ]);					
			      var options = {
					title:  title,
			    		    subtitle: '',
			    		    height : 160,
			    		    width: 210,
			    	        bar: {groupWidth: "70%"},
			    	        legend: { position: "none" },
			    	        chartArea:{left:30,top:20, width : '100%', height: '70%'},
			    	        vAxis: {
								minValue: 0,
		        		        maxValue: 100,				    	   				    	          
			    	            format: '#\'%\''
			    	        },
			    	        
			    	      };

		       	var chart = new google.visualization.ColumnChart(document.getElementById(idChart));

		       	chart.draw(view, options);
			
		}	
	});		
 }
 
function loadChartAmoutOrder(url, idChart, title) {
		var Json;
		var data;

		$.ajax({
			url : url,
			type : "GET",
			success : function(result) {
				console.log(result)

				if (result) {
					var data = google.visualization.arrayToDataTable([
							[ 'Month', result[0].year, result[1].year,
									result[2].year ],
							[ '01', parseInt(result[0].amt01),
									parseInt(result[1].amt01),
									parseInt(result[2].amt01) ],
							[ '02', parseInt(result[0].amt02),
									parseInt(result[1].amt02),
									parseInt(result[2].amt02) ],
							[ '03', parseInt(result[0].amt03),
									parseInt(result[1].amt03),
									parseInt(result[2].amt03) ],
							[ '04', parseInt(result[0].amt04),
									parseInt(result[1].amt04),
									parseInt(result[2].amt04) ],
							[ '05', parseInt(result[0].amt05),
									parseInt(result[1].amt05),
									parseInt(result[2].amt05) ],
							[ '06', parseInt(result[0].amt06),
									parseInt(result[1].amt06),
									parseInt(result[2].amt06) ],
							[ '07', parseInt(result[0].amt07),
									parseInt(result[1].amt07),
									parseInt(result[2].amt07) ],
							[ '08', parseInt(result[0].amt08),
									parseInt(result[1].amt08),
									parseInt(result[2].amt08) ],
							[ '09', parseInt(result[0].amt09),
									parseInt(result[1].amt09),
									parseInt(result[2].amt09) ],
							[ '10', parseInt(result[0].amt10),
									parseInt(result[1].amt10),
									parseInt(result[2].amt10) ],
							[ '11', parseInt(result[0].amt11),
									parseInt(result[1].amt11),
									parseInt(result[2].amt11) ],
							[ '12', parseInt(result[0].amt12),
									parseInt(result[1].amt12),
									parseInt(result[2].amt12) ], ]);

					var options = {
						title : title,
						chartArea : {
							left : 100,
							top : 20,
							width : '72%'
						},
						legend : {
							position : 'right'
						},
						bar : {
							groupWidth : "50%"
						},
						width : 700,
						height : 140,
						colors : [ '#3279a4', '#ed7e1c', 'red' ]
					};

					var chart = new google.visualization.LineChart(document.getElementById(idChart));

					chart.draw(data, options);
				}

			}
		});

	}
  
  