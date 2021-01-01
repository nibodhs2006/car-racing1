class Form{
constructor(){
this.button=createButton("play")
this.input=createInput("name")
this.greeting=createElement('h3')
}
hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
     }
display(){
var title=createElement('h2')
title.html("Car Racing Game")
title.position(200,20)
this.input.position(130,160)
this.button.position(250,200)

this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()
player.name=this.input.value()
playerCount+=1
player.update()
player.updateCount(playerCount)
this.greeting.html("welcome player "+player.name)
this.greeting.position(150,200)
})
}

}