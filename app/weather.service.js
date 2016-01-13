
angular
.module("ngtest")
.service('weatherForcast',weatherForcast);
weatherForcast.$inject = ['$http','$filter'];
function weatherForcast($http,$filter){
    
    var _service = this;
  //  var serviceByDayApi = "http://openweathermap.org/data/2.5/forecast?id=282615&units=metric&appid="+serviceAPP_ID+"&_=1452504867644";
    
  //  var serviceByWeekApi = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=7&appid=2de143494c0b295cca9337e1e96b00e0";
    
    var APP_ID = "2b29142c40f4192a79f57a6d886b92b0"//||"2de143494c0b295cca9337e1e96b00e0";
    var dailyApiApiEndPoint = "http://openweathermap.org/data/2.5/forecast";
    var ByWeekApiEndPoint =  "http://api.openweathermap.org/data/2.5/forecast/daily"
    _service.currentDayHourlyForecast;
    _service.getDailyForecast = function getForecast(confgis){
               return  $http.get(dailyApiApiEndPoint,{params:{
                    appid: APP_ID,
                    mode:"json",
                    
                   // id:confgis.cityId,
                    q:confgis.cityName,
                  //  lat:"city Lat",
                  //  long:"city long",
                  //  zip: "zipcode , country code",
                    units:confgis.units || "defualt" ,//"defualt" 
                   cnt:10
                }}).then( function(resopnse){
                    var data = resopnse.data;
                    currentDayHourlyForecast = _service.get24HourData(data);
                    console.log(data);
                    return data;
                });
    };
    
    _service.getWeekForcast = function getWeekForcast(configs){
           return  $http.get(ByWeekApiEndPoint,{params:{
                    appid: APP_ID,
                    mode:"json",
                    units:configs.units || "default" ,//"defualt" 
                    
                    q:configs.cityName,
                //    lat:"city Lat",
                 //   long:"city long",
            //        zip: configs.zipCode + "," + configs.countryCode,
                 
                    cnt: configs.numberOfDays + "7"
                }}).then( function(res){
                    
                    var todayDate = new Date();
                    res.data.list=res.data.list.map(function(data){
                        data.dayTmp = data.temp.day;
                        data.nightTmp = data.temp.night;
                        data.date = todayDate.setDate(todayDate.getDate()+1);
                        return data;
                    });
                    return res.data.list;
                });
    }
    
    _service.get24HourData = function get24HourData(res){
        if(!res && _service.currentDayHourlyForecast){
            return _service.currentDayHourlyForecast;
        }
        
        
        var hourNow  = $filter("date")(Date.now(),"hh");
        var firstResHour = Number($filter("date")(res.list[0].dt,"hh"));
        var i=0;
        var temp = res.list[i].main.temp;
        var tempForecast = [];
        var oldTemp =  res.list[0].main.temp_min;
        var newTemp =   res.list[i+1].main.temp;
        var tmpObj =  res.list[i+1].main;
        for(var h =firstResHour; h<firstResHour+24; h++){
            if(h ===0){
                  tempForecast.push(temp);
            }
            else if(h%3==0){                
                i++;
                oldTemp =  res.list[i-1].main.temp;
                newTemp = res.list[i].main.temp_min;

                temp = res.list[i-1].main.temp;
                tmpObj = res.list[i].main;
              //  console.log(oldTemp,newTemp,temp,tmpObj);;
                tempForecast.push(temp);
            }else{
                var tmpForecastValue =  (oldTemp + newTemp)/2;
                tempForecast.push(tmpForecastValue);
            }
        }
        for(var h =0; h<firstResHour; h++){
           
            tempForecast.unshift(tempForecast[0]);
        }
        _service.currentDayHourlyForecast = tempForecast;
        return tempForecast;
    }
    
    window.theApi = this;
    window.filter = $filter;
}