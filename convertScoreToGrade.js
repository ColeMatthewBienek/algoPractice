// /*Write a function called "convertScoreToGrade".

// Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

// Notes:

//     (100 - 90) --> 'A'
//     (89 - 80) --> 'B'
//     (79 - 70) --> 'C'
//     (69 - 60) --> 'D'
//     (59 - 0) --> 'F'
//     If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

// var output = convertScoreToGrade(91);
// console.log(output); // --> 'A'

// */
// //creqate a grade table with keys repping the bottom threshold of the grade
// // let gradeTable = [
// //     ['A', 90],
// //     ['B', 80],
// //     ['C', 70],
// //     ['D', 60],
// //     ['F', 0]
// // ]


// //     let gradeTable = [
// //         ['A+', 98],
// //         ['A', 93],
// //         ['A-', 90],
// //         ['B+', 88],
// //         ['B', 83],
// //         ['B-', 80],
// //         ['C+', 78],
// //         ['C', 73],
// //         ['C-', 70],
// //         ['D+', 68],
// //         ['D', 63]
// //         ['D-', 60],
// //         ['F', 0]
// //     ]

//     function convertScoreToGrade (score) {
//         let gradeTable = [
//             ['A+', 98],
//             ['A', 93],
//             ['A-', 90],
//             ['B+', 88],
//             ['B', 83],
//             ['B-', 80],
//             ['C+', 78],
//             ['C', 73],
//             ['C-', 70],
//             ['D+', 68],
//             ['D', 63],
//             ['D-', 60],
//             ['F', 0]
//         ]
//     console.log(gradeTable[1,1])
//         //
//         //if the score is greater than 100 or less than 0, return invalid score
//         if (score > 100 || score < 0){
//             return `INVALID SCORE`;
//         }
//         let letterGrade = "";
    
//         for (i = 0; i < gradeTable.length; i++){
//                if (score >= gradeTable[i][1]){
//                 letterGrade = gradeTable[i][0];
//                 break;
//             }
//         }
//     return letterGrade;
//     }
    
   

// console.log(convertScoreToGrade(81));



function getLongestOfThreeWords(word1, word2, word3) {
    let words = [...arguments];
    console.log(words)
    return words.reduce((pre, cur) => cur.length > pre.length ? cur : pre);
  }

  console.log(getLongestOfThreeWords('help', 'one', 'three'));