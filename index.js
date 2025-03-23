const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// Test case: Animal sounds
console.log("Animal Sounds:");
console.log(`moo: ${moo}`);
console.log(`neigh: ${neigh}`);
console.log(`baa: ${baa}`);
console.log(`oink: ${oink}`);
console.log(`cluck: ${cluck}`);

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const [sheep, horse, pig, chicken] = farmAnimals.split(' ');

// Map the animals to their respective names
const [bessie, dolly, babe, little] = [sheep, horse, pig, chicken];

// Test case: Four animals named
console.log("\nFour Animals Named:");
console.log(`bessie: ${bessie}`);  // Expecting 'sheep'
console.log(`dolly: ${dolly}`);    // Expecting 'horse'
console.log(`babe: ${babe}`);      // Expecting 'pig'
console.log(`little: ${little}`);  // Expecting 'chicken'


// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const [blackAndWhite, black, pink] = [bessie, baa, oink];

// Test case: Animal colors
console.log("\nAnimal Colors:");
console.log(`blackAndWhite: ${blackAndWhite}`);
console.log(`black: ${black}`);
console.log(`pink: ${pink}`);

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// Test case: Destructuring color names
console.log("\nColors:");
console.log(`red: ${red}`);
console.log(`orange: ${orange}`);
console.log(`yellow: ${yellow}`);
console.log(`green: ${green}`);
console.log(`blue: ${blue}`);
console.log(`indigo: ${indigo}`);
console.log(`violet: ${violet}`);

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r, o, y, g, b, , v] = colors;

// Test case: Destructuring using color initials
console.log("\nColors (Initials):");
console.log(`r: ${r}`);
console.log(`o: ${o}`);
console.log(`y: ${y}`);
console.log(`g: ${g}`);
console.log(`b: ${b}`);
console.log(`v: ${v}`);

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.
const [, , , , , indg] = colors;

// Test case: Assigning indigo using indg
console.log("\nIndigo Assigned Separately:");
console.log(`indg: ${indg}`);

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names.
const { muppetName, color, song, job, partner } = muppet;

// Test case: Object destructuring for muppet details
console.log("\nMuppet Details:");
console.log(`muppetName: ${muppetName}`);
console.log(`color: ${color}`);
console.log(`song: ${song}`);
console.log(`job: ${job}`);
console.log(`partner: ${partner}`);

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner.
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

// Test case: Nested object destructuring for muppet songs and job/partner
console.log("\nNested Muppet Details (Songs 2 & 4, Kermit's Job & Partner):");
console.log(`song2: ${song2}`);
console.log(`song4: ${song4}`);
console.log(`nestedJob: ${nestedJob}`);
console.log(`nestedPartner: ${nestedPartner}`);
// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner