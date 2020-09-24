const BASE_URL = "https://web.sikefangji.com";
const AJAX = function(params) {
	return new Promise((resolve, reject) => {
		if (params.loading) {
			uni.showLoading({
				title: params.loadingText || "获取数据..."
			})
		}
		uni.request({
			// #ifdef APP-PLUS
			url: BASE_URL + params.url,
			// #endif
			// #ifdef H5
			url: "/api" + params.url,
			// #endif
			method: params.method || "GET",
			data: params.data || {},
			success: res => {
				uni.hideLoading();
				if (res.data.status == 0) {
					resolve(res.data);
				} else {
					return uni.showToast({
						title: '获取数据失败',
						icon: "none"
					})
				}
			},
			fail: err => {
				uni.hideLoading();
				uni.showToast({
					title: '获取数据失败',
					icon: "none"
				})
				reject(err);
			}
		})
	})
}

export default AJAX;
