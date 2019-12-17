export class SchedulesService {
    static get OPTIONS() {
        return {
            interval: 1000,
            delay:    0,
        };
    }

    constructor() {
        this._schedules = [];
    }

    /**
     * @param {Vue} vm
     * @param {object} scheduled
     */
    init(vm, scheduled) {
        Object.entries(scheduled).forEach(([taskName, scheduleOptions]) => {
            if (typeof vm[taskName] === 'function') {
                const options = this._parseOptions(scheduleOptions);

                let schedule = () => this._schedules[taskName] = setInterval(() => vm[taskName](), options.interval);

                if (options.delay) {
                    this._schedules[taskName] = setTimeout(schedule, options.delay);
                } else {
                    schedule();
                }
            }
        });
    }

    clear() {
        Object.values(this._schedules).forEach(clearInterval);

        this._schedules = [];
    }

    /**
     * @param {object|number} options
     * @returns {{delay: number, interval: number}}
     * @private
     */
    _parseOptions(options) {
        const result = SchedulesService.OPTIONS;

        if (typeof options === 'object') {
            Object.assign(result, options);
        } else if (typeof options === 'number') {
            result.interval = options;
        }

        return result;
    }
}
