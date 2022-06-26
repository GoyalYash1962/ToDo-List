
exports.getDate=function()
{
  var today=new Date();
  var day="";
  var options={
    day:"numeric",
    weekday: "long",
    year:"numeric",
    month: "long"
  }
  // if (today.getDay()===6 || today.getDay()===7)
  // {
  //   day="Weeknd";
  // }
  // else{
  //   day="Weekday";
  // }
  day=today.toLocaleDateString("en-US",options);
  return day;
}

// Both the Functions are doing the same things

module.exports.getDay=getDay;
function getDay()
{
  var today=new Date();
  var day="";
  var options={
    day:"numeric",
    weekday: "long"
  }
  // if (today.getDay()===6 || today.getDay()===7)
  // {
  //   day="Weeknd";
  // }
  // else{
  //   day="Weekday";
  // }
  day=today.toLocaleDateString("en-US",options);
  return day;
}

console.log(module.exports);
