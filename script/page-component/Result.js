class Result {
    constructor(image) {
        this.image = image;
    }

    ID = "result-content"

    tobase64Image() {
        let reader = new FileReader();
        reader.onload = function (e) {
            $('#tes').attr('src', e.target.result);
        }
        reader.readAsDataURL(this.image); // convert to base64 string
    }

    getView() {
        this.tobase64Image();
        return (
            `
            <div id='${this.ID}'>
              <img id="tes" src='#'>
            </div>
          `
        );
    }
}
