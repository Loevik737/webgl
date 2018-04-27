 function LatLongToPixelXY(latitude, longitude) {
            let pi_180 = Math.PI / 180.0,
            	pi_4 = Math.PI * 4,
            	sinLatitude = Math.sin(latitude * pi_180),
            	pixelY = (0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (pi_4)) * 256,
            	pixelX = ((longitude + 180) / 360) * 256,
            	pixel = [pixelX, pixelY];

            return pixel;
}