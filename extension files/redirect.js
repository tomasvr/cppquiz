var list = [7, 8, 9, 12 ,13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 173, 174, 175, 203, 207, 208, 209];
var max = list.length-1;
var min = 0;
var pageNmStr = list[Math.floor(Math.random()*(max-min+1)+min)].toString();
var redir = "http://www.mycppquiz.com/question.php?qid=".concat(pageNmStr);
setTimeout(function(){location.href=redir} , 1);
