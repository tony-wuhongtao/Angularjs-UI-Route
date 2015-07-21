var myapp = angular.module('myapp', ["ui.router"])
myapp.config(function($stateProvider){
$stateProvider
	.state('Dashboard', {
		url: "/Dashboard",
		views: {
			"viewA": {
				template: '<ul><li><h1><i class="fa fa-tachometer"></i>  Dashboard</li></h1></ul>'
			}
		}
	})
	.state('Administration', {
		url: "/Administration",
		views: {
			"viewA": {
				template: '<ul><li><h1><i class="fa fa-user"></i>  Administration</li></h1></ul>'
			}
		}
	})
	.state('Configuration', {
		url: "/Configuration",
		views: {
			"viewA": {
				template: '<ul><li><h1><i class="fa fa-cog"></i>  Configuration</li></h1></ul>'
			}
		}
	})
});
myapp.controller('mainCtrl', function ($scope) {
    $scope.noneStyle = false;
    $scope.bodyCon = false;
    $scope.comment = "  Application Name";

    $scope.toggleStyle = function () {
        $scope.bodyCon = !$scope.bodyCon;
        $scope.noneStyle = !$scope.noneStyle;
    }
    $scope.openSearch = false;
    $scope.searchToggle = function () {
        $scope.openSearch = !$scope.openSearch;
    }
});