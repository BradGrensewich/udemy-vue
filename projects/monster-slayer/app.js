function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			specialCooldown: 0,
			winner: null,
            log: []
		};
	},
	watch: {
		playerHealth(value) {
			if (value <= 0 && this.monsterHealth <= 0) {
				//draw
				this.winner = 'draw';
			} else if (value <= 0) {
				//lose
				this.winner = 'monster';
			}
		},
		monsterHealth(value) {
			if (value <= 0 && this.playerHealth <= 0) {
				//draw
				this.winner = 'draw';
			} else if (value <= 0) {
				//win
				this.winner = 'player';
			}
		}        
	},
	methods: {
		attackMonster() {
			const damage = getRandomValue(6, 12);
			this.monsterHealth -= damage;
            this.addLogMessage('You', 'attack', damage);
			this.attackPlayer();
		},
		attackPlayer() {
			const damage = getRandomValue(8, 15);
			this.playerHealth -= damage;
            this.addLogMessage('The monster', 'attack', damage);
			this.specialCooldown -= 1;
		},
		specialAttack() {
			const damage = getRandomValue(10, 26);
			this.monsterHealth -= damage;
            this.addLogMessage('You', 'special', damage);
			this.attackPlayer();
			this.specialCooldown = 10;
		},
		healPlayer() {
			const healValue = getRandomValue(10, 12);
            this.addLogMessage('You', 'heal', healValue);
			this.playerHealth += healValue;
			this.attackPlayer();
		},
		startNewGame() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.winner = null;
			this.specialCooldown = 0;
            this.log = [];
		},
		surrender() {
			this.winner = 'monster';
		},
        addLogMessage(who, what, value) {
            this.log.unshift( {
                by: who,
                did: what,
                amount: value
            });
        }
	},
	computed: {
		monsterBarStyles() {
			if (this.monsterHealth < 0) {
				return { width: '0%' };
			} else {
				return { width: this.monsterHealth + '%' };
			}
		},
		playerBarStyles() {
			if (this.playerHealth < 0) {
				return { width: '0%' };
			} else {
				return { width: this.playerHealth + '%' };
			}
		},
		specialCoolingDown() {
			return this.specialCooldown > 0;
		},
		coolDownMessage() {
			if (this.specialCoolingDown) {
				return `Ready in ${this.specialCooldown} turns`;
			} else {
				return 'SPECIAL ATTACK';
			}
		},
        whoClass(who) {
            if (who === 'You') {
                return 'log--player'
            } else {
                return 'log--monster'
            }
        }
	},
});

app.mount('#game');
