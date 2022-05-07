const express=require('express');
const app=express();
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res,next)=>{
	res.sendFile(__dirname+"/anasayfa.html");
});

app.get('/urunler',(req,res)=>{
	res.sendFile(__dirname+"/urunler.html");
});
app.get('/magzalar',(req,res)=>{
	res.sendFile(__dirname+"/magzalar.html")
});

app.get('/firmalar',(req,res)=>{
	res.sendFile(__dirname+"/firmalar.html");
});
app.get('/musteri',(req,res)=>{
	res.sendFile(__dirname+"/musteri.html");
});

app.post('/musteri',(req,res)=>{
	console.log(req.body);
});

app.listen(3000,()=>{
	console.log('3000 den dinleniyor');
});

