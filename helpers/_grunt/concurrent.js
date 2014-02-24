module.exports = {
    rendering: {
        tasks: [
            'newer:assemble',
            'packager'

        ],
        options: {
            logConcurrentOutput: true
            }
        },
        syncing: {
            tasks: [
                'sync:js',
                'sync:assets'
            ],
            options: {
                logConcurrentOutput: true
            }
        },
        build: {
            tasks: [
                'assemble',
                'prettyscss'
            ],
            options: {
                logConcurrentOutput: true,
                limit: 5
            }
		}
};