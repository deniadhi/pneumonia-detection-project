class Process {
    constructor(image, processPageCallback) {
        this.image = image;
		this.processPageCallback = processPageCallback;
    }

    ID = "process-content"

    async loadModel() {
        const model = await tf.loadLayersModel('../../model/model.json');
    }

	async predict() {
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