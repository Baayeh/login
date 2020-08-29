module.exports = {
    "plugins": [
        require('tailwindcss'),
        require('autoprefixer'),
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        process.execArgv.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
            content: [
                './src/**/*.vue',
                './public/index.html'
            ],
            //Determine The RegEx to use to find classes used
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:]+/g) || []
        })
    ]
}