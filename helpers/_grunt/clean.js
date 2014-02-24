module.exports = {
    dist: [
        '<%= paths.dist %>/**/*.{html,xml,txt}',
        '<%= paths.dist %>/css/**/*',
        '<%= paths.dist %>/js/**/*',
        '<%= paths.dist %>/img/**/*'] ,
	grunticon: [
        '<%= paths.src %>/scss/icons/*.{html,js,txt}'
    ]
};