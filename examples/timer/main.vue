<template>
    <div id="app">
        <div class="timers">
            <h1>Timers</h1>
            <div class="timers">
                <div v-for="item in timers">
                    <span> {{ item.value }}</span>
                    <div class="smalltext">{{ item.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                timers: [
                    {
                        name:  '0.25x',
                        value: 0,
                    },
                    {
                        name:  '0.5x',
                        value: 0,
                    },
                    {
                        name:  '1x',
                        value: 0,
                    },
                    {
                        name:  '2x',
                        value: 0,
                    },
                    {
                        name:  '3x',
                        value: 0,
                    },
                ],
            };
        },

        methods: {
            inc025x() {
                this.timers.find(timer => timer.name === '0.25x').value += 1;
            },
            inc05x() {
                this.timers.find(timer => timer.name === '0.5x').value += 1;
            },
            inc1x() {
                this.timers.find(timer => timer.name === '1x').value += 1;
            },
            inc2x() {
                this.timers.find(timer => timer.name === '2x').value += 1;
            },
            inc3x() {
                this.timers.find(timer => timer.name === '3x').value += 1;
            },
        },

        scheduled: {
            inc025x: 1000 / 4,
            inc05x:  1000 / 2,
            inc1x:   1000,
            inc2x:   1000 * 2,
            inc3x:   1000 * 3,
        },
    };
</script>

<style>
    body {
        text-align: center;
        background: #00ECB9;
        font-family: sans-serif;
        font-weight: 100;
    }

    h1 {
        color: #396;
        font-weight: 100;
        font-size: 40px;
        margin: 40px 0px 20px;
    }

    timers {
        font-family: sans-serif;
        color: #fff;
        display: inline-block;
        font-weight: 100;
        text-align: center;
        font-size: 30px;
    }

    timers > div {
        padding: 10px;
        border-radius: 3px;
        background: #00BF96;
        display: inline-block;
    }

    timers div > span {
        padding: 15px;
        border-radius: 3px;
        background: #00816A;
        display: inline-block;
    }

    smalltext {
        padding-top: 5px;
        font-size: 16px;
    }
</style>
