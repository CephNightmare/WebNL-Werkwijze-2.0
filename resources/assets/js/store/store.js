const store = new Vuex.Store({
    state: {
        modalVisible: false,
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    },
    actions: {
        fetchProductsFromDatabase({commit}, value) {
            return new Promise((resolve, reject) => {
                API.products.fetchProductsFromDatabase().then(function(data) {
                    resolve(data);
                }).catch(e => {
                    reject(e);
                });
            });
        },
        toggleModalVisibility({ commit }, value) {
            commit('toggleModalVisibility', value)
        }
    },
    getters: {
        modalVisible () {
            return store.state.modalVisible;
        }
    },
    mutations: {
        toggleModalVisibility (state, value) {
            store.state.modalVisible =  value;
        },
    }
});