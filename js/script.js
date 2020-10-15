// // data below




// //starting possitiongs
(function(){
var startingGrid=[
    {
      position : "1",
      number : "77",
      driverLastName : "Bottas" ,
      team :  "Mercedes",
      time : "1.25.269",
      
    },
    {
      position : "2",
      number : "44",
      driverLastName : "Hamilton" ,
      team :  "Mercedes",
      time : "1.25.525",
    },
    {
      position : "3",
      number : "33",
      driverLastName : "Verstappen" ,
      team :  "Red Bull Racing Honda",
      time : "1.25.562",
    },
    {
      position : "4",
      number : "16",
      driverLastName : "Leclerc" ,
      team :  "Ferrari",
      time : "1.26.036",
    },
    {
      position : "5",
      number : "23",
      driverLastName : "Albon" ,
      team :  "Red Bull Racing Honda",
      time : "1.26.047",
    },
    {
      position : "6",
      number : "3",
      driverLastName : "Ricciardo" ,
      team :  "Renault",
      time : "1.36.223",
    },
    {
      position : "7",
      number : "31",
      driverLastName : "Ocon" ,
      team :  "Renault",
      time : "1.26.242",
    },
    {
      position : "8",
      number : "4",
      driverLastName : "Norris" ,
      team :  "Mclaren Renault",
      time : "1.26.458",
    },
    {
      position : "9",
      number : "11",
      driverLastName : "Perez" ,
      team :  "Raceing Point BWT Mercedes",
      time : "1.26.704",
    },
    {
      position : "10",
      number : "55",
      driverLastName : "Sainz" ,
      team :  "Mclaren Renault",
      time : "1.26.709",
    },
    {
      position : "11",
      number : "5",
      driverLastName : "Vettel" ,
      team :  "Ferrari",
      time : "1.26.738",
    },
    {
      position : "12",
      number : "10",
      driverLastName : "Gasly" ,
      team :  "Alphatauri Honda",
      time : "1.26.776",
    },
    {
        position : "13",
        number : "26",
        driverLastName : "Kvyat" ,
        team :  "Alphaturi Honda",
        time : "1.26.848",
      },
    {
      position : "14",
      number : "99",
      driverLastName : "Giovinazzi" ,
      team :  "Alfa Romeo Racing Ferrari",
      time : "1.26.936",
    },
    {
      position : "15",
      number : "20",
      driverLastName : "Magnussen" ,
      team :  "Haas Ferrari",
      time : "1.27.125",
    },
    {
      position : "16",
      number : "8",
      driverLastName : "Grosjean" ,
      team :  "Haas Ferrari",
      time : "1.27.552",
    },
    {
      position : "17",
      number : "63",
      driverLastName : "Russell" ,
      team :  "Williams Mercedes",
      time : "1.27.564",
    },
    {
      position : "18",
      number : "6",
      driverLastName : "Latifi" ,
      team :  "Williams Mercedes",
      time : "1.27.812",
    },
    {
      position : "19",
      number : "7",
      driverLastName : "Raikkonen" ,
      team :  "Alfa Romeo Raceing Ferrari",
      time : "1.27.817",
    },
    {
      position : "20",
      number : "27",
      driverLastName : "Hulkenberg" ,
      team :  "Raceing Point BWT Ferrari",
      time : "1.28.021",
    },
];
// //function for starting grid

function Grid(startingGrid) {
    this.position = startingGrid.position;
    this.number = startingGrid.number;
    this.driverLastName = startingGrid.driverLastName;
    this.team = startingGrid.team;
    this.time = startingGrid.time;
    
}


// // select all table spots
var writeGridInfo = function (grid) {
    var int = grid.position,
        posEl = document.getElementById(int + "-pos"),
        numEl = document.getElementById(int + '-num'),
        driveLNEl = document.getElementById(int +'-dln'),
        teamEl =document.getElementById(int + "-team"),
        timeEl =document.getElementById(int + '-time');

        // write starting grid data to the DOM
        posEl.textContent = grid.position;
        numEl.textContent = grid.number;
        driveLNEl.textContent = grid.driverLastName;
        teamEl.textContent = grid.team;
        timeEl.textContent = grid.time;
};

// // print to dom 


for( i = 0; i < startingGrid.length; i++){
    var start = new Grid(startingGrid[i]);
    writeGridInfo(start);
}
})();

// race results

(function(){
    //object for race results
    
var raceResults = [
    {
        position : "1",
        number : "44",
        driverLastName : "Hamilton" ,
        team :  "Mercedes",
        time : "1:35:49.641",
        points : '25',
      },
      {
        position : "2",
        number : "33",
        driverLastName : "Verstappen" ,
        team :  "Red Bull Racing Honda",
        time : "+4.470s",
        points : "19",
      },
      {
        position : "6",
        number : "3",
        driverLastName : "Ricciardo" ,
        team :  "Renault",
        time : "+14.613s",
        points : '15'
      },
      {
        position : "4",
        number : "11",
        driverLastName : "Perez" ,
        team :  "Raceing Point BWT Mercedes",
        time : "+16.070s",
        points : "12"
      },
      {
        position : "5",
        number : "55",
        driverLastName : "Sainz" ,
        team :  "Mclaren Renault",
        time : "+21.905s",
        points : '10'
      },
      {
        position : "6",
        number : "10",
        driverLastName : "Gasly" ,
        team :  "Alphatauri Honda",
        time : "+21.905s",
        points : "8"
      },
      {
        position : "7",
        number : "16",
        driverLastName : "Leclerc" ,
        team :  "Ferrari",
        time : "+30.814s",
        points : '6'
      },
      {
        position : "8",
        number : "27",
        driverLastName : "Hulkenberg" ,
        team :  "Raceing Point BWT Ferrari",
        time : "+32.596s",
        points : '4'
      },
      {
        position : "9",
        number : "8",
        driverLastName : "Grosjean" ,
        team :  "Haas Ferrari",
        time : "+39.081s",
        points : '2'
      },
      {
        position : "10",
        number : "99",
        driverLastName : "Giovinazzi" ,
        team :  "Alfa Romeo Racing Ferrari",
        time : "+40.035s",
        points : "1"
      },
      
      {
        position : "11",
        number : "5",
        driverLastName : "Vettel" ,
        team :  "Ferrari",
        time : "+40.801s",
        points : "0"
      },
      {
        position : "12",
        number : "7",
        driverLastName : "Raikkonen" ,
        team :  "Alfa Romeo Raceing Ferrari",
        time : "+41.476s",
        points : "0"
      },
      {
        position : "13",
        number : "20",
        driverLastName : "Magnussen" ,
        team :  "Haas Ferrari",
        time : "+49.585s",
        points : "0"
      },
      {
        position : "14",
        number : "6",
        driverLastName : "Latifi" ,
        team :  "Williams Mercedes",
        time : "+54.449s",
        points : "0"
      },
      {
        position : "15",
        number : "26",
        driverLastName : "Kvyat" ,
        team :  "Alphaturi Honda",
        time : "+55.588s",
        points : "0"
       },
       //all posionts nc after this point
       {
        position : "16",
        number : "4",
        driverLastName : "Norris" ,
        team :  "Mclaren Renault",
        time : "DNF 42 Laps",
        points : "0"
        },
      
      {
        position : "17",
        number : "23",
        driverLastName : "Albon" ,
        team :  "Red Bull Racing Honda",
        time : "DNF 23 Laps",
        points : "0"
      },
      {
        position : "18",
        number : "31",
        driverLastName : "Ocon" ,
        team :  "Renault",
        time : "DNF 22 Laps",
        points : "0"
      },
      
      
      {
        position : "19",
        number : "77",
        driverLastName : "Bottas" ,
        team :  "Mercedes",
        time : "DNF 18 laps",
        points : "0"
        
      },
      {
        position : "20",
        number : "63",
        driverLastName : "Russell" ,
        team :  "Williams Mercedes",
        time : "DNF 12 laps",
        points : "0"
      },
  ];
  function Final(raceResults) {
    this.position = raceResults.position;
    this.number = raceResults.number;
    this.driverLastName = raceResults.driverLastName;
    this.team = raceResults.team;
    this.time = raceResults.time;
    this.points = raceResults.points;
      
  };
  var writeGridEnd = function (finish) {
    var sec = finish.position,
        posElf = document.getElementById(sec + "-pos-f"),
        numElf = document.getElementById(sec + '-num-f'),
        driveLNElf = document.getElementById(sec +'-dln-f'),
        teamElf =document.getElementById(sec + "-team-f"),
        timeElf =document.getElementById(sec + '-time-f');
        pointsElf = document.getElementById(sec + "-points-f");

        // write starting grid data to the DOM
        posElf.textContent = finish.position;
        numElf.textContent = finish.number;
        driveLNElf.textContent = finish.driverLastName;
        teamElf.textContent = finish.team;
        timeElf.textContent = finish.time;
        pointsElf.textContent = finish.points;
};
for( i = 0; i < raceResults.length; i++){
    var end = new Final(raceResults[i]);
    writeGridEnd(end);
}


})();