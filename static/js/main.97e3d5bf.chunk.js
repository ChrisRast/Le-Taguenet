(this["webpackJsonple-taguenet"]=this["webpackJsonple-taguenet"]||[]).push([[0],{183:function(e,t,a){e.exports=a(323)},320:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(39),l=a(175),c=a(20),o=a(21),s=a(23),u=a(22),d=a(24),f=a(116),h=a(27),m=a(7),p=a.n(m),g=a(332),v=a(42),b=a(334),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={value:""},a.typing=!1,a.onChangeValidateWord=a.onChangeValidateWord.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"onChangeValidateWord",value:function(e){var t=this.context.validateWord,a=this.props.word,n=e.target.value;"function"===typeof t&&t(n,a),this.setState({value:n})}},{key:"isValid",value:function(){var e=this.props.word,t=this.state.value;return e.validity||!t}},{key:"getMenu",value:function(){var e=this.props,t=e.difficulty,a=e.word,n=this.state.value;return i.a.createElement(g.a,{basic:!0,compact:!0,button:!0,icon:i.a.createElement(v.a,{size:"small",fitted:!0,name:"help"}),style:{margin:"0",padding:".58928571em .58928571em"}},i.a.createElement(g.a.Menu,{direction:"left"},i.a.createElement(g.a.Item,null,"Lettres: ",n.length,"/",a.strict.length),t<=2&&i.a.createElement(g.a.Item,null,"Canton: ",a.canton)))}},{key:"getInputPlaceholder",value:function(){var e=this.props,t=e.word,a=3-e.difficulty;return t.strict.substring(0,a)}},{key:"render",value:function(){var e=this.props.word;return i.a.createElement(b.a,{type:"text",className:"text word",error:!this.isValid(),onChange:this.onChangeValidateWord},i.a.createElement("input",{className:e.compact&&"compact",style:{width:"calc(".concat(e.strict.length,"ch + ").concat(e.compact?".2":".8","em)")},placeholder:this.getInputPlaceholder()}),this.getMenu())}}]),t}(i.a.PureComponent);y.defaultProps={strict:!1,difficulty:2,words:{}},y.contextTypes={validateWord:p.a.func};var k=a(329),x=a(330),E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={wordIterator:null},a.wordsRef={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState(t.getWordIterator(this.props))}},{key:"getNextWord",value:function(){var e=this.state.wordIterator.next().value,t=void 0===e?"":e,a=this.props,n=a.words,r=a.strict,l=a.difficulty;if(""===t)return null;var c=n[t];return i.a.createElement(y,{difficulty:l,strict:r,word:c})}},{key:"render",value:function(){return this.state.wordIterator&&i.a.createElement(k.a,{text:!0,textAlign:"left",className:"serif space-bottom"},i.a.createElement("div",null,"Le Taguenet \xe9tait un curieux bonhomme. Il \xe9tait le ",this.getNextWord()," n\xe9 d'une famille de dix enfants. \xc0 l'\xe9cole il n'\xe9tait pas un ",this.getNextWord()," math\xe9matique. Et il n'avait ",this.getNextWord()," dans sa poche."),i.a.createElement(x.a,{hidden:!0}),i.a.createElement("div",null,"Il regardait les gens de ",this.getNextWord(),", bouche ",this.getNextWord(),", des ",this.getNextWord()," profondes barrant son front bizarre, ce front encadr\xe9 de magnifiques cheveux ",this.getNextWord(),"."),i.a.createElement(x.a,{hidden:!0}),i.a.createElement("div",null,"Il vivait dans une mansarde, ",this.getNextWord()," de bains, ",this.getNextWord()," du monde et des m\xe9chants. Le soir il allumait une petite ",this.getNextWord(),", dont la ",this.getNextWord()," lui donnait bien peu de lumi\xe8re. M\xeame avec celle-ci il ",this.getNextWord()," \xe0 lire."),i.a.createElement(x.a,{hidden:!0}),i.a.createElement("div",null,"Il \xe9tait si ",this.getNextWord()," qu'on pouvait croire qu'il ne se ",this.getNextWord()," jamais. La couche de crasse \xe9tait si ",this.getNextWord()," que mille ",this.getNextWord()," d'eau bouillante n'auraient pu la d\xe9tacher de la ",this.getNextWord()," mains. Il sentait le beurre ",this.getNextWord()," et \xe9tait sec comme un ",this.getNextWord(),". Son r\xe9gal \xe9tait l'omelette aux l",this.getNextWord()," accompagn\xe9e de fromage de ",this.getNextWord()," vieilli 11 mois."),i.a.createElement(x.a,{hidden:!0}),i.a.createElement("div",null,"Il travaillait fort peu. C'\xe9tait ce qu'on appelle un bras ",this.getNextWord(),". On l'accusait de vider ",this.getNextWord()," des \xe9glises du district. ",this.getNextWord()," curieux, il conservait pieusement un tableau repr\xe9sentant Napol\xe9on ",this.getNextWord()," ",this.getNextWord()," de Sainte-H\xe9l\xe8ne. Le Taguenet \xe9tait souvent en ",this.getNextWord()," aux m\xe9chancet\xe9s des gar\xe7ons du village."),i.a.createElement(x.a,{hidden:!0}),i.a.createElement("div",null,"C'\xe9tait la veille de la ",this.getNextWord()," et il neigeait. L'",this.getNextWord()," je vous parle \xe9tait tr\xe8s rigoureux. Le long des canaux, l",this.getNextWord()," n'\xe9taient pas nombreux. ",this.getNextWord()," traditionnel de rassemblement du village \xe9tait ",this.getNextWord()," qui longe la rivi\xe8re, non pas \xe0 l'ouest mais \xe0 ",this.getNextWord()," du cours d'eau."),i.a.createElement(x.a,{hidden:!0}),i.a.createElement("div",null,"Ce soir-l\xe0, les jeunes remontaient la ",this.getNextWord(),' principale en chantant \xe0 tue-t\xeate : "',this.getNextWord()," a point comme nous\". Ils n'arr\xeataient pas de se chamailler ",this.getNextWord()," les autres quand soudain l'un d'eux ne put r\xe9sister \xe0 la tenta",this.getNextWord()," d'aller emb\xeater le Taguenet. Alors que le vent se levait, un des plus jeunes ironisa, \"Quel ",this.getNextWord(),' il fait !" - Si tu manques de ',this.getNextWord(),", reste \xe0 la maison, r\xe9pliqua le chef. A ton \xe2ge on ",this.getNextWord()," de la bise !"),i.a.createElement(x.a,{hidden:!0}),i.a.createElement("div",null,"La bande a",this.getNextWord(),' au moment o\xf9 le Taguenet sortait de sa maison. Aussit\xf4t ils entour\xe8rent le vieux bougre. "Vends-moi ton chapeau. Il fait froid, ',this.getNextWord(),' prix" rigola le chef. "Viens le prendre, jeune ',this.getNextWord(),", r\xe9pliqua le Taguenet. Et ce fut la bagarre. Mais soudain, le Taguenet s'affaissa. \"Oh, ",this.getNextWord(),", g\xe9mit-il en se tenant le bas du dos, je crois que j'ai le ",this.getNextWord()," bris\xe9, bande de m",this.getNextWord()," !"),i.a.createElement(x.a,{hidden:!0}),i.a.createElement("div",null,"Quelques jours plus tard, et malgr\xe9 les meilleurs soins, le Taguenet \xe9tait port\xe9 en ",this.getNextWord(),". Il fut enterr\xe9 dans le cimeti\xe8re derri\xe8re ",this.getNextWord()," non loin du village. Quant aux galopins, ils ont \xe9",this.getNextWord()," de 6 mois d'arr\xeats avec sursis."))}}],[{key:"getDerivedStateFromProps",value:function(e){return t.getWordIterator(e)}},{key:"getWordIterator",value:function(e){var t=e.words;return{wordIterator:Object.keys(t)[Symbol.iterator]()}}}]),t}(i.a.PureComponent);E.defaultProps={strict:!1,words:{},difficulty:0};var W={premier:{strict:"Premier",canton:"Vaud",difficulty:2,fallback:"premier"},assens:{strict:"Assens",canton:"Vaud",difficulty:2,fallback:"as en"},palezieux:{strict:"Pal\xe9zieux",canton:"Vaud",difficulty:2,fallback:"pas les yeux"},travers:{strict:"Travers",canton:"Neuch\xe2tel",difficulty:2,fallback:"travers"},bex:{strict:"Bex",canton:"Vaud",difficulty:1,fallback:"b\xe9e"},riddes:{strict:"Riddes",canton:"Valais",difficulty:1,fallback:"rides"},denges:{strict:"Denges",canton:"Vaud",difficulty:3,fallback:"d'anges"},semsales:{strict:"Semsales",canton:"Fribourg",difficulty:1,fallback:"sans salle"},luins:{strict:"Luins",canton:"Vaud",difficulty:2,fallback:"loin"},bougy:{strict:"Bougy",canton:"Vaud",difficulty:2,fallback:"bougie"},courtemaiche:{strict:"Courtema\xeeche",canton:"Jura",difficulty:3,fallback:"courte m\xe8che"},peney:{strict:"Peney",canton:"Gen\xe8ve",difficulty:3,fallback:"peinait"},sales:{strict:"S\xe2les",canton:"Fribourg",difficulty:3,fallback:"sale"},lavey:{strict:"Lavey",canton:"Vaud",difficulty:1,fallback:"lavait"},epesses:{strict:"\xc9pesses",canton:"Vaud",difficulty:1,fallback:"\xe9paisse"},broc:{strict:"Broc",canton:"Fribourg",difficulty:3,fallback:"brocs"},paudex:{strict:"Paudex",canton:"Vaud",difficulty:2,fallback:"peau des"},rances:{strict:"Rances",canton:"Vaud",difficulty:1,fallback:"rance"},noes:{strict:"No\xebs",canton:"Valais",difficulty:3,fallback:"os"},ardon:{strict:"Ardon",canton:"Valais",difficulty:2,fallback:"ardons",compact:!0},gruyere:{strict:"Gruy\xe8re",canton:"Fribourg",difficulty:2,fallback:"gruy\xe8re"},ballens:{strict:"Ballens",canton:"Vaud",difficulty:3,fallback:"ballant"},leytron:{strict:"Leytron",canton:"Valais",difficulty:1,fallback:"les troncs"},fey:{strict:"Fey",canton:"Vaud",difficulty:2,fallback:"Fait"},morat:{strict:"Morat",canton:"Fribourg",difficulty:3,fallback:"mort \xe0"},"l'isle":{strict:"L'Isle",canton:"Vaud",difficulty:2,fallback:"l'\xeele"},buttes:{strict:"Buttes",canton:"Neuch\xe2tel",difficulty:1,fallback:"butte"},"saint-sylvestre":{strict:"Saint-Sylvestre",canton:"Fribourg",difficulty:3,fallback:"Saint-Sylvestre"},yverdon:{strict:"Yverdon",canton:"Vaud",difficulty:2,fallback:"hiver dont",compact:!0},echallens:{strict:"\xc9challens",canton:"Vaud",difficulty:2,fallback:"es chalands",compact:!0},"le lieu":{strict:"Le Lieu",canton:"Vaud",difficulty:2,fallback:"Le lieu"},"le sentier":{strict:"Le Sentier",canton:"Vaud",difficulty:2,fallback:"le sentier"},"l'orient":{strict:"L'Orient",canton:"Vaud",difficulty:2,fallback:"l'orient"},rue:{strict:"Rue",canton:"Fribourg",difficulty:1,fallback:"rue"},yens:{strict:"Yens",canton:"Vaud",difficulty:1,fallback:"Y'en"},leysin:{strict:"Leysin",canton:"Vaud",difficulty:2,fallback:"les uns"},sion:{strict:"Sion",canton:"Valais",difficulty:1,fallback:"tion",compact:!0},bottens:{strict:"Bottens",canton:"Vaud",difficulty:2,fallback:"beau temps"},crans:{strict:"Crans",canton:"Valais",difficulty:2,fallback:"cran"},riex:{strict:"Riex",canton:"Vaud",difficulty:2,fallback:"riait"},rivaz:{strict:"Rivaz",canton:"Valais",difficulty:2,fallback:"rriva",compact:!0},gimel:{strict:"Gimel",canton:"Vaud",difficulty:2,fallback:"j'y met le"},faoug:{strict:"Faoug",canton:"Valais",difficulty:2,fallback:"fou"},meyrin:{strict:"Meyrin",canton:"Vaud",difficulty:1,fallback:"mes reins"},bassins:{strict:"Bassins",canton:"Vaud",difficulty:2,fallback:"bassin"},iserables:{strict:"Is\xe9rables",canton:"Valais",difficulty:2,fallback:"is\xe9rables",compact:!0},biere:{strict:"Bi\xe8re",canton:"Vaud",difficulty:1,fallback:"bi\xe8re"},"l'abbaye":{strict:"L'Abbaye",canton:"Vaud",difficulty:2,fallback:"l'abbaye"},coppet:{strict:"Coppet",canton:"Vaud",difficulty:2,fallback:"cop\xe9",compact:!0}},O={0:"3 caract\xe8res",1:"2 caract\xe8res",2:"1 caract\xe8re",3:"Aucune"},j={false:"Permissive",true:"Stricte"},N=a(113),w=a.n(N),C=a(337),V=a(335),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChangeStrict=a.onChangeStrict.bind(Object(h.a)(a)),a.onChangeDifficulty=a.onChangeDifficulty.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"onChangeStrict",value:function(){var e=this.props.onStrictChange;"function"===typeof e&&e()}},{key:"onChangeDifficulty",value:function(e,t){var a=t.value,n=this.props.onDifficultyChange;"function"===typeof n&&n(a)}},{key:"getOrthographMenuItem",value:function(){var e=this.props,t=e.strict,a=e.strictOptions;return i.a.createElement(V.a.Item,null,"Orthographe\xa0:\xa0",i.a.createElement(g.a,{inline:!0,compact:!0,floating:!0,onChange:this.onChangeStrict,value:t.toString(),options:a}))}},{key:"getDifficultyMenuItem",value:function(){var e=this.props,t=e.difficulty,a=e.difficultyOptions;return i.a.createElement(V.a.Item,null,"Aide\xa0:\xa0",i.a.createElement(g.a,{inline:!0,compact:!0,floating:!0,onChange:this.onChangeDifficulty,value:t,options:a}))}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.valid,n=e.sticked,r=e.onStickyChange;return i.a.createElement(k.a,{text:!0,className:"space-bottom"},i.a.createElement(V.a,{stackable:!0},i.a.createElement(V.a.Item,{header:!0},i.a.createElement(v.a,{name:"options"}),"Param\xe8tres\xa0:"),this.getOrthographMenuItem(),this.getDifficultyMenuItem(),i.a.createElement(V.a.Menu,{position:"right"},i.a.createElement(V.a.Item,null,"Valides: ",a,"/",t),i.a.createElement(V.a.Item,{position:"right",onClick:r,icon:i.a.createElement(v.a,{name:"pin",title:n?"Attacher les options en haut":"D\xe9tacher les options",className:n?"":"rotate-45"})}))))}}]),t}(i.a.PureComponent);S.defaultProps={strict:!1,strictOptions:[],onStrictChange:null,difficulty:0,difficultyOptions:[],onDifficultyChange:null,total:0,valid:0,sticked:!0,onStickyChange:null};var I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={strict:!1,difficulty:0,words:{},sticky:!0},a.refWrapper=null,a.toggleStrict=a.toggleStrict.bind(Object(h.a)(a)),a.toggleSticky=a.toggleSticky.bind(Object(h.a)(a)),a.changeDifficulty=a.changeDifficulty.bind(Object(h.a)(a)),a.storeWrapperRef=a.storeWrapperRef.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.initState()}},{key:"componentDidUpdate",value:function(e,t){this.validateAllWords()}},{key:"initState",value:function(){var e={};Object.keys(W).forEach((function(t){var a=W[t];e[t]=Object(f.a)({},a,{input:"",loose:t,validity:!1})})),this.setState({strict:!0,difficulty:3,words:e})}},{key:"getChildContext",value:function(){return{validateWord:this.validateWord.bind(this)}}},{key:"validateWord",value:function(e,t){var a=this.state.strict,n=t.input,i=t.strict,r=t.validity,l=!1;i&&(l=a?e===i:w.a.remove(e).toUpperCase().replace(/\s|\W/gi,"")===w.a.remove(i).toUpperCase().replace(/\s|\W/gi,""));return l===r&&n===e||this.updateStateWordsValidity(t.loose,l,e),l}},{key:"validateAllWords",value:function(){var e=this,t=this.state.words;Object.keys(t).forEach((function(a){e.validateWord(t[a].input,t[a])}))}},{key:"updateStateWordsValidity",value:function(e,t,a){var n=this.state.words,i=Object.assign({},n);i[e]=Object(f.a)({},i[e],{input:a,validity:Boolean(t)}),this.setState({words:i})}},{key:"countValid",value:function(){var e=this.state.words;return(Object.values(e).filter((function(e){return e.validity}))||[]).length}},{key:"countTotalWords",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.words;return Object.values(e).length}},{key:"toggleStrict",value:function(){var e=this.state.strict;this.setState({strict:!e})}},{key:"toggleSticky",value:function(){var e=this.state.sticky;this.setState({sticky:!e})}},{key:"changeDifficulty",value:function(e){this.state.difficulty!==e&&this.setState({difficulty:e})}},{key:"getDifficultyOptions",value:function(){return Object.keys(O).map((function(e){return{text:O[e],value:parseInt(e,10)}}))}},{key:"getValidationOptions",value:function(){return Object.keys(j).map((function(e){return{text:j[e],value:e}}))}},{key:"storeWrapperRef",value:function(e){this.refWrapper=e}},{key:"render",value:function(){var e=this.state,t=e.strict,a=e.words,n=e.difficulty,r=e.sticky;return i.a.createElement("div",{ref:this.storeWrapperRef},i.a.createElement(C.a,{context:this.refWrapper,active:r},i.a.createElement(S,{strict:t,strictOptions:this.getValidationOptions(),onStrictChange:this.toggleStrict,difficulty:n,difficultyOptions:this.getDifficultyOptions(),onDifficultyChange:this.changeDifficulty,total:this.countTotalWords(),valid:this.countValid(),sticked:r,onStickyChange:this.toggleSticky})),i.a.createElement(E,{strict:t,words:a,difficulty:n}))}}]),t}(i.a.PureComponent);I.childContextTypes={validateWord:p.a.func};var L=a(38),D=a(336),R={home:{path:"/",menu:{label:"Accueil"},routing:{component:function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(k.a,{text:!0},i.a.createElement(D.a,null,"Bienvenus sur Le Taguenet !"),i.a.createElement("p",null,"Ce site a \xe9t\xe9 d\xe9velop\xe9 pour vous permettre de compl\xe9ter le texte lacunaire homonyme \xe0 l'\xe8re du num\xe9rique."),i.a.createElement("p",null,"Pour essayer de trouver tous les mots, rendez-vous sur la page ",i.a.createElement(L.b,{to:R.text.path},"Le texte"),"."),i.a.createElement("p",null,"C'est \xe9galement un exercice personnel d'exp\xe9rimentation de diff\xe9rentes technologies de d\xe9velopment web\xa0",i.a.createElement("a",{href:"https://fr.wikipedia.org/wiki/D%C3%A9veloppement_web_frontal",target:"_blank",rel:"noopener external nofollow noreferrer"},"front-end")," utilisant les librairies\xa0",i.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener external nofollow noreferrer"},"React"),",",i.a.createElement("a",{href:"https://reacttraining.com/react-router/",target:"_blank",rel:"noopener external nofollow noreferrer"},"React-Router")," et\xa0",i.a.createElement("a",{href:"https://semantic-ui.com/",target:"_blank",rel:"noopener external nofollow noreferrer"},"Semantic-UI"),"."))}}]),t}(i.a.PureComponent)}},text:{path:"/texte",menu:{label:"Le texte"},routing:{component:I}}},A=Object.values(R);function P(e){return i.a.createElement(D.a,{textAlign:"center",className:"space-bottom"},i.a.createElement(D.a.Content,{as:"h1",size:"huge",className:"ui text"},"Le Taguenet"),i.a.createElement(D.a.Subheader,null,"Le Taguenet est un texte lacunaire \xe0 remplir en utilisant les villes et villages de Suisse romande.",i.a.createElement("br",null),"Adapt\xe9 d'un texte lacunaire sur les communes vaudoises, cette version se veut plus g\xe9n\xe9raliste."))}var M=a(333);function q(e){return i.a.createElement(k.a,{textAlign:"center"},i.a.createElement(x.a,null),i.a.createElement(M.a,{horizontal:!0},i.a.createElement(M.a.Item,null,i.a.createElement(M.a.Icon,{name:"copyright",style:{marginRight:".5rem"}}),"2018 - ",(new Date).getFullYear(),", Christophe Rast"),i.a.createElement(M.a.Item,null,i.a.createElement(M.a.Icon,{name:"code",style:{marginRight:".5rem"}}),i.a.createElement("a",{href:"https://github.com/ChrisRast/Le-Taguenet",target:"_blank",rel:"noopener external nofollow noreferrer"},"Code source"))))}function T(){return i.a.createElement(k.a,null,i.a.createElement("h1",null,"Page introuvable - 404 Not Found"),"Il semblerait que vous ayiez essay\xe9 d'acc\xe9der \xe0 une page inconnue.",i.a.createElement("br",null),"Utilisez la navigation ci-dessus pour retrouver votre chemin.")}var F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={showMenu:!1},a.showMenu=!1,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({showMenu:!0})}},{key:"getRoutesNavLink",value:function(){var e=this.props,t=e.routes,a=e.location;return t.map((function(e,t){var n=e.path,r=e.menu.label;return i.a.createElement(V.a.Item,{as:L.b,key:n,to:n,active:a.pathname===n},r)}))}},{key:"render",value:function(){var e=this.state.showMenu;return i.a.createElement(V.a,{pointing:!0,widths:this.props.routes.length,className:"space-bottom"},e&&this.getRoutesNavLink())}}]),t}(i.a.Component);F.defaultProps={routes:[]};var B=a(41),z=(a(320),Object(B.f)(F)),_=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"renderRoute",value:function(e,t){var a=e.path,n=e.routing,r=n.component,c=void 0===r?null:r,o=Object(l.a)(n,["component"]);return c&&i.a.createElement(B.a,Object.assign({key:t,path:a,component:c,exact:!0},o))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(P,null),i.a.createElement(z,{routes:A}),i.a.createElement(B.c,null,A.map(this.renderRoute),i.a.createElement(B.a,{component:T})),i.a.createElement(q,null))}}]),t}(i.a.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(321),a(322);var G=document.getElementById("root");G.hasChildNodes()?Object(r.hydrate)(i.a.createElement(L.a,null,i.a.createElement(_,null)),G):Object(r.render)(i.a.createElement(L.a,null,i.a.createElement(_,null)),G),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");U?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):Y(e)}))}}()}},[[183,1,2]]]);
//# sourceMappingURL=main.97e3d5bf.chunk.js.map