(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{fOPj:function(l,e,n){"use strict";n.r(e);var u=n("8Y7J"),a=n("oxFV"),t=n("PiBQ"),d=n("iA1Z"),r=n("pLrv");class o{constructor(l,e,n){this.schemaListenerService=l,this.dataService=e,this.jsonSchemaSamples=n}ngOnInit(){this.fields={colour:r.a},this.viewOnly=!!localStorage.getItem("viewOnly")&&"true"===localStorage.getItem("viewOnly"),this.language=localStorage.getItem("language")?localStorage.getItem("language"):"en",this.data=this.viewOnly?this.jsonSchemaSamples.data:null,this.schemaListenerService.schema.subscribe(l=>{this.schema=l})}handleSubmit(l){this.dataService.data=l}handleCancel(l){this.truForms.data={},this.truForms.constructForm()}changeLanguage(l){localStorage.setItem("language",l),this.language=l}isArray(l){return Array.isArray(l)}toggleViewonly(l){localStorage.setItem("viewOnly",l),window.location.href="/"}toggleData(l){this.data="true"===l?this.jsonSchemaSamples.data:null}}class i{}var s=n("pMnS"),m=n("2w8t"),c=n("z5nN"),p=n("atuK"),g=n("SfUx"),f=n("s7LF"),v=n("cZKn"),h=u["\u0275crt"]({encapsulation:0,styles:[["p{display:flex;flex-direction:column}"]],data:{}});function _(l){return u["\u0275vid"](0,[u["\u0275qud"](671088640,1,{truForms:0}),(l()(),u["\u0275eld"](1,0,null,null,44,"div",[["style","display: flex; flex-direction: row;justify-content: center;align-items: center;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,11,"div",[["style","width: 100%;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Language"])),(l()(),u["\u0275eld"](5,0,null,null,8,"select",[["class","demo_input"]],null,[[null,"change"]],(function(l,e,n){var u=!0;return"change"===e&&(u=!1!==l.component.changeLanguage(n.target.value)&&u),u}),null,null)),(l()(),u["\u0275eld"](6,0,null,null,3,"option",[["value","en"]],[[8,"selected",0]],null,null,null,null)),u["\u0275did"](7,147456,null,0,f.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),u["\u0275did"](8,147456,null,0,f["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["English"])),(l()(),u["\u0275eld"](10,0,null,null,3,"option",[["value","fr"]],[[8,"selected",0]],null,null,null,null)),u["\u0275did"](11,147456,null,0,f.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),u["\u0275did"](12,147456,null,0,f["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["Frensh"])),(l()(),u["\u0275eld"](14,0,null,null,15,"div",[["style","width: 100%;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["View only"])),(l()(),u["\u0275eld"](17,0,null,null,12,"select",[["class","demo_input"]],null,[[null,"change"]],(function(l,e,n){var u=!0;return"change"===e&&(u=!1!==l.component.toggleViewonly(n.target.value)&&u),u}),null,null)),(l()(),u["\u0275eld"](18,0,null,null,3,"option",[["disabled",""]],null,null,null,null,null)),u["\u0275did"](19,147456,null,0,f.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],null,null),u["\u0275did"](20,147456,null,0,f["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],null,null),(l()(),u["\u0275ted"](-1,null,["select mode"])),(l()(),u["\u0275eld"](22,0,null,null,3,"option",[["value","true"]],[[8,"selected",0]],null,null,null,null)),u["\u0275did"](23,147456,null,0,f.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),u["\u0275did"](24,147456,null,0,f["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["on"])),(l()(),u["\u0275eld"](26,0,null,null,3,"option",[["value","false"]],[[8,"selected",0]],null,null,null,null)),u["\u0275did"](27,147456,null,0,f.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),u["\u0275did"](28,147456,null,0,f["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["off"])),(l()(),u["\u0275eld"](30,0,null,null,15,"div",[["style","width: 100%;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](31,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Data preview"])),(l()(),u["\u0275eld"](33,0,null,null,12,"select",[["class","demo_input"]],null,[[null,"change"]],(function(l,e,n){var u=!0;return"change"===e&&(u=!1!==l.component.toggleData(n.target.value)&&u),u}),null,null)),(l()(),u["\u0275eld"](34,0,null,null,3,"option",[["disabled",""]],null,null,null,null,null)),u["\u0275did"](35,147456,null,0,f.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],null,null),u["\u0275did"](36,147456,null,0,f["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],null,null),(l()(),u["\u0275ted"](-1,null,[" select preview "])),(l()(),u["\u0275eld"](38,0,null,null,3,"option",[["value","true"]],[[8,"selected",0]],null,null,null,null)),u["\u0275did"](39,147456,null,0,f.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),u["\u0275did"](40,147456,null,0,f["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["on"])),(l()(),u["\u0275eld"](42,0,null,null,3,"option",[["value","false"]],[[8,"selected",0]],null,null,null,null)),u["\u0275did"](43,147456,null,0,f.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),u["\u0275did"](44,147456,null,0,f["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["off"])),(l()(),u["\u0275eld"](46,0,null,null,1,"jf-form",[],null,[[null,"handleSubmit"],[null,"handleCancel"]],(function(l,e,n){var u=!0,a=l.component;return"handleSubmit"===e&&(u=!1!==a.handleSubmit(n)&&u),"handleCancel"===e&&(u=!1!==a.handleCancel(n)&&u),u}),m.d,m.c)),u["\u0275did"](47,442368,[[1,4],["truForms",4]],0,v.d,[f.FormBuilder,v.j,v.e,v.f],{schema:[0,"schema"],data:[1,"data"],submit:[2,"submit"],cancel:[3,"cancel"],fields:[4,"fields"],viewOnly:[5,"viewOnly"],language:[6,"language"]},{handleSubmit:"handleSubmit",handleCancel:"handleCancel"})],(function(l,e){var n=e.component;l(e,7,0,"en"),l(e,8,0,"en"),l(e,11,0,"fr"),l(e,12,0,"fr"),l(e,23,0,"true"),l(e,24,0,"true"),l(e,27,0,"false"),l(e,28,0,"false"),l(e,39,0,"true"),l(e,40,0,"true"),l(e,43,0,"false"),l(e,44,0,"false"),l(e,47,0,n.schema,n.data,"submit","cancel",n.fields,n.viewOnly,n.language||"en")}),(function(l,e){var n=e.component;l(e,6,0,"en"===n.language),l(e,10,0,"fr"===n.language),l(e,22,0,n.viewOnly),l(e,26,0,!n.viewOnly),l(e,38,0,n.data),l(e,42,0,!n.data)}))}function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-tru-ui",[],null,null,null,_,h)),u["\u0275did"](1,114688,null,0,o,[t.a,a.a,d.a],null,null)],(function(l,e){l(e,1,0)}),null)}var y=u["\u0275ccf"]("app-tru-ui",o,R,{},{},[]),S=n("SVse"),b=n("2uy1"),w=n("z/SZ"),F=n("LqlI"),O=n("yPVt"),E=n("ienR"),k=n("ZMeN"),N=n("iInd"),C=n("UVXo"),M=n("ZEiq");n.d(e,"TruUiModuleExampleNgFactory",(function(){return I}));var I=u["\u0275cmf"](i,[],(function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,m.b,m.a,m.E,m.P,m.R,m.S,m.T,m.U,m.V,m.W,m.X,m.Q,m.Y,m.Z,m.ab,m.bb,m.cb,m.db,m.eb,m.fb,m.gb,c.a,c.b,p.a,p.c,p.b,p.d,g.a,m.A,m.B,m.C,m.D,m.F,m.G,m.H,m.I,m.J,m.K,m.L,m.M,m.N,m.O,y]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,S.m,S.l,[u.LOCALE_ID,[2,S.A]]),u["\u0275mpd"](4608,f.FormBuilder,f.FormBuilder,[]),u["\u0275mpd"](4608,f["\u0275angular_packages_forms_forms_o"],f["\u0275angular_packages_forms_forms_o"],[]),u["\u0275mpd"](4608,b.a,b.a,[u.NgZone,u.RendererFactory2,u.PLATFORM_ID]),u["\u0275mpd"](4608,w.a,w.a,[u.ComponentFactoryResolver,u.NgZone,u.Injector,b.a,u.ApplicationRef]),u["\u0275mpd"](4608,F.b,F.b,[u.RendererFactory2,w.a]),u["\u0275mpd"](4608,v.e,v.e,[]),u["\u0275mpd"](4608,v.j,v.j,[]),u["\u0275mpd"](4608,v.o,v.o,[]),u["\u0275mpd"](4608,O.a,O.a,[u.RendererFactory2]),u["\u0275mpd"](4608,E.t,E.t,[]),u["\u0275mpd"](4608,E.v,E.v,[]),u["\u0275mpd"](4608,E.a,E.a,[]),u["\u0275mpd"](4608,E.h,E.h,[]),u["\u0275mpd"](4608,E.d,E.d,[]),u["\u0275mpd"](4608,E.j,E.j,[]),u["\u0275mpd"](4608,E.l,E.l,[]),u["\u0275mpd"](4608,E.u,E.u,[E.v,E.l]),u["\u0275mpd"](4608,k.a,k.a,[]),u["\u0275mpd"](5120,v.f,(function(l){return[new v.l(l)]}),[u.ComponentFactoryResolver]),u["\u0275mpd"](1073742336,S.c,S.c,[]),u["\u0275mpd"](1073742336,N.l,N.l,[[2,N.q],[2,N.k]]),u["\u0275mpd"](1073742336,f["\u0275angular_packages_forms_forms_d"],f["\u0275angular_packages_forms_forms_d"],[]),u["\u0275mpd"](1073742336,f.ReactiveFormsModule,f.ReactiveFormsModule,[]),u["\u0275mpd"](1073742336,C.TextMaskModule,C.TextMaskModule,[]),u["\u0275mpd"](1073742336,M.b,M.b,[]),u["\u0275mpd"](1073742336,v.n,v.n,[]),u["\u0275mpd"](1073742336,F.e,F.e,[]),u["\u0275mpd"](1073742336,v.i,v.i,[]),u["\u0275mpd"](1073742336,f.FormsModule,f.FormsModule,[]),u["\u0275mpd"](1073742336,E.g,E.g,[]),u["\u0275mpd"](1073742336,k.d,k.d,[]),u["\u0275mpd"](1073742336,v.m,v.m,[]),u["\u0275mpd"](1073742336,i,i,[]),u["\u0275mpd"](1024,N.i,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);