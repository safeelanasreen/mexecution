const fs = require('fs');
const args = process.argv;
const folderName = `src/components/${args[2]}`;
const folderRoute = `src/components/index.js`;


try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    fs.appendFile(`${folderName}/index.js`, `${`import Style from "./${args[2]}.module.scss";\n\nconst ${args[2]} = ({ props }) => {\n return (\n <section>${args[2]} </section>\n);\n };\nexport default ${args[2]};`}`, function (err) {
      if (err) throw err;
      console.log(`created ${args[2]} component`);
    });
    fs.appendFile(`${folderName}/${args[2]}.module.scss`, `${'@import "../../styles/util";'}`, function (err) {
      if (err) throw err;
    });
    fs.readFile(`${folderRoute}`, "utf8", (err, data) => {
      if (err) throw err;

      const lines = data.split("\n");
      lines.splice(1, 0, `${`import ${args[2]} from "./${args[2]}";`}`);
      lines.splice(-16, 0, ` ${args[2]},`);

      const updatedFile = lines.join("\n");

      fs.writeFile(`${folderRoute}`, updatedFile, (err) => {
        if (err) throw err;
      });
    });
  }
} catch (err) {
  console.error(err);
}