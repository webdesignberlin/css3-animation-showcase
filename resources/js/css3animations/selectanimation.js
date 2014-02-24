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
		var classNames = this.selectBox.val() || '';
		var appliedClasses = this.animationBox.attr('class');
		var len = appliedClasses.length;
		var i = 0;
		var codeBoxContent = this.codeBox.html();

		appliedClasses = appliedClasses.replace(/\sani-.*\s/g, '');
		appliedClasses = appliedClasses.replace(/ani-.*\s/g, '');
		appliedClasses = appliedClasses.replace(/\sani-.*/g, '');
		appliedClasses = appliedClasses + ' ' + classNames;

		codeBoxContent = codeBoxContent.replace(/class=".*"/, 'class="' + $.trim(appliedClasses) + '"');

		this.codeBox.html($.trim(codeBoxContent));

		this.animationBox.attr('class', appliedClasses);
	}
})