window.onload = function() {
	Particles.init({
		selector: '.particles',
		color: '#111111',
		maxParticles: 180,
		connectParticles: true,
		responsive: [
			{
				breakpoint: 768,
				options: {
					maxParticles: 80
				}
			},
			{
				breakpoint: 375,
				options: {
					maxParticles: 60
				}
			}
		]
	})
}
