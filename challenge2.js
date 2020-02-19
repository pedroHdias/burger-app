function solution(s) {
  var c = s[0];
  if (c >= "A" && c <= "Z") {
    // please fix condition
    return "upper";
  } else if (c >= "a" && c <= "z") {
    // please fix condition
    return "lower";
  } else if (c >= "0" && c <= "9") {
    // please fix condition
    return "digit";
  } else {
    return "other";
  }
}

solution("test");
solution("Test");
solution("1");
solution("*");
