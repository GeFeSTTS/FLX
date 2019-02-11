function formatTime (time) {
  let date = {
      minutes: 0,
      hours: 0,
      days: 0
  }

      if (time < 60) {
         date.minutes = time ^ 0;
      } else if ( time >= 1440) {
          date.days = time / 60 / 24 ^ 0;
          date.minutes = time - (1440 * date.days);
          if (date.minutes >= 60) {
              date.hours = time / 60 ^ 0;
              date.minutes = time - (60 * date.hours);
          }
      } else if (time >= 60) {
        date.hours = time / 60 ^ 0;
        date.minutes = time - (60 * date.hours);
      }
      

  return date.days + ' day(s) ' + date.hours + ' hour(s) ' + date.minutes + ' minute(s).';
}

formatTime(120);
formatTime(59);
formatTime(3601);