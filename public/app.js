var initialInput;
var submitButton;
 var database;

  var config = {
    apiKey: {API-KEY},
    authDomain: {AUTH-DOMAIN},
    databaseURL: [DATABASE-URL],
    projectId: [PROJECT-ID],
    storageBucket: [STORAGE-BUCKET],
    messagingSenderId: {ID}
  };

 firebase.initializeApp(config);
 database = firebase.database();
 console.log(firebase);

 var ref = database.ref('title');

 function gotData(data) {
	//console.log(data.val());
	var title = data.val();
	var keys = Object.keys(title);
	console.log(keys);
	for (var i = 0; i < keys.length; i++) {
		var k = keys[i];
		var author = title[k].author;
		var name = title[k].name;
		var url = title[k].url;
		var link = name.link(url);
		var magazine = title[k].url;
		var magazine_url = title[k].magazine_url;
		var mag_link = magazine.link(magazine_url);
		var claps = title[k].claps;
		//console.log(author, name);
		//var li = document.createElement('li', author + ': ' + name);

		createItem(author, link, claps, i);
		//document.getElementById("title").innerHTML = name;

		//console.log(li);
		//console.log(li.parent);
		//li.parent('titlelist');
	}
 }


 function createItem(author, link, claps, i) {
	var table = document.getElementById("myTable");
	var row = table.insertRow(i);
	row.innerHTML = link + " by " + author + " " + claps + " like this";

 }

 function errData(data) {
	console.log('Error!');
	console.log(err);
 }

ref.on('value', gotData, errData);

//  var data = {
// 	author: "Joann",
// 	name: "How To Be Amazing",
// 	color: "blue"
// };

// ref.push(data);
