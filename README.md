# includeHTML
## A Pure Modern Javascript HTML Include tag with nesting.

   ### Inject HTMLfiles into htmlfiles including nested templates, then load Dom-dependant Javascript files.

    Add to HTML via Include Tags like in this example...
---------------------------------------------------------------------------------------------------------

```html
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Include HTML Sample</title>
		<script src="./js/incudeHTML.js" defer></script>
	</head>

	<body>
		<div class="flexBack" style="display: flex; height: 100vh;">
			<contents>
				<include DS-Template="./Header.html"></include>
				<main-db>
					<include DS-Template="./SideBarL.html"></include>
					<include DS-Template="./Form.html"></include>
					<include DS-Template="./SideBarR.html"></include>
				</main-db>	
				<include DS-Template="./Footer.html"></include>
			</contents>	
		</div>
	</body>

</html>  
```

---------------------------------------------------------------------------------------------------------
