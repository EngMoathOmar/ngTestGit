angular
.module('ngtest')
.directive('r365WeekWeather',r365WeekWeatherDirective);
r365WeekWeatherDirective.$inject = ['weatherForcast'];
function r365WeekWeatherDirective(weatherForcast){
    
    return {
        scope:{
        },
      //  link:r365WeekWeatherLinkFunction,
        controller:r365WeekWeatherController,
        template:`
            <table class="table table-condensed">
                    <tbody>
                        <tr>
                            <td ng-repeat="dayForecast in byWeekForcasts">
                                <r365-day-weather forecast="dayForecast"></r365-day-weather>
                            </td>
                        </tr>
                    </tbody>
                </table>
        `
    };
}

function r365WeekWeatherController($scope,$attrs,weatherForcast){
    weatherForcast.getWeekForcast({ cityName: "Nablus", units: "metric" }).then(function(data){
        $scope.byWeekForcasts = data;
    });
    
}
        