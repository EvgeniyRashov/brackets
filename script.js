'use strick'
function brackets(f) {
    var text = document.getElementsByTagName("input")[0];
    var val=text.value;

    function checkBrackets(str = '') {
      let stack = [], open = "(", close = ")";
      for (const ch of str){
        let i = open.indexOf(ch);
        if (i > -1) stack.push(close[i]);
        if (close.includes(ch) && ch != stack.pop()) return false
      }
      return stack.length == 0;
    }

    if (!checkBrackets(val)) {
      //alert('ошибка')
	  document.getElementById("STR").style.backgroundColor="red";
	  document.getElementById("span").innerHTML = "<span style=\"color: red;\">Ошибка расставления последовательности скобок</span>";
    } else {
	  document.getElementById("STR").style.backgroundColor="green";
	  document.getElementById("span").innerHTML = "<span style=\"color: green;\">Все верно</span>";
	}
    
	return false;
  }