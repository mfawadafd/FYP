import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function infoBox({ info }) {

  return (
    <div className="info-box">
      <Card sx={{ maxWidth: 345 }}>
        {/* <CardMedia
        sx={{ height: 140 }}
        title="green iguana"
      /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {" "}
            {info.humidity > 80 ?(
             <ThunderstormIcon /> 
            ): info.temp > 15 ? (
             <SunnyIcon />
            ) :(
             <AcUnitIcon />
            )}  
            

          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>Temprature = {info.temperature}&deg;C </div>
            <div>Feel_like = {info.feelslike}&deg;C</div>
            <div>humidity = {info.humidity}</div>
            <div>Pressure = {info.pressure} hPa</div>
            <div>Wind Speed = {info.windSpeed} m/s</div>
            {/* <div>Air Quality = {info.Air_Quality}</div> */}
            <div>Weather Description = {info.weatherDescription}</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}