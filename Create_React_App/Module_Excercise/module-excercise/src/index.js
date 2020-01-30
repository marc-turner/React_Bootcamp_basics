import { choice, remove } from './helpers';
import foods from './foods';

// randomly draw fruit
let fruit = choice(foods);
// log message "I'd like one randomfruit please"
console.log(`I'd like one ${fruit} please.`);
// log message "here you go: randomfuit"
console.log(`Here you go: ${fruit}`);
// log message "Delicious may I have another"
console.log(`Delicious! May I have another?`);
// Log message "sorry, we're all out We have fuitsleft left"
