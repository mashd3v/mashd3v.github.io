'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "14c3d385fe98934c77ebddf2304df8c4",
"index.html": "198c52b5621ec624cb683d316f307a35",
"/": "198c52b5621ec624cb683d316f307a35",
"main.dart.js": "17a30f65123bb61a804636a3369ad19a",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "4d6eb21670a2b7f505bf342fdd52a82e",
"icons/Icon-512.png": "7b3eee853adb81422ae6ed2f788c39b0",
"manifest.json": "e370b03d8691d1cf9ba4d4a762e42b18",
"portfolio_web.zip": "deac8195d69fab8a45660c36ebec6e26",
".git/config": "ae26b64519c11899988ca85112a447fb",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/50/48fd4f55d04eb1dc8ed75b4f251f03a07e397a": "4ca68782945132e55ba86abe602cbaa2",
".git/objects/68/62f8e9b4afa5427c52642caca36ed84ffada7f": "5697154b1e38a16e47d737d642e51240",
".git/objects/68/7e165181ebfee6d224fbe8afdd64c722b3f746": "b23cb6585566df101a187ce3fc545444",
".git/objects/9e/f22ebf174a131e99c8e8a52d2423c3a3e6b8ef": "23c70f5e2ebb85ebf47b5d6288402249",
".git/objects/04/c82a97593e7cd02d5c19be819e171f6082dcb2": "78be0c0c31921fe05264ed1a65f10d9e",
".git/objects/6a/186cfec4a26857d13d6e6e8ad55f93813fb0d2": "9b11aa82b671135d145deb0bf2fb4f0f",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/a8930809db03dd3453208bab7d109d54afb944": "9f869649fa3895b9ad15087d722e5cd5",
".git/objects/32/097c078075b321e84b2953a7b9a704ee1a9d0a": "efb21337199897c0652aaf88a0e3c9aa",
".git/objects/32/54471f21904e4355b8cb81f3eba3b7c92014b7": "3cfcc12a270eb55ffdcd1116b14fff0c",
".git/objects/35/f9328baf5be7335b3af13b1d9c57260ebd7c66": "1da36b328c60c92c63dd23949f4984ca",
".git/objects/69/75655fa2b4d11eac598f82c9c0058ee9d10ca8": "5aea4173b3a1ec615ea15c8f85047afe",
".git/objects/69/b3c199fc326da401ab76c2f3941bbdb2f48d1b": "4ab06d765bb07666f6a0b1a7d2601201",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/56/4857dadb4ebca2339066eed79bb03da74c928c": "134ea7c64b473d7aa67c62d5e9f9b1f7",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/3d/cd1cd024f82f56496b8b88507e785c30b01d20": "9166d0b945c894c1f3ca37b7dc1b5447",
".git/objects/3d/553aaf5774ae2a235e9adfc1f6ae6d47533839": "ff0b821b6c5cd759ef24322380402f3a",
".git/objects/3d/95a3eae37b1c94159e869a1db4972db8f44491": "ecd75881059ff7d3ac507ca57ece9ed3",
".git/objects/3d/8fb70dc461ebce7296478dcd62cb8c5f77c9b9": "b6b63a9453f4304d49691a6a0a9c83fd",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0b/d694c3f837313dec1aba56e2a25046433d201d": "e1aa1faf193f18f6b6d180c452de9c67",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/0e/339e42e3b04b15d050a3a2b9b8240f55a86562": "a2b5acccd986cc6642083cf7a95919fc",
".git/objects/5a/ba469c205b2b0e2ff88c97f0ba53a9ff62bc60": "a5ae28a5b36f5c3fcd28cd5b7f526506",
".git/objects/05/09a1ac2187f567d32d00411b2795f31af1bd59": "96a906d8ed67a5060fe409ba4b6b3676",
".git/objects/9d/c3ef4c4c98e53ebc68bddcf382c82371da856c": "449b5f54dc6cf470849dc5bcc585b349",
".git/objects/9d/f445e189b4ddeecafacfa58974f0e16ea80307": "21f2c255a0f1cb692947bdbc4d86c0fb",
".git/objects/9c/214e85f9cf58ceacf3ad2d4cb6a15fd52e7d4b": "3562f9a13571d547b4c04d80e24f7599",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ac/c114a7121471171f4d2588e138f7331bb8c182": "a27010b1a1a68653423c06fb96dced4d",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/bb/3698f8ec1759b08d2946958425aa8edf9b531d": "b53e8e9f69a2e83d255d5799027cafa2",
".git/objects/d7/6bb8172b1aeb188d9d42377492aeeaddf03e9f": "4be32b85e406f66a8c3389bc64307d1a",
".git/objects/d7/a00aaafec59529d4243faa5955f02b5d077615": "3ca50523c4550f22e22a0b3e831cca49",
".git/objects/d0/868661b2d1764d7be25a380240fbf354e860cd": "908225283ee757cc994c202add3c986a",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/da/77b07b24dd23cbe7b6392ee22f4d1abd9256aa": "c224fc6a81ede6b61780fb4a0804ca03",
".git/objects/b4/ea1bc6951c69f681cf25cd08c12ed056c292a2": "18716bfd2eb39670b117e73990f544c1",
".git/objects/b4/8b5ea8be5c4548c8b9c74b9f2ab74294c83218": "6d49ebb087fdba7b55860c997c5c5345",
".git/objects/bd/4cf996ec06c81505277463afc7cfbacc789a77": "7b789525c57c2f15da597a345bc0f9da",
".git/objects/bc/1af75d4f6af1320ba211314c054d8a9eb5ab42": "e4a4650422301d606b972baac99c9109",
".git/objects/ae/927eb0566ff1ec15538ab85dab8aec49d43e75": "04ffa8f6cfeb02dd2ac97076d02d5f50",
".git/objects/d8/395203683bbf8f38b3a43a015f2cddf3173244": "074817583b1be69c58205024a67293b7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/9a8ba8946a14a012225bb6a4ba80fb555fbea9": "6a1a60ab0379b42bcbe1a31c28998e6a",
".git/objects/c7/243af552c73395b22a6213607d79e1570d3a4f": "ccef2d49ddd60e86f94bac3815b42220",
".git/objects/c7/6de1cce4ba63dde879d395e6ca8d3d21c9ce28": "86f8bf92f474334ffdb4656870b8f102",
".git/objects/c7/32262974d485e9d43017dbc52dd7cb2407d95e": "eff913a3509e050692fc697635c16aba",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/e3/5531dd46460c07e573e3bb40eba64769251b94": "96bc32773caaaaaabc1b2ffefb133167",
".git/objects/ca/73357c27c8729f6064c6823388ab0377aa8ce4": "fb8a45636c77f371a7cb37baa88621c9",
".git/objects/ca/9af63cfc0137e07f7d44d7176c405f2091a750": "1799637fdc6c3bd5541ae33baf296f99",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/e4/99071e5828118ac9d6ee9ba0a06af961dbd1eb": "b5abc48e0465598ab2cded608666c91f",
".git/objects/fe/0ca2b4a90e501f576cdb27345dc77bb173f3cf": "824f6ea99fdc092381be0d37618544c1",
".git/objects/fe/055b0e1a2fcaf29b2d81ff7e657498d3c5932a": "f5cbdd5066e7dd21517f4f32c71e091c",
".git/objects/4e/bfcba0af8488c46555ea3d74f10d7d5182e8df": "9036b1270df7d251636d32959d58ce21",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/11/066f6ea32984d8c69f6577e7bd5184f1103105": "aa3c2679e4893131a7737ab52144033e",
".git/objects/7d/b21d7840df60ead2f24cfdf9cf21efd5632224": "83987b9d268b79653fa1df8cb63fac61",
".git/objects/7c/538d3fd6f843a61af7d8ee4dd3bc07656b4b39": "7d6660767ccc778b3baaae84a8bf0f4e",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/e89a6cd58bf731882e5dcc8fb62efcb2dd3883": "b0fea52e09e65cdc6c394ed7ad09c9c1",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/c99450e87bf981e76b7ccb8abfbd4320d6cd99": "084899d940ae2d2afe91836a0638fbbc",
".git/objects/87/9271482bb2b2f98dfd6051c56cd5f16d40a81c": "4dec72e76baec57f2951d9a5f7bb6e34",
".git/objects/87/bc1e2cc37aadf758904cbb15e787c20e5677ab": "3e83179579f27012344e9bdc17fbc531",
".git/objects/80/13528913ec13d9e7af113594c640ea1643492b": "0d74a384188e366a7d0aa6d5619fc008",
".git/objects/74/86637fc01791c30ef2b65d27d63b99e1a25149": "d5001b4de4c202e5b313428df44059d8",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/1a/4b2430e55a6ed8777749b6fbf1e40ceced649a": "5f91d752f71b227ca2be3a8bc0ad40b1",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/8a/f83e6603e251ac5a2ada17cc97f6cf52f42c22": "e6a111daaf76381649e2a8ab56f2215d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/73157f193950a4d8e1b12fc478491572b768ff": "742ba4aa079055d322282bc17e731c4e",
".git/objects/26/f9e0d9e418e4f3805e974755d435212b54830e": "4b61949ff335c1a571e5e8ae79973869",
".git/objects/21/9290a0a3c069e531087f7b02084e38927755df": "9f1f59d0d8ff1ef6507d5bc0b4748949",
".git/objects/21/e8a00cb9ab3c93ec1a40889f57ec67e9014f1b": "d4b0e37dacf504170973536b21e424b1",
".git/objects/75/7e6e7985fc9f176e17812c47e1684c983cbeb9": "02689f922d8d0a6c2b196deb10b669fb",
".git/objects/81/164c7abdcda9ecd842bbb3ffa43db1bce935ca": "8d7c614f5502df0436f293055f066c24",
".git/objects/2f/f1fddbe9f07e6fcd34ad9821bd62fcd020f3fc": "8a074ae649983ffb3729d749f3cbff40",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/9f/59f8271b21ae0a2b7b26f14515c1011ed8d80b": "f93b97075c236c01fc3d4bd8b81c7601",
".git/objects/6b/30b6a3251c4fa5f7a3bd1b9aae685060310164": "25e30039358caf55f664d0d53fe73fce",
".git/objects/6b/9c3aa2b6ebc2ae3868cca50dd3080d1abf2312": "86711f3e0dacd722afb3fdaacb501bd0",
".git/objects/38/3d9c490e39685a7d4e2c83a2bb88dad1065069": "87bd9ccb4adfa020ab226860a0699b9f",
".git/objects/5d/d4313f9454018894864fb35cd26829351abd1c": "8a34ca909910b89515eab6a1a697dfd9",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/5d/c420ff82775000db8b72cfedcc6d273d930b04": "5ed725068627f34888b55432a23b5f5e",
".git/objects/31/1e47951ede442985ce2cc3ece91f7be3a95163": "6fbcbb80c428958c9a055e27db09aba7",
".git/objects/31/9a59374f64677ae6dc90e97d16592ba5fff123": "71be31a8a1acf83955d5c8691f7bb9c5",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/91/e6c3ab108ae458262950c48a7718f503060348": "baf1d140eab96ce155a9fa0fc5f6cc79",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/54/11eccc89f1928fbc99384458d48fe8f0a985b0": "fcf528a5b8d25fa1ff25c5d2f1e23767",
".git/objects/30/0b6a556a2946461f5e62be73fdb2bf8b3c7af9": "d3227dc6d3bc2f2fca7c743559df8ff3",
".git/objects/5b/b671442df6f1df79dad25c7d2572d430ebf10e": "9217083a2c69a69fc6d5257f0a8e867a",
".git/objects/37/0e734c3a2392146c1f9ea0c4214719bc100821": "345d0145c697d3da709edeffaf0523f5",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/6d/2d97bbdb13be6293116bd2d92a377ec26b37ad": "ef245d0e728706bfec03adb540755686",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/06/17266b8e5a28ad2ab96aca64d7b9a33f4acf24": "d685fa51b168a89dfcfd3751e87cb382",
".git/objects/39/c392c109b3ec487e9af3bdd638279611f71fdc": "10f6896a4246202bc9b22ca67f16ae09",
".git/objects/39/f67ffe3e6e20da8630a83ca68c7cab590ea144": "16f634a03cb0ca91f497c18d6818e86c",
".git/objects/55/215bc2ee76f8ca83136fa0e578ba56bc65a458": "438c47887468e608a3d7834fe60cdf48",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/97/87be3536db19a0acb7b4dbb3f9cd8146040e7d": "d3d1e09025f5bf4e40a99aca80b910b3",
".git/objects/63/71603360ee4bcf669ccee7fa6f9fd632efe74d": "3b990323416762c847b70fe77717ffcb",
".git/objects/0f/f04639537e7ea84ec6fb35560ba02d0a46f581": "f6a4ae10a92967b12bf719aec6751e76",
".git/objects/0a/a9f807b944c5d6193427f1d8e73061b9383e91": "f0735e0749e2ec20f0207b2530bf7946",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/bf/6cba21933b10acebc6c117fe70faea88abc2e7": "966091c02f71991010966e36a0e2e538",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/dd/249ced37e34dbf8836551f87a7139f1dc4f376": "4ccf959a6d8168ea787cb5eedfcf9bd3",
".git/objects/dd/b3ee34440ca507bc63500ad0aef382a6a437bd": "b53529a4eebb812a1000bcdacd10e5d8",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/dd/a93ed817591e4ac8eb6fafd4a5bfc8be15c103": "a06602b7bdb88f01426b5caf6be40922",
".git/objects/d5/0246260b178b7bcc84732f353c93c5abc6da6d": "fe962c4d886fd1bbe91b75d7b5f0d72e",
".git/objects/af/5ed5a4344728afe9bf3e71940369bc3d5fd7f5": "4b9f5df479a390f03c4b768475220c8c",
".git/objects/db/4504f05a2d9ed04cf5cf376143a872ef03663f": "6b32ce5a91bf62a7e0c89f484270d80a",
".git/objects/de/1cbc279c2f6d285b30b09272b8a51600f3bf2b": "895c7d8f8e49e21483be43d2e2a4533a",
".git/objects/a6/989a413e429786264e83ca358567a93082db54": "932ff688eaf7f4e3460a218b174e64f6",
".git/objects/a6/a790c0a867b401e9be9d04bb3f0b5add41fc80": "0b9f3f93dcf8c37887278bb593e2a589",
".git/objects/a6/0e5280f92d7843e379c65d151430e5bb063c69": "dde0086a4b50a978c33dfcef4c730a49",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/3278b826881c70514ab79db5fe0e25b0e67b01": "63f5028c86cecfb73423a9b7a1f649dc",
".git/objects/f9/833bde7389a41080f7fa07d2ae1c474d0630fa": "7a13ea6ce2433ece757abf50db500d44",
".git/objects/f7/823e00ba7be7eaded4b12419260a065b0ed48e": "287eeebabb4f6df1469c44ea6d396caa",
".git/objects/e8/a5852dd8189afdd10eaf99e96c1bd67a913ab8": "881857f90beaa6841082b08574e78534",
".git/objects/c5/5df01d0b10dbba19672843186e73b3ba488e98": "1e13bd359db4e14a09525c0a595c0cd7",
".git/objects/c5/b6635c92e1370edfb902f461372ca8fd28f3c2": "52a7deb5cc96595cd043e26f694e881d",
".git/objects/c5/1b86e978d4d01a455ace14e56e99840a1b6c62": "a20efd294c7a38f82e1aa1a279a35d49",
".git/objects/f6/4ec89ea6879a68778e3e9ea70127904e9c643d": "98890c41487359401a1bfc976114abd2",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/f1/1cfd5a1cfc3248558ef85b9bbb631f63233f4b": "68367fe3be81f063684e9077f64ca944",
".git/objects/e7/ac5cf575434e11013c4e44bf871caef5bb59ef": "b636d608e53d616ba996ffd422ea787b",
".git/objects/e7/7ddde786d4c58ac715199fe41ee6d75dfedf1d": "aced298f338fb1392f24dfa68ce0c70d",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/ce/52aaa4bde71d95f76b6a6d8bc87d4883b36c19": "8b0e86ce41392345be6905239cadb28b",
".git/objects/e0/6a7f2318bfb210c4c25e01ccf3f7137f03d15e": "8c9ecafe820e0c6b4b0781ef0e7c4848",
".git/objects/79/809fd3563a43c68d82e26dfed34865a1f1b901": "ee4dd96e23261dabc193ffeb9f6ce1e9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/83/31e02f8911eacddeb9b4c20aaa239468ef397e": "5aab9c01b7858fddfd9b2564e98538cb",
".git/objects/48/e00ad260de0248f5589d3943859ec3d27f9351": "c5a20ddb015ec613123f8acef48257dd",
".git/objects/1e/dceb5256331773a9bb626bf106d61d10ce4f81": "1ab8a7d6b5b17a9eaef9d0d89743645c",
".git/objects/84/9a504ab187bd98fca54aa879f1aa5b463117c6": "12777391862333ae8b2646b94b2b7b64",
".git/objects/4a/f53550c36866d5d73e7a629550849bada81504": "7c8f30fb94931f2ec83fee20ce918ec1",
".git/objects/23/b644830293498ea957273cd37f433f0cfe46cb": "4d4cc09afd33fd1225857e10477d9a37",
".git/objects/8d/ec7a3a78a17c0bacada3112d179a908c2a8716": "9fc6ce0245d922e281006bb1bf3f3fb2",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/06ba4152ca1b226b117c679667915cfd987e3a": "e2b05123c24c25ce2f8a11a6d011db4a",
".git/objects/1d/d44fc1efe3448a2e0655a2ecb18a9fe57d6de7": "1b72f048d2bb47817ff199b3c114b60d",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/49/7a2d5d0aa0c6175abe4572c0685fcbb504cd5c": "ce65a22058fede6b490820758e66fe50",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/40/0277a80dfef3de948bdaa76a9307e000c0e454": "5949d780d0fc89075f7517cc6d3b9f07",
".git/objects/40/cedde8d37ed908a65f44e767d567adf96d3e5b": "6b715cb41a07c7d16fb42fd2636881a7",
".git/objects/2e/092024c8bfac06917db1d6ae5adce3744d1e36": "1f8772a0ca5d476fdf6c47b9c467ad30",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/47/f7d763004ce668dfb1cb8baff62738dc1b5245": "2b6919bdbf818ef4d5ff6ccf4b90fe52",
".git/objects/78/2c2db5f414e5b67af812c1bbca91336a26f1bc": "e7cbb3934312d943bd438ea225df7c59",
".git/objects/8b/eb4d53f4c456fcefc1ec2aa0b5c1ead2211395": "32b672d6f32d6b3ef00f47cf414884db",
".git/objects/7a/2840ec4bddba9c66526754ce7dc7a251f31091": "a085df7547ace88e4f82dc758c37de95",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1fae077da5cd2aebe2717b89b5a811aa",
".git/logs/refs/heads/main": "c3be771ec40c41db9e795df2d58a7292",
".git/logs/refs/remotes/origin/main": "640daa9fe53837ebf007b8f29c2b62c2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3175ca9ad493abd41516b2dc0e4fee15",
".git/refs/remotes/origin/main": "3175ca9ad493abd41516b2dc0e4fee15",
".git/index": "e3ec7c2ee8a415fcf15675d0334dbcf5",
".git/COMMIT_EDITMSG": "f01b8f98874d1f47613b3cf7393e125f",
".git/FETCH_HEAD": "42a05b4a893d6e7700be4543948261a4",
"assets/AssetManifest.json": "7bddc91f594196605b170406077226e6",
"assets/NOTICES": "ae1aeb8d84d938c5becba9b65259be53",
"assets/FontManifest.json": "8265427601fa6fccf163d8b72f6dd5f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/slimy_card/assets/flare/topSlime.flr": "9f381ee39c22b624c805f536b39171a6",
"assets/packages/slimy_card/assets/flare/bottomSlime.flr": "3a26ed39d3a9a9956105e9e6e4d5ad43",
"assets/fonts/Kollektif.ttf": "4d49be6e42d18464b230d87d1fab175a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/line-pink.png": "9834625b2aaf77b64dde34401f6afb85",
"assets/assets/images/contact/phone-pink.png": "0c95da376dd27f352e93ad5305a8f86f",
"assets/assets/images/contact/email-pink.png": "b5b2bf60950413c91f8831bc016e776c",
"assets/assets/images/contact/linkedin-pink.png": "7fb9483e744d8aa2c569391b7b535977",
"assets/assets/images/web-black.png": "7d651bc2b71d03f9ce6babe32a3b5fa9",
"assets/assets/images/mashd3v.png": "2525a129611ea1587422e289bac65ca2",
"assets/assets/images/line-white.png": "01c6814cf227d5f25b664eea097d5c0d",
"assets/assets/images/github-pink.png": "f1250e45f2329b2f007bcfe7f731e6b4",
"assets/assets/images/github-white.png": "ba4e5ce7693b828564e07a22de76f74c",
"assets/assets/images/projects/bmi.png": "3d755d13fa12424e08bd39d2fb18f33a",
"assets/assets/images/projects/queues-mobile.png": "ad94aac6f4b9cb38449dc114dfe0b4ed",
"assets/assets/images/projects/portfolio-mobile.png": "6203b4128ea6408c9abc954f93b4a35d",
"assets/assets/images/projects/project-purchase-and-acquisition.png": "e63067b5b31230a147d4f6c39a09676a",
"assets/assets/images/projects/purchase-and-acquisition.png": "cdb46adeba113c28c8f673c4e6520ce4",
"assets/assets/images/projects/project-socket-chat.png": "f49c528e33c58fcfac5567a576a22600",
"assets/assets/images/projects/NLP-library.png": "14035808374a2679e73d060c66c2320d",
"assets/assets/images/projects/socket-chat.png": "61855c2b73649e75ec1f1b76defee8ed",
"assets/assets/images/projects/queues.png": "6bc83ad098aff5ed73b504bb1df046be",
"assets/assets/images/projects/purchase-and-acquisition-mobile.png": "21bab87c00d094d4901a7e38e9a5e83f",
"assets/assets/images/projects/portfolio.png": "4a647a43ea8edd59387f6ab490e05e5c",
"assets/assets/images/projects/socket-chat-mobile.png": "9b4a3172e15384c9164a4157b59b49fd",
"assets/assets/images/projects/project-portafolio.png": "4c44679430fb0b0ec220bf76ae48cfe6",
"assets/assets/images/projects/bmi-mobile.png": "86dc01e9ee6e7b6f4ae2f5ee9c31bc25",
"assets/assets/images/projects/project-queues.png": "c167466870c622115abd2df9e9ab925c",
"assets/assets/images/shapes/shape_2.png": "b0113880ddd6ee701b9e99221f4e1486",
"assets/assets/images/shapes/shape_3.png": "f2285f4c35f7c4bf2dac0ad6e1b3d805",
"assets/assets/images/shapes/shape_1.png": "9f6701d214bb8c7fc8dcd5d3dc93974c",
"assets/assets/images/about/study.png": "190aa44f3437eb1a7955adc17e2dd60d",
"assets/assets/images/web-pink.png": "fd9c3d909c42d7b5f5e6d5e123cf79c7",
"assets/assets/images/logo.png": "5140ed164760f7e4df973db44edbf8d8",
"assets/assets/images/web-white.png": "0a13d0035086cf9c83f8f74bbb8a5247",
"assets/assets/images/mashd3v.gif": "dc470d3095ef7b8072ed98c72e8cd40c",
"assets/assets/images/line-black.png": "edb6c70946ddfd8943346022dc827fde",
"assets/assets/images/github-black.png": "dbe8e954d9d08cd30cb999033567479b",
"assets/assets/images/skills/css3-white.png": "8f339e22205742ce4d32ee98c2f30567",
"assets/assets/images/skills/flutter-white.png": "3aca1c4dc955501e6c461b9415f881b6",
"assets/assets/images/skills/django-original.png": "f1ca318a3dc160204de0e4a244024286",
"assets/assets/images/skills/html5-black.png": "4a47c030d79d6729877d4c8403860e96",
"assets/assets/images/skills/mongodb-white.png": "f4c3534d8447548ba3387b051373e73d",
"assets/assets/images/skills/angular-white.png": "e53674c15269c8d13ef1277d6b157742",
"assets/assets/images/skills/javascript-white.png": "3086896a4f90c0520823c633a6e6bdf3",
"assets/assets/images/skills/python.png": "6f1f0ca909720417738853f7e2acaa2c",
"assets/assets/images/skills/mongodb-original.png": "913a5af3d5cf63b3dc3852b5de23bde5",
"assets/assets/images/skills/mysql-black.png": "daab4b48e8729c7e69e1d71fc1b35f46",
"assets/assets/images/skills/django-black.png": "c63659de859d5ab9d4678ebabe53a852",
"assets/assets/images/skills/nodejs-black.png": "5ba117db9e81e58391839eaec129549d",
"assets/assets/images/skills/flutter.png": "20d06e9c144294730c9c355b22e5feee",
"assets/assets/images/skills/angular-pink.png": "2ce496d29d780d1723abcb8ad9e1b33d",
"assets/assets/images/skills/angular.png": "c09a1a022e5df72ada77c19b97c415f5",
"assets/assets/images/skills/python-black.png": "4cb5b7b74fc33c431fe0c6040884e89d",
"assets/assets/images/skills/mongodb-pink.png": "5307dda8524cc683872212a7f044df7a",
"assets/assets/images/skills/flutter-pink.png": "2494941d40f927eafe0450f4ad9479ff",
"assets/assets/images/skills/javascript.png": "1199607421b268ef28f15c1b11e103f9",
"assets/assets/images/skills/django-pink.png": "9948c62d72c645d380d4e816673a5ebf",
"assets/assets/images/skills/html5-pink.png": "5685dcf336f254c9c85a0970ffb667f0",
"assets/assets/images/skills/javascript-pink.png": "1ed842f81357381e6822cd1903b50429",
"assets/assets/images/skills/angular-original.png": "6fb632dea49595a0058306eb5190f315",
"assets/assets/images/skills/mysql-pink.png": "3a9482482d00286897632c6ce6673611",
"assets/assets/images/skills/flutter-black.png": "97427922835612a2db065400943fcf0a",
"assets/assets/images/skills/css3-black.png": "e13fbd208cc9e0e8c7067e4ce33f61cf",
"assets/assets/images/skills/css3-pink.png": "b7b27e1ca658e6e68083849b4f9d984b",
"assets/assets/images/skills/nodejs-pink.png": "9c0eac01d05e1ef90d1710f9536c033a",
"assets/assets/images/skills/css3-original.png": "bc733319dc53939740596e02affb339c",
"assets/assets/images/skills/python-pink.png": "ef4264ec3bca8fc26659306352f5ca07",
"assets/assets/images/skills/html5-white.png": "5327713deeb5901d3236ae50c5c1c854",
"assets/assets/images/skills/mysql.png": "2d40bbe3739a738ec75129aa75f84b16",
"assets/assets/images/skills/django.png": "653e1681c1714470b4bc40ffd4d52924",
"assets/assets/images/skills/css3.png": "14200b8849833ef333d54e880fe7ed1a",
"assets/assets/images/skills/mongodb-black.png": "f83150761e625943ad33a9a0535c6ff0",
"assets/assets/images/skills/javascript-black.png": "01eca95ff88c6833b5470135d77e4ab4",
"assets/assets/images/skills/angular-black.png": "b317a4d789d58725d77ca7a7cfdb4d48",
"assets/assets/images/skills/mysql-white.png": "ad254ed8c5e0ce8700248ee6530420d3",
"assets/assets/images/skills/nodejs-white.png": "b00a614c70c839b24915d7b963ae82fb",
"assets/assets/images/skills/django-white.png": "f0dc38cf797d0d1a462b40e4a50022f4",
"assets/assets/images/skills/html5-original.png": "4778ef6d590564ef66c2229fa17bf6ee",
"assets/assets/images/skills/nodejs-original.png": "ef3dbcf4631c859e613f96db5f61ff24",
"assets/assets/images/skills/python-white.png": "5b902508ce138651a6d65ade07fb9200",
"assets/assets/images/skills/flutter-original.png": "61ddb3551bbd7c9e56c6a03b8414cdea",
"assets/assets/images/skills/python-original.png": "9ea1f48ab8f1b7e73c7c19d9c2554ab0",
"assets/assets/images/skills/javascript-original.png": "f055e674e02569f9c87b94d2da6769eb",
"assets/assets/images/skills/mysql-original.png": "07477c5cce3c12e77ac0d4c39db3418f",
"assets/assets/images/skills/mongodb.png": "6826dfca91e594b1eb2bf8bb9f33c894",
"assets/assets/images/skills/html5.png": "7d70d2c23e9b284d8fda1d5b6316b658",
"assets/assets/images/skills/nodejs.png": "f4803b2856dcd8aae1744acd16b3a41f",
"assets/assets/images/apps/bmi.png": "15c7677b142ac110504e43c5176833b1",
"assets/assets/images/mash.png": "cd470d3f13c75f841a7860032a95779f",
"assets/assets/images/bg.jpg": "78ff2b2467eda3e528c1e089427d319f",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
