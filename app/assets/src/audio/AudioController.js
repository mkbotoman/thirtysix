(function(){

  angular
       .module('audios')
       .controller('AudioController', [
          '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          AudioController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @constructor
   */
  function AudioController( audioService, $mdSidenav, $mdBottomSheet, $log, $q, $scope) {
    var self = this;
    var files = [
        {
          name: 'Clip 1',
          file: 'svg-1'
        },
        {
          name: 'Clip 2',
          file: 'svg-2'
        },
        {
          name: 'Clip 3',
          file: 'svg-3'
        },
        {
          name: 'Clip 4',
          file: 'svg-4'
        },
        {
          name: 'Clip 5',
          file: 'svg-5'
        },
        {
          name: 'Clip 6',
          file: 'svg-6'
        },
        {
          name: 'Clip 1',
          file: 'svg-1'
        },
        {
          name: 'Clip 2',
          file: 'svg-2'
        },
        {
          name: 'Clip 3',
          file: 'svg-3'
        },
        {
          name: 'Clip 4',
          file: 'svg-4'
        },
        {
          name: 'Clip 5',
          file: 'svg-5'
        },
        {
          name: 'Clip 6',
          file: 'svg-6'
        },
        {
          name: 'Clip 1',
          file: 'svg-1'
        },
        {
          name: 'Clip 2',
          file: 'svg-2'
        },
        {
          name: 'Clip 3',
          file: 'svg-3'
        },
        {
          name: 'Clip 4',
          file: 'svg-4'
        },
        {
          name: 'Clip 5',
          file: 'svg-5'
        },
        {
          name: 'Clip 6',
          file: 'svg-6'
        },
        {
          name: 'Clip 1',
          file: 'svg-1'
        }
      ];

      this.tiles = buildGridModel({
              icon : "",
              title: "Clip ",
              background: ""
      });

      function buildGridModel(tileTmpl){
        var it, results = [ ];
        for (var j=0; j<files.length; j++) {
          it = angular.extend({},tileTmpl);
          it.title = files[j].name;
          it.span  = { row : 1, col : 1 };
          switch(j%11) {
            case 0:
              it.background = "darkBrown";
              it.icon = "assets/svg/brownSound.svg";
              it.span.row = it.span.col = 2;
              break;
            case 1:
              it.background = "lightBrown";
              it.icon = "assets/svg/lightGreenSound.svg";
              break;
            case 2:
              it.background = "green";
              it.icon = "assets/svg/brownSound.svg";
              break;
            case 3:
              it.background = "lightBrown";
              it.icon = "assets/svg/lightGreenSound.svg";
              it.span.col = 2;
              break;
            case 4:
              it.background = "lightBrown";
              it.icon = "assets/svg/lightGreenSound.svg";
              it.span.row = it.span.col = 2;
              break;
            case 5:
              it.background = "darkBrown";
              it.icon = "assets/svg/brownSound.svg";
              break;
            case 6:
              it.background = "lightBrown";
              it.icon = "assets/svg/lightGreenSound.svg";
              break;
            case 7:
              it.background = "green";
              it.icon = "assets/svg/brownSound.svg";
              break;
            case 8:
              it.background = "lightBrown";
              it.icon = "assets/svg/lightGreenSound.svg";
              break;
            case 9:
              it.background = "darkBrown";
              it.icon = "assets/svg/brownSound.svg";
              break;
            case 10:
              it.background = "darkBrown";
              it.icon = "assets/svg/brownSound.svg";
              break;
          }
          results.push(it);
        }
        return results;
      }
  }

})();
