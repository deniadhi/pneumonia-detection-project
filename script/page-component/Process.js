class Process {
    constructor(image, processPageCallback) {
        this.image = image;
		this.processPageCallback = processPageCallback;
    }

    ID = "process-content"

    async loadModel() {
        //const model = await tf.loadLayersModel('../../model/model.json');
    }
	
    async tobase64Image(callback) {
        let reader = new FileReader();
        reader.onload = function (e) {
			callback(e.target.result);
        }
        reader.readAsDataURL(this.image); // convert to base64 string
    }

	async predict() {
		const imgElement = await this.tobase64Image(function(strImg) {
			let c = $("<img src=" + strImg + ">");
			console.log(c[0]);
			return c[0];
		});
		const logits = tf.tidy(() => {
			// Pre-process the image
			console.log( "Loading image..." );
			const IMAGE_SIZE = 227;
			const normalizationConstant = 1.0 / 255.0;
			let img = tf.browser.fromPixels(imgElement, 1)
				.resizeBilinear([IMAGE_SIZE, IMAGE_SIZE], false)
				.expandDims(0)
				.toFloat()
				.mul(normalizationConstant);
				
			return model.predict(img);
		});
		
		
		this.loadModel().then(function() {
		// disini nanti predictnya
		});
	}

	getResult() {
		this.predict().then(function(result) {
			this.processPageCallback(
				this.image,
				result
			)
		});
	}

    getView() {
		this.getResult();
        return (
            `
            <div id='${this.ID}'>
            <ul class="loading-dots">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            </div>
          `
        );
    }
}
