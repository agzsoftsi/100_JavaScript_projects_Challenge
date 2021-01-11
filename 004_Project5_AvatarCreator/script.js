
// define the type of person woman or man
document.getElementById("gender1").addEventListener("click", function (){
  //console.log("male")
  document.getElementById("male-form").classList.remove("hide-element")
  document.getElementById("female-form").classList.add("hide-element")
  
})

document.getElementById("gender2").addEventListener("click", function (){
  //console.log("female")
  document.getElementById("female-form").classList.remove("hide-element")
  document.getElementById("male-form").classList.add("hide-element")
  
})



// catch all values to generate avatar
document.getElementById("avatar-form").addEventListener("submit", function(e){

  let data = []

  let gender = document.getElementById("avatar-form").gender.value
  console.log(gender)

  if(gender == "male"){
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
  let print = document.getElementById("avatar-form").print.value
  let pant = document.getElementById("avatar-form").pant.value
  let pantColor = document.getElementById("avatar-form").pantg.value
  let shoes = document.getElementById("avatar-form").shoes.value
  let shoesColor = document.getElementById("avatar-form").shoesg.value
  let accessory = document.getElementById("avatar-form").acc.value

  /*["bgcolor","avatarName","colorName","bodycolor","eyebrowstype","eyebrowsColor",
  "eyetype","eyeColor","mouthtype","hairtype","haircolor","beardtype","beardcolor",
  "shirttype","shirtcolor","print","panttype","pantcolor","shoestype","shoescolor"]*/
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
  data.push(print)
  data.push(pant)
  data.push(pantColor)
  data.push(shoes)
  data.push(shoesColor)
  data.push(accessory)
  avatarGenerate(data)
  }
  
  else if(gender == "female"){
    let bColor = document.getElementById("avatar-form").wbg.value
    let fColor = document.getElementById("avatar-form").wfg.value
    let avatarName = document.getElementById("wname_t").value
    let bodyColor = document.getElementById("avatar-form").wbdg.value
    let eyebrows = document.getElementById("avatar-form").weyeb.value
    let eyebrowsColor = document.getElementById("avatar-form").weyebg.value
    let eye = document.getElementById("avatar-form").weye.value
    let eyeColor = document.getElementById("avatar-form").weyeg.value
    let mouth = document.getElementById("avatar-form").wmouth.value
    let hair = document.getElementById("avatar-form").whair.value
    let hairColor = document.getElementById("avatar-form").whairg.value
    let accessory = document.getElementById("avatar-form").accw.value
    let shirt = document.getElementById("avatar-form").wshirt.value
    let shirtColor = document.getElementById("avatar-form").wshirtg.value
    let print = document.getElementById("avatar-form").wprint.value
    let pant = document.getElementById("avatar-form").wpant.value
    let pantColor = document.getElementById("avatar-form").wpantg.value
    let shoes = document.getElementById("avatar-form").wshoes.value
    let shoesColor = document.getElementById("avatar-form").wshoesg.value
    
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
    data.push(accessory)
    data.push(shirt)
    data.push(shirtColor)
    data.push(print)
    data.push(pant)
    data.push(pantColor)
    data.push(shoes)
    data.push(shoesColor)
    avatarGenerateW(data)
    
  }
  

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
    imgBody.src = "./media/CharacterMan/"+data[3]+".png";
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
        }else if(data[6]=="eye_7"){
          imgEye.src = "./media/CharacterMan/sample7"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }else if(data[6]=="eye_8"){
          imgEye.src = "./media/CharacterMan/sample8"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }
        else if(data[6]=="eye_9"){
          imgEye.src = "./media/CharacterMan/sample9"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }
        else if(data[6]=="eye_10"){
          imgEye.src = "./media/CharacterMan/sample10"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }
    

        // mouth create
        let ctxMouth= canvas.getContext("2d");
        let imgMouth= new Image();
        imgMouth.src = "./media/CharacterMan/sample"+data[8]+".png";
        ctxMouth.drawImage(imgMouth, 0, 0);
               
     // Accesories create
     let ctxAcc= canvas.getContext("2d");
     let imgAcc= new Image();
     imgAcc.src = "./media/CharacterMan/sample"+data[20]+".png";
     ctxAcc.drawImage(imgAcc, 0, 0);


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
          }else if(data[9]=="hair_12"){
            imgHair.src = "./media/CharacterMan/sample12"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }else if(data[9]=="hair_13"){
            imgHair.src = "./media/CharacterMan/sample13"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }else if(data[9]=="hair_14"){
            imgHair.src = "./media/CharacterMan/sample14"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }
          else if(data[9]=="hair_15"){
            imgHair.src = "./media/CharacterMan/sample15"+data[10]+".png";
            ctxHair.drawImage(imgHair, 0, 0);
          }

          // pants create
          let ctxPant= canvas.getContext("2d");
          let imgPant = new Image();
          if(data[16]=="pant_1"){
            imgPant.src = "./media/CharacterMan/sample1"+data[17]+".png";
            ctxPant.drawImage(imgPant, 0, 0);
          }else if(data[16]=="pant_2"){
            imgPant.src = "./media/CharacterMan/sample2"+data[17]+".png";
            ctxPant.drawImage(imgPant, 0, 0);
          }else if(data[16]=="pant_3"){
            imgPant.src = "./media/CharacterMan/sample3"+data[17]+".png";
            ctxPant.drawImage(imgPant, 0, 0);
          }else if(data[16]=="pant_4"){
            imgPant.src = "./media/CharacterMan/sample4"+data[17]+".png";
            ctxPant.drawImage(imgPant, 0, 0);
          }else if(data[16]=="pant_5"){
            imgPant.src = "./media/CharacterMan/sample5"+data[17]+".png";
            ctxPant.drawImage(imgPant, 0, 0);
          }


          // pants create
          let ctxShoes= canvas.getContext("2d");
          let imgShoes = new Image();
          if(data[18]=="shoes_1"){
            imgShoes.src = "./media/CharacterMan/sample1"+data[19]+".png";
            ctxShoes.drawImage(imgShoes, 0, 0);
          }else if(data[18]=="shoes_2"){
            imgShoes.src = "./media/CharacterMan/sample2"+data[19]+".png";
            ctxShoes.drawImage(imgShoes, 0, 0);
          }else if(data[18]=="shoes_3"){
            imgShoes.src = "./media/CharacterMan/sample3"+data[19]+".png";
            ctxShoes.drawImage(imgShoes, 0, 0);
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

             // print create

             let ctxPrint= canvas.getContext("2d");
             let imgPrint = new Image();
             
               imgPrint.src = "./media/CharacterMan/sample1"+data[15]+".png";
               ctxPrint.drawImage(imgPrint, 0, 0);
     

            

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


// creation of woman avatar

function avatarGenerateW(data){
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
     imgBody.src = "./media/CharacterWoman/"+data[3]+".png";
     ctxBody.drawImage(imgBody, 0, 0);
   }

   // eyebrows create
   let ctxEyebrows= canvas.getContext("2d");
   let imgEyebrows = new Image();
   if(data[4]=="eyebrows_1"){
     imgEyebrows.src = "./media/CharacterWoman/sample1"+data[5]+".png";
     ctxEyebrows.drawImage(imgEyebrows, 0, 0);
   }else if(data[4]=="eyebrows_2"){
     imgEyebrows.src = "./media/CharacterWoman/sample2"+data[5]+".png";
     ctxEyebrows.drawImage(imgEyebrows, 0, 0);
   }else if(data[4]=="eyebrows_3"){
     imgEyebrows.src = "./media/CharacterWoman/sample3"+data[5]+".png";
     ctxEyebrows.drawImage(imgEyebrows, 0, 0);
   }else if(data[4]=="eyebrows_4"){
     imgEyebrows.src = "./media/CharacterWoman/sample4"+data[5]+".png";
     ctxEyebrows.drawImage(imgEyebrows, 0, 0);
   }else if(data[4]=="eyebrows_5"){
     imgEyebrows.src = "./media/CharacterWoman/sample5"+data[5]+".png";
     ctxEyebrows.drawImage(imgEyebrows, 0, 0);
   }else if(data[4]=="eyebrows_6"){
     imgEyebrows.src = "./media/CharacterWoman/sample6"+data[5]+".png";
     ctxEyebrows.drawImage(imgEyebrows, 0, 0);
   }


         // eyes create
         let ctxEye= canvas.getContext("2d");
         let imgEye = new Image();
         if(data[6]=="eye_1"){
           imgEye.src = "./media/CharacterWoman/sample1"+data[7]+".png";
           ctxEye.drawImage(imgEye, 0, 0);
         }else if(data[6]=="eye_2"){
           imgEye.src = "./media/CharacterWoman/sample2"+data[7]+".png";
           ctxEye.drawImage(imgEye, 0, 0);
         }else if(data[6]=="eye_3"){
           imgEye.src = "./media/CharacterWoman/sample3"+data[7]+".png";
           ctxEye.drawImage(imgEye, 0, 0);
         }else if(data[6]=="eye_4"){
           imgEye.src = "./media/CharacterWoman/sample4"+data[7]+".png";
           ctxEye.drawImage(imgEye, 0, 0);
         }else if(data[6]=="eye_5"){
           imgEye.src = "./media/CharacterWoman/sample5"+data[7]+".png";
           ctxEye.drawImage(imgEye, 0, 0);
         }else if(data[6]=="eye_6"){
           imgEye.src = "./media/CharacterWoman/sample6"+data[7]+".png";
           ctxEye.drawImage(imgEye, 0, 0);
         }else if(data[6]=="eye_7"){
          imgEye.src = "./media/CharacterWoman/sample7"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }else if(data[6]=="eye_8"){
          imgEye.src = "./media/CharacterWoman/sample8"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }
        else if(data[6]=="eye_9"){
          imgEye.src = "./media/CharacterWoman/sample9"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }
        else if(data[6]=="eye_10"){
          imgEye.src = "./media/CharacterWoman/sample10"+data[7]+".png";
          ctxEye.drawImage(imgEye, 0, 0);
        }


           // mouth create
        let ctxMouth= canvas.getContext("2d");
        let imgMouth= new Image();
        imgMouth.src = "./media/CharacterWoman/sample"+data[8]+".png";
        ctxMouth.drawImage(imgMouth, 0, 0);


         // Accesories create
         let ctxAcc= canvas.getContext("2d");
         let imgAcc= new Image();
         imgAcc.src = "./media/CharacterWoman/sample"+data[11]+".png";
         ctxAcc.drawImage(imgAcc, 0, 0);

       

  // shoes create
  let ctxShoes= canvas.getContext("2d");
  let imgShoes = new Image();
  if(data[17]=="shoes_1"){
    imgShoes.src = "./media/CharacterWoman/sample1"+data[18]+".png";
    ctxShoes.drawImage(imgShoes, 0, 0);
  }else if(data[17]=="shoes_2"){
    imgShoes.src = "./media/CharacterWoman/sample2"+data[18]+".png";
    ctxShoes.drawImage(imgShoes, 0, 0);
  }else if(data[17]=="shoes_3"){
    imgShoes.src = "./media/CharacterWoman/sample3"+data[18]+".png";
    ctxShoes.drawImage(imgShoes, 0, 0);
  }

        // pants create
        let ctxPant= canvas.getContext("2d");
        let imgPant = new Image();
        if(data[15]=="pant_1"){
          imgPant.src = "./media/CharacterWoman/sample1"+data[16]+".png";
          ctxPant.drawImage(imgPant, 0, 0);
        }else if(data[15]=="pant_2"){
          imgPant.src = "./media/CharacterWoman/sample2"+data[16]+".png";
          ctxPant.drawImage(imgPant, 0, 0);
        }else if(data[15]=="pant_3"){
          imgPant.src = "./media/CharacterWoman/sample3"+data[16]+".png";
          ctxPant.drawImage(imgPant, 0, 0);
        }else if(data[15]=="pant_4"){
          imgPant.src = "./media/CharacterWoman/sample4"+data[16]+".png";
          ctxPant.drawImage(imgPant, 0, 0);
        }else if(data[15]=="pant_5"){
          imgPant.src = "./media/CharacterWoman/sample5"+data[16]+".png";
          ctxPant.drawImage(imgPant, 0, 0);
        }  


         // shirt create
         let ctxShirt= canvas.getContext("2d");
         let imgShirt = new Image();
         if(data[12]=="shirt_1"){
           imgShirt.src = "./media/CharacterWoman/sample1"+data[13]+".png";
           ctxShirt.drawImage(imgShirt, 0, 0);
         }else if(data[12]=="shirt_2"){
           imgShirt.src = "./media/CharacterWoman/sample2"+data[13]+".png";
           ctxShirt.drawImage(imgShirt, 0, 0);
         }else if(data[12]=="shirt_3"){
           imgShirt.src = "./media/CharacterWoman/sample3"+data[13]+".png";
           ctxShirt.drawImage(imgShirt, 0, 0);
         }else if(data[12]=="shirt_4"){
           imgShirt.src = "./media/CharacterWoman/sample4"+data[13]+".png";
           ctxShirt.drawImage(imgShirt, 0, 0);
         }else if(data[12]=="shirt_5"){
           imgShirt.src = "./media/CharacterWoman/sample5"+data[13]+".png";
           ctxShirt.drawImage(imgShirt, 0, 0);
         }else if(data[12]=="shirt_6"){
           imgShirt.src = "./media/CharacterWoman/sample6"+data[13]+".png";
           ctxShirt.drawImage(imgShirt, 0, 0);
         }


         // print create

         let ctxPrint= canvas.getContext("2d");
         let imgPrint = new Image();
         
           imgPrint.src = "./media/CharacterWoman/sample1"+data[14]+".png";
           ctxPrint.drawImage(imgPrint, 0, 0);

         
        // hair create
        let ctxHair= canvas.getContext("2d");
        let imgHair = new Image();
        if(data[9]=="hair_1"){
          imgHair.src = "./media/CharacterWoman/sample1hairC_1.gif";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_2"){
          imgHair.src = "./media/CharacterWoman/sample2"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_3"){
          imgHair.src = "./media/CharacterWoman/sample3"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_4"){
          imgHair.src = "./media/CharacterWoman/sample4"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_5"){
          imgHair.src = "./media/CharacterWoman/sample5"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_6"){
          imgHair.src = "./media/CharacterWoman/sample6"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_7"){
          imgHair.src = "./media/CharacterWoman/sample7"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_8"){
          imgHair.src = "./media/CharacterWoman/sample8"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_9"){
          imgHair.src = "./media/CharacterWoman/sample9"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_10"){
          imgHair.src = "./media/CharacterWoman/sample10"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_11"){
          imgHair.src = "./media/CharacterWoman/sample11"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_12"){
          imgHair.src = "./media/CharacterWoman/sample12"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_13"){
          imgHair.src = "./media/CharacterWoman/sample13"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_14"){
          imgHair.src = "./media/CharacterWoman/sample14"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }else if(data[9]=="hair_15"){
          imgHair.src = "./media/CharacterWoman/sample15"+data[10]+".png";
          ctxHair.drawImage(imgHair, 0, 0);
        }

       
}


//trigger de la decarga del canvas
document.getElementById("downloadMessage").addEventListener("click", function (e){
  ReImg.fromCanvas(document.getElementById("character")).downloadPng()
  

})

// bajar imagen
ReImg = {

OutputProcessor: function(encodedData, svgElement) {

    var isPng = function() {
        return encodedData.indexOf('data:image/png') === 0;
    };

    var downloadImage = function(data, filename) {
        var a = document.createElement('a');
        a.href = data;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
    };

    return {
        toBase64: function() {
            return encodedData;
        },
        toImg: function() {
            var imgElement = document.createElement('img');
            imgElement.src = encodedData;
            return imgElement;
        },
        toCanvas: function(callback) {
            var canvas = document.createElement('canvas');
            var boundedRect = svgElement.getBoundingClientRect();
            canvas.width = boundedRect.width;
            canvas.height = boundedRect.height;
            var canvasCtx = canvas.getContext('2d');

            var img = this.toImg();
            img.onload = function() {
                canvasCtx.drawImage(img, 0, 0);
                callback(canvas);
            };
        },
        toPng: function() {
            if (isPng()) {
                var img = document.createElement('img');
                img.src = encodedData;
                return img;
            }

            this.toCanvas(function(canvas) {
                var img = document.createElement('img');
                img.src = canvas.toDataURL();
                return img;
            });
        },
        toJpeg: function(quality) { // quality should be between 0-1
            quality = quality || 1.0;
            (function(q) {
                this.toCanvas(function(canvas) {
                    var img = document.createElement('img');
                    img.src = canvas.toDataURL('image/jpeg', q);
                    return img;
                });
            })(quality);
        },
        downloadPng: function(filename) {
            filename = filename || 'image.png';
            if (isPng()) {
                // it's a canvas already
                downloadImage(encodedData, filename);
                return;
            }

            // convert to canvas first
            this.toCanvas(function(canvas) {
                downloadImage(canvas.toDataURL(), filename);
            });
        }
    };
},

fromSvg: function(svgElement) {
    var svgString = new XMLSerializer().serializeToString(svgElement);
    return new this.OutputProcessor('data:image/svg+xml;base64,' + window.btoa(svgString), svgElement);
},

fromCanvas: function(canvasElement) {
    var dataUrl = canvasElement.toDataURL();
    return new this.OutputProcessor(dataUrl);
}

};

if(typeof exports === 'object' && typeof module !==  void 0) {
module.exports = {
    ReImg:ReImg
};
}

else {
window.ReImg = ReImg;
}