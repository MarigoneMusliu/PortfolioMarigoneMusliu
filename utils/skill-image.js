const adobeXd = "/svg/skills/adobe-xd.svg";
const css = "/svg/skills/css.svg";
const sql = "/svg/skills/sql.svg";
const laravel = "/svg/skills/laravel.svg";
const arduino = "/svg/skills/arduino.svg";
const html = "/svg/skills/html.svg";
const javascript = "/svg/skills/javascript.svg";
const matlab = "/svg/skills/matlab.svg";
const mysql = "/svg/skills/mysql.svg";
const photoshop = "/svg/skills/photoshop.svg";
const php = "/svg/skills/php.svg";
const python = "/svg/skills/python.svg";
const react = "/svg/skills/react.svg";
const git = "/svg/skills/git.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "adobe xd":
      return adobeXd;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "mysql":
      return mysql;
    case "laravel":
      return laravel;
    case "arduino":
      return arduino;
    case "sql":
      return sql;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "git":
      return git;
    default:
      break;
  }
};
