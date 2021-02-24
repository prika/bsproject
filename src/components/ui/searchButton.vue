<template>
	<div class="searchIcon">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 35.189000 35.188000"
			shape-rendering="geometricPrecision"
			text-rendering="geometricPrecision"
			width="35.189000"
			height="35.188000"
		>
			<g transform="matrix(1 0 0 1 -43.70500000000000 -43.62600000000000)">
				<line
					id="line"
					x1="0"
					y1="0"
					x2="11.155000"
					y2="11.155000"
					transform="matrix(1 0 0 1 67.03100000000001 66.95200000000000)"
					fill="none"
					stroke="rgb(88,88,88)"
					stroke-width="2"
					stroke-miterlimit="10"
				/>
				<path
					id="path"
					d="M69.812083,53.889626L60.664788,44.741000L48.168259,48.089390L44.820000,60.585431L53.967295,69.733083L66.462850,66.384693Z"
					transform="matrix(1 0 0 1 0.47950000000000 0.47900000000000)"
					fill="#FFF"
					stroke="rgb(88,88,88)"
					stroke-width="2"
					stroke-miterlimit="10"
				/>
			</g>
		</svg>
	</div>
</template>

<style lang="scss">
	.searchButton {
		background: #fff;

		.searchIcon {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			#path {
				width: 40px;
				height: 40px;
				position: relative;
				z-index: 2;
				transform-origin: 40px 40px;
				will-change: transform;
				-webkit-transition: transform 0.3s cubic-bezier(0, 0.5, 0, 1);
				-moz-transition: transform 0.3s cubic-bezier(0, 0.5, 0, 1);
				-o-transition: transform 0.3s cubic-bezier(0, 0.5, 0, 1);
				transition: transform 0.3s cubic-bezier(0, 0.5, 0, 1);
			}

			svg {
				width: 30px;
			}
		}

		&:hover #path {
			-webkit-transform: scale(1.2);
			-ms-transform: scale(1.2);
			-o-transform: scale(1.2);
			transform: scale(1.2);
		}
	}
</style>