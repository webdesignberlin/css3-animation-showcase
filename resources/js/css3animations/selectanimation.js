css3ani.SelectAnimation = Backbone.View.extend({
	initialize: function() {
		// console.log( 'initialize' )
		this.selectBox = this.$('.animation-select');
		this.button = this.$('.show-animation');
		this.animationBox = this.$('.animation-box');
		this.codeBox = this.$('.box code');

		this.onButtonClick = this.applyClassNames.bind(this);

		this.button.on('click', this.onButtonClick);
	},

	applyClassNames: function() {
		var appliedClasses = this.selectBox.val().split(' ');
		var classNames = _.reject(this.animationBox.attr('class').split(' '), function(className) {
			return className.indexOf('ani-') !== -1;
		}); 
		var codeBoxContent = this.codeBox.html(); 
		var newClassnames = '';

		newClassnames = classNames.join(' ') + ' ' + appliedClasses.join(' ');

		codeBoxContent = codeBoxContent.replace(/class=".*"/, 'class="' + $.trim(newClassnames) + '"');

		this.codeBox.html($.trim(codeBoxContent));

		this.animationBox.attr('class', newClassnames);
	}
})