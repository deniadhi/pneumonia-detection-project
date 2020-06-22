class Process {
    constructor(image, processPageCallback) {
        this.image = image;
		this.processPageCallback = processPageCallback;
    }

    ID = "process-content"

    async loadModel() {
        //const model = await tf.loadLayersModel('../../model/model.json');
    }
	
    tobase64Image() {
        let reader = new FileReader();
        reader.onload = function (e) {
            $('#tes').attr('src', e.target.result);
        }
        reader.readAsDataURL(this.image); // convert to base64 string
    }

	async predict() {
		const logits = tf.tidy(() => {
			
			// Pre-process the image
			console.log( "Loading image..." );
			const IMAGE_SIZE = 227;
			const normalizationConstant = 1.0 / 255.0;
			let img = tf.browser.fromPixels($("<img src=" + this.tobase64Image() + ">"), 1)
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
