<template lang="pug">
.lenta
	q-card(v-for="item in items" flat square bordered :key="item.id" :class="{ 'unread' : item.unread}").listitem
		.read(@click="toggle(item.id)")
		.flex
			q-checkbox(v-model="item.selected")
			div
				.top
					.typ {{ item.typ}}
					.status {{ item.status}}
				.title
					span {{ item.title}}
				.top
					.autor Автор: {{ item.author}}
					.srok Дата: {{ item.changed }}
					.srok(v-if="item.num") Вложения: {{ item.num }}
				.descr {{ item.digest}}
</template>

<script>
export default {
	components: [],
	props: {
		items: {
			type: Array,
			required: true,
		},
		total: {
			type: Number,
			default: 0,
		},
	},

	setup(props) {
		const toggle = (e) => {
			const current = props.items.find((b) => b.id === e)
			current.unread = !current.unread
		}
		return {
			toggle,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.lenta {
	height: calc(100vh - 200px);
	overflow: auto;
}
.listitem {
	margin: 0.5rem 0;
	position: relative;
	padding: 1rem;
	&.unread {
		font-weight: bold;
	}
	.title {
		span {
			font-size: 1.1rem;
			cursor: pointer;
			color: var(--q-link);
		}
	}
}
.flex {
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: nowrap;
	gap: 1rem;
}

.read {
	width: 8px;
	height: 100%;
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAAXNSR0IArs4c6QAAABpJREFUGFdjZEACjCD2jh07/nt4eDCCOTAAAEsRBAT/WuYQAAAAAElFTkSuQmCC);
	.unread & {
		background-color: var(--q-primary);
	}
}
.top {
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
}
.status {
}
</style>
