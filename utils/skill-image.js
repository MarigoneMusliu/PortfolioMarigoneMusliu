import * as adobeXd from "/public/svg/skills/adobe-xd.svg";
import bootstrap from "/public/svg/skills/bootstrap.svg";
import csharp from "/public/svg/skills/csharp.svg";
import css from "/public/svg/skills/css.svg";
import sql from "/public/svg/skills/sql.svg";
import laravel from "/public/svg/skills/laravel.svg";
import arduino from "/public/svg/skills/arduino.svg";
import html from "/public/svg/skills/html.svg";
import javascript from "/public/svg/skills/javascript.svg";
import matlab from "/public/svg/skills/matlab.svg";
import mysql from "/public/svg/skills/mysql.svg";
import photoshop from "/public/svg/skills/photoshop.svg";
import php from "/public/svg/skills/php.svg";
import python from "/public/svg/skills/python.svg";
import react from "/public/svg/skills/react.svg";
import git from "/public/svg/skills/git.svg";

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
    case "bootstrap":
      return bootstrap;
    case "mysql":
      return mysql;
    case "c#":
      return csharp;
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
    case "git";
      return git;
    default:
      break;
  }
};
