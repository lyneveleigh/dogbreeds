const dogs = [
  {
    id: 1,
    breeds: 'DALMATIAN',
    info: 'Named after Dalmatia on the Adriatic coast, the Dalmatian was established in Britain, where it was popular as a carriage dog in the 1800s',
    coat: 'short, fine, dense and close, sleek and glossy in appearance',
    colour: 'Pure white ground colour with black or liver-brown spot',
    features: 'Long head and flat skull, eyes set moderaterly far apart, deep chest,long tail that is carried ith a slight upwart curve.',
    size: 'height at withers 48-58cm, weight: 23-25kg',
    character:'Affectionare and energetic.Intelligent and equable temperament'
  },
  {
    id: 2,
    breeds: 'BOSTON TERRIER',
    info: 'Derived from a crossbred Bulldog/Terrier, the Boston was imported into the US in the 19th century',
    coat: 'Short and smooth',
    colour: 'Brindle with white markings and black with white markings',
    features: 'Compactly built and well balanced. Square head, flat on top; round eyes set wide apart, broad, square jaw, ears erect at corners of head, broad chest fine, low-set tail',
    size: 'height: 38-43cm, weight: 11kg',
    character:'Lively, intelligent, but determined and self-willed'
  },
  {
    id: 3,
    breeds: 'SUSSEX SPANIEL',
    info: 'One of the rarer spaniels, the Sussex spaniel has been known in southern England for around 200 years',
    coat: 'Abundant and flat, ample, weather-resistant undercoat',
    colour: 'Rich golden liver, shading to golden at tops of hairs, dark liver or puce in udersirable in show dogs',
    features: 'Wide head, slightly rounded between the ears, hazel eyes with a soft expression, farily large, thick ears, deep, well-developed chesh, tailset on low and never carried above level of back',
    size: 'height at withers 33-40cm, weight: 16-23',
    character:'A working spaniel with an excellent nose that will give tongue, or bay, when it has found game. Loyal and easy to train'
  },
  {
    id: 4,
    breeds: 'CAVALIER KING CHARLES',
    info:'The Cavalier King Charles Spaniel is a small breed of spaniel classed in the toy group of The Kennel Club and the American Kennel Club, that originated in the United Kingdom. Since 2000, it has grown in popularity in the United States and ranks as the 19th most popular pure-breed in the United States.',
    coat: 'Long, silky, free from curl',
    colour: 'Black and Tan, Ruby(solid red), Blenheim(rich chestnut on white ground), Tricolour',
    features: 'Flattish skull, long ears, set high, short-coupled body, well-feathered tail',
    size: 'height:31-33cm, weight: 5-8kg',
    character:'Obedient, good-natured and fond of the children, makes an excellent familly pet'
  },
  {
    id: 5,
    breeds: 'CAIRN TERRIER',
    info: 'This popular Scottish terrier has been known and used for putting down vermin for 150 years. It was named afterthe carins ( a Scottish word for a mound of stones), which harboured vermin.',
    coat: 'Profuse, harsh but not coarse, with short, soft, close undercoat',
    colour: 'Cream, wheaten, red, grey or nearly black, brindling acceptable',
    features: 'Small head, eyes set wide apart, small, pointed ears, level back, short balanced tail',
    size: 'height: 24-30 cm, weight: 6-7kg',
    character:'Intelligent, lively, affectionate and effective for getting rid of vermin.'
  },
  {
    id: 6,
    breeds: 'HUNGARIAN VIZSLA',
    info: `{'The Vizsla is a dog breed from Hungary and belongs to the FCI group 7. The Hungarian or Magyar Vizsla are sporting dogs and loyal companions. The Vizsla's medium size is one of the breed's most appealing characteristics'}`,
    coat: 'Profuse, harsh but not coarse, with short, soft, close undercoat',
    colour: 'Cream, wheaten, red, grey or nearly black, brindling acceptable',
    features: 'Small head, eyes set wide apart, small, pointed ears, level back, short balanced tail',
    size: 'height: 24-30 cm, weight: 6-7kg',
    character:'Intelligent, lively, affectionate and effective for getting rid of vermin.'
  },
  {
    id: 7,
    breeds: 'OLD ENGLISH SHEEPDOG',
    info: 'The Old English Sheepdog is a large breed of dog that emerged in England from early types of herding dog. Obsolete names for the breed include Shepherds Dog and bob-tailed sheep-dog. The nickname Bob-tail originates from how dogs of the breed traditionally had their tails docked',
    coat: 'Profuse, harsh but not coarse, with short, soft, close undercoat',
    colour: 'Cream, wheaten, red, grey or nearly black, brindling acceptable',
    features: 'Small head, eyes set wide apart, small, pointed ears, level back, short balanced tail',
    size: 'height: 24-30 cm, weight: 6-7kg',
    character:'Intelligent, lively, affectionate and effective for getting rid of vermin.'
  },
  {
    id: 8,
    breeds: 'STANDARD FOODLE',
    info: 'This is a noble, elegant and well-balanced dog with a slender muzzle and long neck. The Standard Poodle s coat is profuse and curly and is often styled. This breed comes in many coat colours, including black, white, blue, grey, silver, brown, apricot and cream',
    coat: 'Profuse, harsh but not coarse, with short, soft, close undercoat',
    colour: 'Cream, wheaten, red, grey or nearly black, brindling acceptable',
    features: 'Small head, eyes set wide apart, small, pointed ears, level back, short balanced tail',
    size: 'height: 24-30 cm, weight: 6-7kg',
    character:'Intelligent, lively, affectionate and effective for getting rid of vermin.'
  },
  {
    id: 9,
    breeds: 'DOBERMAN',
    info: 'Pinschers originated in Germany during the late 19th century, mostly bred as guard dogs. Their exact ancestry is unknown, but theyre believed to be a mixture of many dog breeds, including the Rottweiler, Black and Tan Terrier, and German Pinscher.',
    coat: 'Profuse, harsh but not coarse, with short, soft, close undercoat',
    colour: 'Cream, wheaten, red, grey or nearly black, brindling acceptable',
    features: 'Small head, eyes set wide apart, small, pointed ears, level back, short balanced tail',
    size: 'height: 24-30 cm, weight: 6-7kg',
    character:'Intelligent, lively, affectionate and effective for getting rid of vermin.'
  },
  {
    id: 10,
    breeds: 'CHOW CHOW',
    info: 'The Chow-Chow is a dog breed originally from northern China. The Chow-Chow is a sturdily built dog, square in profile, with a broad skull and small, triangular, erect ears with rounded tips. The breed is known for a very dense double coat that is either smooth or rough',
    coat: 'Profuse, harsh but not coarse, with short, soft, close undercoat',
    colour: 'Cream, wheaten, red, grey or nearly black, brindling acceptable',
    features: 'Small head, eyes set wide apart, small, pointed ears, level back, short balanced tail',
    size: 'height: 24-30 cm, weight: 6-7kg',
    character:'Intelligent, lively, affectionate and effective for getting rid of vermin.'
  },
  {
    id: 11,
    breeds: 'CHIHUAHUA',
    info: 'The Chihuahua dog breed s charms include their small size, big personality, and variety in coat types and colors. They re all dog, fully capable of competing in dog sports such as agility and obedience, and are among the top ten watchdogs recommended by experts.',
    coat: 'Profuse, harsh but not coarse, with short, soft, close undercoat',
    colour: 'Cream, wheaten, red, grey or nearly black, brindling acceptable',
    features: 'Small head, eyes set wide apart, small, pointed ears, level back, short balanced tail',
    size: 'height: 24-30 cm, weight: 6-7kg',
    character:'Intelligent, lively, affectionate and effective for getting rid of vermin.'
  },
  {
    id: 12,
    breeds: 'BICHON FRISE',
    info: 'A Bichon Frise is a small breed of dog of the bichon type. The Bichon Frise is a member of the Non-sporting Group of dog breeds in the United States, and a member of the Toy dog Group in the United Kingdom',
    coat: 'Profuse, harsh but not coarse, with short, soft, close undercoat',
    colour: 'Cream, wheaten, red, grey or nearly black, brindling acceptable',
    features: 'Small head, eyes set wide apart, small, pointed ears, level back, short balanced tail',
    size: 'height: 24-30 cm, weight: 6-7kg',
    character:'Intelligent, lively, affectionate and effective for getting rid of vermin.'
  }


];

export {dogs};