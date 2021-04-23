class slider{
    constructor(){
this.image=[]
this.image[0]="tt.jpg"
this.image[1]="zz.jpg"
this.image[2]="ee.jpg"
this.image[3]="rr.jpeg"


this.links=[]
this.links[0]="#lien"
this.links[1]="#lien"
this.links[2]="#lien"
this.links[3]="#lien"

this.counter=0
setInterval(()=>{
    this.playslider()
},3000)
    }
    playslider(){
        if(this.counter<this.image.length -1){
       this.counter++
        }else{
        this.counter=0
        }
        document.slidershow.src=this.image[this.counter]
        document.getElementById("linkimg").href=this.links[this.counter]
    }
}
onload=new slider()