// priority: 0

console.info('你好，世界！（每次客户端资源重新加载时都会看到这行）')

JEIEvents.information(event => {

event.addItem('supplementaries:planter', ["用于在没有水源方块的情况下种植作物。现在你甚至可以在下界中种植，而不必担心动物踩踏你的庄稼！"])
event.addItem('supplementaries:faucet', ["打开时，它会开始将其后面的两个方块的库存洒在地上。如果你把它放在水源方块（炼药锅、水/浸水状态），它会开始滴水颗粒。", "你可以用它来倒液体到罐子里，也可以从方块的侧面提取物品，这使得一些与原版不可能的自动化成为可能。", "它还会与其他方块交互，如蜂巢和混凝土粉末。它的水颜色将取决于其背后的内容。"])
event.addItem('supplementaries:jar', ["可存储4桶或12瓶的任何原版液体（如蜂蜜、牛奶、岩浆、药水、汤、龙息或经验），以及萤火虫。它的功能类似于原版的潜影盒，用于液体或基本储罐。现在你也可以存储饼干和鱼了！不兼容Forge的流体系统或其他流体模组，仅用于补充原版。"])
event.addItem('supplementaries:wind_vane', ["根据天气发出红石信号。天气越糟糕，信号越强。"])
event.addItem('supplementaries:pedestal', ["将物品放在顶部以进行展示。堆叠多个底座将它们变成支柱。"])
event.addItem('supplementaries:redstone_illuminator', ["光源，可以使用红石信号关闭。"])
event.addItem('supplementaries:crank', ["输出红石信号，随着曲柄的旋转而变得更强。"])
event.addItem('supplementaries:spring_launcher', ["当给予红石信号时，会将位于其顶部的任何实体发射。"])
event.addItem('supplementaries:turn_table', ["当充能时，会旋转放置在其顶部的任何物品/实体。"])
event.addItem('supplementaries:clock_block', ["右键点击方块以获取小时制时间。你可以在18:00时入睡，黎明在06:00时。"])
event.addItem('supplementaries:bellows', ["当充能时，会吹动其正面的实体或物品。"])
event.addItem('supplementaries:cog_block', ["传递红石功率，就像红石粉一样，但连接在所有方向上。这使垂直红石更容易，也更酷。"])
event.addItem('supplementaries:safe', ["极坚硬的方块，可用作储物箱。在破坏时保留库存。"])
event.addItem('supplementaries:hourglass', ["放置沙子在其中，它会提供红石信号，直到沙子用完为止。翻转并重复。"])

event.addItem('waystones:waystone', ["此物品可在商店购买", "", "玩家可以激活指路石，然后可以使用诸如传送石或传送卷轴等物品将其传送回到这些指路石。", "", "指路石还可以用于彼此之间的旅行。"])
event.addItem('waystones:mossy_waystone', ["此物品可在商店购买"])
event.addItem('waystones:sandy_waystone', ["此物品可在商店购买"])
event.addItem('waystones:sharestone', ["此物品可在商店购买", "", "同族指路石是一个可以用于传送到同一颜色的其他同族指路石的方块。与指路石不同，同族指路石不需要玩家先激活它。", "", "所有玩家始终可以访问所有同族指路石，这使它们成为多人服务器的强大工具。"])
event.addItem('waystones:bound_scroll', ["此物品可在商店购买", "", "绑定卷轴是一种特殊的传送卷轴，可以通过右键单击指路石将其绑定到特定的指路石。", "", "它可以用于传送回到该特定的指路石，或者可以交给其他玩家，即使他们尚未激活它，也可以轻松到达绑定的指路石。"])
event.addItem('waystones:warp_scroll', ["此物品可在商店购买", "", "传送卷轴是传送石的一次性使用版本。它可以用于传送到您已激活的任何指路石。"])
event.addItem('waystones:warp_stone', ["此物品可在商店购买", "", "传送石允许您传送到您已激活的任何指路石。一旦使用，将启动冷却期，之前无法再次使用传送石。这个冷却与您的玩家角色相关，而不是传送石本身，所以拥有多个传送石没有用处。"])
event.addItem('waystones:warp_plate', ["此物品可在商店购买", "", "传送石盘可以比作传送压力板。站在上面，你将被传送到另一个传送石盘上。通过插入另一个传送石盘的已调谐碎片，可以调谐传送石盘。"])

  
event.addItem('gag:time_sand_pouch', ["此物品可以在商店以合理的价格购买"])
event.addItem('gag:escape_rope', ["此物品可以在商店以合理的价格购买"])
event.addItem('gag:hearthstone', ["此物品可以在商店以合理的价格购买"])
event.addItem('gag:sacred_salt', ["此物品可以在商店以合理的价格购买"])
event.addItem('gag:sacred_salve', ["此物品可以在商店以合理的价格购买"])
event.addItem('gag:sacred_balm', ["此物品可以在商店以合理的价格购买"])
event.addItem('gag:mining_dynamite', ["此物品可以在商店以合理的价格购买"])
event.addItem('gag:labeling_tool', ["此物品可以在商店以合理的价格购买"])
  
 
})

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	
	event.hide('storagedrawers:compacting_drawers_3')	
	event.hide('tombstone:book_of_recycling')	
})