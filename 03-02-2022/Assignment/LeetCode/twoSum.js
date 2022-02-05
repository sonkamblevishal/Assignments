nums = [2, 7, 11, 15];

for (var i = 0; i < nums.length; i++) {
  for (var j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] == 9) {
      document.write(i, " " + j);
      console.log(i, +j);
    }
  }
}
