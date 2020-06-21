# Pneumonia Detection

This serves as a guide to creating a pneumonia detection model and deploying that model to Tensorflow.JS.

## Warning
Since training a CNN model will require strong computational specs, it is recommended to commence the training in Google Colab using GPU runtime rather than locally, unless you have strong computational prowess (might take hours to run).

## Steps
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
        Then follow step 4.3

## Deployment
