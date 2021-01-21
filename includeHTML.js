/*
    Pure Modern Javascript, Fast and reliable. [Ditch Internet Explorer - Please]
    Inject HTMLfiles into htmlfiles including nested templates, then load Dom-dependant Javascript files.

    Add to HTML via Include Tags like in this example... (Contents Not Included)!
---------------------------------------------------------------------------------------------------------
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
		<script src="./js/DS-Initialise.js" defer></script>
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
---------------------------------------------------------------------------------------------------------
*/

const includeHTML = () => {
  const tag = document.getElementsByTagName("include") // rename for different <Tag> name.
  for (let i = 0; i < tag.length; i++) { // No forEach here as you need the return to break out of function, for nested templates.
    const node = tag[i]
    const file = node.getAttribute("DS-Template") // rename for different attribute - remember to update any previously created tags.
    if (file) {
      fetch(file).then(resp => resp.text()) // Fetch the files - 
        .then(data => {
          node.innerHTML = data // Insert the files
        })
        .then( () => {
          node.removeAttribute("DS-Template") // rename for different attribute - remember to update any previously created tags.
          includeHTML() // Remove Tags and repeat Function until no tags left to find.
        }).catch(error => console.error(error))
      return // This return prevents promisifying the function, but is necessary for nested templates.
    }
  } // Add any function you need here, after the For Loop, for when the Dom is complete.
  [ 
    './js/populate.js',
    './js/DS-Paginate.js',
    './js/DS-SideBar.js'
  ].forEach((src) => {
  const script = document.createElement('script')
  script.src = src
  document.head.appendChild(script)
  })
};includeHTML()
