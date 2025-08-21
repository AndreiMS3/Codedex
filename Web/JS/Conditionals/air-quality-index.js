/*
Write an if/else if/else statement with the following logic:

If aqi is between 0 and 50, print "Good".
Else if aqi is between 51 and 100, print "Moderate".
Else if aqi is between 101 and 150, print "Unhealthy (Sensitive Groups)".
Else if aqi is between 151 and 200, print "Unhealthy".
Else if aqi is between 201 and 300, print "Very Unhealthy".
Else, print "Hazardous". */

let aqi = 171; 

if (aqi >= 0 && aqi <= 50){
    console.log("Good");
}else if (aqi >50 && aqi <=100){
    console.log("Moderate");
}else if (aqi > 101 && aqi <=150){
    console.log("Moderate");
}else if (aqi >151 && aqi <=200){
    console.log("Moderate");
}else if (aqi >201 && aqi <=300){
    console.log("Moderate");
}else{
    console.log("Hazardous");
}