<template lang="pug">
.login-area.d-flex.align-item-center.justify-content-center.text-center
    form.form-signin(@submit.prevent='login')
        h1.h3.mb-3.font-weight-normal Please sign in
        label.sr-only(for='inputEmail') Email address
        input#inputEmail.form-control( :value="userInfo.username", type='email', placeholder='Email address', required='', autofocus='')
        label.sr-only(for='inputPassword') Password
        input#inputPassword.form-control( type='password', placeholder='Password', required='', :value="userInfo.password")
        .checkbox.mb-3
            label
                input(type='checkbox', value='remember-me')
                |  Remember me
        button.btn.btn-lg.btn-primary.btn-block(type='submit') Sign in
        br
        button.btn(@click="changePanel()") testPanel
        // div.test
        //     ul
        //         li(v-for='item in fackData.results' @click='testClick(item.id.value)') {{item.id.value}}
        p.mt-5.mb-3.text-muted &copy; 2017-2018
</template>

<script>
import {
    mapState,
    mapActions,
    mapMutations
} from 'vuex'
import axios from 'axios'
import panel2 from '@/components/panel2'
export default {
    layout: 'login',
    // async asyncData({
    //     query,
    //     params
    // }) {
    //     const url_purchased = `/me/purchased_courses`;
    //     const url_favoriate = `/me/bookmarked_courses`
    //     const perPage = 12;
    //     const favPerPage = 12;
    //     let [data, favcourses] = await Promise.all([
    //         axios.get(url_purchased, {
    //             params: {
    //                 perPage: perPage,
    //                 page: query.page || 1
    //             }
    //         }),
    //         axios.get(url_favoriate, {
    //             params: {
    //                 perPage: favPerPage,
    //                 page: query.page || 1
    //             }
    //         })
    //     ])
    //     return {
    //         perPage: perPage,
    //         currentPage: query.page || 1,
    //         courses: data.data,
    //         faverPage: favPerPage,
    //         favcurrentPage: query.page || 1,
    //         favcourses: favcourses.data
    //     }
    // },
    data() {
        return {}
    },
    computed: {
        ...mapState('auth', ['userInfo']),
        userInfo: function () {
            return this.$store.state.auth.userInfo
        }
    },
    asyncData({
        params
    }) {
        const url = "https://api.mocki.io/v1/b043df5a"
        return axios({
            url: url,
            header: {}
        }).then(res => {
            console.log(res.data)
            return {
                fackData: res.data
            }
        })
    },
    // asyncData({
    //     isDev,
    //     route,
    //     store,
    //     env,
    //     params,
    //     query,
    //     req,
    //     res,
    //     redirect,
    //     error
    // }) {
    //     let api = 'https://randomuser.me/api'
    //     return axios({
    //         url: api,
    //         header: {}
    //     }).then(res => {
    //         console.log(res.data)
    //         return {
    //             fackData: res.data
    //         }
    //     })
    // },

    mounted() {
        console.log(this.fackData)
        let date = new Date().toString()
        let limitDate = new Date() + 600
        console.log(date)
    },
    methods: {
        ...mapActions('auth', ['signin', 'getTestData']),
        // ...mapMutations(['SET_USER'])
        changeUserInfo(key, evt) {
            console.log(key, evt.target.value)
            // this.$store.commit('auth/SET_USERINFO', {
            //     key: key,
            //     value: evt.data
            // })
        },
        changePanel() {
            let _this = this
            _this.$router.push({
                path: `/test/`
            })
        },
        // test() {
        //     const url = `https://randomuser.me/api` // 管理者取得資料
        //     const _this = this
        //     let data = {
        //         id: 1
        //     }
        //     this.$axios.get(url).then((res) => {
        //         console.log(res.data)
        //     })
        // },
        login() {
            // const url = `https://vue-course-api.hexschool.io/admin/signin`;
            // const url = `${process.env.APIPATH}/admin/signin`;
            const _this = this;
            const username = document.getElementById('inputEmail').value
            const password = document.getElementById('inputPassword').value
            const userInfo = {
                username: username,
                password: password
            }
            this.$store.commit('auth/SET_USERINFO', userInfo)
            this.$store.dispatch('auth/signin', userInfo);
        }
    }
}
</script>

<style scoped>
html,
body {
    height: 100%;
}

body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}

.login-area {
    height: 100vh;
}

.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.form-signin .checkbox {
    font-weight: 400;
}

.form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}

.form-signin .form-control:focus {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>
