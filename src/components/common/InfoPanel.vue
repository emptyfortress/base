<template lang="pug">
.relative-position
	q-expansion-item(v-model='panels.info' switch-toggle-side label="Информация")
		q-card
			q-card-section Детальный план ввода в эксплуатацию автоматизированной информационной системы государственного заказа Санкт-Петербурга на периода март-май 2020 г.
			q-card-section.q-pt-none laksjd

	.actionBt
		q-btn(round flat dense icon="mdi-unfold-more-horizontal" @click="$emit('toggle')")
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue'
export default {
	props: ['panels'],
	emits: ['toggle'],
	components: {
		SvgIcon,
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.actionBt {
	position: absolute;
	top: 7px;
	right: 16px;
	body.body--dark & {
		color: var(--dark-text-color);
	}
	&.gr svg {
		opacity: 0.7;
		&:hover {
			opacity: 1;
		}
	}
}
</style>
