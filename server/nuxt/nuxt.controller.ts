import { Controller, Get, Request, Response } from "@nestjs/common";
import { Builder, Nuxt } from "nuxt";
import * as config from "../../nuxt.config.js";

@Controller("nuxt")
export class NuxtController {
  nuxt;
  constructor() {
    // console.log("config__", config)
    if (process.env.mode === "production") {
      config.dev = false;
      this.nuxt = new Nuxt(config);
    }
    else if (process.env.IS_NUXT_ENABLED) {
      this.nuxt = new Nuxt(config);
      new Builder(this.nuxt).build();
    }
  }
  @Get("hello")
  getHello(){
    return "hello nuxt";
  }
  @Get('world')
  async root(
    @Request() req,
    @Response() res
  ) {
    console.log("nuxt__", this.nuxt)
    if (this.nuxt) {
      const result = await this.nuxt.render(req, res);
      console.log("result__", result)
    }
    else {
      res.send('Nuxt is disabled.');
    }
    // res.send('Nuxt is ok.');
  }
}