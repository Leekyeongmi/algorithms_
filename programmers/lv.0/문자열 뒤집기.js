// sol1)
function solution(my_string) {
  var answer = '';
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }
  return answer;
}

// sol2)
function solution(my_string) {
  return my_string.split('').reverse().join('');
}
