<template>
<div>
    <div v-for="item in first" :key="item.index">
        <div v-for="child in item.seconed" :key="child.index">
            {{child.id}}
            <count-down :timer="child.time" />
        </div>
    </div>
</div>
</template>

<script>
import countDown from '@/components/panel1'

export default {
    components: {
        countDown
    },
    data() {
        return {

            first: [{
                id: '1',
                seconed: [{
                    id: '01',
                    time: {
                        nowTime: '2020-08-09 10:10:10',
                        endTime: '2020-08-12 10:10:10',
                        startTime: '2020-08-11 10:10:10',
                    }
                }, {
                    id: '02',
                    time: {
                        nowTime: '2020-07-05 10:10:10',
                        endTime: '2020-07-11 10:10:10',
                        startTime: '2020-07-10 10:10:10',
                    }
                }, {
                    id: '03',
                    time: {
                        nowTime: '2020-07-05 10:10:10',
                        endTime: '2020-07-11 10:10:10',
                        startTime: '2020-07-10 10:10:10',
                    }
                }]
            }],

        }
    },

}
</script>
