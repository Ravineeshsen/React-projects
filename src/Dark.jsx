import {useState} from 'react';

export default function Dark() {
  var [click,updateData] = useState(true);
const lightmode = () => {
  if (click) {
    document.getElementById("body").style.backgroundColor = "pink";
    click = false;
  }
  else {
    document.getElementById("body").style.backgroundColor = "blue";
    console.log(click)
    click = true;
  }
}
  return (
      <div>
          <input type="checkbox" id="toggle"/>
            <label id="switch" for="toggle">
        <div id="circle" onClick={() => lightmode()}></div>
                <div id="text">Light mode</div>
                <div id="text2">Dark mode</div>
            </label>
      </div>
  )
}