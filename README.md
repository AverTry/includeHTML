# includeHTML
## A Pure Modern Javascript HTML Include tag with nesting.

   ### Inject HTMLfiles into htmlfiles including nested templates, then load Dom-dependant Javascript files.

    Add to HTML via Include Tags like in this example... (Contents Not Included)!
---------------------------------------------------------------------------------------------------------

```html
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>DataSafe ver.5</title>
		<link rel="stylesheet" href="./offline/css/bootstrap.min.css">
		<link rel="stylesheet" href="./offline/font/css/all.min.css">
		<link rel="stylesheet" href="./css/DS-Styles.css">
		<link rel="stylesheet" href="./css/DS-SideBar.css">
		<script src="./offline/js/bootstrap.min.js" defer></script>
		<script src="./js/incudeHTML.js" defer></script>
	</head>

	<body>
		<include class="flexBack" style="display: flex; height: 100vh;">
			<contents>
				<include DS-Template="./DS-Header.html"></include>
				<main-db>
					<include DS-Template="./DS-SideBarL.html"></include>
					<include DS-Template="./DS-Form.html"></include>
					<include DS-Template="./DS-SideBarR.html"></include>
				</main-db>	
				<include DS-Template="./DS-Footer.html"></include>
			</contents>	
		</div>
	</body>

</html>  
```

---------------------------------------------------------------------------------------------------------
