window.onload = function(){
	
	//retourne toutes les regions de data
	function getRegions(){
		var regions = [];	
		
		data.filter( function(val,index,self){
			if(index > 0) return val['region_name'] != self[index-1]['region_name'];
			else return true			
		}).forEach(function(e){
			regions.push(e.region_name);		
		});
		return regions;	
	}
	
	//retourne tous les dept d'une région
	function getDept(region){
		var depts = [];
		
		data.filter( function(val){ //même région
			return val.region_name == region;
		}).filter( function(val,index,self){//dept uniques
			if(index > 0) return val.departement_name != self[index-1].departement_name;
			else return true			
		}).forEach(function(e){
			depts.push(e.departement_name)
		});
		return depts;
	}
	
	//retourne toutes les villes
	function getCities(dept){
		var cities = [];
		
		data.filter( function(val){ //même dept
			return val.departement_name == dept;
		}).forEach(function(e){
			cities.push(e.name);		
		});
		return cities;
	}
	
	function displayDeptSelect(region){
		var list = '';
		getDept(region).forEach( function(dept){
		list += '<option value="'+dept+'">'+dept+'</option>';	
		});
		document.getElementById('dept').innerHTML = list;
		
		displayCitySelect(document.getElementById('dept').value);
		
	}
	
	function displayCitySelect(dept){
		var list = '';
		getCities(dept).forEach( function(city){
		list += '<option value="'+city+'">'+city+'</option>';	
		});
		document.getElementById('city').innerHTML = list;	
	}
	
	function init(){
		var regions = getRegions();
		
		var list = '';
		regions.forEach( function(region){
			list += '<option value="'+region+'">'+region+'</option>';	
		});

		document.getElementById('regions').innerHTML = list;
		displayDeptSelect(document.getElementById('regions').value);
		displayCitySelect(document.getElementById('dept').value);
	
	}
	
	init();
	
	document.getElementById('regions').addEventListener("change", function(){
		displayDeptSelect(this.value);
		
	});
	
	document.getElementById('dept').addEventListener("change", function(){
		displayCitySelect(this.value);
	});

	
	//pour la propriété "sticky"
	//petit probleme: les elements remontent quand le titre est passé en fixed
	window.addEventListener("scroll",function(){
		if( window.scrollY > 10){

			document.getElementsByTagName('h1')[0].classList.add('fixed');
		}
		else
			document.getElementsByTagName('h1')[0].classList.remove('fixed');
	});

	
	
}
