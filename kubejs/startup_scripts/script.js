// priority: 0

console.info('你好，世界！（控制台在启动时只会看到这一行）')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	
	event.create('copper_coin').displayName('铜币').tooltip('通过任务获得').rarity('Uncommon')
	event.create('iron_coin').displayName('铁币').tooltip('通过任务获得').rarity('Uncommon')
	event.create('gold_coin').displayName('金币').tooltip('通过任务获得').rarity('Rare')
	event.create('diamond_coin').displayName('钻石币').tooltip('通过任务获得').rarity('Epic')
	event.create('netherite_coin').displayName('下界合金币').tooltip('通过任务获得').rarity('Epic')
	event.create('monster_coin').displayName('怪物币')
	event.create('nether_coin').displayName('下界币').tooltip('通过完成下界章节任务获得').rarity('Uncommon')
	
	event.create('diamond_nugget').displayName('钻石碎片')
	event.create('emerald_nugget').displayName('绿宝石碎片')
	
	event.create('dreadnoughtbow').displayName('霸主之弓图标').tooltip('这个物品只是一个图标。霸主之弓的配方可以在地牢战利品中找到')
	event.create('mace').displayName('权杖图标').tooltip('这个物品只是一个图标。权杖的配方可以在地牢战利品中找到')
	event.create('halberd').displayName('戟图标').tooltip('这个物品只是一个图标。戟的配方可以在地牢战利品中找到')
	
	event.create('coin_01').displayName('硬币').tooltip('通过击败挑战型生物获得').rarity('Rare')
	event.create('coin_02').displayName('一对硬币')
	event.create('coin_03').displayName('一堆硬币')
	event.create('coin_04').displayName('一堆硬币')
	event.create('coin_05').displayName('数十枚硬币')
	
	event.create('medal').displayName('勋章').glow(true)
	event.create('heart').displayName('红心')
	
	event.create('fox').displayName('ShadowFoxy Patreon 支持者图标')
	event.create('kruscle').displayName('Kruscle Patreon 支持者图标')
	event.create('plua').displayName('ShadowFoxy Patreon 支持者图标')
	event.create('crankonator').displayName('Kruscle Patreon 支持者图标')
	event.create('lexileexx').displayName('LexiLeeXx Patreon 支持者图标')
	
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})