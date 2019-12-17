import { SchedulesService } from './SchedulesService';

export default () => ({
    data() {
        return {
            $_schedulesService: new SchedulesService(),
        };
    },

    mounted() {
        if (this.$options.scheduled) {
            this.$_schedulesService.init(this, this.$options.scheduled);
        }
    },

    beforeDestroy() {
        this.$_schedulesService.clear();
    },
});
