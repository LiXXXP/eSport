webpackJsonp([10],{Uh8H:function(t,e){},kHqC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("VSN5"),n=a("GZb1"),s=a("WOcw"),c={name:"teamList",data:function(){return{selectStyle:1,navList:[{title:"全部游戏",id:0},{title:"反恐精英：全球攻势",id:1},{title:"英雄联盟",id:2},{title:"刀塔2",id:3}],teamList:[],gameId:0,page:{count:0,current:1}}},created:function(){this.getList()},methods:{getList:function(){var t=this,e={game_id:t.gameId,page:t.page.current,limit:20};Object(s.w)(e).then(function(e){200===e.code&&(t.teamList=e.data.team_list,t.page.count=e.data.count)})},openEvents:function(t){this.gameId=this.navList[t].id,this.getList()},gotoDetail:function(t,e,a){this.$router.push({path:"/teams",query:{teamId:t,gameId:e,teamName:a}})},currentPage:function(t){this.page.current=t,this.getList()}},components:{tabNav:i.a,pagingPage:n.a}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team-list"},[a("tab-nav",{staticStyle:{"margin-bottom":"30px"},attrs:{navData:t.navList,selectStyle:t.selectStyle},on:{clickIndex:t.openEvents}}),t._v(" "),0!==t.teamList.length?a("div",[a("div",{staticClass:"flex flex_start flex_wrap"},t._l(t.teamList,function(e){return a("div",{key:e.team_id,staticClass:"list",on:{click:function(a){return t.gotoDetail(e.team_id,e.game_id,e.team_name)}}},[a("p",{staticClass:"type"},[t._v(t._s(e.game_name))]),t._v(" "),a("img",{attrs:{src:e.team_image}}),t._v(" "),a("p",{staticClass:"name beyond-ellipsis",attrs:{title:e.team_name}},[t._v(t._s(e.team_name))])])}),0),t._v(" "),t.page.count>10?a("paging-page",{staticStyle:{width:"1200px"},attrs:{indexData:0,pageSize:10,countData:t.page.count},on:{currentPage:t.currentPage}}):t._e()],1):a("div",{staticClass:"none"},[t._v("暂无数据")])],1)},staticRenderFns:[]};var l=a("VU/8")(c,r,!1,function(t){a("Uh8H")},"data-v-59d1d140",null);e.default=l.exports}});
//# sourceMappingURL=10.7cf21edb7b84561bb48e.js.map