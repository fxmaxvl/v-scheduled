export default () => ({
    data() {
        return {
            $_schedules: {},
        };
    },

    methods: {
        $_initSchedules() {
            if (!this.$options.scheduled) {
                return;
            }

            Object.entries(this.$options.scheduled).forEach(([taskName, scheduleInterval]) => {
                if (typeof this[taskName] === 'function') {
                    this.$data.$_schedules[taskName] = setInterval(() => this[taskName](), scheduleInterval);
                }
            });
        },

        $_clearSchedules() {
            Object.entries(this.$data.$_schedules).forEach((taskName, scheduleIntervalId) => {
                clearInterval(scheduleIntervalId);
            });

            this.$data.$_schedules = {};
        },
    },

    mounted() {
        this.$_initSchedules();
    },

    beforeDestroy() {
        this.$_clearSchedules();
    },
});
