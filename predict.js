$("#image-selector").change(function () {
	let reader = new FileReader();
	reader.onload = function () {
		let dataURL = reader.result;
		$("#selected-image").attr("src", dataURL);
		$("#prediction-list").empty();
	}
	
	let file = $("#image-selector").prop('files')[0];
	reader.readAsDataURL(file);
});

let model;
$( document ).ready(async function () {
	const MODEL_PATH = 'tensorflowjs_model/model.json';
	console.log('loading model..');
	model = await tf.loadLayersModel(MODEL_PATH, {});
	console.log('model loaded...');
	
});


$("#predict-button").click(async function () {
	const logits = tf.tidy(() => {
		let image = $('#selected-image').get(0);
		
		// Pre-process the image
		console.log( "Loading image..." );
		const IMAGE_SIZE = 227;
		const normalizationConstant = 1.0 / 255.0;
		let img = tf.browser.fromPixels(image, 1)
			.resizeBilinear([IMAGE_SIZE, IMAGE_SIZE], false)
			.expandDims(0)
			.toFloat()
			.mul(normalizationConstant);
			
		return model.predict(img);
	});
	
	
	const classes = await logits.data();
	console.log(classes);
	let arr = Array.from(classes)
		.map(function (p, i) { 
			return {
				probability: p,
				className: TARGET_CLASSES[i] 
			};
		}).slice(0, 2);

	$("#prediction-list").empty();
	arr.forEach(function (p) {
		$("#prediction-list").append(`<li>${p.className}: ${p.probability.toFixed(6)}</li>`);
		});
});
