$(document).ready(function(){

    dataWolrd()
    dataIndonesia()
    dataFilipina()
    dataSingapura()
    dataBrunei()
    dataVietnam()
    dataMalaysia()
    dataLaos()
    dataThailand()
    
    function dataWolrd(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;
                    var lastUpdate = data.lastUpdate;

                    $('#data-positif').html(positif.value);
                    $('#data-sembuh').html(sembuh.value);
                    $('#data-meninggal').html(meninggal.value);
                    $('#last-Update').html(lastUpdate.substring(0,10));
                }
                catch{
                    alert('Error');
                }
            }
        })
    }

    
    function dataIndonesia(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/IDN',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-idn').html(positif.value);
                    $('#data-sembuh-idn').html(sembuh.value);
                    $('#data-meninggal-idn').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    }
    function dataFilipina(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/PHL',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-phl').html(positif.value);
                    $('#data-sembuh-phl').html(sembuh.value);
                    $('#data-meninggal-phl').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    }
    function dataSingapura(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/SGP',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-sgp').html(positif.value);
                    $('#data-sembuh-sgp').html(sembuh.value);
                    $('#data-meninggal-sgp').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    }

    function dataBrunei(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/BRN',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-brn').html(positif.value);
                    $('#data-sembuh-brn').html(sembuh.value);
                    $('#data-meninggal-brn').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    }
    function dataVietnam(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/VNM',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-vnm').html(positif.value);
                    $('#data-sembuh-vnm').html(sembuh.value);
                    $('#data-meninggal-vnm').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    } 

    function dataMalaysia(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/MYS',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-mys').html(positif.value);
                    $('#data-sembuh-mys').html(sembuh.value);
                    $('#data-meninggal-mys').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    }
    function dataLaos(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/LAO',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-lao').html(positif.value);
                    $('#data-sembuh-lao').html(sembuh.value);
                    $('#data-meninggal-lao').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    }

    function dataThailand(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/THA',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-tha').html(positif.value);
                    $('#data-sembuh-tha').html(sembuh.value);
                    $('#data-meninggal-tha').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    }

    


})