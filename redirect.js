var max = 209
var min = 7
var pageNmStr = Math.floor(Math.random()*(max-min+1)+min).toString();
var redir = "http://www.mycppquiz.com/question.php?qid=".concat(pageNmStr);
setTimeout(function(){location.href=redir} , 1);
