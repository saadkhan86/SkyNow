const express=require("express");
const app=express();
const cors=require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.post("/signup",async(req,res)=>{
    const {username,email,password}=await req.body.info;
    if(username && email && password){
        res.status(200).json({response:"ok"});
    }else{
        res.status(400).json({response:"please fill fields"})
    }
})
app.post("/weather",async(req,res)=>{
    if(!req.body.city){
        res.status(400).json({response:"please enter city name"});
    }else{
        try{
            const API_KEY=await process.env.API_KEY;
            const city=await req.body.city;
            const api=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const filtered=await api.json();
            // console.log(filtered);
                
            const images = [
            { icon: "❄️", range: { min: -50, max: 0 }, image: "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=500&auto=format&fit=crop&q=60" },
            { icon: "🧥", range: { min: 1, max: 10 }, image: "https://plus.unsplash.com/premium_photo-1675715923850-b5be1d5d71a7?q=80&w=870&auto=format&fit=crop" },
            { icon: "🌱", range: { min: 11, max: 20 }, image: "https://images.unsplash.com/photo-1646277695994-f9fca55f082e?w=500&auto=format&fit=crop" },
            { icon: "🌤", range: { min: 21, max: 25 }, image: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=500&auto=format&fit=crop" },
            { icon: "🌞", range: { min: 26, max: 30 }, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop" },
            { icon: "🔥", range: { min: 31, max: 35 }, image: "https://images.unsplash.com/photo-1605371893234-db5e7b01aad2?w=500&auto=format&fit=crop" },
            { icon: "🥵", range: { min: 36, max: 40 }, image: "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=500&auto=format&fit=crop" },
            { icon: "🌡", range: { min: 41, max: 45 }, image: "https://images.unsplash.com/photo-1646277695994-f9fca55f082e?w=500&auto=format&fit=crop" },
            { icon: "🔥🔥", range: { min: 46, max: 50 }, image: "https://images.unsplash.com/photo-1545955413-209e03defb1f?w=500&auto=format&fit=crop" },
            { icon: "☠️", range: { min: 51, max: 100 }, image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=500&auto=format&fit=crop" }
            ];
            const getWeatherImg=(temp)=>{
                const img=images.find(img=>temp>=img.range.min && temp<=img.range.max);
                return img?img:null;
            } 
            const weatherInfo={
                img:getWeatherImg(filtered.main.temp),
                temp:filtered.main.temp,
                temp_min:filtered.main.temp_min,
                temp_max:filtered.main.temp_max,
                humidity:filtered.main.humidity,
                feels_like:filtered.main.feels_like,
                description:filtered.weather[0].description
            };
            const resCode= Number(filtered.cod || api.status);
            if(resCode==200){
               return res.status(200).json({response:weatherInfo});
            }else{
                const message=await filtered.message.split(".")[0];
                return res.status(resCode).json({response:message});
            }
        }catch(e){
            res.status(500).json({response:"something went wrong"})
        }
    }
})
app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
})