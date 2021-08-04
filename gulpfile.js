const { src, dest, series } = require('gulp')
const svgmin = require('gulp-svgmin')
const replace = require('gulp-replace')

function svg() {
	return src('src/assets/img/icons/*.svg')
		.pipe(
			svgmin({
				plugins: [
					{ name: 'removeTitle', active: false },
					{ name: 'removeDimensions', active: true },
					{ name: 'removeAttrs', params: { attrs: 'fill' } },
				],
			})
		)
		// .pipe(replace('#000', 'currentColor'))
		.pipe(dest('src/assets/img/icons/'))
}

function color() {
	return src('src/assets/img/*.svg')
		.pipe(
			svgmin({
				plugins: [
					{ removeTitle: false },
					{ removeViewBox: false },
				],
			})
		)
		.pipe(dest('public/assets/img'))
}

// exports.default = series(svg, color)
exports.default = svg
