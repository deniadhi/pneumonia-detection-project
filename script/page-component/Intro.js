class Intro {
  constructor (uploadImageCallback) {
    this.uploadImageCallback = uploadImageCallback;
  }

  ID = "intro-content";

  displayUploadForm() {
    $("#img-upload").click(function () {
      $("#input-img").click();
    });
  }

  onSubmitUploadFile() {
    const self = this;
    $("#input-img").change(function (event) {
      self.uploadImageCallback(event.target.files[0]);
    })
  }

  getView() {
    return (
      `
        <div id='${this.ID}'>
          <h1 class='text'>Pneumonia Detection</h1>
          <p class='text'>
            Upload your Lungs CT Scan image and we will try to detect whether you have Pneumonia
          </p>
          <button
            type="button"
            id="img-upload"
            class="btn btn-warning"
          >Upload</Button>
          <input
            id='input-img'
            type='file'
            accept='image/jpeg'
          ></input>
        </div>
      `
    );
  }

  initEventCallback() {
    this.displayUploadForm();
    this.onSubmitUploadFile();
  }
}
