# Pneumonia Detection

This serves as a guide to creating a pneumonia detection model and deploying that model to Tensorflow.JS.

## Warning
Since training a CNN model will require strong computational specs, it is recommended to commence the training in Google Colab using GPU runtime rather than locally, unless you have strong computational prowess (might take hours to run).

## Model Creation
1. Download the dataset from this link https://www.kaggle.com/pcbreviglieri/pneumonia-xray-images.
1. After downloading the .zip dataset, upload it to google drive and import the dataset from google drive.
1. Follow the steps in ALEXNET_build_model.ipynb until you have successfully saved the trained model.
1. Since we are using Tensorflow.JS, our model needs to be converted into a .json file.
	 1. In Google colab, run '!pip install tensorflowjs'.
	 1. Then, run
        ```python
        import tensorflow as tfjs
        ```
	 1. In the same Google Colab notebook you use for training, run
        ```python
        tfjs.converters.save_keras_model(YOUR_MODEL_NAME, YOUR_TARGET_DIRECTORY)
        ```
        This will convert your model into .json file in the targeted directory alongside some other files.
   1.. If for some reason you exit your Google Colab notebook and you want to convert your model into .json, you can load   your saved model first, ex:
        ```python
        YOUR_MODEL_NAME = tf.keras.models.load_model('/example/model.h5')
        ```
        Then follow the previous step.

## Setting-up Google Cloud Account and Create Your First Project
1. Create your Google Cloud Account in cloud.google.com. You will get a free-trial worth $300 for 1 whole year which you can upgrade (optional). Input your information and create your account.
1. Upon entering the Google Cloud Console, you will automatically have projects that have been created for you. You can use these project or just create a new one. Check this link: https://cloud.google.com/resource-manager/docs/creating-managing-projects
1. Set up a billing account for your project. Check this link: https://cloud.google.com/billing/docs/how-to/modify-project

## Web Application
1. Create the index.html file
   * You can upload your own image to the website.
   * By clicking the button, it will be used to start the prediction.
   * The script ```predict.js``` will be used to implement the model and ```target_classes.js``` contains the classes for the predictions.
1. Create the predict.js file
   * This is where the model will be loaded and used to predict the class of the images

## Deployment
1. Open your Google Cloud Console then click on the Cloud Shell on the top right of the screen
1. Next, open the editor and create a directory to store all the necessary files for deployment.
1. Create an app.yaml file ouside of the directory you have just created and save it.
1. Switch back to the cloud shell terminal and run
   ```bash
   gcloud app deploy
   ```
   to deploy your web app.
1. To launch the browser and view the app at https://PROJECT_ID.REGION_ID.r.appspot.com, run the following command:
   ```bash
   gcloud app browse
   ```
