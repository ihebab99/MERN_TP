import express, { Request, Response, NextFunction } from "express";
const app = express();

app.use(express.json());

// middleware pour valider les nombres
const validateNumbers = (req: Request, res: Response, next: NextFunction) => {
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  const op = req.params.op;

  if (op == "div" && num2 == 0) {
    return res.status(400).json({ error: "division impossible sur zero" });
  }

  next();
};

// middleware pour effectuer l'opération arithmétique
const calculate = (req: Request, res: Response, next: NextFunction) => {
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  const op = req.params.op;
  var result ;

  switch (op) {
    case "add":
      result = num1 + num2;
      break;
    case "sous":
      result = num1 - num2;
      break;
    case "mult":
      result = num1 * num2;
      break;
    case "div":
      result = num1/num2;
      break;
    default:
      return res
        .status(400)
        .json({
          error: "L'opérateur doit être l'un des suivants : +, -, *, /",
        });
  }
  res.status(200).json({ result });
  //req.result = result;
  next();
};

app.get("/calculate/:op", validateNumbers, calculate, (req, res) => {
    res.status(200).json({ result:req.result });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});



