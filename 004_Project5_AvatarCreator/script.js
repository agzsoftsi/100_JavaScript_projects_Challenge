/* create carvas to Avatar name

document.getElementById("name_t").addEventListener("input", function(){
  
  //console.log("change")
  let text = document.getElementById("name_t").value
  console.log(text)
  let canvasName = document.getElementById("character_body");
  let textctx = canvasName.getContext("2d");
  textctx.clearReact(0, 0)
  textctx.font = "20px orbitron"
  textctx.textAlign = "center"
  textctx.fillStyle="#FFFFFF";
  textctx.fillText(text, 160, 500);
})



document.getElementById("character_body");





let canvasBody = document.getElementById("character_body");
Avatar name
let backctx = canvasBody.getContext("2d")
backctx.rect(0, 500, 340, 340);
backctx.fillStyle = "#000000";
backctx.fill();
let ctxBody = canvasBody.getContext("2d");
let imgBody = new Image();

// Cambio de Body color

document.getElementById("b0").addEventListener("click", function(){
  console.log("body 0")
  imgBody.src = "./media/CharacterMan/body_0.gif";
  ctxBody.drawImage(imgBody, 0, 0);

})

document.getElementById("b1").addEventListener("click", function(){
  //console.log("body 1")
  imgBody.src = "./media/CharacterMan/body_1.gif";
  ctxBody.drawImage(imgBody, 0, 0);

})

document.getElementById("b2").addEventListener("click", function(){
  //console.log("body 2")
  imgBody.src = "./media/CharacterMan/body_2.gif";
  ctxBody.drawImage(imgBody, 0, 0);

})

document.getElementById("b3").addEventListener("click", function(){
  //console.log("body 3")
  imgBody.src = "./media/CharacterMan/body_3.gif";
  ctxBody.drawImage(imgBody, 0, 0);

})

document.getElementById("b4").addEventListener("click", function(){
  //console.log("body 4")
  imgBody.src = "./media/CharacterMan/body_4.gif";
  ctxBody.drawImage(imgBody, 0, 0);

})

document.getElementById("b5").addEventListener("click", function(){
  //console.log("body 5")
  imgBody.src = "./media/CharacterMan/body_5.gif";
  ctxBody.drawImage(imgBody, 0, 0);

})*/


// catch all values to generate avatar
document.getElementById("avatar-form").addEventListener("submit", function(e){

  let data = []
  let bColor = document.getElementById("avatar-form").bg.value
  let fColor = document.getElementById("avatar-form").fg.value
  let avatarName = document.getElementById("name_t").value
  let bodyColor = document.getElementById("avatar-form").bdg.value
  let eyebrows = document.getElementById("avatar-form").eyeb.value
  let eyebrowsColor = document.getElementById("avatar-form").eyebg.value
  let eye = document.getElementById("avatar-form").eye.value
  let eyeColor = document.getElementById("avatar-form").eyeg.value
  let mouth = document.getElementById("avatar-form").mouth.value
  let hair = document.getElementById("avatar-form").hair.value
  let hairColor = document.getElementById("avatar-form").hairg.value
  let beard = document.getElementById("avatar-form").beard.value
  let beardColor = document.getElementById("avatar-form").beardg.value
  let shirt = document.getElementById("avatar-form").shirt.value
  let shirtColor = document.getElementById("avatar-form").shirtg.value

  //["bgcolor","avatarName","colorName","bodycolor","eyebrowstype","eyebrowsColor","eyetype","eyeColor","mouthtype","hairtype","haircolor","beardtype","beardcolor","shirttype","shirtcolor"]
  data.push(bColor)
  data.push(avatarName)
  data.push(fColor)
  data.push(bodyColor)
  data.push(eyebrows)
  data.push(eyebrowsColor)
  data.push(eye)
  data.push(eyeColor)
  data.push(mouth)
  data.push(hair)
  data.push(hairColor)
  data.push(beard)
  data.push(beardColor)
  data.push(shirt)
  data.push(shirtColor)

 

  avatarGenerate(data)

e.preventDefault()
})


//Generate Canva with parameters

function avatarGenerate(data){
  let canvas = document.getElementById("character");
  
  //background color
  let backctx = canvas.getContext("2d")
  backctx.rect(0, 0, 340, 520);
  backctx.fillStyle = data[0];
  backctx.fill();

  //forecolor Avatar name
  let textctx = canvas.getContext("2d")
  textctx.font = "24px Orbitron"
  textctx.fillStyle=data[2];
  textctx.textAlign = "center"
  textctx.fillText(data[1], 170, 510);

  // body create
  let ctxBody = canvas.getContext("2d");
  let imgBody = new Image();
  if(data[3]!=""){
    imgBody.src = "./media/CharacterMan/"+data[3]+".gif";
    ctxBody.drawImage(imgBody, 0, 0);
  }

    // eyebrows create
    let ctxEyebrows= canvas.getContext("2d");
    let imgEyebrows = new Image();
    if(data[4]=="eyebrows_1"){
      imgEyebrows.src = "./media/CharacterMan/sample1"+data[5]+".png";
      ctxEyebrows.drawImage(imgEyebrows, 0, 0);
    }else if(data[4]=="eyebrows_2"){
      imgEyebrows.src = "./media/CharacterMan/sample2"+data[5]+".png";
      ctxEyebrows.drawImage(imgEyebrows, 0, 0);
    }else if(data[4]=="eyebrows_3"){
      imgEyebrows.src = "./media/CharacterMan/sample3"+data[5]+".png";
      ctxEyebrows.drawImage(imgEyebrows, 0, 0);
    }else if(data[4]=="eyebrows_4"){
      imgEyebrows.src = "./media/CharacterMan/sample4"+data[5]+".png";
      ctxEyebrows.drawImage(imgEyebrows, 0, 0);
    }else if(data[4]=="eyebrows_5"){
      imgEyebrows.src = "./media/CharacterMan/sample5"+data[5]+".png";
      ctxEyebrows.drawImage(imgEyebrows, 0, 0);
    }else if(data[4]=="eyebrows_6"){
      imgEyebrows.src = "./media/CharacterMan/sample6"+data[5]+".png";
      ctxEyebrows.drawImage(imgEyebrows, 0, 0);
    }

        // eyes create
        let ctxEye= canvas.getContext("2d");
        let imgEye = new Image();
        if(data[6]=="eye_1"){
          imgEye.src = "./media/CharacterMan/sample1"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }else if(data[6]=="eye_2"){
          imgEye.src = "./media/CharacterMan/sample2"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }else if(data[6]=="eye_3"){
          imgEye.src = "./media/CharacterMan/sample3"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }else if(data[6]=="eye_4"){
          imgEye.src = "./media/CharacterMan/sample4"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }else if(data[6]=="eye_5"){
          imgEye.src = "./media/CharacterMan/sample5"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }else if(data[6]=="eye_6"){
          imgEye.src = "./media/CharacterMan/sample6"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }
    

        // mouth create
        let ctxMouth= canvas.getContext("2d");
        let imgMouth= new Image();
        imgMouth.src = "./media/CharacterMan/sample"+data[8]+".png";
        ctxMouth.drawImage(imgMouth, 0, 0);
               
    
          // hair create
          let ctxHair= canvas.getContext("2d");
          let imgHair = new Image();
          if(data[9]=="hair_1"){
            imgHair.src = "./media/CharacterMan/sample1hairC_1.gif";
            ctxHair.drawImage(imgHair, 0, 0);
          }else if(data[9]=="hair_2"){
            imgHair.src = "./media/CharacterMan/sample2"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }else if(data[9]=="hair_3"){
            imgHair.src = "./media/CharacterMan/sample3"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }else if(data[9]=="hair_4"){
            imgHair.src = "./media/CharacterMan/sample4"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }else if(data[9]=="hair_5"){
            imgHair.src = "./media/CharacterMan/sample5"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }else if(data[9]=="hair_6"){
            imgHair.src = "./media/CharacterMan/sample6"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }else if(data[9]=="hair_7"){
            imgHair.src = "./media/CharacterMan/sample7"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }else if(data[9]=="hair_8"){
            imgHair.src = "./media/CharacterMan/sample8"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }else if(data[9]=="hair_9"){
            imgHair.src = "./media/CharacterMan/sample9"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }else if(data[9]=="hair_10"){
            imgHair.src = "./media/CharacterMan/sample10"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }else if(data[9]=="hair_11"){
            imgHair.src = "./media/CharacterMan/sample11"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }
          
          // shirt create
          let ctxShirt= canvas.getContext("2d");
          let imgShirt = new Image();
          if(data[13]=="shirt_1"){
            imgShirt.src = "./media/CharacterMan/sample1"+data[14]+".png";
            ctxShirt.drawImage(imgShirt, 0, 0);
          }else if(data[13]=="shirt_2"){
            imgShirt.src = "./media/CharacterMan/sample2"+data[14]+".png";
            ctxShirt.drawImage(imgShirt, 0, 0);
          }else if(data[13]=="shirt_3"){
            imgShirt.src = "./media/CharacterMan/sample3"+data[14]+".png";
            ctxShirt.drawImage(imgShirt, 0, 0);
          }else if(data[13]=="shirt_4"){
            imgShirt.src = "./media/CharacterMan/sample4"+data[14]+".png";
            ctxShirt.drawImage(imgShirt, 0, 0);
          }else if(data[13]=="shirt_5"){
            imgShirt.src = "./media/CharacterMan/sample5"+data[14]+".png";
            ctxShirt.drawImage(imgShirt, 0, 0);
          }else if(data[13]=="shirt_6"){
            imgShirt.src = "./media/CharacterMan/sample6"+data[14]+".png";
            ctxShirt.drawImage(imgShirt, 0, 0);
          }



                    // beard create
                    let ctxBeard= canvas.getContext("2d");
                    let imgBeard = new Image();
                    if(data[11]=="beard_1"){
                      imgBeard.src = "./media/CharacterMan/sample1beardC_1.gif";
                      ctxBeard.drawImage(imgBeard, 0, 0);
                    }else if(data[11]=="beard_2"){
                      imgBeard.src = "./media/CharacterMan/sample2"+data[12]+".png";
                      ctxBeard.drawImage(imgBeard, 0, 0);
                    }else if(data[11]=="beard_3"){
                      imgBeard.src = "./media/CharacterMan/sample3"+data[12]+".png";
                      ctxBeard.drawImage(imgBeard, 0, 0);
                    }else if(data[11]=="beard_4"){
                      imgBeard.src = "./media/CharacterMan/sample4"+data[12]+".png";
                      ctxBeard.drawImage(imgBeard, 0, 0);
                    }else if(data[11]=="beard_5"){
                      imgBeard.src = "./media/CharacterMan/sample5"+data[12]+".png";
                      ctxBeard.drawImage(imgBeard, 0, 0);
                    }else if(data[11]=="beard_6"){
                      imgBeard.src = "./media/CharacterMan/sample6"+data[12]+".png";
                      ctxBeard.drawImage(imgBeard, 0, 0);
                    }else if(data[11]=="beard_7"){
                      imgBeard.src = "./media/CharacterMan/sample7"+data[12]+".png";
                      ctxBeard.drawImage(imgBeard, 0, 0);
                    }else if(data[11]=="beard_8"){
                      imgBeard.src = "./media/CharacterMan/sample8"+data[12]+".png";
                      ctxBeard.drawImage(imgBeard, 0, 0);
                    }else if(data[11]=="beard_9"){
                      imgBeard.src = "./media/CharacterMan/sample9"+data[12]+".png";
                      ctxBeard.drawImage(imgBeard, 0, 0);
                    }
                    else if(data[11]=="beard_10"){
                      imgBeard.src = "./media/CharacterMan/sample10"+data[12]+".png";
                      ctxBeard.drawImage(imgBeard, 0, 0);
                    }

  
}