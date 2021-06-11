/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

var currentSize = 300, currentBannerCanvas = 1, banner1, banner2;

async function onDeviceReady() {
	// Cordova is now initialized. Have fun!

	console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
	document.getElementById('deviceready').classList.add('ready');

	
	changeBannerSize = document.querySelector('.changeBannerSize');

	changeBannerSize.addEventListener('click', function() {

		let canvas1 = document.querySelector('#canvas1');
		let canvas1_2 = document.querySelector('#canvas1-2');

		if(currentSize == 300) {

			currentSize = 0;
			if(canvas1) canvas1.style.width = 'calc(100vw - 16px)';
			if(canvas1) canvas1.style.height = '100px';
			if(canvas1_2) canvas1_2.style.width = 'calc(100vw - 16px)';
			if(canvas1_2) canvas1_2.style.height = '100px';

		} else {

			currentSize = 300;
			if(canvas1) canvas1.style.width = '300px';
			if(canvas1) canvas1.style.height = '160px';
			if(canvas1_2) canvas1_2.style.width = '300px';
			if(canvas1_2) canvas1_2.style.height = '160px';

		}

	});

	changeBannerCanvas = document.querySelector('.changeBannerCanvas');

	changeBannerCanvas.addEventListener('click', function() {

		let canvas1 = document.querySelector('#canvas1');
		let canvas1_2 = document.querySelector('#canvas1-2');

		if(currentBannerCanvas == 1 && canvas1_2) {

			currentBannerCanvas = 2;
			banner1.changeCanvas(canvas1_2);

		} else if(canvas1) {

			currentBannerCanvas = 1;
			banner1.changeCanvas(canvas1);
			
		}

	});

	// cordova build --debug android ; cp platforms/android/app/build/outputs/apk/debug/app-debug.apk app-debug.apk
	await admob.start()

	admob.BannerAd.config({
		canvasDrawInterval: 16.66,
		preciseDrawInterval: true,
	});

	banner1 = await new admob.BannerAd({
		adUnitId: 'ca-app-pub-3940256099942544/6300978111',
		canvas: document.querySelector('#canvas1'),
		autoDestroy: false,
	})

	await banner1.show()

	banner2 = await new admob.BannerAd({
		adUnitId: 'ca-app-pub-3940256099942544/6300978111',
		canvas: document.querySelector('#canvas2'),
	})

	await banner2.show()

	/*banner = await new admob.BannerAd({
		adUnitId: 'ca-app-pub-3940256099942544/6300978111',
	})

	await banner.show()*/


}
