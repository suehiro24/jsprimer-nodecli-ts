console.log("Hello World!");

// これ(CommonJS形式)だと補完が効かないので、ECMAScript形式で記述してコンパイルさせた方が良い
const mymodule = require("./my-commonjs-module");
console.log(mymodule.foo);

// コマンドライン引数の表示。パースしていないと環境の情報も含まれてしまう
console.log(process.argv);


console.log("-------------マークダウン変換処理--------------")


// CommonJSモジュールをECMA形式で読み込み(d.tsの参照)
import program = require("commander");
import fs = require("fs");
// 自作モジュールははじめからECMAScriptモジュールとして作成
import { md2html } from "./md2html";

// オプション定義
program.option("-g, --gfm", "GFMを有効にする");

// 引数取得
program.parse(process.argv);
const filePath = program.args[0];
console.log(filePath);

// オプションのデフォルト値を設定して指定があれば上書き
export type CliOptionsType = {
    gfm: boolean
};
const cilOptions: CliOptionsType = {
    gfm: false,
    ...program.opts(),
}
console.log(cilOptions);

// メイン処理
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
    if (err) {
        console.log(err.message);
        process.exit(1);
    }
    // 変換
    const html = md2html(file, cilOptions);
    console.log(html);
});