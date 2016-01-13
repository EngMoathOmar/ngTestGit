angular
.module('ngtest')
.directive('r365DayWeather',r365DayWeatherDirective);

function r365DayWeatherDirective(){
    
    return {
        scope:{
            forecast:"=",
            showIcons: '=',
            showDetails : '='
        },
       // link:r365DayWeatherLinkFunction,
        controller:r365DayWeatherController,
        template:`
           <div class="r-365-dw-container table table-condensed table-stripped table-bordered">
            <h4 class="r-365-dw-header text-center">
                {{forecast.date |date: "MM/dd"}}
            </h4>
            <div class="r-365-dw-temp clearfix">
                <table class="table table-condensed table-stripped table-bordered">
                    <thead>
                        <tr>
                            <th> Day </th>
                            <th> avg </th>
                            <th>night </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{forecast.dayTmp|number:2}}</td>
                            <td>{{(+forecast.dayTmp + forecast.nightTmp) /2 |number:2}} </td>
                            <td>{{forecast.nightTmp|number:2}} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="r-365-dw-description">
                 <img src="http://openweathermap.org/img/w/{{forecast.weather[0].icon}}.png"/> {{forecast.weather[0].description}}
            </div>
        </div>
        `
        
    };
    
    function r365DayWeatherLinkFunction($scope){
             
    }
    
    function r365DayWeatherController(){
        
    }
    
}

 