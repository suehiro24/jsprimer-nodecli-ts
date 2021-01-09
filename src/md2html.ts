import marked = require("marked")
import { CliOptionsType } from "./index"

export const md2html = (markdown: string, cliOptions: CliOptionsType) => {
    return marked(markdown, {
        gfm: cliOptions.gfm,
    });
};