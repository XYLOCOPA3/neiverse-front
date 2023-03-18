import next from "next";
import express, { Request, Response } from "express";

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT ?? 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, () => {
      console.log(`http://localhost:${port} で起動中`);
    });
  } catch (e) {
    console.error(e);
  }
})();
