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
};
