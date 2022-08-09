import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);

function data({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

player
  .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on('timeupdate', throttle(data, 1000));
