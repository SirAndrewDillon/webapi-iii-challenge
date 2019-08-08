exports.seed = function (knex, Promise) {
  return knex('posts').insert([
    {
      user_id: 1,
      text:
        'I am serious. And don’t call me Shirley..',
    },
    {
      user_id: 1,
      text: 'Joey, do you like movies about gladiators?',
    },
    { user_id: 1, text: 'Theres no reason to become alarmed, and we hope youll enjoy the rest of your flight. By the way, is there anyone on board who knows how to fly a plane?' },
    { user_id: 1, text: 'Can you protect me from yourself?' },
    { user_id: 2, text: "I'm a mog - half man, half dog. I'm my own best friend." }, // 5
    { user_id: 2, text: "Of course you are, and I'm coming with you!" }, // 6
    {
      user_id: 2,
      text:
        "We get the warhead and we hold the world ransom for…. One million dollars..",
    }, // 7
    {
      user_id: 2,
      text:
        " N-nothing important. That is, I heard a great deal about a ring, a Dark Lord, and something about the end of the world, but... Please, Mr. Gandalf, sir, don't hurt me. Don't turn me into anything... unnatural.",
    }, // 8
    { user_id: 3, text: 'Leave the gun. Take the cannoli.' }, // 9
    { user_id: 4, text: "We've had one yes. What about second breakfast?" }, // 10
    {
      user_id: 4,
      text:
        'That rug really tied the room together, did it not?”',
    }, // 11
    {
      user_id: 5,
      text:
        'Fat, drunk, and stupid is no way to go through life, son."',
    },
    {
      user_id: 5,
      text:
        'I have come here to chew bubblegum and kick ass... and Im all out of bubblegum.',
    },
    {
      user_id: 5, text: 'Roses are red, violets are blue. Im a schizophrenic and so am I.'
    },
    {
      user_id: 5,
      text:
        'Bleeker’s mom was possibly attractive once, but now she looks like a Hobbit. You know, the fat one, that was in the Goonies.',
    },
    { user_id: 5, text: 'When in doubt, follow your nose.' }, // 16
    { user_id: 5, text: 'YOU SHALL NOT PASS!' }, // 17
    { user_id: 5, text: 'Fly you fools!' }, // 18
    {
      user_id: 5,
      text:
        'Ladies and gentlemen, I can envision a day when the brains of brilliant men can be kept alive in the bodies of dumb people!',
    }, // 19
    {
      user_id: 5,
      text:
        'Did you all take Stupid Pills this morning?',
    }, // 20
    {
      user_id: 5,
      text:
        ' Fool of a Took! Throw yourself in next time and rid us of your stupidity!',
    }, // 21
    {
      user_id: 6,
      text:
        'I have strong feelings about gun control. If theres a gun around, I want to be controlling it.',
    },
    {
      user_id: 6,
      text:
        'It is a strange fate that we should suffer so much fear and doubt over so small a thing. Such a little thing.',
    },
    { user_id: 6, text: 'Gondor has no king, Gondor needs no king.' },
    {
      user_id: 7,
      text:
        'You can put a cat in an oven, but that dont make a biscuit.',
    },
    {
      user_id: 7,
      text:
        'Truth hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts. ',
    },
    {
      user_id: 7,
      text:
        'Between two evils I always pick the one I never tried before. ',
    },
    { user_id: 8, text: 'Stupid is as stupid does. ' }, // 28
    {
      user_id: 8,
      text:
        'Nobody makes me bleed my own blood. Nobody!!',
    }, // 29
    { user_id: 8, text: "I have many leather bound books and my apartment smells like rich mahogany." }, // 30
    {
      user_id: 8,
      text:
        'I have been dealt a wound beyond all healing, for I have looked the last... upon that which was fairest. Henceforth I will call nothing fair unless it be her gift to me.',
    },
    {
      user_id: 8,
      text: 'I Have Nipples, Greg. Could You Milk Me?',
    }, // 32
    {
      user_id: 9,
      text:
        "How’d You Get The Beans Above The Frank?",
    },
    {
      user_id: 9,
      text:
        'If Peeing Your Pants Is Cool, Consider Me Miles Davis.',
    },
    {
      user_id: 9,
      text: "Fat Guy In A Little Coat. Fat Guy In A Little Coat.",
    }, // 35
    {
      user_id: 9,
      text: "A little more caution from you, that's no trinket you carry.",
    }, // 36
    {
      user_id: 9,
      text:
        'The Ratio Of People To Cake Is Too Big.',
    }, // 37
    {
      user_id: 9,
      text:
        'I Once Thought I Had Mono For An Entire Year. It Turned Out I Was Just Really Bored.',
    },
  ]);
};
