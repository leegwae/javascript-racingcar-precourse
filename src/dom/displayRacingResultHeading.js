import generateHeading4 from './utils/generateHeading4.js';
import { HEADING_RACING_RESULT } from './const.js';

function displayRacingResultHeading(parent) {
  parent.appendChild(generateHeading4(HEADING_RACING_RESULT));
}

export default displayRacingResultHeading;
