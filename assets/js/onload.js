var a=0;window.onload=function(){function a(b,c,d){c=c||document.body,d=d||[];var e,f,g=c.children;if(g)for(e=g.length;e--;)f=g[e],f.id==b&&("secret"===b||d.push(f)),a(b,f,d);return d}document.getElementById=a};