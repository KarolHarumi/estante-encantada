(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-143a03d1"],{"095a":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"story"},[a("div",{staticClass:"nav"},[a("h1",[e._v("Era uma vez um Safari")]),a("div",[a("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){return e.addComicBubbles()}}},[e._v("Iniciar História")]),a("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){return e.destroy()}}},[e._v("Finalizar")])],1)]),a("div",{staticClass:"image",attrs:{id:"kids-safari"}})])},n=[],o={methods:{addComicBubbles:function(){window.CharactersBubbles=new window.ComicBubbles("kids-safari",{canvas:{readonly:!1}},{bubble:[{id:"b1",text:"Olá ".concat(localStorage.getItem("name"),"!"),x:150,y:20,width:194,height:69,fontSize:"20px",background:"#fff",color:"#000",bubbleStyle:"speak",tailLocation:"e",tailX:200,tailY:56.06,visible:!1},{id:"b2",text:"Fala do Narrador...",className:"lion",lineHeight:1,x:30,y:200,width:"auto",height:"auto",fontSize:"20px",background:"#6b8e23",color:"#ffffff",bubbleStyle:"none",tailLocation:"s",tailX:533,tailY:177,visible:!1}]}),window.CharactersBubbles.onCanvasLoad((function(){var e=this.getBubbleById("b1"),t=this.getBubbleById("b2");e.setClassName("lioness").delay(1e3).setWidth("auto").setHeight("auto").pumpUp((function(){t.delay(1e3).fadeIn((function(){e.delay(2e3).fadeOut(),this.delay(2e3).fadeOut((function(){e.delay(1e3).setText("Eu também tenho \n ".concat(localStorage.getItem("age")," anos")).pumpUp((function(){t.delay(1e3).fadeIn((function(){e.delay(2e3).fadeOut(),this.delay(2e3).fadeOut((function(){e.delay(1e3).setFontSize(25).setText("Diálogo 3...").fadeIn((function(){t.delay(1e3).setText("CRAC!").setFontWeight("bold").setX(483).setY(54).setTailX(531).setTailY(178).setBackground("#ff0000").pumpUp(100,(function(){t.delay(2e3).fadeOut((function(){this.remove(),e.moveTo(100,120,"fast").setText("Diálogo 4...")}))}))}))}))}))}))}))}))}))}))},destroy:function(){window.DestroyComicBubbles(window.CharactersBubbles)}}},s=o,d=(a("89db"),a("2877")),l=Object(d["a"])(s,i,n,!1,null,"1b5e953e",null);t["default"]=l.exports},"89db":function(e,t,a){"use strict";var i=a("c28e"),n=a.n(i);n.a},c28e:function(e,t,a){}}]);
//# sourceMappingURL=chunk-143a03d1.a24f6bc6.js.map