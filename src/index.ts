import express ,{Request, Response} from 'express';


//instance express
const app = express();


//(req, resp)
app.use('/check',(req: Request, res:Response)=>{
    console.log('incomming request');
    res.status(200).send('hello you');
});

app.listen(9000, ()=>{
    console.log("server listening on 6000");
});


app.use(
    "/handCheck/:a/:b",
    (req: Request, res: Response) => {
      const {
        params: { a, b },
      } = req;
      console.log("Variable a ",a)
      console.log("Variable b ",b)
      const sum  = Number(a) + Number(b)
      res.status(200).send('la somme de '+a+' + '+b+' est '+sum);
    }
  );
  
  app.listen(3000, () => {
    console.log(
      "Server listening on port 3000"
    );
  });
  