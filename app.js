let superheroData = [
  { name: 'Flash', phone: '123-4567', photoUrl: "https://upload.wikimedia.org/wikipedia/en/2/22/Flash_Pack.jpg" },
  { name: 'Superman', phone: '123-4567', photoUrl: "https://upload.wikimedia.org/wikipedia/en/e/eb/SupermanRoss.png" },
  { name: 'Batman', phone: '123-4567', photoUrl: "https://upload.wikimedia.org/wikipedia/en/2/22/Batman-DC-Comics.jpg" },
  { name: 'Hulk', phone: '123-4567', photoUrl: "https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png" },
  { name: 'Ironman', phone: '123-4567', photoUrl: "https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg" },
]

angular
	.module("superheroApp", [])
	.controller('superherosCtrl', [ superheroController ])

	function superheroController () {
		this.superheros = superheroData
	}