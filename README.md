# persistent-loading-bar
A loading bar for node.js that stay's at the bottom of the screen.
```javascript
import loadingBar from "persistent-loading-bar";
for (let i = 0; i < 100; i++) {
console.log("blah");
if (i < 99) {
function example(prog) {
loadingBar.setProgress(prog);
console.log("Example 1/" + prog.toString);
}
setTimeout(loadingBar.setProgress, i * 100, i / 100);
} else {
setTimeout(loadingBar.eraseBar, i * 100);
}
}
```
