
const finishedLoadingDom = new Promise((resolve, reject) => {
  const includeHTML = () => {
    const tag = document.getElementsByTagName("include") 
    for (let i = 0; i < tag.length; i++) { 
      const node = tag[i]
      const file = node.getAttribute("DS-Template") 
      if (file) {
      console.log('1st load :', file);
        fetch(file).then(resp => resp.text())
          .then(data => {
            // throw 'Reject Promise Test'
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
    console.log('2nd Append head :', src);
    document.head.appendChild(script)
  })
})
.then(() => {
  console.log('3rd : your code here!')
  console.timeEnd()
})
.catch(error => console.error('includeHTML Error : ', error))
