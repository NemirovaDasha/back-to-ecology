(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f365fd22"],{"0906":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("button",{staticClass:"help-message",style:t.position,attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}},[e("p",[t._t("default")],2)])},i=[],o={props:{position:{type:String,require:!1}}},n=o,r=(s("f395"),s("2877")),m=Object(r["a"])(n,a,i,!1,null,null,null);e["a"]=m.exports},1296:function(t,e,s){"use strict";s("2ce4")},"2ce4":function(t,e,s){},"2e27":function(t,e,s){"use strict";s("43e4")},"3b01":function(t,e,s){"use strict";s("b51e")},"43e4":function(t,e,s){},"5aff":function(t,e,s){"use strict";s("fb59")},"8b30":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("main",{staticClass:"main house js-no-overflow"},[e("BasePreloader"),e("HouseInfo",{attrs:{"end-game":t.endGame},on:{"unblock-game":function(e){t.unblockGame=!0},"reload-game":t.reloadGame}}),e("HouseBackground"),e("HouseTrash",{key:t.houseKey,attrs:{"unblock-game":t.unblockGame},on:{"end-game":function(e){t.endGame=!0}}}),e("TypoLink2",{attrs:{href:{name:"Home"}}},[t._v("Выйти на главную")]),e("TypoLink2",{staticClass:"back-to-game",attrs:{href:{name:"Game"}}},[t._v("Вернуться к игре")])],1)},i=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"house__info"},[e("transition",{attrs:{name:"house-text"}},[0===t.showBlockId&!t.endGame?e("div",{staticClass:"house__text-with-image"},[e("img",{attrs:{src:"assets/img/game/house/moose.svg"}}),e("div",{staticClass:"house__text"},[e("p",[t._v("В обычной жизни человек производит много отходов. Житель города в среднем производит около 300 кг отходов в год. По весу это сравнимо со средним лосем, а по объему – с тремя большими холодильниками.")]),e("TypoGameButton",{attrs:{"click-function":"next-step"},on:{"next-step":t.switchStep}},[t._v("Что можно сделать?")])],1),e("img",{attrs:{src:"assets/img/game/house/fridges.svg"}})]):t._e()]),e("transition",{attrs:{name:"house-text"}},[1===t.showBlockId&!t.endGame?e("div",{staticClass:"house__text"},[e("p",[t._v("Посмотрите как может выглядеть парк, если люди кидают мусор на улице и не убирают за собой после отдыха.")]),e("p",[t._v("Никому не нравится находиться в таком месте. Давай посмотрим как правильно можно за собой прибираться.")]),e("TypoGameButton",{attrs:{"click-function":"next-step"},on:{"next-step":t.switchStep}},[t._v("Дальше")])],1):t._e()]),e("transition",{attrs:{name:"house-text"}},[2===t.showBlockId&!t.endGame?e("div",{staticClass:"house__text"},[e("p",[t._v("На баках подписано какой вид мусора туда можно выбрасывать. Найди все предметы и разложи их в правильные баки.")]),e("p",{staticClass:"mod-only-lg"},[t._v("Перетягивай предметы c помощью мыши.")]),e("p",{staticClass:"mod-no-lg"},[t._v("Перетягивай предметы с помощью пальца.")])]):t._e()]),e("transition",{attrs:{name:"house-text"}},[t.endGame&2===t.showBlockId?e("div",{staticClass:"house__text"},[e("p",[t._v("Молодец! Ты правильно рассортировал весь мусор.")]),e("p",[t._v("Давай теперь узнаем как не допускать такой ситуации с мусором.")]),e("TypoGameButton",{attrs:{"click-function":"next-step"},on:{"next-step":t.switchStep}},[t._v("Что можно сделать?")])],1):t._e()]),e("transition",{attrs:{name:"house-text"}},[t.endGame&3===t.showBlockId?e("div",{staticClass:"house__text"},[e("TypoH2Bold",[t._v("Что же можно сделать?")]),e("p",[t._v("Не бросай мусор на улице, выкидывай только в специальные места.")]),e("p",[t._v("Старайся использовать вместо одноразовых вещей использовать многоразовые.")]),e("p",[t._v("Тогда будет меньше мусора, а вокруг будет чище.")]),e("button",{staticClass:"t-link1 t-orange game__link",staticStyle:{"margin-right":"20px"},attrs:{type:"button"},on:{click:t.startAgain}},[t._v("Играть снова")]),e("router-link",{staticClass:"t-link1 game__link",attrs:{to:{name:"Things"}}},[t._v("Как это сделать?")])],1):t._e()])],1)},n=[],r=(s("a18c"),{data(){return{showBlockId:0}},props:{endGame:{type:Boolean,require:!0}},methods:{switchStep(){this.showBlockId+=1,2===this.showBlockId&&this.$emit("unblock-game")},startAgain(){this.showBlockId=2,this.$emit("reload-game")}}}),m=r,l=(s("5aff"),s("2877")),c=Object(l["a"])(m,o,n,!1,null,null,null),h=c.exports,u=function(){var t=this;t._self._c;return t._m(0)},g=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"house__background"},[e("div",{staticClass:"house__trees"},[e("img",{attrs:{src:"assets/img/game/house/trees/tree1_1.svg"}}),e("img",{attrs:{src:"assets/img/game/house/trees/tree2.svg"}}),e("img",{attrs:{src:"assets/img/game/house/trees/tree3.svg"}})]),e("img",{staticClass:"house__table",attrs:{src:"assets/img/game/house/table.svg"}}),e("img",{staticClass:"house__glade",attrs:{src:"assets/img/game/house/background.svg"}})])}],p={},d=p,v=(s("3b01"),Object(l["a"])(d,u,g,!1,null,null,null)),_=v.exports,f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"house__trash-containe"},[e("div",{staticClass:"house__bins"},t._l(t.binList,(function(s){return e("img",{key:s.id,class:t.binClass(s.type),attrs:{id:s.type,src:s.image},on:{dragover:function(t){t.preventDefault()},drop:function(e){return e.preventDefault(),t.drop.apply(null,arguments)}}})})),0),e("div",{staticClass:"house__shadows"},[e("img",{attrs:{src:"assets/img/game/house/bins/shadow1.svg"}}),e("img",{attrs:{src:"assets/img/game/house/bins/shadow1.svg"}}),e("img",{class:{"m-rotate":t.unblockGame},attrs:{src:"assets/img/game/house/bins/shadow1.svg"}})]),e("div",{staticClass:"house__trash"},t._l(t.trashList,(function(s){return e("img",{key:s.id,class:{"block-game":!t.unblockGame},style:s.position,attrs:{id:s.type+"/"+s.id,src:s.image,draggable:"true"},on:{dragstart:t.dragStart,dragover:function(t){t.stopPropagation()}}})})),0),t.helpParameter.show?e("BaseGameHelp",{attrs:{position:t.helpParameter.position},on:{close:function(e){t.helpParameter.show=!1}}},[t._v(t._s(t.helpParameter.text))]):t._e()],1)},b=[],w=s("0906"),k={components:{BaseGameHelp:w["a"]},props:{unblockGame:{type:Boolean,require:!1}},data(){return{trashList:[{id:1,image:"assets/img/game/house/trash/bottle.svg",position:"left: 40%; bottom: 1vw;",type:"plastic"},{id:2,image:"assets/img/game/house/trash/bottle.svg",position:"width: 5.5vw;right: 15vw; bottom: 15.5vw; transform: scale(-1, 1) rotate(-10deg);",type:"plastic"},{id:3,image:"assets/img/game/house/trash/bottle.svg",position:"right: 2%; bottom: 38vw;",type:"plastic"},{id:4,image:"assets/img/game/house/trash/can.svg",position:"right: 35%; bottom: 5vw; width: 6vw; transform: scale(-1, 1) rotate(-17deg);",type:"metal"},{id:5,image:"assets/img/game/house/trash/can.svg",position:"left: 34%; bottom: 6vw; width: 6vw;",type:"metal"},{id:6,image:"assets/img/game/house/trash/can.svg",position:"right: 10%; bottom: 0; width: 6vw;",type:"metal"},{id:7,image:"assets/img/game/house/trash/cup.svg",position:"left: 23%; bottom: 9vw; width: 4vw;",type:"plastic"},{id:8,image:"assets/img/game/house/trash/cup.svg",position:"width: 3.5vw; right: 20vw; bottom: 11.5vw; transform: scale(-1, 1) rotate(-10deg);",type:"plastic"},{id:9,image:"assets/img/game/house/trash/paper.svg",position:"width: 2.5vw; right: 14vw; bottom: 12.5vw;",type:"paper"},{id:10,image:"assets/img/game/house/trash/paper.svg",position:"width: 2.5vw; right: 48%; bottom: 9vw;",type:"paper"},{id:11,image:"assets/img/game/house/trash/paper.svg",position:"width: 2.5vw; left: 29%; bottom: 0vw;",type:"paper"},{id:12,image:"assets/img/game/house/trash/paper.svg",position:"width: 2.5vw; left: 13%; bottom: 13vw;",type:"paper"}],binList:[{id:1,image:"assets/img/game/house/bins/plastic.svg",type:"plastic"},{id:2,image:"assets/img/game/house/bins/metal.svg",type:"metal"},{id:3,image:"assets/img/game/house/bins/paper.svg",type:"paper"}],gameCounter:0,helpParameter:{show:!1,text:"",position:"",textList:[{id:0,text:"Это пластиковая бутылка"},{id:1,text:"Это пластиковый одноразовый стаканчик"},{id:2,text:"Это металлическая банка"},{id:3,text:"Это бумажный фантик"}]}}},methods:{drop(t){const e=t.dataTransfer.getData("trash_name"),s=e.split("/"),a=s[0],i=s[1],o=t.target.id;if(a===o){const t=document.getElementById(e);t.classList.add("mod-hidden"),this.gameCounter=this.gameCounter+1}else switch(this.helpParameter.show=!0,this.helpParameter.position=this.trashList[i-1].position,a){case"plastic":this.helpParameter.text=i<4?this.helpParameter.textList[0].text:this.helpParameter.textList[1].text;break;case"metal":this.helpParameter.text=this.helpParameter.textList[2].text;break;case"paper":this.helpParameter.text=this.helpParameter.textList[3].text;break}12===this.gameCounter&&this.$emit("end-game")},dragStart(t){const e=t.target;t.dataTransfer.setData("trash_name",e.id)},binClass(t){return this.unblockGame?"paper"===t?t+" m-rotate":t:t+" block-game"}}},y=k,x=(s("2e27"),Object(l["a"])(y,f,b,!1,null,null,null)),C=x.exports,G=s("af5e"),B={components:{BasePreloader:G["a"],HouseTrash:C,HouseBackground:_,HouseInfo:h},data(){return{endGame:!1,unblockGame:!1,houseKey:0}},methods:{init(){document.body.classList.add("no-overflow")},reloadGame(){this.houseKey+=1,this.endGame=!1}},mounted(){this.init()}},P=B,L=(s("1296"),Object(l["a"])(P,a,i,!1,null,null,null));e["default"]=L.exports},b51e:function(t,e,s){},bcd4:function(t,e,s){},f395:function(t,e,s){"use strict";s("bcd4")},fb59:function(t,e,s){}}]);