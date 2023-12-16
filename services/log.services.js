import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen("SUCCESS") + " " + message);
};

const printHelp = () => {
  console.log(dedent`
    ${chalk.bgYellow("Help")}
    -s [CITY] for enter city
    -t [API_KEY] for saving token
    -h for help
  `);
};

const printWeather = (response, icon) => {
  console.log(dedent`
    ${chalk.bgYellowBright("WEATHER")} City weather ${response.name}
    ${icon} ${response.weather[0].description}
    Teperature; ${response.main.temp} (feels like ${response.main.feels_like})
    Humidity: ${response.main.humidity}%
    Wind speed: ${response.wind.speed}
  `);
};

export { printError, printSuccess, printHelp, printWeather };
