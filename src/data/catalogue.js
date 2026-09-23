/* ---------- catalogue: 2 categories, 6 pieces ---------- */
export const PRODUCTS=[
 {id:'sera',cat:'seating',name:'Sera Sofa',kind:'sofa',leg:'#3A2B20',
  blurb:'A low, deep sofa on slim walnut legs. Feather-wrapped cushions sit soft and recover quickly, and the covers lift off for cleaning.',
  spec:{Frame:'Kiln-dried beech',Fill:'Feather & foam',Origin:'Porto, Portugal'},
  finishes:[{n:'Cognac leather',h:'#9A5A31',up:300},{n:'Espresso leather',h:'#3B2A21',up:300},{n:'Bone linen',h:'#D6CBB8',up:0},{n:'Moss bouclé',h:'#6F6B4E',up:120}],
  sizes:[{l:'Two-seater',cm:'184 × 92 × 78 cm',dim:'184 cm',W:400,k:2,price:2490},{l:'Three-seater',cm:'238 × 92 × 78 cm',dim:'238 cm',W:518,k:3,price:3190}]},
 {id:'lorne',cat:'seating',name:'Lorne Armchair',kind:'arm',leg:'#B58A5B',
  blurb:'A lounge chair with an oak frame and a generous, rounded back. Made for a corner, a window, and a long book.',
  spec:{Frame:'Solid European oak',Fill:'Recycled foam & wool',Origin:'Porto, Portugal'},
  finishes:[{n:'Sand bouclé',h:'#CDBB9C',up:0},{n:'Cocoa bouclé',h:'#6B4B39',up:0},{n:'Ink wool',h:'#2E2B2A',up:90}],
  sizes:[{l:'Standard',cm:'76 × 82 × 74 cm',dim:'76 cm',W:236,price:1190},{l:'Wide',cm:'90 × 86 × 74 cm',dim:'90 cm',W:278,price:1390}]},
 {id:'ode',cat:'seating',name:'Ode Bench',kind:'bench',leg:'#2F2219',
  blurb:'An upholstered bench for the end of a bed or the length of a hallway. One clean line, nothing to fuss over.',
  spec:{Frame:'Beech & birch ply',Fill:'High-density foam',Origin:'Porto, Portugal'},
  finishes:[{n:'Cognac leather',h:'#9A5A31',up:120},{n:'Oat linen',h:'#CDC0A8',up:0},{n:'Charcoal wool',h:'#403A36',up:60}],
  sizes:[{l:'Small',cm:'100 × 42 × 44 cm',dim:'100 cm',W:262,price:590},{l:'Medium',cm:'140 × 42 × 44 cm',dim:'140 cm',W:366,price:790},{l:'Large',cm:'180 × 42 × 44 cm',dim:'180 cm',W:470,price:990}]},
 {id:'vale',cat:'tables',name:'Vale Side Table',kind:'side',
  blurb:'A round side table on three splayed legs. Sits beside the sofa, holds a lamp, a cup, and a branch in a vase.',
  spec:{Material:'Solid European oak',Finish:'Hard-wax oil',Origin:'Valencia, Spain'},
  finishes:[{n:'Natural oak',h:'#B98F5E',up:0},{n:'Walnut',h:'#5B3E2B',up:60},{n:'Smoked ash',h:'#4A403A',up:40}],
  sizes:[{l:'Small',cm:'Ø 40 × 48 cm',dim:'Ø 40 cm',W:132,price:390},{l:'Large',cm:'Ø 50 × 44 cm',dim:'Ø 50 cm',W:164,price:490}]},
 {id:'moro',cat:'tables',name:'Moro Coffee Table',kind:'slab',
  blurb:'A low slab table on two solid legs. The top is thick enough to feel carved, and no two stone tops are the same.',
  spec:{Material:'Stone or solid wood',Finish:'Honed & sealed',Origin:'Valencia, Spain'},
  finishes:[{n:'Travertine',h:'#CDBB9B',up:200},{n:'Nero',h:'#2A2624',up:260},{n:'Walnut',h:'#5B3E2B',up:0}],
  sizes:[{l:'Compact',cm:'90 × 60 × 34 cm',dim:'90 cm',W:300,price:1190},{l:'Grand',cm:'120 × 70 × 34 cm',dim:'120 cm',W:400,price:1490}]},
 {id:'tera',cat:'tables',name:'Tera Dining Table',kind:'dining',
  blurb:'A long trestle table with a thin top and quiet proportions. Made in three lengths for six, eight or ten at the table.',
  spec:{Material:'Solid European oak',Finish:'Hard-wax oil',Origin:'Valencia, Spain'},
  finishes:[{n:'Natural oak',h:'#B98F5E',up:0},{n:'Walnut',h:'#5B3E2B',up:240},{n:'Smoked ash',h:'#4A403A',up:160}],
  sizes:[{l:'For six',cm:'180 × 90 × 75 cm',dim:'180 cm',W:400,price:2190},{l:'For eight',cm:'220 × 95 × 75 cm',dim:'220 cm',W:490,price:2590},{l:'For ten',cm:'260 × 100 × 75 cm',dim:'260 cm',W:580,price:2990}]}
];
export const CATS=[{id:'seating',name:'Seating'},{id:'tables',name:'Tables'}];
export const byId=id=>PRODUCTS.find(p=>p.id===id);
export const priceOf=(p,fi,si)=>p.sizes[si].price+p.finishes[fi].up;

export const from=p=>Math.min(...p.sizes.map(s=>s.price))+Math.min(...p.finishes.map(f=>f.up));

