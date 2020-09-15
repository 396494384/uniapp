const BASE_URL = "http://192.168.0.142:8082";
const AJAX = function(params) {
	return new Promise((resolve, reject) => {
		if (params.loading) {
			uni.showLoading({
				title: params.loadingText || "获取数据..."
			})
		}
		uni.request({
			url: BASE_URL + params.url,
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
