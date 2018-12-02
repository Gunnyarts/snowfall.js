var snowDrop = {
  init: function(s){
    var sys = this
    var frequency = s.frequency || 100
    var layers = (!s.layers || s.layers < 1) ? 3 : s.layers
    var snowfalls = 0
    this.loop = setInterval(function(){
      var depth = sys.depth(layers)
      var containers = document.querySelectorAll(s.bindto)
      containers.forEach(function(el){
        let cp = el.getBoundingClientRect()
        let duration = s.duration || 5000
        let id = "sd-snowfall"+(Math.floor(Math.random()*1000000000))
        let drop = sys.newSnow({
          id: id,
          mainclass: s.class || "snowflake",
          pos: cp,
          layers: layers,
          depth: depth,
          duration: duration,
          travel: s.wind || 50
        })
        el.appendChild(drop)
        setTimeout(function(){
          var el = document.getElementById(id);
          el.parentNode.removeChild(el);
        }, duration)
      })
    }, frequency)
  },
  depth: function(d){
    return Math.floor(Math.random()*d)+1
  },
  left: function(w,t){
    return Math.floor(Math.random()*(w + t))-t
  },
  newSnow: function(data){
    let duration = data.duration + (1000*data.depth) - 1000
    let modifier = (data.layers - (data.depth - 1))/data.layers
    
    let styles = "--left:"+this.left(data.pos.width, data.travel)+"px"
    styles += ";--duration:"+duration+"ms"//calc this from duration and depth
    styles += ";--opacity:"+modifier
    styles += ";--travel:"+data.travel+"px"
    styles += ";--drop:"+data.pos.height+"px"
    styles += ";--scale:"+modifier
    
    let snow = document.createElement('span')
    snow.classList.add(data.mainclass)
    snow.id = data.id
    snow.setAttribute("style", styles)
    return snow
  }
}
