var bingoListVersion = "0.1";
var bingoList = [];

bingoList[1] = [
  { name: "Win \"The First Turnabout\"", types: ["Intro"] },
  { name: "Receive a full penalty in court", types: ["Penalty"] },
];
bingoList[2] = [
  { name: "Break a Psyche-Lock", types: ["Locks"] },
  { name: "Win a trial for grand larceny", types: [""] },
];
bingoList[3] = [
  { name: "Win \"The Lost Turnabout\"", types: ["Intro"] },
  { name: "", types: [""] },
];
bingoList[4] = [
  { name: "", types: [""] },
  { name: "", types: [""] },
];
bingoList[5] = [
  { name: "", types: [""] },
  { name: "", types: [""] },
];
bingoList[6] = [
  { name: "Borrow Missile", types: [""] },
  { name: "", types: [""] },
];
bingoList[7] = [
  { name: "", types: [""] },
  { name: "", types: [""] },
];
bingoList[8] = [
  { name: "", types: [""] },
  { name: "Finish cross-examining a parrot", types: [""] },
];
bingoList[9] = [
  { name: "Examine every stepladder", types: ["Ladders"] },
  { name: "Present Attorney's Badge to 20 different people", types: ["Badge"] },
];
bingoList[10] = [
  { name: "Examine every ladder", types: ["Ladders"] },
  { name: "Successfully defend a magician", types: [""] },
];
bingoList[11] = [
  { name: "Win one case from each game", types: [""] },
  { name: "Finish cross-examining a radio", types: [""] },
];
bingoList[12] = [
  { name: "Complete every Lotta Hart cross-examination", types: ["12"] },
  { name: "Complete all Case 2\'s", types: ["12"] },
];
bingoList[13] = [
  { name: "", types: [""] },
  { name: "", types: [""] },
];
bingoList[14] = [
  { name: "", types: [""] },
  { name: "", types: [""] },
];
bingoList[15] = [
  { name: "", types: [""] },
  { name: "Complete all Case 3\'s", types: ["15"] },
];
bingoList[16] = [
  { name: "Complete all Adrian Andrews cross-examinations", types: [""] },
  { name: "", types: [""] },
];
bingoList[17] = [
  { name: "", types: [""] },
  { name: "Complete all Case 4\'s", types: ["17"] },
];
bingoList[18] = [
  { name: "", types: [""] },
  { name: "Win a case against both von Karmas", types: ["18"] },
];
bingoList[19] = [
  { name: "Successfully defend Lana Skye", types: [""] },
  { name: "Defeat Franziska von Karma twice", types: ["JFA"] },
];
bingoList[20] = [
  { name: "Defeat Godot twice", types: ["TT"] },
  { name: "Win \"Bridge to the Turnabout\"", types: ["20"] },
];
bingoList[21] = [
  { name: "", types: [""] },
  { name: "", types: [""] },
];
bingoList[22] = [
  { name: "", types: [""] },
  { name: "Object 200 times", types: ["22"] },
];
bingoList[23] = [
  { name: "Complete all Court Days w/o Phoenix as defense lawyer", types: ["TT"] },
  { name: "Get 3 non-penalty Guilty verdicts", types: [""] },
];
bingoList[24] = [
  { name: "Successfully defend Maya all 3 times", types: ["Maya"] },
  { name: "Complete all 3 Dahlia Hawthorne cases", types: ["TT"] },
];
bingoList[25] = [
  { name: "Get 7 Not Guilty verdicts", types: [""] },  
  { name: "Finish all cases from one game", types: ["25"] },
];

$(function () { bingo(bingoList, 5, bingoListVersion); });
