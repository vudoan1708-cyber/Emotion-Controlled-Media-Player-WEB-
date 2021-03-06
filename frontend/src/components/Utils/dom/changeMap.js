/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
// DOM

export default function changeMap(num, showMap, top_left, top_right, bottom_left, bottom_right) {
  showMap = num;
  if (showMap === 1 && top_left.style.opacity === '1') {
    top_left.style.opacity = '0';
    top_left.style.zIndex = '-1';

    top_right.style.opacity = '1';
    top_right.style.zIndex = '0';

    bottom_left.style.opacity = '1';
    bottom_left.style.zIndex = '0';

    bottom_right.style.opacity = '1';
    bottom_right.style.zIndex = '0';
  } else if (showMap === 2 && top_right.style.opacity === '1') {
    top_left.style.opacity = '1';
    top_left.style.zIndex = '0';

    top_right.style.opacity = '0';
    top_right.style.zIndex = '-1';

    bottom_left.style.opacity = '1';
    bottom_left.style.zIndex = '0';

    bottom_right.style.opacity = '1';
    bottom_right.style.zIndex = '0';
  } else if (showMap === 3 && bottom_left.style.opacity === '1') {
    top_left.style.opacity = '1';
    top_left.style.zIndex = '0';

    top_right.style.opacity = '1';
    top_right.style.zIndex = '0';

    bottom_left.style.opacity = '0';
    bottom_left.style.zIndex = '-1';

    bottom_right.style.opacity = '1';
    bottom_right.style.zIndex = '0';
  } else if (showMap === 4 && bottom_right.style.opacity === '1') {
    top_left.style.opacity = '1';
    top_left.style.zIndex = '0';

    top_right.style.opacity = '1';
    top_right.style.zIndex = '0';

    bottom_left.style.opacity = '1';
    bottom_left.style.zIndex = '0';

    bottom_right.style.opacity = '0';
    bottom_right.style.zIndex = '-1';
  }

  return showMap;
}
