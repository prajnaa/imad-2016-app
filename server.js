var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var register = {
content1 : {
     body : `	  <h1 class="heading"><u>Admission Form</u></h1>
	  
	  <h3><marquee width="100%" behaviour="scroll" bgcolor="pink">Limited seats available!</marquee></h3>
	  
	<form name='registration'> 
	<fieldset>
		 <legend>Personal information</legend>
		<ul>  
			
			<li><label for="name">Name:</label></li>  
			<li><input type="text" name="name" size="50" /></li>  
			
			<li><label for="fname">Father's name:</label></li>
			<li><input type="text" name="fname" size="50"/></li>
			
			<li><label for="mname">Mother's name:</label></li>
			<li><input type="text" name="mname" size="50"/></li>
			
			<li><label for="dob">Date of birth:</label></li>
			<li><input type="date" name="dob" max="2010-01-01"/></li>
			
			<li><label for="address">Address:</label></li>  
			<li><input type="text" name="address" size="50" /></li>  
			
			<li><label for="state">State:</label></li>  
			<li><select name="state">  
				<option selected="" value="Default">(select a State)</option>  
				<option value="ka">Karnatake</option>  
				<option value="tn">Tamilnadu</option>  
				<option value="ap">Andhra Pradesh</option>  
				<option value="kl">Kerala</option>  
				<option value="dl">Delhi</option>  
			</select></li>  
			
			<li><label for="pin">PIN Code:</label></li>  
			<li><input type="text" name="pin" /></li>  
			
			<li><label for="email">Email:</label></li>  
			<li><input type="text" name="email" size="50" /></li> 
			
			<li><label id="gender">Sex:</label></li>  
			<li><input type="radio" name="sex" value="Male" /><span>Male</span></li>  
			<li><input type="radio" name="sex" value="Female" /><span>Female</span></li> 
			
			<li><label for="ind">Nationality:</label></li>  
			<li><input type="radio" name="ind" value="en" checked /><span>Indian</span></li>  
			<li><input type="radio" name="ind" value="noen" /><span>NRI</span></li>
			
			
			<li><input class="button" type="button" name="submit" value="Submit" onclick="location.href='register2.html'" /></li>  
		</ul>  
	</form>  `
},
content2 : {` 
    <h1 style="color:Red;margin-left:30px"><u>Admission Form</u></h1>
	  
	  <h3><marquee width="100%" behaviour="scroll" bgcolor="pink">Limited seats available!</marquee></h3>
	  
	<form name='registration2'> 
	<fieldset>
		 <legend>Academic Details</legend>
		<ul>  
			<li><label for="marks1">10th Marks(%):</label></li>
			<li><input type="text" name="marks1" size="2"/></li>
			
			<li><label for="marks2">PU Marks(%):</label></li>
			<li><input type="text" name="marks2" size="2"/></li>
			
			<li><label for="school">school name:</label></li>
			<li><input type="text" name="school" size="50"/></li>
			
			<li><label for="clg">college name:</label></li>
			<li><input type="text" name="clg" size="50"/></li>
			
			<li><label for="branch">choose branch:</label></li>  
			<li><select name="branch">  
				<option selected="" value="Default">(select a State)</option>  
				<option value="cs">Computer Science</option>  
				<option value="ec">Electronics and Communications</option>  
				<option value="ee">Electronics and Electricals</option>  
				<option value="me">Mechanical</option>  
				<option value="cv">Civil</option>  
			</select></li>  
			
			<li><label for="desc">Achievements:</label></li>  
			<li><textarea name="desc" id="desc"></textarea></li>  
			
			<li><input class="button" type="button" name="submit" value="Submit" onclick="location.href='register3.html'" /></li>  
		</ul>  
	</form>`
    
}

};

function createTemplate(page)
{
    var body=page.body;
    var htmlTemplate = `<!DOCTYPE html>  
    <html>
     <head>
    <title>Registration form</title>  
    <link rel='stylesheet' href='style.css' />   
    </head> 
     
    <body>  
    	 <h1 class="main"><img src="ui/abcd.jpg" height="100px" width="300px"></h1>
    	  <h4 class="add">
    	  Address:<br>
    	  abcd college of engineering,<br>
    	  opposite xyz arcade,<br>
    	  Bangalore<br>
    	  Mobile:1234567892
    	  </h4>
    	  ${body}
    </body>  
    </html>  
    `;
    return htmlTemplate;
}


app.get('/:registeformr', function (req, res) {
    var registerform = req.params.registerform;
  res.send(createTemplate(register[registerform]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
