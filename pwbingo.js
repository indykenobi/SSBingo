var bingoListVersion = "0.1";
var bingoList = [];

bingoList[1] = [
  { name: "Win \"The First Turnabout\"", types: ["1-1"] },
  { name: "Break a Psyche-Lock", types: ["Locks"] },
];
bingoList[2] = [
  { name: "Receive a full penalty in court", types: ["Penalty"] },
  { name: "Win \"The Lost Turnabout\"", types: ["2-1"] },
];
bingoList[3] = [
  { name: "Win \"Turnabout Sisters\"", types: ["1-2", "Maya"] },
  { name: "Present Attorney's Badge to 20 different people", types: ["Badge"] },
];
bingoList[4] = [
  { name: "Win \"Turnabout Memories\"", types: ["3-1", "NotPhoenix"] },
  { name: "Obtain Missile", types: ["5"] },
];
bingoList[5] = [
  { name: "Receive 4 Different autopsy reports", types: [""] },
  { name: "Win \"Turnabout Beginnings\"", types: ["3-4", "NotPhoenix"] },
];
bingoList[6] = [
  { name: "Win all tutorial cases", types: ["1-1","2-1","3-1"] },
  { name: "Win one case from each game", types: ["8"] },
];
bingoList[7] = [
  { name: "Win \"Turnabout Samurai\"", types: ["1-3"] },
  { name: "Complete a 3-day case", types: [""] },
];
bingoList[8] = [
  { name: "Win \"Reunion, and Turnabout\"", types: ["2-2"] },
  { name: "Win a trial for grand larceny", types: ["3-2"] },
];
bingoList[9] = [
  { name: "Examine every stepladder", types: ["Ladders"] },
  { name: "Finish cross-examining a parrot", types: ["1-4"] },
];
bingoList[10] = [
  { name: "Examine every ladder", types: ["Ladders"] },
  { name: "Win \"Turnabout Goodbyes\"", types: ["1-4"] },
];
bingoList[11] = [
  { name: "Win \"Turnabout Big Top\"", types: ["2-3"] },
  { name: "Win \"The Stolen Turnabout\"", types: ["3-2"] },
];
bingoList[12] = [
  { name: "Complete every Lotta Hart cross-examination", types: ["1-4","2-2","2-4"] },
  { name: "Win \"Recipe for Turnabout\"", types: ["3-3"] },
];
bingoList[13] = [
  { name: "Break 10 Psyche-Locks", types: ["Locks"] },
  { name: "Successfully defend Maggey Byrde twice", types: ["3-3","2-1"] },
];
bingoList[14] = [
  { name: "Win \"Farewell, My Turnabout\"", types: ["2-4"] },
  { name: "Finish cross-examining a radio", types: ["2-4"] },
];
bingoList[15] = [
  { name: "Use fingerprint powder and luminol", types: ["1-5"] },
  { name: "Complete all Adrian Andrews cross-examinations", types: ["3-2", "2-4"] },
];
bingoList[16] = [
  { name: "Win a case against both von Karmas", types: ["1-4","2-2","2-3"] },
  { name: "Win \"Rise from the Ashes\"", types: ["1-5"] },
];
bingoList[17] = [
  { name: "Win \"Bridge to the Turnabout\"", types: ["20"] },
  { name: "Defeat Franziska von Karma twice", types: ["JFA","2-2","2-3"] },
];
bingoList[18] = [
  { name: "Complete all Case 2\'s", types: ["1-2", "2-2", "3-2"] },
  { name: "Defeat Godot twice", types: ["TT"] },
];
bingoList[19] = [
  { name: "Win both Samurai cases", types: ["1-3","2-4"] },
  { name: "Get 3 non-penalty Guilty verdicts", types: ["Verdict"] },
];
bingoList[20] = [
  { name: "Break every Psyche-Lock", types: ["Locks"] },
  { name: "Object 200 times", types: ["22"] },
];
bingoList[21] = [
  { name: "Complete all Case 3\'s", types: ["15"] },
  { name: "Complete all cases with Larry Butz", types: ["21"] },
];
bingoList[22] = [
  { name: "Defeat Edgeworth 4 times", types: ["22"] },
  { name: "Finish all cases from one game", types: ["25"] },
];
bingoList[23] = [
  { name: "Complete all Court Days w/o Phoenix as defense lawyer", types: ["TT", "NotPhoenix"] },
  { name: "Complete all Case 4\'s", types: ["18"] },
];
bingoList[24] = [
  { name: "Successfully defend Maya all 3 times", types: ["Maya"] },
  { name: "Complete all 3 Dahlia Hawthorne cases", types: ["TT"] },
];
bingoList[25] = [
  { name: "Get 7 Not Guilty verdicts", types: ["Verdict"] },  
  { name: "Finish all cases related to Fey Family Tree", types: ["TT"] },
];

$(function () { bingo(bingoList, 5, bingoListVersion); });
