<template lang="pug">
q-page(padding)
	.row.justify-between.items-center
		.zag
			q-icon(name="mdi-card-account-details-outline").q-mr-md
			|Личный кабинет
		q-input(v-model="search" dense clearable autofocus ).search
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const search = ref()
</script>

<style scoped lang="scss">
.search {
	width: 350px;
	font-size: 1.1rem;
	margin-bottom: 1rem;
	:deep .q-field--prepend,
	:deep .q-field--append {
		transform: translateY(5px);
	}
}
:deep.q-field--dense .q-field__marginal {
	height: inherit !important;
}
</style>
