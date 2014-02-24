module.exports = {
    options: {
        flatten: true,
        assets: '<%= paths.dist %>',
        data: '<%= paths.src %>/data/*.{json,yml}',
        helpers: '<%= paths.src %>/helpers/*.js',
        partials: '<%= paths.src %>/templates/partials/**/*.hbs'
    },
    pages: {
        options: {
            layout: '<%= paths.src %>/templates/layouts/tpl_default.hbs',
    plugins: ['assemble-related-pages'],
         },
            files: {
                '<%= paths.dist %>/': ['<%= paths.src %>/templates/pages/*.hbs']
                }
            },
            ajax: {
                options: {
                    layout: '<%= paths.src %>/templates/layouts/tpl_ajax.hbs'
                },
            files: {
                    '<%= paths.dist %>/ajax-content/': ['<%= paths.src %>/templates/pages/ajax/*.hbs']
                }
            }
};