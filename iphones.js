// const express = require("express");
// const app = express();

const iphones = {
	no_of_products: 12,
	info: [
		{
			id: 1,
			model: "iPhone 14 Pro Max",
			image:
				"https://www.91-img.com/pictures/146919-v4-apple-iphone-14-pro-max-mobile-phone-large-1.jpg?tr=q-80",
			price: 139900,
			specifications: {
				display: {
					size: "17 cm or 6.7 in",
					type: "Super Retina XDR display",
					dynamic_island: true,
					brightness: "2000nits",
					haptic: true,
					refresh_rate: "120hz",
				},
				camera: {
					back: {
						no_of_camera: 3,
						megapixel: {
							main: "48 mp",
							second: "12 mp ultra wide",
							third: "12 mp telephoto",
						},
						zooms: [".5x", "1x", "2x", "3x"],
						night_mode: true,
					},
					front: {
						no_of_camera: 1,
						megapixel: {
							main: "12 mp",
						},
					},
				},
				chip: {
					chipset: "A16 Bionic chip",
					cpu: "6-core CPU with 2 performance and 4 efficiency cores",
					gpu: "5-core GPU",
					core: "16-core Neural Engine",
				},
				cellure_and_wireless: {
					Support_5g: true,
					wifi: "Wi-Fi 6",
					bluetooth: "Bluetooth 5.3",
					NFC: true,
					no_of_sim: 2,
					sim_slot_type: "eSIM",
				},
				security: {
					faceID: true,
					fingerprint_sensor: false,
				},
				sensors: [
					"LiDAR Scanner",
					"High dynamic range gyro",
					"High-g accelerometer",
					"Proximity sensor",
					"Dual ambient light sensors",
					"Barometer",
				],
				battery: {
					wireless_charging: true,
					video_playback: "25 hours",
					audio_playback: "95 hours",
					fast_charging: "50% in 30 minutes",
				},

				storage: ["1TB", "512GB", "256GB", "128GB"],
			},
		},
		{
			id: 2,
			model: "iPhone 14 Pro",
			image:
				" https://www.91-img.com/pictures/144646-v4-apple-iphone-14-pro-mobile-phone-medium-1.jpg?tr=q-80",
			price: 129900,
			specifications: {
				display: {
					size: "15.54 cm or 6.1 in",
					type: "Super Retina XDR display",
					dynamic_island: true,
					brightness: "2000nits",
					haptic: true,
					refresh_rate: "120hz",
				},
				camera: {
					back: {
						no_of_camera: 3,
						megapixel: {
							main: "48 mp",
							second: "12 mp ultra wide",
							third: "12 mp telephoto",
						},
						zooms: [".5x", "1x", "2x", "3x"],
						night_mode: true,
					},
					front: {
						no_of_camera: 1,
						megapixel: {
							main: "12 mp",
						},
					},
				},
				chip: {
					chipset: "A16 Bionic chip",
					cpu: "6-core CPU with 2 performance and 4 efficiency cores",
					gpu: "5-core GPU",
					core: "16-core Neural Engine",
				},
				cellure_and_wireless: {
					Support_5g: true,
					wifi: "Wi-Fi 6",
					bluetooth: "Bluetooth 5.3",
					NFC: true,
					no_of_sim: 2,
					sim_slot_type: "eSIM",
				},
				security: {
					faceID: true,
					fingerprint_sensor: false,
				},
				sensors: [
					"LiDAR Scanner",
					"High dynamic range gyro",
					"High-g accelerometer",
					"Proximity sensor",
					"Dual ambient light sensors",
					"Barometer",
				],
				battery: {
					wireless_charging: true,
					video_playback: "20 hours",
					audio_playback: "75 hours",
					fast_charging: "50% in 30 minutes",
				},
				storage: ["1TB", "512GB", "256GB", "128GB"],
			},
		},
		{
			id: 3,
			model: "iPhone 14 Plus",
			image:
				"https://www.91-img.com/pictures/151394-v4-apple-iphone-14-plus-mobile-phone-medium-1.jpg?tr=q-80",
			price: 89900,
			specifications: {
				display: {
					size: "16.95 cm or 6.7 in",
					type: "Super Retina XDR display",
					dynamic_island: false,
					brightness: "1200nits",
					haptic: true,
					refresh_rate: undefined,
				},
				camera: {
					back: {
						no_of_camera: 2,
						megapixel: {
							main: "12 mp",
							second: "12 mp ultra wide",
						},
						zooms: [".5x", "1x"],
						night_mode: true,
					},
					front: {
						no_of_camera: 1,
						megapixel: {
							main: "12 mp",
						},
					},
				},
				chip: {
					chipset: "A15 Bionic chip",
					cpu: "6-core CPU with 2 performance and 4 efficiency cores",
					gpu: "5-core GPU",
					core: "16-core Neural Engine",
				},
				cellure_and_wireless: {
					Support_5g: true,
					wifi: "Wi-Fi 6",
					bluetooth: "Bluetooth 5.3",
					NFC: true,
					no_of_sim: 2,
					sim_slot_type: "eSIM",
				},
				security: {
					faceID: true,
					fingerprint_sensor: false,
				},
				sensors: [
					"High dynamic range gyro",
					"High-g accelerometer",
					"Proximity sensor",
					"Dual ambient light sensors",
					"Barometer",
				],
				battery: {
					wireless_charging: true,
					video_playback: "20 hours",
					audio_playback: "100 hours",
					fast_charging: "50% in 35 minutes",
				},

				storage: ["512GB", "256GB", "128GB"],
			},
		},
		{
			id: 4,
			model: "iPhone 14",
			image:
				"https://www.91-img.com/pictures/152564-v3-apple-iphone-14-256gb-mobile-phone-medium-1.jpg?tr=q-80",

			price: 88400,
			specifications: {
				display: {
					size: "15.40 cm or 6.1 in",
					type: "Super Retina XDR display",
					dynamic_island: false,
					brightness: "1200nits",
					haptic: true,
					refresh_rate: undefined,
				},
				camera: {
					back: {
						no_of_camera: 2,
						megapixel: {
							main: "12 mp",
							second: "12 mp ultra wide",
						},
						zooms: [".5x", "1x"],
						night_mode: true,
					},
					front: {
						no_of_camera: 1,
						megapixel: {
							main: "12 mp",
						},
					},
				},
				chip: {
					chipset: "A15 Bionic chip",
					cpu: "6-core CPU with 2 performance and 4 efficiency cores",
					gpu: "5-core GPU",
					core: "16-core Neural Engine",
				},
				cellure_and_wireless: {
					Support_5g: true,
					wifi: "Wi-Fi 6",
					bluetooth: "Bluetooth 5.3",
					NFC: true,
					no_of_sim: 2,
					sim_slot_type: "eSIM",
				},
				security: {
					faceID: true,
					fingerprint_sensor: false,
				},
				sensors: [
					"High dynamic range gyro",
					"High-g accelerometer",
					"Proximity sensor",
					"Dual ambient light sensors",
					"Barometer",
				],
				battery: {
					wireless_charging: true,
					video_playback: "16 hours",
					audio_playback: "80 hours",
					fast_charging: "50% in 30 minutes",
				},

				storage: ["512GB", "256GB", "128GB"],
			},
		},
		{
			id: 5,
			model: "iPhone 13 Pro Max",
			image:
				"https://www.91-img.com/pictures/142100-v5-apple-iphone-13-pro-max-mobile-phone-medium-1.jpg?tr=q-80",
			price: 11990,
			specifications: {
				display: {
					size: "16.95 cm or 6.7 in",
					type: "Super Retina XDR display",
					dynamic_island: false,
					brightness: "1200nits",
					haptic: true,
					refresh_rate: "120hz",
				},
				camera: {
					back: {
						no_of_camera: 3,
						megapixel: {
							main: "12 mp",
							second: "12 mp ultra wide",
							third: "12 mp telephoto",
						},
						zooms: [".5x", "1x", "3x"],
						night_mode: true,
					},
					front: {
						no_of_camera: 1,
						megapixel: {
							main: "12 mp",
						},
					},
				},
				chip: {
					chipset: "A15 Bionic chip",
					cpu: "6-core CPU with 2 performance and 4 efficiency cores",
					gpu: "5-core GPU",
					core: "16-core Neural Engine",
				},
				cellure_and_wireless: {
					Support_5g: true,
					wifi: "Wi-Fi 6",
					bluetooth: "Bluetooth 5.0",
					NFC: true,
					no_of_sim: 2,
					sim_slot_type: "eSIM or nano SIM",
				},
				security: {
					faceID: true,
					fingerprint_sensor: false,
				},
				sensors: [
					"LiDAR Scanner",
					"Three-axis gyro",
					"Accelerometer",
					"Proximity sensor",
					"Ambient light sensors",
					"Barometer",
				],
				battery: {
					wireless_charging: true,
					video_playback: "25 hours",
					audio_playback: "95 hours",
					fast_charging: "50% in 35 minutes",
				},

				storage: ["1TB", "512GB", "256GB", "128GB"],
			},
		},
		{
			id: 6,
			model: "iPhone 13 Pro",
			image:
				"https://www.91-img.com/pictures/142099-v3-apple-iphone-13-pro-mobile-phone-medium-1.jpg?tr=q-80",
			price: 111900,
			specifications: {
				display: {
					size: "15.40 cm or 6.1 in",
					type: "Super Retina XDR display",
					dynamic_island: false,
					brightness: "1200nits",
					haptic: true,
					refresh_rate: "120hz",
				},
				camera: {
					back: {
						no_of_camera: 3,
						megapixel: {
							main: "12 mp",
							second: "12 mp ultra wide",
							third: "12 mp telephoto",
						},
						zooms: [".5x", "1x", "3x"],
						night_mode: true,
					},
					front: {
						no_of_camera: 1,
						megapixel: {
							main: "12 mp",
						},
					},
				},
				chip: {
					chipset: "A15 Bionic chip",
					cpu: "6-core CPU with 2 performance and 4 efficiency cores",
					gpu: "5-core GPU",
					core: "16-core Neural Engine",
				},
				cellure_and_wireless: {
					Support_5g: true,
					wifi: "Wi-Fi 6",
					bluetooth: "Bluetooth 5.0",
					NFC: true,
					no_of_sim: 2,
					sim_slot_type: "eSIM or nano SIM",
				},
				security: {
					faceID: true,
					fingerprint_sensor: false,
				},
				sensors: [
					"LiDAR Scanner",
					"Three-axis gyro",
					"Accelerometer",
					"Proximity sensor",
					"Ambient light sensors",
					"Barometer",
				],
				battery: {
					wireless_charging: true,
					video_playback: "20 hours",
					audio_playback: "75 hours",
					fast_charging: "50% in 30 minutes",
				},

				storage: ["1TB", "512GB", "256GB", "128GB"],
			},
		},
		{
			id: 7,
			model: "iPhone 13",
			image:
				"https://www.91-img.com/pictures/140876-v3-apple-iphone-13-mobile-phone-medium-1.jpg?tr=q-80",
			price: 69900,
			specifications: {
				display: {
					size: "15.40 cm or 6.1 in",
					type: "Super Retina XDR display",
					dynamic_island: false,
					brightness: "1200nits",
					haptic: true,
					refresh_rate: undefined,
				},
				camera: {
					back: {
						no_of_camera: 2,
						megapixel: {
							main: "12 mp",
							second: "12 mp ultra wide",
						},
						zooms: [".5x", "1x"],
						night_mode: true,
					},
					front: {
						no_of_camera: 1,
						megapixel: {
							main: "12 mp",
						},
					},
				},
				chip: {
					chipset: "A15 Bionic chip",
					cpu: "6-core CPU with 2 performance and 4 efficiency cores",
					gpu: "4-core GPU",
					core: "16-core Neural Engine",
				},
				cellure_and_wireless: {
					Support_5g: true,
					wifi: "Wi-Fi 6",
					bluetooth: "Bluetooth 5.0",
					NFC: true,
					no_of_sim: 2,
					sim_slot_type: "eSIM or nano SIM",
				},
				security: {
					faceID: true,
					fingerprint_sensor: false,
				},
				sensors: [
					"Three-axis gyro",
					"Accelerometer",
					"Proximity sensor",
					"Ambient light sensors",
					"Barometer",
				],
				battery: {
					wireless_charging: true,
					video_playback: "15 hours",
					audio_playback: "75 hours",
					fast_charging: "50% in 30 minutes",
				},

				storage: ["512GB", "256GB", "128GB"],
			},
		},
		{
			id: 8,
			model: "iPhone 13 Mini",
			image:
				"https://www.91-img.com/pictures/144021-v3-apple-iphone-13-mini-mobile-phone-medium-1.jpg?tr=q-80",
			price: 64900,
			specifications: {
				display: {
					size: "13.76cm or 5.4 in",
					type: "Super Retina XDR display",
					dynamic_island: false,
					brightness: "12000nits",
					haptic: true,
					refresh_rate: undefined,
				},
				camera: {
					back: {
						no_of_camera: 2,
						megapixel: {
							main: "12 mp",
							second: "12 mp ultra wide",
						},
						zooms: [".5x", "1x"],
						night_mode: true,
					},
					front: {
						no_of_camera: 1,
						megapixel: {
							main: "12 mp",
						},
					},
				},
				chip: {
					chipset: "A15 Bionic chip",
					cpu: "6-core CPU with 2 performance and 4 efficiency cores",
					gpu: "4-core GPU",
					core: "16-core Neural Engine",
				},
				cellure_and_wireless: {
					Support_5g: true,
					wifi: "Wi-Fi 6",
					bluetooth: "Bluetooth 5.0",
					NFC: true,
					no_of_sim: 2,
					sim_slot_type: "eSIM or nano SIM",
				},
				security: {
					faceID: true,
					fingerprint_sensor: false,
				},
				sensors: [
					"Three-axis gyro",
					"Accelerometer",
					"Proximity sensor",
					"Ambient light sensors",
					"Barometer",
				],
				battery: {
					wireless_charging: true,
					video_playback: "13 hours",
					audio_playback: "55 hours",
					fast_charging: "50% in 30 minutes",
				},

				storage: ["512GB", "256GB", "128GB"],
			},
		},
		{
			id: 9,
			model: "iPhone 12 Pro Max",
			image:
				"https://www.91-img.com/pictures/146914-v1-apple-iphone-14-mini-mobile-phone-medium-1.jpg?tr=q-80",
			price: 74990,
			specifications: {
				display: {
					size: "16.95 cm or 6.7 in",
					type: "Super Retina XDR display",
					dynamic_island: false,
					brightness: "1200nits",
					haptic: true,
					refresh_rate: undefined,
				},
				camera: {
					back: {
						no_of_camera: 3,
						megapixel: {
							main: "12 mp",
							second: "12 mp ultra wide",
							third: "12 mp telephoto",
						},
						zooms: [".5x", "1x", "2.5x"],
						night_mode: true,
					},
					front: {
						no_of_camera: 1,
						megapixel: {
							main: "12 mp",
						},
					},
				},
				chip: {
					chipset: "A14 Bionic chip",
					cpu: "6-core CPU with 2 performance and 4 efficiency cores",
					gpu: "5-core GPU",
					core: "16-core Neural Engine",
				},
				cellure_and_wireless: {
					Support_5g: true,
					wifi: "Wi-Fi 6",
					bluetooth: "Bluetooth 5.0",
					NFC: true,
					no_of_sim: 2,
					sim_slot_type: "eSIM or nano SIM",
				},
				security: {
					faceID: true,
					fingerprint_sensor: false,
				},
				sensors: [
					"LiDAR Scanner",
					"Three-axis gyro",
					"Accelerometer",
					"Proximity sensor",
					"Ambient light sensors",
					"Barometer",
				],
				battery: {
					wireless_charging: true,
					video_playback: "12 hours",
					audio_playback: "80 hours",
					fast_charging: "50% in 30 minutes",
				},

				storage: ["512GB", "256GB", "128GB"],
			},
		},
		{
			id: 10,
			model: "iPhone 12 Pro",
			image:
				"https://www.91-img.com/pictures/136140-v5-apple-iphone-12-pro-mobile-phone-medium-1.jpg?tr=q-80",
			price: 100030,
			specifications: {
				display: {
					size: "15.40 cm or 6.1 in",
					type: "Super Retina XDR display",
					dynamic_island: false,
					brightness: "1200nits",
					haptic: true,
					refresh_rate: undefined,
				},
				camera: {
					back: {
						no_of_camera: 3,
						megapixel: {
							main: "12 mp",
							second: "12 mp ultra wide",
							third: "12 mp telephoto",
						},
						zooms: [".5x", "1x", "2x"],
						night_mode: true,
					},
					front: {
						no_of_camera: 1,
						megapixel: {
							main: "12 mp",
						},
					},
				},
				chip: {
					chipset: "A14 Bionic chip",
					cpu: "6-core CPU with 2 performance and 4 efficiency cores",
					gpu: "5-core GPU",
					core: "16-core Neural Engine",
				},
				cellure_and_wireless: {
					Support_5g: true,
					wifi: "Wi-Fi 6",
					bluetooth: "Bluetooth 5.0",
					NFC: true,
					no_of_sim: 2,
					sim_slot_type: "eSIM or nano SIM",
				},
				security: {
					faceID: true,
					fingerprint_sensor: false,
				},
				sensors: [
					"LiDAR Scanner",
					"Three-axis gyro",
					"Accelerometer",
					"Proximity sensor",
					"Ambient light sensors",
					"Barometer",
				],
				battery: {
					wireless_charging: true,
					video_playback: "11 hours",
					audio_playback: "65 hours",
					fast_charging: "50% in 30 minutes",
				},

				storage: ["512GB", "256GB", "128GB"],
			},
		},
		{
			id: 11,
			model: "iPhone 12",
			image:
				"https://www.91-img.com/pictures/136139-v4-apple-iphone-12-mobile-phone-medium-1.jpg?tr=q-80",
			price: 59900,
			specifications: {
				display: {
					size: "15.4 cm or 6.1 in",
					type: "Super Retina XDR display",
					dynamic_island: false,
					brightness: "1200nits",
					haptic: true,
					refresh_rate: undefined,
				},
				camera: {
					back: {
						no_of_camera: 2,
						megapixel: {
							main: "12 mp",
							second: "12 mp ultra wide",
						},
						zooms: [".5x", "1x"],
						night_mode: true,
					},
					front: {
						no_of_camera: 1,
						megapixel: {
							main: "12 mp",
						},
					},
				},
				chip: {
					chipset: "A14 Bionic chip",
					cpu: "6-core CPU with 2 performance and 4 efficiency cores",
					gpu: "5-core GPU",
					core: "16-core Neural Engine",
				},
				cellure_and_wireless: {
					Support_5g: true,
					wifi: "Wi-Fi 6",
					bluetooth: "Bluetooth 5.0",
					NFC: true,
					no_of_sim: 2,
					sim_slot_type: "eSIM or nano SIM",
				},
				security: {
					faceID: true,
					fingerprint_sensor: false,
				},
				sensors: [
					"Three-axis gyro",
					"Accelerometer",
					"Proximity sensor",
					"Ambient light sensors",
					"Barometer",
				],
				battery: {
					wireless_charging: true,
					video_playback: "11 hours",
					audio_playback: "65 hours",
					fast_charging: "50% in 30 minutes",
				},

				storage: ["64GB", "256GB", "128GB"],
			},
		},
		{
			id: 12,
			model: "iPhone 12 Mini",
			image:
				"https://www.91-img.com/pictures/140365-v6-apple-iphone-12-mini-mobile-phone-medium-1.jpg?tr=q-80",
			price: 59900,
			specifications: {
				display: {
					size: "13.76 cm or 5.4 in",
					type: "Super Retina XDR display",
					dynamic_island: false,
					brightness: "1200nits",
					haptic: true,
					refresh_rate: "120hz",
				},
				camera: {
					back: {
						no_of_camera: 2,
						megapixel: {
							main: "12 mp",
							second: "12 mp ultra wide",
						},
						zooms: [".5x", "1x"],
						night_mode: true,
					},
					front: {
						no_of_camera: 1,
						megapixel: {
							main: "12 mp",
						},
					},
				},
				chip: {
					chipset: "A14 Bionic chip",
					cpu: "6-core CPU with 2 performance and 4 efficiency cores",
					gpu: "5-core GPU",
					core: "16-core Neural Engine",
				},
				cellure_and_wireless: {
					Support_5g: true,
					wifi: "Wi-Fi 6",
					bluetooth: "Bluetooth 5.0",
					NFC: true,
					no_of_sim: 2,
					sim_slot_type: "eSIM or nano SIM",
				},
				security: {
					faceID: true,
					fingerprint_sensor: false,
				},
				sensors: [
					"Three-axis gyro",
					"Accelerometer",
					"Proximity sensor",
					"Ambient light sensors",
					"Barometer",
				],
				battery: {
					wireless_charging: true,
					video_playback: "10 hours",
					audio_playback: "50 hours",
					fast_charging: "50% in 35 minutes",
				},

				storage: ["64GB", "256GB", "128GB"],
			},
		},
	],
};

// app.get("/api/iphones", (req, res) => {
// 	res.json(iphones);
// });

// app.get("/api/iphones/random", (req, res) => {
// 	let ran = Math.floor(Math.random() * iphones.no_of_products);
// 	res.json(iphones.info[ran]);
// });

// app.get("/api/iphones/:id", (req, res) => {
// 	res.json(iphones.info[req.params.id - 1]);
// });

module.exports = iphones;
