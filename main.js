window.onload = () =>
{
 const months =
 [
  'Jan','Feb','Mar','Apr',
  'May','Jun','Jul','Aug',
  'Sep','Oct','Nov','Dec'
 ];

 function fmt(text)
 {
  if(text < 10)
  {
   text = '0' + text;
  }
  return text;
 }

 setInterval(() =>
 {
  const date = new Date();
  const time = fmt(date.getHours()%12) + ':' + fmt(date.getMinutes()) + ':' + fmt(date.getSeconds()) + ' ' + (date.getHours() >= 12 ? 'p.m.' : 'a.m.');
  const day = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  document.getElementById('time').innerHTML = time;
  document.getElementById('date').innerHTML = day;
 },10);

 /*====================================================================================================================================================*/

 [].forEach.call(document.getElementsByTagName('td'),elem => elem.onclick = () =>
 {
  let color = elem.innerHTML;
  [].forEach.call(document.getElementsByClassName('clr-fg'),fg => fg.style.color = color);
  [].forEach.call(document.getElementsByClassName('clr-bg'),bg => bg.style.backgroundColor = color);
 });

 /*====================================================================================================================================================*/

 const canvas = document.getElementById('canvas');
 const context = canvas.getContext('2d');

 function clear()
 {
  context.fillStyle = '#000000';
  context.fillRect(0,0,canvas.width,canvas.height);
 }

 function log(msg)
 {
  context.fillStyle = '#ffffff';
  context.font = '24px Audiowide';
  context.fillText(msg,0,0);
 }

 document.getElementById('run').onclick = () =>
 {
  const js = document.getElementById('editor').textContent;
  try
  {
   clear();
   eval(js);
  } 
  catch(ex)
  {
   log(ex.message);
  }
 }
};
