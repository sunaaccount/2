//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      "https://i.loli.net/2020/08/04/oPM5QlVRXwkT69e.jpg",
      "https://i.loli.net/2020/08/04/KBliwCuLIaG6rkV.jpg",
      "https://i.loli.net/2020/08/04/cECNDF2x5WPUinH.jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[
      {
        name:'堂食',
        url:'dishes'
      },
      {
        name:'外卖',
        url:'take',
        isSplot:true
      },
      {
        name:'外带',
        url:'out'
      },
      
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
    
})
