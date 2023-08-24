<template>
	<section>		
		<BaseCard>
            <h2>Register as a coach now!</h2>
			<CoachForm></CoachForm>
		</BaseCard>
	</section>
</template>

<script>
import CoachForm from './CoachForm.vue';
export default {
	components: { CoachForm },
};
</script>
