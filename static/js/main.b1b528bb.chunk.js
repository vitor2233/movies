(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),c=a.n(i),s=(a(37),a(38),a(5)),l=a.n(s),o=a(11),m=a(12),u=a(13),p=a(16),h=a(14),g=a(17),v=(a(40),a(51)),d=a(53),f=a(54),E=a(26),b=a.n(E),y=a(3),k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={bgImage:"",search:""},a.updateInputValue=function(e){a.setState({search:e.target.value})},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchbgMovie()}},{key:"fetchbgMovie",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day?api_key=1752c8ea8ce111cf37e45818b0779d5f",e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=1752c8ea8ce111cf37e45818b0779d5f");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,1,19,n=1+18*Math.random(),this.setState({bgImage:a.results[parseInt(n)].backdrop_path});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"search"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w1280/"+this.state.bgImage,alt:""}),r.a.createElement("div",{className:"top-left"},r.a.createElement("h4",null," VitaoFilmesHD")),r.a.createElement("div",{className:"top-right"},r.a.createElement(v.a,{className:"iptMovie"},r.a.createElement(d.a,{value:this.state.search,onChange:this.updateInputValue,placeholder:"Procure por filmes ou s\xe9ries","aria-describedby":"basic-addon2"}),r.a.createElement(v.a.Append,null,r.a.createElement(y.b,{to:"/search/"+this.state.search},r.a.createElement(f.a,{disabled:this.state.search.length<4?"disabled":"",className:"btnSearch",variant:"outline-secondary"},"Pesquisar")))))),r.a.createElement("div",{className:"genres"},r.a.createElement(b.a,{breakpoints:[{breakpoint:1296,settings:{slidesToShow:5,slidesToScroll:4}},{breakpoint:900,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:575,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}],showSides:!0,sidesOpacity:.4,sideSize:.1,slidesToScroll:4,slidesToShow:5,scrollOnDevice:!0},r.a.createElement("div",null,r.a.createElement("h6",null,"A\xe7\xe3o"),r.a.createElement(y.b,{to:"/movies/28"},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w1280/dJnXQL6Aa4s26eaORTvy0zRskfh.jpg"}))),r.a.createElement("div",null,r.a.createElement("h6",null,"Aventura"),r.a.createElement(y.b,{to:"/movies/12"},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w1280//devZdyPRXMiN8HHiX7Y8s0LLEee.jpg"}))),r.a.createElement("div",null,r.a.createElement("h6",null,"Anima\xe7\xe3o"),r.a.createElement(y.b,{to:"/movies/16"},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w1280//pZC8Rc6t8vEUow28GLJaSYq4Blr.jpg"}))),r.a.createElement("div",null,r.a.createElement("h6",null,"Com\xe9dia"),r.a.createElement(y.b,{to:"/movies/35"},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w1280//foEOVg4HQl2VzKzTh27CAHmXyg.jpg"}))),r.a.createElement("div",null,r.a.createElement("h6",null,"Crime"),r.a.createElement(y.b,{to:"/movies/80"},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w1280//ylt62ORXZxcRePzZuI0xwJ6ERup.jpg"}))),r.a.createElement("div",null,r.a.createElement("h6",null,"Document\xe1rio"),r.a.createElement(y.b,{to:"/movies/99"},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w1280//cX3fl80NMXILgmsy0blU9ir6sy1.jpg"}))),r.a.createElement("div",null,r.a.createElement("h6",null,"Drama"),r.a.createElement(y.b,{to:"/movies/18"},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w1280//2YMTXZP7wExlJS5dBdTWoHO5wm3.jpg"}))),r.a.createElement("div",null,r.a.createElement("h6",null,"Terror"),r.a.createElement(y.b,{to:"/movies/27"},r.a.createElement("img",{alt:"Terror",src:"https://image.tmdb.org/t/p/w1280//hufyXxsAqgWvWZp2lq2wZPsS4sf.jpg"}))),r.a.createElement("div",null,r.a.createElement("h6",null,"M\xfasica"),r.a.createElement(y.b,{to:"/movies/10402"},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w1280//1rjaRIAqFPQNnMtqSMLtg0VEABi.jpg"}))),r.a.createElement("div",null,r.a.createElement("h6",null,"Romance"),r.a.createElement(y.b,{to:"/movies/10749"},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w1280//5o8iX7Vi2fbDjqCXeGU25LKGtti.jpg"}))),r.a.createElement("div",null,r.a.createElement("h6",null,"Fic\xe7\xe3o cient\xedfica"),r.a.createElement(y.b,{to:"/movies/878"},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w1280//rkHe0BfOo1f5N2q6rxgdYac7Zf6.jpg"}))),r.a.createElement("div",null,r.a.createElement("h6",null,"Guerra"),r.a.createElement(y.b,{to:"/movies/10752"},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w1280//7iVdjPGTWQ3PcEE6faZSoIAOPvX.jpg"}))),r.a.createElement("div",null,r.a.createElement("h6",null,"Faroeste"),r.a.createElement(y.b,{to:"/movies/37"},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w1280//aKlksK9ZfL4OCI66H9i4dB7zZhc.jpg"}))))))}}]),t}(r.a.Component),w=(a(47),a(31)),j=a(52),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],page:1},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"increasePage",value:function(e){this.setState((function(e){return{page:e.page+1}})),this.fetchMovies()}},{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"fetchMovies",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/popular?api_key=1752c8ea8ce111cf37e45818b0779d5f&language=pt-BR&page="+this.state.page+"&whithout_genres=animation&with_genres="+this.props.match.params.genre,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=n.results.filter((function(e){return"ja"!==e.original_language&&"ko"!==e.original_language})),this.setState({movies:r});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"top-left"},r.a.createElement("h4",null,r.a.createElement("a",{href:"/"},"VitaoFilmesHD"))),r.a.createElement("div",{className:"top-right"},r.a.createElement(f.a,{variant:"link",value:"Inc",onClick:this.increasePage.bind(this)}," ",r.a.createElement(w.a,null)," ")),r.a.createElement("div",{className:"movies"},this.state.movies.map((function(e){return r.a.createElement("div",{key:e.id,className:"movie"},r.a.createElement(y.b,{to:"/movie/"+e.id},r.a.createElement(j.a,{onClick:function(){return console.log(e.id)}},r.a.createElement(j.a.Img,{className:"imgPoster",src:"https://image.tmdb.org/t/p/w1280/"+e.poster_path}),r.a.createElement(j.a.Body,{className:"movieDescription"},r.a.createElement(j.a.Title,{className:"movieTitle"},e.title),r.a.createElement(j.a.Title,{className:"movieRating"},e.vote_average," ")))))}))))}}]),t}(r.a.Component),O=(a(48),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={bgImage:"",movie:[]},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"fetchMovie",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/"+this.props.match.params.id+"?api_key=1752c8ea8ce111cf37e45818b0779d5f&language=pt-BR",e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,this.setState({movie:n,bgImage:n.backdrop_path});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"Detailed"},r.a.createElement("div",{className:"movieDetail",style:{backgroundSize:"cover",filter:"brightness(80%)",backgroundAttachment:"fixed",backgroundImage:"url(https://image.tmdb.org/t/p/w1280/".concat(this.state.bgImage,")")}},r.a.createElement("div",{className:"top-left"},r.a.createElement("h4",null,r.a.createElement("a",{href:"/"},"VitaoFilmesHD"))),r.a.createElement("div",{className:"detailedMovie"},r.a.createElement("h2",null,this.state.movie.title),r.a.createElement("h4",null,this.state.movie.tagline),r.a.createElement("p",null,this.state.movie.overview))))}}]),t}(r.a.Component)),S=(a(49),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={bgImage:"",movies:[]},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchbgMovie(),this.fetchSearch()}},{key:"fetchbgMovie",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day?api_key=1752c8ea8ce111cf37e45818b0779d5f",e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=1752c8ea8ce111cf37e45818b0779d5f");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,1,19,n=1+18*Math.random(),this.setState({bgImage:a.results[parseInt(n)].backdrop_path});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchSearch",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/search/movie?api_key=1752c8ea8ce111cf37e45818b0779d5f&sort_by=popularity.desc&language=pt-BR&query="+this.props.match.params.query,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=n.results.filter((function(e){return"ja"!==e.original_language&&"ko"!==e.original_language})),this.setState({movies:r});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.movies.length>0?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"top-left"},r.a.createElement("h4",null,r.a.createElement("a",{href:"/"},"VitaoFilmesHD"))),r.a.createElement("div",{className:"movies"},this.state.movies.map((function(e){return r.a.createElement("div",{key:e.id,className:"movie"},r.a.createElement(y.b,{to:"/movie/"+e.id},r.a.createElement(j.a,{onClick:function(){return console.log(e.id)}},r.a.createElement(j.a.Img,{className:"imgPoster",src:"https://image.tmdb.org/t/p/w1280/"+e.poster_path}),r.a.createElement(j.a.Body,{className:"movieDescription"},r.a.createElement(j.a.Title,{className:"movieTitle"},e.title),r.a.createElement(j.a.Title,{className:"movieRating"},e.vote_average," ")))))})))):r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{backgroundSize:"cover",filter:"brightness(80%)",backgroundAttachment:"fixed",backgroundImage:"url(https://image.tmdb.org/t/p/w1280/".concat(this.state.bgImage,")")},className:"movieDetail"},r.a.createElement("div",{className:"top-left"},r.a.createElement("h4",null,r.a.createElement("a",{href:"/"},"VitaoFilmesHD")," - Nenhum filme encontrado"))))}}]),t}(r.a.Component)),T=a(18);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y.a,null,r.a.createElement(T.a,{exact:!0,path:"/",component:k}),r.a.createElement(T.a,{path:"/movies/:genre",component:N}),r.a.createElement(T.a,{path:"/movie/:id",component:O}),r.a.createElement(T.a,{path:"/search/:query",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b1b528bb.chunk.js.map