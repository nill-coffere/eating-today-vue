<template>
	<div class="index">
		<el-row class="index-header">
			<el-col :span="4" class="h-100">
				<div class="index-header-right"></div> 
			</el-col>
			<el-col :span="16" class="h-100">
				<div class="index-header-mid">
					<div class="index-header-mid-right">
						<div class="index-header-mid-right-log" v-on:click="navigation()"><img src="../../assets/logo.png" /></div>
						<div class="index-header-mid-right-nav">
							<el-button type="text">怎么吃</el-button>
							<el-button type="text">吃什么</el-button>
						</div>
					</div>
					<div class="index-header-mid-left">
						<el-button type="primary" size="small" v-on:click="login()">登录</el-button>
						<el-button type="primary" size="small" v-on:click="register()">注册</el-button>
					</div>
				</div>
			</el-col>
			<el-col :span="4" class="h-100">
				<div class="index-header-left"></div>
			</el-col>
		</el-row>
		<el-row class="index-list">
			<el-col :span="4" class="h-100">
				<div class="index-list-right"></div>
			</el-col>
			<el-col :span="16" class="h-100">
				<div class="index-list-mid">
					<keep-alive>
						<component :is="currentTabComponent" @switchMenu="switchMenu"></component>
					</keep-alive>
				</div>
			</el-col>
			<el-col :span="4" class="h-100">
				<div class="index-list-left"></div>
			</el-col>
		</el-row>
		<el-row class="index-bottom">
			<el-col :span="4" class="h-100">
				<div class="index-bottom-right"></div>
			</el-col>
			<el-col :span="16" class="h-100">
				<div class="index-bottom-mid"></div>
			</el-col>
			<el-col :span="4" class="h-100">
				<div class="index-bottom-left"></div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	
	import navigation from '../navigation/index.vue';
	import login from '../login/index.vue';
	import register from  '../register/index.vue';
	import navigationDetail from '../navigation-detail';
	
	export default{
		components: {
			navigation,
			login,
			register,
			navigationDetail
		},
		data(){
			return {
				currentTabComponent: 'navigation',
				searchText: '',
			}
		},
		methods:{
			login(){
				this.currentTabComponent = 'login';
			},
			register(){
				this.currentTabComponent = 'register';
			},
			navigation(){
				this.currentTabComponent = 'navigation';
			},
			switchMenu(componentName){
				this.currentTabComponent = componentName;
			}
		},
	}
	
</script>

<style lang="less" scoped>
	.index {
		width: 100%;
		height: 100%;
		background-color: #EBEEF5;

		.h-100 {
			height: 100%;
		}

		.index-header {
			width: 100%;
			height: 5%;
			background-color: #FFFFFF;
			box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.19);

			.div {
				height: 100%;
			}

			.index-header-right {
				width: 100%;
				height: 100%;
			}

			.index-header-mid {
				width: 100%;
				height: 100%;

				.index-header-mid-right {
					width: 70%;
					height: 100%;
					display: inline-block;
					font-size: 1.25rem;

					.index-header-mid-right-log {
						display: inline-block;
						width: 8%;
						height: 100%;
						cursor: pointer;
						img {
							width: 100%;
							height: 100%;
						}
					}

					.index-header-mid-right-nav {
						display: inline-block;
						width: 92%;
						height: 100%;
						button {
							float: left;
							font-size: 1rem;
							margin-left: 1rem;
							font-weight: 700 !important;
							color: #606266;
						}
					}
				}

				.index-header-mid-left {
					width: 30%;
					height: 100%;
					display: inline-block;
					
					button {
						float: right;
						text-align: center;
						margin-left: 1rem;
						margin-top: 0.625rem;
					}
				}
			}

			.index-header-left {
				width: 100%;
				height: 100%;
			}
		}

		.index-list {
			width: 100%;
			height: 80%;
			margin-top: 1%;
			margin-bottom: 1%;

			.div {
				height: 100%;
			}

			.index-list-right {
				width: 100%;
				height: 100%;
			}

			.index-list-mid {
				width: 100%;
				height: 100%;
			}

			.index-list-left {
				width: 100%;
				height: 100%;
			}
		}

		.index-bottom {
			width: 100%;
			height: 10%;
			background-color: #EBEEF5;

			.div {
				height: 100%;
			}

			.index-bottom-right {
				width: 100%;
				height: 100%;
			}

			.index-bottom-mid {
				width: 100%;
				height: 100%;
			}

			.index-bottom-left {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
