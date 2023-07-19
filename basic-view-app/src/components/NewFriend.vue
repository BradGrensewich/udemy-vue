<template>
	<form @submit.prevent="addFriend">
        <div>
            <label for="full-name">Full Name</label>
            <input type="text" name="full-name" id="full-name" v-model="name" />
        </div>
        <div>
            <label for="phone">Phone Number</label>
            <input type="text" name="phone" id="phone" v-model="phone" />
        </div>
        <div>
            <label for="email">Email</label>
            <input type="text" name="email" id="email" v-model="email" />
        </div>
        <button>Create New Friend</button>   
        
        
        
	</form>
</template>

<script>
export default {
	data() {
		return {
            id: '',
            name: '',
			phone: '',			
			email: '',
			
		};
	},
	emits: {
        'add-friend': function(id, name, phone, email) {
            if (id && name && phone && email) {
                return true;
            } else {
                return false;
            }
        }
    },
	methods: {
        addFriend() {
            this.id = this.name
            this.$emit('add-friend', this.id, this.name, this.phone, this.email)
        }
    },
};
</script>
