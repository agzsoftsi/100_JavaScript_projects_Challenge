// Cambiamos a tema light
document.querySelector(".light_t").addEventListener("click", function (e){
  document.getElementById("body-app").classList.add("body-light")
  document.getElementById("body-app").classList.remove("body-dark")
})

// Cambiamos a tema Dark
document.querySelector(".dark_t").addEventListener("click", function (e){
  document.getElementById("body-app").classList.add("body-dark")
  document.getElementById("body-app").classList.remove("body-light")
})

// Definimos una variable Objeto que contenga los atributos del mensaje

const message = []

// al iniciar que cargue la vista previa del color de la fuente y del fondo
/*window.onload = function(){
document.getElementById("fontView").innerHTML = "<div class='colorView'>"
document.getElementById("backView").innerHTML = "<div class='colorView'>"
}*/


// Actualizar selector de color fuente
document.getElementById("fontColor-form").addEventListener("change", function (e){
  const fontR = document.getElementById("fontColorR").value
  const fontG = document.getElementById("fontColorG").value
  const fontB = document.getElementById("fontColorB").value
  //console.log("font = "+fontR+","+fontG+","+fontB)
  document.getElementById("fontView").innerHTML = "<div class='colorView' style='background-color: rgb("+fontR+","+fontG+","+fontB+");'>"
})

// Actualizar selector de color fuente Fondo

document.getElementById("backcolor-form").addEventListener("change", function (e){
  const backR = document.getElementById("backColorR").value
  const backG = document.getElementById("backColorG").value
  const backB = document.getElementById("backColorB").value
  document.getElementById("backView").innerHTML = "<div class='colorView' style='background-color: rgb("+backR+","+backG+","+backB+");'>"
})

// General Objeto de elementos a procesar
document.getElementById("message-form").addEventListener("submit", function (e){
  message.length = 0
  const text=document.getElementById("text_t").value
  const author=document.getElementById("author_t").value
  const fonts=document.getElementById("fonts").value
  const fontSize=document.getElementById("fontSize").value
  //const textAlign=document.getElementById("textAlign").value
  const fontColor = "rgb("+document.getElementById("fontColorR").value+","+document.getElementById("fontColorG").value+","+document.getElementById("fontColorB").value+")"
  const backColor = "rgb("+document.getElementById("backColorR").value+","+document.getElementById("backColorG").value+","+document.getElementById("backColorB").value+")"
  message.push(text.trim())
  message.push(author.trim())
  message.push(fonts)
  message.push(fontSize)
  //message.push(textAlign)
  message.push(fontColor)
  message.push(backColor)


console.log(message)

canvaGenerate(message)

e.preventDefault();
})

// Generar Canva


function canvaGenerate(data){


  let newdata =data[0].split(" ")
  let newText = ""
  let startText = 80
  let jumpText = 10
  if(data[3]==="12px"){
    jumpText = 12
  } else if(data[3]==="16px"){
    jumpText = 16
  }else if(data[3]==="20px"){
    jumpText = 20
  }else if(data[3]==="24px"){
    jumpText = 24
  }
  else if(data[3]==="28px"){
    jumpText = 28
  }else if(data[3]==="32px"){
    jumpText = 32
  }else if(data[3]==="36px"){
    jumpText = 36
  }

  
  let canvas = document.getElementById("messageCanvas")
  let backctx = canvas.getContext("2d")
  backctx.rect(0, 0, 480, 480);
  backctx.fillStyle = data[5];
  backctx.fill();

  let textctx = canvas.getContext("2d")
  textctx.font = `${data[3]} ${data[2]}`
  textctx.fillStyle=data[4];
  textctx.textAlign = "center"
  //textctx.fillText(data[0], 240, 50);
  console.log(newdata)
  if (newdata.length > 5){
    for(let i = 0; i<newdata.length; i++){
      newText += newdata[i] + " "
      console.log(newText.split(" ").length)
          if(newText.split(" ").length > 3){
          textctx.fillText(newText, 240, startText);
          startText += jumpText
          newText=""
          } 
  }
}
  
  else{
    textctx.fillText(data[0], 240, startText);
  }

  textctx.fillText(newText, 240, startText);
  
  
 

  let authorctx = canvas.getContext("2d")
  authorctx.font = `${data[3]} ${data[2]}`
  authorctx.fillStyle=data[4];
  authorctx.fillText("-"+data[1]+"-", 240, 440);
      
}

//trigger de la decarga del canvas
document.getElementById("downloadMessage").addEventListener("click", function (e){
    ReImg.fromCanvas(document.getElementById("messageCanvas")).downloadPng()
    
  
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