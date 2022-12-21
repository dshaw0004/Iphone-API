
# Iphones API

## 🚀 About

This is a unofficial iphone api which will response different information like price of any iphone. I am still working on it, not all iphones are added. 

## Features

- Response all info at once 
- Response a random iphone's specifications 
- Get info of a specific iphone


## API Reference

### Base url

```http
  https://iphone-info.dsx4.repl.co
```

#### Get all items

```http
  GET /api/iphones
```



#### Get item

```http
  GET /api/iphones/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch |

#### Get random item

```http
  GET /api/iphones/random
```


## Authors

- [@dshaw0004](https://www.github.com/dshaw0004)


## Documentation

[Documentation](https://iphone-info.dsx4.repl.co)


## Usage/Examples

```json
{
		id: 1,
		model: "iPhone 14 Pro Max",
		image:
			"https://www.91-img.com/pictures/146919-v4-apple-iphone-14-pro-max-mobile-phone-large-1.jpg?tr=q-80",
		price: 139900,
		specifications: {
			display : {
				size : "17 cm or 6.7 in",
				type : "Super Retina XDR display",
				dynamic_island : true,
				brightness: "2000nits",
				haptic : true,
				refresh_rate : "120hz"
			},
			camera :{
				back : {
				no_of_camera : 3,
				megapixel: {
					main : "48 mp",
					second: "12 mp ultra wide",
					third : "12 mp telephoto"
				},
				zooms : [".5x","1x","2x","3x"],
				night_mode : true
					},
				front : {
					no_of_camera : 1,
					megapixel : {
						main : "12 mp"
					}
				}
			},
			chip : {
				chipset : "A16 Bionic chip",
cpu : "6-core CPU with 2 performance and 4 efficiency cores",
gpu : "5-core GPU",
core : "16-core Neural Engine"
				},
			cellure_and_wireless : {
				Support_5g : true,
				wifi : "Wi-Fi 6",
				bluetooth : "Bluetooth 5.3",
				NFC : true,
				no_of_sim : 2,
				sim_slot_type : "eSIM"
			},
			security : {
				faceID : true,
				fingerprint_sensor : false
			},
			sensors : [
				"LiDAR Scanner",
"High dynamic range gyro",
"High-g accelerometer",
"Proximity sensor",
"Dual ambient light sensors",
"Barometer",
			],
			battery : {
				wireless_charging : true,
				video_playback : "25 hours",
				audio_playback : "95 hours",
				fast_charging : "50% in 30 minutes"
			},
			
			storage : ['1TB', '512GB', '256GB', '128GB']
			}
	}
```


## Contributing

Contributions are always welcome!



