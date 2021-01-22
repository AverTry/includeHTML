
const finishedLoadingDom = new Promise((resolve, reject) => {
  const includeHTML = () => {
    const tag = document.getElementsByTagName("include") 
    for (let i = 0; i < tag.length; i++) { 
      const node = tag[i]
      const file = node.getAttribute("DS-Template") 
      if (file) {
      console.log('file: ', file);
        fetch(file).then(resp => resp.text())
          .then(data => {
            node.innerHTML = data
          })
          .then( () => {
            node.removeAttribute("DS-Template")
            includeHTML()
          }).catch(error => reject(error))
        return
      }
    }
    resolve()
  };console.time();includeHTML()
})

finishedLoadingDom
.then(() => {
  [ 
    './js/populate.js',
    './js/DS-Paginate.js',
    './js/DS-SideBar.js'
  ].forEach((src) => {
    const script = document.createElement('script')
    script.src = src
    console.log('src: ', src);
    document.head.appendChild(script)
  })
})
.then(() => {
  console.log('your function here!')
})
.catch(error => console.error('includeHTML Error : ', error))
