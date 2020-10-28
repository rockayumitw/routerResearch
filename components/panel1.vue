<template>
<div>
    {{countDown.hour}}:{{countDown.min}}:{{countDown.sec}}
</div>
</template>

<script>
export default {
    props: ['timer'],
    data() {
        return {
            countDown: {
                day: '',
                hour: '',
                min: '',
                sec: '',
            }
        }
    },
    mounted() {
        // console.log(this.timer)
        this.getCountDown(this.timer.nowTime)
    },
    methods: {
        getCountDown(nowTime) {
            console.log(nowTime)

            let starTime = this.timer.startTime

            let t0 = new Date(nowTime).getTime() // 從何時開始
            const countdown = new Date(starTime).getTime() // 倒數 = 開始時間
            let temp = 0
            const pastTime = countdown - t0

            let timer = (time) => {
                temp = pastTime - time
                let seconds = Math.floor(temp / 1000);
                let day = Math.floor(seconds / 3600 / 24);
                let hour = Math.floor((seconds / 3600) % 24);
                let minute = Math.floor((seconds / 60) % 60);
                let second = Math.floor(seconds - day * 24 * 3600 - hour * 3600 - minute * 60);

                day = day < 10 ? "0" + day : day;
                hour = hour < 10 ? "0" + hour : hour;
                minute = minute < 10 ? "0" + minute : minute;
                second = second < 10 ? "0" + second : second;

                this.countDown.day = day
                this.countDown.hour = hour
                this.countDown.min = minute
                this.countDown.sec = second

                console.log(day, hour, minute, second)

                // if (bol == true) {
                //     console.log('true')
                //     cancelAnimationFrame(timer)
                //     this.countDown.day = 0
                //     this.countDown.hour = 0
                //     this.countDown.min = 0
                //     this.countDown.sec = 0
                //     console.log('true')
                //     return false
                // }

                if (temp <= 0)
                    return;

                requestAnimationFrame(timer)
            }
            timer()
        }
    }
}
</script>
