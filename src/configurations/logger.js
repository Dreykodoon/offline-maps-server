const { createLogger, format, transports } = require('winston');
const path = require('path');


const { combine, timestamp, printf } = format;

const myFormat = printf((info) => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: []
});

const filename = path.join(__dirname, '../logfile.log');

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: combine(
      timestamp(),
      myFormat
    )
  }));
} else {
  logger.add(new transports.File({ filename }));
}

module.exports = logger;
