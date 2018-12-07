class User {
  constructor(id,name,age,telephone) {
    this.id = id
    this.name  = name,
    this.age = age,
    this.telephone = telephone
    User.all.push(this)
  }

  renderUser(){

    let mainDiv = document.querySelector('.user')
    mainDiv.innerHTML = ''
    let div = document.createElement('div')
    div.className = 'user-card'
    let h5 = document.createElement('h5')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let button = document.createElement('button')

    h3.dataset.id = this.id
    h3.innerText = this.name
    h5.innerText = this.age
    p.innerText = this.telephone
    // button.type = 'submit'
    button.innerText = "Log Out"

    button.addEventListener('click',(event)=>{

      console.log('what')

      let doc = document.querySelector('#wrapper')
      let doc2 = document.querySelector('.user')
      let doc3 = document.querySelector('.detail')
      // debugger;
      doc.innerHTML = ''
      doc2.innerHTML = ''
      doc3.innerHTML = ''
      logIn()
    })

    mainDiv.append(div)
    div.append(button,h3,h5,p)

  }
}
User.all = []
