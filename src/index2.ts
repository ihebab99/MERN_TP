import express, { Request, Response, NextFunction } from "express";

//const express = require('express');
const app=express();

app.use(express.json());

const verif=(req:Request,res:Response, next: NextFunction)=>{
    var num1=Number(req.params.num1)
    var num2=Number(req.params.num2)
    if (num2==0 ) {
        return res.status(400).json({ message: "devision null impossible" });
      }
      next();
}

app.use('/calculer/:num1/:num2',verif, (req, res) => {
    //const { num1, num2 } = req.body;
    var num1=Number(req.params.num1)
    var num2=Number(req.params.num2)
    
  
    const resultat = {
      addition: num1 + num2,
      soustraction: num1 - num2,
      multiplication: num1 * num2,
      division: num1 / num2
    };
  
    res.status(200).json({ resultat });
  });
  
  app.listen(3000, () => console.log('Le serveur est en écoute sur le port 3000.'));