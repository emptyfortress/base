<template lang="pug">
.zg
	.lin(@click="reset") Сбросить все
	.lin(@click="expand")
		span(v-show="panel.length <= 1") Распахнуть все
		span(v-show="panel.length > 1") Свернуть все
.common
	section
		q-expansion-item(label="Тип карточки" :header-class="hd")
			q-card
				q-card-section Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				
</template>

<script>
import {ref} from 'vue'
export default {

	setup() {
		const panel = ref([])

		return {
			panel,
		}
	},

}
</script>

<style scoped lang="scss">
.zg {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	height: 40px;
	padding: 0 0.5rem;
}
.lin {
	font-size: 0.8rem;
	color: var(--q-link);
	cursor: pointer;
}
.common {
	background: #fff;
	height: calc(100vh - 260px);
	border-right: 1px solid silver;
	overflow-y: scroll;
	overflow-x: hidden;
	mask-image: linear-gradient(to top, transparent, black),
		linear-gradient(to left, transparent 17px, black 17px);
	mask-size: 100% 20000px;
	mask-position: left bottom;
	-webkit-mask-image: linear-gradient(to top, transparent, black),
		linear-gradient(to left, transparent 17px, black 17px);
	-webkit-mask-size: 100% 20000px;
	-webkit-mask-position: left bottom;
	transition: mask-position 0.3s, -webkit-mask-position 0.3s;
	&:hover {
		-webkit-mask-position: left top;
	}
}
.hd {
	color: red !important;
}
</style>
