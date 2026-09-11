export const journal = [
  {
    slug: 'the-case-for-fewer-things',
    title: 'The case for fewer things',
    kicker: 'Essay',
    date: '2026-08-14',
    readTime: '6 min',
    author: 'Ines Okafor',
    excerpt:
      'Restraint is not the absence of decision. It is the accumulation of many small ones, made early and held to.',
    cover: 'photo-1513694203232-719a280e022f',
    body: [
      'A room reaches its final form long before the last object arrives. It is settled in the first three decisions — where the light falls, what the floor is, how high the seat sits. Everything after that is either in agreement with those decisions or quietly arguing with them.',
      'We design against a simple test: can a piece be removed from a room without the room noticing? If the answer is yes, the piece was decoration. If the answer is no, it was structure. We are only interested in structure, even when it takes the form of a bowl.',
      'This is why our catalogue is short and grows slowly. A collection of forty pieces that all agree with each other is more useful than four hundred that do not. Restraint at the design stage is what allows generosity at the living stage — space to move, surfaces left clear, a room that can absorb a busy week without looking like one.',
      'The pieces that survive in a home are rarely the ones that impressed on arrival. They are the ones that were easy to live beside. That is a lower ambition than most furniture sets for itself, and a much harder one to meet.',
    ],
  },
  {
    slug: 'notes-from-the-ash-workshop',
    title: 'Notes from the ash workshop',
    kicker: 'Craft',
    date: '2026-07-02',
    readTime: '8 min',
    author: 'Marcus Lindqvist',
    excerpt:
      'Three days with the joiners who steam-bend every Sorrel frame — and why the chair takes six weeks to leave the building.',
    cover: 'photo-1567538096630-e0c55bd6374c',
    body: [
      'Steam-bending is a negotiation. The timber is held at just under boiling for roughly an hour per inch of thickness, then it has about ninety seconds of willingness before it begins to argue back. Miss that window and the piece is firewood.',
      'The workshop runs six formers for the Sorrel back, each one worn smooth by a decade of frames. The wear is the point: a former that has shaped two thousand backs shapes the two thousand and first more kindly than a new one would.',
      'After bending, each frame rests for three weeks. Nothing happens to it in that time except the thing that matters most — it settles. The moisture equalises, the fibres take the memory of the curve, and the shape stops wanting to return to straight. Skip the rest and the chair will slowly unbend itself in a living room five years from now.',
      'This is the least visible six weeks in the whole catalogue and the reason the chair holds its line.',
    ],
  },
  {
    slug: 'how-to-light-a-room-after-dark',
    title: 'How to light a room after dark',
    kicker: 'Guide',
    date: '2026-06-19',
    readTime: '5 min',
    author: 'Studio Aethera',
    excerpt:
      'Four fixtures, all below eye level, none of them on the ceiling. A working method for the hours after seven.',
    cover: 'photo-1550226891-ef816aed4a98',
    body: [
      'Ceiling light is administrative. It is useful for finding a dropped earring and almost nothing else, and yet it is the only light most rooms are built with.',
      'The method we use is simple: four sources, all under 1.6 metres, each doing one job. A floor lamp for the seat you actually use. A table lamp for the surface nearest the door, so the room greets you. Something low and warm in a corner to stop the walls going flat. And one candle, or its electric equivalent, on the table.',
      'Keep everything at 2700K or below. Put every fixture on its own switch, because a room lit in four steps can be four different rooms across an evening. And resist the urge to light the centre — rooms feel larger when their edges are the brightest part.',
    ],
  },
  {
    slug: 'living-with-linen',
    title: 'Living with linen',
    kicker: 'Materials',
    date: '2026-05-28',
    readTime: '4 min',
    author: 'Atelier Ghosh',
    excerpt:
      'It creases, it softens, it outlives almost everything else in the house. A short defence of an inconvenient cloth.',
    cover: 'photo-1522771739844-6a9f6d5f14af',
    body: [
      'Linen is the only textile we use that gets better through neglect. Wash it badly, dry it in the sun, fold it carelessly — within a year it will be softer than anything you could have bought new.',
      'The creasing is not a flaw in the fibre, it is the fibre. Flax has low elasticity, which is precisely why it is strong, breathable and effectively permanent. Every property people like about linen and the one property they complain about come from the same place.',
      'Our advice is to stop fighting it. Wash warm, dry most of the way, and put it back on the bed slightly damp. It will settle by morning, and in five years it will still be there.',
    ],
  },
]

export const getArticle = (slug) => journal.find((a) => a.slug === slug)

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
