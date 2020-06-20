class Process {
    constructor(image) {
        this.image = image;
    }

    ID = "process-content"

    async loadModel() {
        const model = await tf.loadLayersModel('../../model/model.json');
    }

    getView() {
        this.loadModel();
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