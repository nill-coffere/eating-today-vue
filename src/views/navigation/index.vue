<template>
	<div class="article-list">
		<div class="article-list-content">
			<keep-alive>
				<component :is="currentTabComponent" @switchMenu="switchMenu"></component>
			</keep-alive>
		</div>
		<div class="article-list-left">
			<div class="article-list-information">
				<div class="article-list-information-user-logo">
					<div class="article-list-information-user-logo-flex">
						<div class="block">
							<el-avatar :size="50" :src="circleUrl"></el-avatar>
						</div>
					</div>
				</div>
				<div class="article-list-information-user-info">
				</div>
			</div>
			<!-- TODO Other Information -->
		</div>
	</div>
</template>

<script>
	import navigationList from '../navigation-list/index.vue';
	import navigationDetail from '../navigation-detail/index.vue';

	export default {
		components: {
			navigationList,
			navigationDetail,
		},
		data() {
			return {
				currentTabComponent: 'navigationList',
				circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
			}
		},
		methods: {
			openNavigationDetail() {

			},
			switchMenu(componentName){
				this.currentTabComponent = componentName;
			}
		}
	}
</script>

<style lang="less" scoped>
	.el-tag {
		line-height: 1.5rem !important;
	}

	.article-list {
		width: 100%;
		height: 100%;

		.article-list-content {
			width: 78%;
			height: 100%;
			background-color: #FFFFFF;
			display: inline-block;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0);
		}

		.article-list-left {
			width: 20%;
			height: 100%;
			margin-left: 1.25rem;
			display: inline-block;

			.article-list-information {
				width: 100%;
				height: 30%;
				background-color: #FFFFFF;
				box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0);

				.article-list-information-user-logo {
					width: 100%;
					height: 35%;

					.article-list-information-user-logo-flex {
						width: 100%;
						height: 100%;
						display: flex;
						justify-content: center;
						margin-top: 1.25rem;
						float: left;
					}
				}

				.article-list-information-user-info {
					width: 100%;
					height: 65%;

				}
			}
		}
	}
</style>
