var name=prompt("Ënter Name");
var start_slice=prompt("Ënter start_slice");
if(isNaN(start_slice))
{
  Alert("Ënter Valid details")
}
var end_slice=prompt("Ënter end_slice");
if(isNaN(end_slice))
{
  Alert("Ënter Valid details")
}
alert(name.slice(start_slice,end_slice));