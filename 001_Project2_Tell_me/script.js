var synth = window.speechSynthesis;
var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('#text_t');
var voiceSelect = document.querySelector('select');

//var pitch = document.querySelector('#pitch');
//var pitchValue = document.querySelector('.pitch-value');
//var rate = document.querySelector('#rate');
//var rateValue = document.querySelector('.rate-value');

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
      if ( aname < bname ) return -1;
      else if ( aname == bname ) return 0;
      else return +1;
  });
  var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = '';
  
  
  // i = 0 if your one all languages
  // i = 19 for Microsoft Voices
  for(let i = 1; i < voices.length-4 ; i++) {
    var option = document.createElement('option');
   // option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
    
      
          // custom option of speechers CARLOS Google

        if (voices[i].lang === "id-ID"){
          option.textContent= "Batari - id-ID";
        } else if (voices[i].lang === "de-DE"){
          option.textContent= "Agathe - de-DE";
        } else if (voices[i].lang === "es-ES"){
          option.textContent= "Sandra - es-ES";
        } else if (voices[i].lang === "es-US"){
          option.textContent= "Milena - es-CO";
        } else if (voices[i].lang === "fr-FR"){
          option.textContent= "Aline - fr-FR";
        } else if (voices[i].lang === "it-IT"){
          option.textContent= "Isabella - it-IT";
        } else if (voices[i].lang === "nl-NL"){
          option.textContent= "Angelien - nl-NL";
        } else if (voices[i].lang === "pl-PL"){
          option.textContent= "Alicja - pl-PL";
        } else if (voices[i].lang === "pt-BR"){
          option.textContent= "Teresa - pt-BR";
        } else if (voices[i].name === "Google UK English Female"){
          option.textContent= "Elisabeth - en-UK";
        } else if (voices[i].name === "Google UK English Male"){
          option.textContent= "Carlos - en-UK";
        } else if (voices[i].lang === "en-US"){
          option.textContent= "Rachel - en-US";
        } else if (voices[i].lang === "ru-RU"){
          option.textContent= "Karina - ru-RU";
        } else if (voices[i].lang === "hi-IN"){
          option.textContent= "Kumari - hi-IN";
        } else if (voices[i].lang === "zh-TW"){
          option.textContent= "Lian - zh-TW";
        } else if (voices[i].lang === "ja-JP"){
          option.textContent= "Natsumi - ja-JP";
        } else if (voices[i].lang === "ko-KR"){
          option.textContent= "Suni - ko-KR";
        }    
    



       /* if (voices[i].name === "Google Bahasa Indonesia"){
          option.textContent= "Batari - id-ID";
        }
          else if (voices[i].name === "Google UK English Male"){
          option.textContent= "Carlos - EN-UK";
        } else if (voices[i].name === "Google español de Estados Unidos"){
          option.textContent= "Andrea - ES-US";
        }  else if (voices[i].name === "Google US English"){
          option.textContent= "Rachel - EN-US";
        } else if (voices[i].name === "Google français"){
          option.textContent= "Laura - FR-FR";
        } else if (voices[i].name === "Google italiano"){
          option.textContent= "Isabella - IT-IT";
        } else if (voices[i].name === "Google português do Brasil"){
          option.textContent= "Teresa - PR-BR";
        } else if (voices[i].name === "Google Deutsch"){
          option.textContent= "Olga - DE-GE";
        } else if (voices[i].name === "Google español"){
          option.textContent= "Sandra - ES-ES";
        }*/
    



    //custom option of speechers Microsoft
    /*if (voices[i].lang === "es-ES"){
      option.textContent = "Maria - ES";
    }else if (voices[i].lang === "en-US"){
      option.textContent = "Rachel - EN";
    }**/
    
    
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;

}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak(){
    if (synth.speaking) {
        //console.error('speechSynthesis.speaking');
        //console.log(synth.speaking)
        return;
    }
    if (inputTxt.value !== '') {
    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
        
        finishSpeech()
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        avatarShow(voiceSelect.selectedOptions[0].getAttribute('data-lang'), voiceSelect.selectedOptions[0].getAttribute('data-name'))
        break;
      }
    }
    //utterThis.pitch = pitch.value;
    //utterThis.rate = rate.value;
    synth.speak(utterThis);
    
  }
}

//cuando se genere el evento del submit se ejecutara la accion de generar el speech
inputForm.onsubmit = function(event) {
  event.preventDefault();

  speak();

  inputTxt.blur();
  avatarShow();
}

/*pitch.onchange = function() {
  pitchValue.textContent = pitch.value;
}

rate.onchange = function() {
  rateValue.textContent = rate.value;
}*/


//Cada vez que el usuario seleccion un nuevo speaker se ejecutara la accion de generar el speech
voiceSelect.onchange = function(){
  speak();
  avatarShow()
}



// Incorporamos el avatar segun el select
function avatarShow(avatar, avatarN){

  //let textToSpeak = document.querySelector('#text_t').value

  //console.log(avatar)

 

  if(avatar === "es-ES"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/es-ESOriginalAnimacion.gif" class="avatar text-center img-fluid animate__animated animate__fadeIn" name="es-ES" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/es-ES.fw.png")
  }
  else if(avatar === "en-US"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/en-USOriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="en-US" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/en-US.fw.png")
  }
  else if(avatar === "de-DE"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/de-DEOriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="de-DE" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/de-DE.fw.png")
  }
  else if(avatar === "es-US"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/es-USOriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="es-US" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/es-US.fw.png")
  }
  else if(avatar === "fr-FR"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/fr-FROriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="fr-FR" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/fr-FR.fw.png")
  }
  else if(avatar === "hi-IN"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/hi-INOriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="hi-IN" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/hi-IN.fw.png")
  }
  else if(avatar === "it-IT"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/it-ITOriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="it-IT" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/it-IT.fw.png")
  }
  else if(avatar === "ja-JP"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/ja-JPOriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="ja-JP" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/ja-JP.fw.png")
  }
  else if(avatar === "ko-KR"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/ko-KROriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="ko-KR" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/ko-KR.fw.png")
  }
  else if(avatar === "nl-NL"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/nl-NLOriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="nl-NL" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/nl-NL.fw.png")
  }
  else if(avatar === "pl-PL"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/pt-PTOriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="pl-PL" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/pl-PL.fw.png")
  }
  else if(avatar === "pt-BR"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/pt-BROriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="pt-BR" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/pt-BR.fw.png")
  }
  else if(avatar === "ru-RU"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/ru-RUOriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="ru-RU" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/ru-RU.fw.png")
  }
  else if(avatar === "zh-TW"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/zh-TWOriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="zh-TW" id="ImageAvatar"></div>`
    document.getElementById("languageImage").setAttribute("src","./media/flags/zh-TW.fw.png")
  }
  else if(avatar === "en-GB"){
    if(avatarN==="Google UK English Male"){
      document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/en-GBMOriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="en-GBM" id="ImageAvatar"></div>`
    }else if(avatarN==="Google UK English Female"){
      document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/en-GBFOriginalAnimacion.gif" class="text-center img-fluid animate__animated animate__fadeIn" name="en-GBF" id="ImageAvatar"></div>`
    }
    
    document.getElementById("languageImage").setAttribute("src","./media/flags/en-GB.fw.png")
  }
  /*for(let i=0; i < textToSpeak.length; i++)
  
    {
      if(textToSpeak[i] !== " " ){
        document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Rachel/RachelOriginalAnimacion.gif" class="text-center img-fluid" ></div>`
      }
      else{
        
        /*setInterval(function(){
          document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Rachel/RachelOriginalAnimacion2.gif" class="text-center img-fluid" ></div>`
        }, 1000);
        
        
  
      }
      }*/

  
}

function finishSpeech(r){
  //console.log("termino")
  let avatar = document.getElementById("ImageAvatar").getAttribute("name")

  if(avatar === "es-ES"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/es-ESOriginalAnimacionS.gif" class="avatar text-center img-fluid" name="es-ES" id="ImageAvatar"></div>`
    
  }
  else if(avatar === "en-US"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/en-USOriginalAnimacionS.gif" class="text-center img-fluid" name="en-US" id="ImageAvatar"></div>`
    
  }
  else if(avatar === "de-DE"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/de-DEOriginalAnimacionS.gif" class="text-center img-fluid" name="de-DE" id="ImageAvatar"></div>`
  } 
  else if(avatar === "es-US"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/es-USOriginalAnimacionS.gif" class="text-center img-fluid" name="es-US" id="ImageAvatar"></div>`
    
  }
  else if(avatar === "fr-FR"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/fr-FROriginalAnimacionS.gif" class="text-center img-fluidn" name="fr-FR" id="ImageAvatar"></div>`
    
  }
  else if(avatar === "hi-IN"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/hi-INOriginalAnimacionS.gif" class="text-center img-fluid" name="hi-IN" id="ImageAvatar"></div>`

  }
  else if(avatar === "it-IT"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/it-ITOriginalAnimacionS.gif" class="text-center img-fluid" name="it-IT" id="ImageAvatar"></div>`
   
  }
  else if(avatar === "ja-JP"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/ja-JPOriginalAnimacionS.gif" class="text-center img-fluid" name="ja-JP" id="ImageAvatar"></div>`
  
  }
  else if(avatar === "ko-KR"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/ko-KROriginalAnimacionS.gif" class="text-center img-fluid" name="ko-KR" id="ImageAvatar"></div>`
    
  }
  else if(avatar === "nl-NL"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/nl-NLOriginalAnimacionS.gif" class="text-center img-fluid" name="nl-NL" id="ImageAvatar"></div>`

  }
  else if(avatar === "pl-PL"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/pt-PTOriginalAnimacionS.gif" class="text-center img-fluid " name="pl-PL" id="ImageAvatar"></div>`
    
  }
  else if(avatar === "pt-BR"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/pt-BROriginalAnimacionS.gif" class="text-center img-fluid " name="pt-BR" id="ImageAvatar"></div>`
   
  }
  else if(avatar === "ru-RU"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/ru-RUOriginalAnimacionS.gif" class="text-center img-fluid " name="ru-RU" id="ImageAvatar"></div>`
    
  }
  else if(avatar === "zh-TW"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/zh-TWOriginalAnimacionS.gif" class="text-center img-fluid " name="zh-TW" id="ImageAvatar"></div>`
    
  }
  else if(avatar === "en-GBM"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/en-GBMOriginalAnimacionS.gif" class="text-center img-fluid " name="en-GBM" id="ImageAvatar"></div>`
    
  }
  else if(avatar === "en-GBF"){
    document.getElementById("Avatar").innerHTML=`<div> <img src="./media/Avatars/en-GBFOriginalAnimacionS.gif" class="text-center img-fluid " name="en-GBF" id="ImageAvatar"></div>`
    
  }

}

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