var user = {
  "name": "QiZhang79",
  "id": "001",
  "avatar_url": "https://avatars2.githubusercontent.com/u/21212693?v=4",
  "location": "Chicago",
  "created_at": "2016-08-24T05:08:13Z"
}

$('#result').hide();
$('#button').on("click",function(e){
	$('#result').show();
	$('#result').append('<img src="' + user["avatar_url"] + '" />');
	$('#name').append('<a href="https://github.com/'+user["name"]+'">' + user["name"] + '</a>');
	$('#id').append(user["id"]);
	$('#location').append(user["location"]);
	$('#start').append(user["created_at"]);
});
