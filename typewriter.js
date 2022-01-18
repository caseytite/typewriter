let sentance = "is there anybody out there???";
let timer = 1000;
sentance += " \n";
for (let char of sentance) {
  setTimeout(() => {
    process.stdout.write(char);
    return;
  }, timer);
  timer += 100;
}
