<template>
	<keep-alive>
		<nav class="menu">
			<ul itemscope itemtype="http://www.schema.org/SiteNavigationElement">
				<li v-for="item in itensMenu" :key="item.id" itemprop="name">
					<router-link :to="item.link" itemprop="url">{{item.name}}</router-link>
				</li>
			</ul>
		</nav>
	</keep-alive>
</template>

<script>
	export default {
		data() {
			return {
				itensMenu: []
			};
		},
		created() {
			this.$eventBus.$on("jsonGlobalLoaded", response => {
				this.itensMenu = response.data.menu;
			});
		},
		beforeDestroy() {
			this.$eventBus.$off("jsonGlobalLoaded"); // releases the subscription
		}
	};
</script>