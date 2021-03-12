import "./src/stylesheets/main.scss"

function addJS({ code, src, id }) {
  var s = document.createElement(`script`)

  s.type = `text/javascript`
  s.id = id
  if (code) {
    s.innerText = code
  } else if (src) {
    s.setAttribute("src", src)
  }

  document.getElementsByTagName(`body`)[0].appendChild(s)
}

export const onClientEntry = () => {
  addJS({
    code: `!function(t,e){t.artibotApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};var a=!1,i=e.createElement("script");i.async=!0,i.type="text/javascript",i.src="https://app.artibot.ai/loader.js",e.getElementsByTagName("head").item(0).appendChild(i),i.onreadystatechange=i.onload=function(){if(!(a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState)){new window.ArtiBot({i:"ff9d1c6b-55e6-4dcf-b688-acb546fff4d1"});a=!0}}}(window,document);`,
  })
}
