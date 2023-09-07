
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
let d=new Date;
t=d.toLocaleTimeString('en-US');
date=d.toLocaleDateString(undefined,options);
document.getElementById('time').innerHTML=t+" <br>Date "+date;
}, 1000);
