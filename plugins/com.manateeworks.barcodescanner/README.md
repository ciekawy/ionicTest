Manatee Works Barcode Scanner Plugin
=========================
 Version 1.4

Guide on how to add the Manatee Works Barcode Scanner Phonegap plugin to your project(s)

*For more in-depth info, visit our website at [www.manateeworks.com](http://manateeworks.com/)*


##Install using CLI interface (Phonegap 3.0 and above)
(supposed you have already created the app by using CLI interface and added desired platforms)


* Add plugin to the project with:



    phonegap local plugin add https://github.com/manateeworks/phonegap-mwbarcodescanner.git
or   

    phonegap local plugin add LOCAL_PATH_TO_THE_FOLDER_WITH_PLUGIN (if you are adding from local folder)   

    
* Perform initial build for each platform (repeat the command twice if not working after first time, seems there's a bug in phonegap 3.3)

        phonegap local build ios
        phonegap local build android
        phonegap local build wp8

* Add a button to index.html which will call the scanner:

```html
	<form style="width: 100%; text-align: center;">
		<input type="button" value="Scan Barcode" onclick="scanner.startScanning()" style="font-size: 40px; width: 300px; height: 50px; margin-top: 100px;"/>
	</form>
```

###Important change in 1.4

Users now can put decoder initialization and callback in separate Javascript file, so that they don't lose their changes when they update the plugin. Sample file is *js/MWBConfig.js*.

To use the custom script, user need to include it in the index file like so:

    <script type="text/javascript" src="js/MWBConfig.js"></script>

and start the scanner with:

    scanner.startScanning(MWBSInitSpace.init,MWBSInitSpace.callback);
    
All init and callback function can still be declared inside MWBScanner.js file, but will be overwritten on plugin update.

* Upon license purchase, replace the username/key pairs for the corresponding barcode types in the file 'MWBScanner.js';


&nbsp;


**WP8 Note**

It's seems there's a bug in Phonegap 3.0 so you have to add ```html '<script type="text/javascript" src="cordova.js"></script>' ``` in index.html (or other html files) manually



##Manual Install (Phonegap 2.x or 3.0)

###Android:
&nbsp;


* Create a Phonegap Android app;

* Copy the folder 'Android/src/com/manateeworks' to your project's 'src/com/' folder;

* Copy the file 'Android/res/layout/scanner.xml' to your project's 'res/layout' folder;

* Copy the file 'Android/res/drawable/overlay.png' to your project's 'res/drawable' folder. Do the same for the file in 'drawable-hdpi' folder;

* Copy the files 'Android/libs/armeabi/libBarcodeScannerLib.so' and 'Android/libs/armeabi-v7a/libBarcodeScannerLib.so' to your project's 'libs/' folder, all the while preserving the same folder structure 

* Copy the file 'www/MSBScanner.js' to the 'assets/www/js' folder;
 
* Insert the Scanner activity definition into AndroidManifest.xml:
```
 	<activity android:name="com.manateeworks.ScannerActivity"
		android:screenOrientation="landscape" android:configChanges="orientation|keyboardHidden"
		android:theme="@android:style/Theme.NoTitleBar.Fullscreen">
	</activity>
```

* Insert the MWBScanner.js script into index.html:
```
	<script type="text/javascript" src="js/MWBScanner.js"></script> 
```
* Add a test button for calling the scanner to index.html:
```
 	<form style="width: 100%; text-align: center;">
        	    <input type="button" value="Scan Barcode" onclick="startScanning()" style="font-size: 20px; width: 300px; height: 30px; margin-top: 50px;"/>
       </form>
```


* Add the plugin to 'res/xml/config.xml':

For Phonegap 2.x 
```
	<plugins>
		...	
		<plugin name="MWBarcodeScanner" value="com.manateeworks.BarcodeScannerPlugin"/>
        ...
	</plugins>
```

For Phonegap 3 *
```
	<feature name="MWBarcodeScanner">
       		 <param name="android-package" value="com.manateeworks.BarcodeScannerPlugin" />
   	</feature>
```

* Import .R file of your project (import YOUR_APP_PACKAGE_NAME.R;) to the 'src/com/manateeworks/ScannerActivity.java';

* Upon license purchase, replace the username/key pairs for the corresponding barcode types in the file 'src/com/manateeworks/BarcodeScannerPlugin.java';

* Run the app and test the scanner by pressing the previously added button;

* (Optional): You can also replace our default overlay.png for the camera screen with your own customized image;

* (For Phonegap 3) If notification plugin is not present in project, add it by following instructions from this url:

<!-- -->
	http://docs.phonegap.com/en/3.0.0/cordova_notification_notification.md.html

* If not present already, add camera permission to the AndroidManifest.xml:

<!-- -->
	<uses-permission android:name="android.permission.CAMERA" />

*  (For Phonegap 2.x) In BarcodeScannerPlugin.java replace org.apache.cordova reference to org.apache.cordova.api :

	Instead:	

		import org.apache.cordova.CallbackContext;
		import org.apache.cordova.CordovaPlugin;

	Use this:

 		import org.apache.cordova.api.CallbackContext;
		import org.apache.cordova.api.CordovaPlugin;

	
	
&nbsp;
###iOS:
&nbsp;


* Create a Phonegap iOS app;

* Copy all files from our 'iOS/src' folder to your project's 'Plugins' folder and add them to the project;

* Copy the file 'www/MSBScanner.js' to the folder 'www/js' . NOTE: You cannot drag & drop directly into the Xcode project... use Finder instead;

* Insert MWBScanner.js script into index.html:
```
	<script type="text/javascript" src="js/MWBScanner.js"></script> 
```
* Add a test button for calling the scanner to index.html:
```
 	<form style="width: 100%; text-align: center;">
        	    <input type="button" value="Scan Barcode" onclick="startScanning()" style="font-size: 20px; width: 300px; height: 30px; margin-top: 50px;"/>
        </form>
```

* Add the plugin to config.xml (from project root, not the one from www folder):

For Phonegap 2.x 
```
	<plugins>
    
		...
		<plugin name="MWBarcodeScanner" value="CDVMWBarcodeScanner"/>
    
		...
	</plugins>
```
For Phonegap 3
```
	<feature name="MWBarcodeScanner">
        	<param name="ios-package" value="CDVMWBarcodeScanner" />
	</feature>
```



* Confirm you have the following frameworks added to your project: CoreVideo, CoreGraphics;

* Upon license purchase, replace the username/key pairs for the corresponding barcode types in the file Plugins/MWBarcodeScanner/MWScannerViewController.m;


* Run the app and test the scanner by pressing the previously added button;


* (Optional): You can replace our default overlay.png and close_button.png for the camera screen with your own customized image;



&nbsp;
###Windows Phone 8:
&nbsp;

* Add (drag & drop) MWBarcodeScanner folder into the project folder named 'plugins'. If needed, create Plugins folder in project previously;

* Copy (this time from Windows Explorer, not by way of drag & drop) to the project BarcodeLib.winmd and BarcodeLib.dll to project root;

* Add (drag & drop) www/MWBScanner.js to www/js/ project folder;

* Insert MWBScanner.js script into index.html:
```
	<script type="text/javascript" src="js/MWBScanner.js"></script> 
```
* Add a button for calling the scanner to index.html:
```
 	<form style="width: 100%; text-align: center;">
 
	 	<input type="button" value="Scan Barcode" onclick="scanner.startScanning()" style="font-size: 40px; width: 300px;height: 50px; margin-top: 100px;"/>
 
	</form>
```
* Add BarcodeLib.winmd to project references: right click on 'References', 'Add Reference', 'Browse' and choose the file;

* Add the plugin to config.xml:

For Phonegap 2.x
```
	<plugins>
    
		...
		<plugin name="MWBarcodeScanner" value="MWBarcodeScanner"/>
    
		...
	</plugins>
```
For Phonegap 3
```
	<feature name="MWBarcodeScanner">
        	<param name="wp-package" value="MWBarcodeScanner" />
	</feature>
```

Add a notification plugin (if not already present):
```
	 <plugin name="Notification" value="Notification"/>
``` 

* (For Phonegap 2.9) Sometimes a bug occurs in Phonegap 2.9.0 with notification dialogs, making them crash on closing. It may be necessary to make a change in the Plugins/Notification.cs file:

	inside function: void btnOK_Click

	replace the following block:

		  NotifBoxData notifBoxData = notifBoxParent.Tag as NotifBoxData;
                  notifyBox = notifBoxData.previous as NotificationBox;
                  callbackId = notifBoxData.callbackId as string;

                  if (notifyBox == null)
                  {
                      page.BackKeyPress -= page_BackKeyPress;
                  }

	with the one below:

		NotifBoxData notifBoxData = notifBoxParent.Tag as NotifBoxData;
                if (notifBoxData != null)
                    {
                        notifyBox = notifBoxData.previous as NotificationBox;
                        callbackId = notifBoxData.callbackId as string;
                        if (notifyBox == null)
                        {
                            page.BackKeyPress -= page_BackKeyPress;
                        }
                    }

* Add ID_CAP_ISV_CAMERA capability into WMAppManifest.xml


* Upon license purchase, replace the username/key pairs for the corresponding barcode types in file Plugins/com.manateeworks.barcodescanner/BarcodeHelper.cs;


* Run the app and test the scanner by pressing the previously added button;


* (Optional): You can replace our default overlay.png for the camera screen with your own customized image;


&nbsp;
###Changes in 1.4:
&nbsp;
- Added support for custom init and callback functions. All init and callback function can still be declared here, but users can now use an outside Javascript file that they can maintain during updates, so that they don't lose their changes when they update.
    To use the custom script, they only need to include it in the index file like so:

        <script type="text/javascript" src="js/MWBConfig.js"></script>
    To call the scanner with the custom init and callback you use    
        scanner.startScanning(MWBSInitSpace.init,MWBSInitSpace.callback);
- Added MWBsetCustomParam: function - allows user to put some custom key/value pair which can be used later from native code
- Added ITF-14 support
- Added Code 11 support
- Added MSI Plessey support
- Added GS1 support

&nbsp;
###Changes in 1.3:
&nbsp;

* Zoom feature added for iOS and Android. It's not supported on WP8 due to API limitation.
 
* Added function to turn Flash ON by default

* Fixed 'frameworks was not added to the references' on WP8
 
* Fixed freezing if missing org.apache.cordova.device plugin

* Added x86 lib for Android

* CameraManager.java rework 

 It now contains complete camera handling functionality, other files from camera folder are not necessary


&nbsp;
###Changes in 1.2:
&nbsp;

* Registering calls moved from native code to MWBScanner.js
 
 You can now enter your licensing info without changing the native code of plugin;

* Import package_name.R manually after adding Android plugin is not necessary anymore
 
* Decoding library updated to 2.9.31


 
&nbsp;
###Changes in 1.1:
&nbsp;

* Advanced Overlay (MWBsetOverlayMode: function(overlayMode)
 
 You can now choose between Simple Image Overlay and MW Dynamic Overlay, which shows the actual 
 viewfinder, depending on selected barcode types and their respective scanning rectangles;
 
* Orientation parameter (MWBsetInterfaceOrientation: function(interfaceOrientation))
 
 Now there's only a single function for supplying orientation parameters which makes tweaking the 
 controller for changing scanner orientation no longer needed; 
 
* Enable or disable high resolution scanning (MWBenableHiRes: function(enableHiRes))
 
 Added option to choose between high or normal resolution scanning to better match user 
 application requirements;
 
* Flash handling (MWBenableFlash: function(enableFlash))

 Added option to enable or disable the flash toggle button;
