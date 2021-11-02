<template>
	<div class="article-list">
		<div class="article-list-content">
			<div class="article-list-content-province">
				<el-tag v-for="item in province" :key="item" :type="item" effect="dark" class="tag">
					{{ item }}
				</el-tag>
				<el-tag class="more">全部节点</el-tag>
			</div>
			<div class="article-list-content-city">
				<el-tag v-for="item in city" :key="item" :type="item" effect="dark" class="tag">
					{{ item }}
				</el-tag>
				<el-tag class="more">全部节点</el-tag>
			</div>
			<div class="article-list-content-data">
				<div class="data-list">
					<div class="data-list-img">
						<img src="../../assets/logo.png" />
					</div>
					<div class="data-list-info">
						<div class="data-list-info-title">
							<span v-on:click="openNavigationDetail()">vue sessionStorage清空所有缓存</span>
						</div>
						<div class="data-list-into-city">
							<el-tag v-for="item in checkCity" :key="item" :type="item" effect="dark" class="check-city">
								{{ item }}
							</el-tag>
							<span class="data-list-into-city-txt">张三</span>
							<span class="data-list-into-city-txt">创建时间: 2021-10-28</span></span>
						</div>
					</div>
					<div class="data-list-message">
						<div class="data-list-message-content">
							<el-badge :value="12" class="item"></el-badge>
						</div>
					</div>
				</div>
				<div class="data-list">
					<div class="data-list-img">
						<img src="../../assets/logo.png" />
					</div>
					<div class="data-list-info">
						<div class="data-list-info-title">
							<span v-on:click="openNavigationDetail()">前端tree状结构怎么替换key值</span>
						</div>
						<div class="data-list-into-city">
							<el-tag v-for="item in checkCity" :key="item" :type="item" effect="dark" class="check-city">
								{{ item }}
							</el-tag>
							<span class="data-list-into-city-txt">李四</span>
							<span class="data-list-into-city-txt">创建时间: 2021-10-28</span></span>
						</div>
					</div>
					<div class="data-list-message">
						<div class="data-list-message-content">
							<el-badge :value="5" class="item"></el-badge>
						</div>
					</div>
				</div>
				<div class="data-list">
					<div class="data-list-img">
						<img src="../../assets/logo.png" />
					</div>
					<div class="data-list-info">
						<div class="data-list-info-title">
							<span>Pass a context object as 3rd connect parameter</span>
						</div>
						<div class="data-list-into-city">
							<el-tag v-for="item in checkCity" :key="item" :type="item" effect="dark" class="check-city">
								{{ item }}
							</el-tag>
							<span class="data-list-into-city-txt">王五</span>
							<span class="data-list-into-city-txt">创建时间: 2021-10-28</span></span>
						</div>
					</div>
					<div class="data-list-message">
						<div class="data-list-message-content">
							<el-badge :value="12" class="item"></el-badge>
						</div>
					</div>
				</div>
				<div class="data-list">
					<div class="data-list-img">
						<img src="../../assets/logo.png" />
					</div>
					<div class="data-list-info">
						<div class="data-list-info-title">
							<span>file_get_contents这个函数能禁止读取远程url吗</span>
						</div>
						<div class="data-list-into-city">
							<el-tag v-for="item in checkCity" :key="item" :type="item" effect="dark" class="check-city">
								{{ item }}
							</el-tag>
							<span class="data-list-into-city-txt">张六</span>
							<span class="data-list-into-city-txt">创建时间: 2021-10-28</span></span>
						</div>
					</div>
					<div class="data-list-message">
						<div class="data-list-message-content">
							<el-badge :value="12" class="item"></el-badge>
						</div>
					</div>
				</div>
				<div class="data-list">
					<div class="data-list-img">
						<img src="../../assets/logo.png" />
					</div>
					<div class="data-list-info">
						<div class="data-list-info-title">
							<span>github下载的项目启动时报错</span>
						</div>
						<div class="data-list-into-city">
							<el-tag v-for="item in checkCity" :key="item" :type="item" effect="dark" class="check-city">
								{{ item }}
							</el-tag>
							<span class="data-list-into-city-txt">谢七</span>
							<span class="data-list-into-city-txt">创建时间: 2021-10-28</span></span>
						</div>
					</div>
					<div class="data-list-message">
						<div class="data-list-message-content">
							<el-badge :value="12" class="item"></el-badge>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="article-list-left">
			<div class="article-list-information">
				<div class="article-list-information-user-logo">
					<div class="article-list-information-user-logo-flex">
						<div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
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
	export default {
		data() {
			return {
				province: ['湖南', '湖北', '广东', '广西', '河南', '河北'],
				city: ['长沙', '常德', '邵阳', '岳阳'],
				checkCity: ['长沙', '常德'],
				circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
			}
		},
		methods:{
			openNavigationDetail(){
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

			.more {
				float: right;
				height: 100%;
				background-color: #FFFFFF;
				color: #606266;
				border-color: #FFFFFF;
			}

			.tag {
				height: 100%;
				float: left;
				background-color: #FFFFFF;
				color: #606266;
				border-color: #FFFFFF;
			}

			.more:hover {
				background-color: black;
				color: #FFFFFF;
			}

			.tag:hover {
				background-color: black;
				color: #FFFFFF;
			}


			.article-list-content-province {
				width: 100%;
				height: 1.875rem;
				font-size: 0.625rem;
				font-weight: 700;
			}

			.article-list-content-city {
				width: 100%;
				height: 1.875rem;
				border-bottom: solid 1px #e2e2e2;
				border-radius: 0.25rem;
				font-size: 0.625rem;
				font-weight: 700;
			}

			.article-list-content-data {
				width: 100%;
				height: 100%;

				.data-list {
					width: 100%;
					height: 3.875rem;
					min-height: 3.125rem;
					float: left;
					border-bottom: solid 1px #e2e2e2;
					border-radius: 0.25rem;

					.data-list-img {
						width: 8%;
						height: 100%;
						display: inline-block;

						img {
							width: 90%;
							height: 90%;
							margin-bottom: 0.3125rem;
							margin-left: 0.3125rem;
						}
					}

					.data-list-info {
						width: 77%;
						height: 100%;
						display: inline-block;
						margin-bottom: 0.3125rem;

						.data-list-info-title {
							height: 60%;
							width: 100%;
							float: left;
							margin-left: 0.625rem;
							font-size: 1.25rem;
							font-weight: 700;
							color: #606266;

							span {
								line-height: 35px;
								cursor: pointer;
							}
						}

						.data-list-into-city {
							height: 40%;
							width: 100%;
							float: left;

							.check-city {
								height: 100%;
								float: left;
								background-color: #e2e2e2;
								border-color: #e2e2e2;
								color: #777;
								opacity: 0.9;
								font-weight: 700;
								font-size: 0.625rem;
								margin-top: -0.25rem;
								margin-left: 0.3125rem;
								text-align: center;
							}
							
							.data-list-into-city-txt{
								font-weight: 700;
								margin-left: 1.25rem;
								margin-top: -0.3125rem;
								color: #777;
								font-size: 15px;
							}
						}
					}

					.data-list-message {
						width: 15%;
						height: 100%;
						display: inline-block;
						
						.data-list-message-content{
							width: 100%;
							height: 100%;
							display: flex;
							justify-content: center;
							align-content: center;
							float: left;
							margin-top: 1.25rem;
							
							.el-badge__content{
								border-color: #e2e2e2;
								color: #777;
							}
						}
					}
				}
			}
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
				
				.article-list-information-user-logo{
					width: 100%;
					height: 35%;
					
					.article-list-information-user-logo-flex{
						width: 100%;
						height: 100%;
						display: flex;
						justify-content: center;
						margin-top: 1.25rem;
						float: left;
					}
				}
				
				.article-list-information-user-info{
					width: 100%;
					height: 65%;
					
				}
			}
		}
	}
</style>
