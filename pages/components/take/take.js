var app = getApp()
Page({
	data: {
		hidden:false,
		curNav:1,
		curIndex:0,
		cart:[],
		cartTotal:0,
		navList:[
			{
				id:1,
				name:'菜品'
			},
			{
				id:2,
				name:'热菜'
			},
			{
				id:3,
				name:'凉菜'
			},
			
		],
		dishesList:[
			[
				{
					name:"鱼香肉丝",
					price:38,
					num:1,
					id:2
				},
				{
					name:"千页豆腐",
					price:28,
					num:1,
					id:21
				},
				{
					name:"糖醋里脊",
					price:68,
					num:1,
					id:3
				}
			],
			[
				{
					name:"锅包肉",
					price:58,
					num:1,
					id:10
				},
				{
					name:"香辣土豆丝",
					price:20,
					num:1,
					id:4
				}
			],
			[
				{
					name:"毛豆",
					price:18,
					num:1,
					id:5
				},
				{
					name:"酱牛肉",
					price:38,
					num:1,
					id:6
				},
				{
					name:"凉拌海蜇",
					price:50,
					num:1,
					id:7
				}
			],
			[]
		],
		dishes:[]
	},
	loadingChange () {
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},2000)
	},
	selectNav (event) {
		let id = event.target.dataset.id,
			index = parseInt(event.target.dataset.index);
			self = this;
		this.setData({
			curNav:id,
			curIndex:index
		})
	},
	// 选择菜品
	selectDish (event) {
		let dish = event.currentTarget.dataset.dish;
		let flag = true;
		let	cart = this.data.cart;
		
		if(cart.length > 0){
			cart.forEach(function(item,index){
				if(item == dish){
					cart.splice(index,1);
					flag = false;
				}
			})
		}
		if(flag) cart.push(dish);
		this.setData({
			cartTotal:cart.length
		})
		this.setStatus(dish)
	},
	setStatus (dishId) {
		let dishes = this.data.dishesList;
		for (let dish of dishes){
			dish.forEach((item) => {
				if(item.id == dishId){
					item.status = !item.status || false
				}
			})
		}
		
		this.setData({
			dishesList:this.data.dishesList
		})
	},
	onLoad () {
		this.loadingChange()
	}
})