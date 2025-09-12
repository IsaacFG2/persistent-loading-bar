function clamp(x, min, max) {
if (x < min) {
return min
} else if (x > max) {
return max
}
return x
}
function setProgress(prog) {
process.stdout.write("\x1b[?25l");
process.stdout.write("\n");
process.stdout.write("\x1b7");
process.stdout.write("\x1b[1;" + (process.stdout.rows - 1).toString() + "r");
process.stdout.write("\x1b[" + process.stdout.rows.toString() + ";1H");
process.stdout.write("[");
let clampedProg = Math.round(clamp(prog, 0, 1) * 100) / 100;
let progString = (clampedProg * 100).toString();
let dotIndex = progString.indexOf(".");
if (dotIndex > -1) {
progString = progString.substring(0, dotIndex);
}
let numLinesBar = process.stdout.columns - (4 + progString.length);
for (let i = 0; i < numLinesBar; i++) {
if (i / numLinesBar < clampedProg) {
process.stdout.write("#");
} else {
process.stdout.write("-");
}
}
process.stdout.write("]");
process.stdout.write(" " + progString + "%");
process.stdout.write("\x1b8");
process.stdout.write("\x1b[1A");
}
function eraseBar() {
process.stdout.write("\x1b7");
process.stdout.write("\x1b[0;" + process.stdout.rows + "r");
process.stdout.write("\x1b[" + process.stdout.rows + ";0H");
process.stdout.write("\x1b[0K");
process.stdout.write("\x1b8");
process.stdout.write("\x1b[?25h");
}
export default { setProgress, eraseBar };
