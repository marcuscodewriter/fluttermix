'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d2246b339f7c0221b91105ba404036e4",
"version.json": "4e676d57be1126187ffe3498e0061fc1",
"index.html": "e5945ae55ee0f052bb1b0124f54601d2",
"/": "e5945ae55ee0f052bb1b0124f54601d2",
"main.dart.js": "cab9a5ced1a9761a1cb411b1932df14e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "e8287e52ff2d45cbef2b7750ec2a65d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb4f48f155243caebe6b9ee17b3c4909",
".git/config": "9974872d0478e6844aa7e3a9d35b5ce6",
".git/objects/61/ee2ab58b308f2ab14343041740943eb3291963": "4714f2935e6fe4ffb5da8d2dcaa8298f",
".git/objects/0d/559e255d2450896f8d6c9e8bc9404e370b93ff": "bec685ccd0c4ef07171881b8cc2d031d",
".git/objects/95/dbddc22cfd0f1c75366d45cf50b33ed3519c97": "9400c4ddee60b8f8859cbb9221d10e60",
".git/objects/3e/b2582dd454dedf76b1af0cff0537b4261b3aea": "a1783a7098bb7476544bf4525fbec820",
".git/objects/3e/be26da298dc2be56004e56df77a6f5377066b5": "d5098c8ab70377a41c3c0c00396a2096",
".git/objects/57/82cedeab2f7758a16d372dbe14d9c42f04f7e5": "65bf27e4da80dd8feed7d232f86a2dc0",
".git/objects/6f/5ee41625bd9cd6a42b88deadeefe754c7eadc0": "76ae0ea543d0f2e4be89dc00a6fbe58e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/b8af85fc73dfba15b99024dd8b0acf8389d7a5": "9241ed3522764a6b54723baccfb0abc6",
".git/objects/32/5b5e5168e8fb55044a27fe539a9590470551c1": "5b33771338cbccc5557c6ecf03e3310f",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5a/eed643520d724bc2fb45de3570054e54c8eebe": "e8ddb517ffd40ee006203f5586027cc2",
".git/objects/5a/2e5882b4797698bf0321855a5ff1d7bb84805f": "3e820b71667cee109392ef56d0aa44d9",
".git/objects/5f/87a6cecae20e361e3e8faa4c5a27641d23fc87": "aba9e9a53c1b3f01a65aebe3c7ac11dc",
".git/objects/b5/77ccfdd750f98ce857c59aea03f931c5bc36c9": "12ae952ca6b9c3918ae25f747a88d3a0",
".git/objects/ad/bf6f57fbe2fc39d4e92c479558a037683f6ad6": "8fb70d51aa245f432cd3aceec29b3375",
".git/objects/b3/c091ab896824c9cf91befe5397350cf36bd5a3": "0375b4fb45229e7161f0deb9cb5d2534",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/24a7cdb31caba530374a3ee0f5bbb804f2bbb0": "d8e62226b69f3ae9112ce052ac4d5f46",
".git/objects/df/8350a24cfb39f6e399610ab77b0f34bc71a617": "280bdefba7f97a6db8c4675deac84ac3",
".git/objects/b4/d088d1efc1548d937fd7c503cf73b28e18eaa2": "872f198044e24030b22c38a2957de9c8",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/917c5bb744870ac4cefc280f20831cb113d326": "39083570eb1492974e1f7c80fd2f2bec",
".git/objects/a5/8fe9a6ffe0bbd480fe6c56e777210b2705420e": "77e1f59f3a0dbe771b4619199889b1b4",
".git/objects/d1/638bae390524d73e40816c503d2afc9ea3d36a": "70987a078af4ff59528cd84df63ee52f",
".git/objects/d1/57d6cd0c4039702028736589c63a15d9c183a7": "746dd8ac99bc3506eae05afecc5262b7",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/08c13c6e54d5126cd7baf12ca63a1d6985cc97": "a6e2629e95d7d3ae28bd8b234c596adf",
".git/objects/e2/4100f4cc10576936097055e275e292b5a34232": "6ec1d3357cfb25b75f22bd2a4937d147",
".git/objects/e2/c73bc0297ffcebf3b317263e659e6575b3a01f": "b8819475caa9ce4186390508e2684178",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/893eb987cf83ac7f54284d74f7b71f7503601a": "3c56fd5788b455ac52f39ef3b7fafd89",
".git/objects/fd/b2957c316aae9c7da9193bdb5d648afc6f329c": "5bb9a33958bbd4c9ef416a88c72f05d9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/e3/7ee195dff1ea14e8722d50fa545d3375e0b58c": "1ca262cc99faa8519c542fdcd737d12f",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/78739813da6e0df6b3e17f949379b41526f650": "729e6690e0efbbbcc31e4f543b312bfa",
".git/objects/fb/1f74debc8b992b1b0e5e639276192814258a1f": "fab5b405e0fe8e07d457cfc35c26d2c1",
".git/objects/c6/7fa51513b73ed81d22b675bbb2c4c3dd2ab1db": "826e11b9058ba31902541f505a8af7b8",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/9211a377222ab8577bb579085be1d1663c0a38": "4f7ed8871b1dbe360aa3e771671cabd6",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7d/c95628949de8e25656188bc55aa0410699efc4": "f2f4e4a6e68754d14bec7aa5e9a68df5",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/9afca5da69899aef83559b5ef6eb4d7b1c6a0b": "ed2648915c95b84349488d1dea26ed14",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/10/7b0f84d9773318fe914fd24234b3a3f976186c": "f64f81027d7a2e6eac2a70cb0c63bcb8",
".git/objects/26/962d6a00b933893b72ed52f30c25dfd79a03f4": "d4531f6f97e9f967ae6a4349807f6d46",
".git/objects/72/f4ed8e96a3bea70e7e13da56c565d2429234ee": "f6ec6d653c321f25b0561f959800dba5",
".git/objects/44/bd4fa9b46e2c8ffb35896f351a14391ad8c136": "353f5c89c8caa1685df1c4a458717741",
".git/objects/44/644868d7900c0697339632e86b94b8e7e58c63": "e11ebcc9a9d719dbfd85ce90c4e7466e",
".git/objects/2a/fcd08efdcd530ddbf39e95dbf3b2c07a121cd4": "983aa2ee225dccae321c17bc66fbb070",
".git/objects/2f/99a27504bb362d75b2aa09e63d50b281732f01": "589f2368406a138e01c3caac78e3ef2f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/d0fbd046afdad51f7acdb9b840306838930f3b": "90d30f63fdcc9796980582b3ce3ec589",
".git/objects/38/7d8fc48592251f09b9fad7a559adb0cba1e704": "dd6337cc5ee8066f88d7a181c60d5a59",
".git/objects/6e/32d8e85e70872d5f6c6665bb6da29c54d89bef": "80ca490548aef7b3463efe19cfe11292",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/96/2e528abc29db777462691158b7d1b12f4c1b82": "a6bd48c715c7d4bf3f2981b23e6ba9c7",
".git/objects/96/52e2f342c1e99b90605268f9aad7965e117ad6": "733f796083aaa23f1c81bec8fd0e76c5",
".git/objects/6d/bb0ea060c07bda1e472be710f075ffa1539bc3": "3f5a8ac2985eeeab2b3c30c4eb2fd751",
".git/objects/6d/6d17ae8c23421ee947b4934fb4b9ec3e31d001": "b570faa1bc7eb2eef8024e996f320289",
".git/objects/6d/acfc597476e8b703104b17f045ebb959048b4d": "07921fb01e7b6f9dd028da14d8f81e65",
".git/objects/6c/e9ead7082f34981f7c8985d01bdd0837187986": "b20286272e6824540ac725feded2db98",
".git/objects/39/59e68c3f455b1b6f98ea6f75b3e48917addbe0": "6d46ddaf5d18bd81fafb690e5de2626e",
".git/objects/52/4dd913231f24c18b989e9e6a30efd9e09f7a05": "84640b35ba6ce696bbdf8f865b760353",
".git/objects/0f/37f8c2cebd5633df5606180965ae363053bb2b": "9c93a457d7c5ece5e770151068a8bc0e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/cacce547669055bf7d25a39c31dc730568c25a": "3ec070dae6e26230e8af76068713cdc5",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/d6f251b1d4807e91935115c7d9559c18e70971": "5e07face46e848881bbd621ea4d1bb0a",
".git/objects/a7/6dfb4d13d1e60124ac9c2c675415e73b11e151": "321e5a5567573c3d771919f7b6aafb97",
".git/objects/b8/381ff8eb636097a78ed098da0d97595055823a": "dfbe9871c0e8de308020b7f72a711d2d",
".git/objects/b1/e48772816fa79e128d183bdebe86eca62ca83e": "8592a513ec79244fa2f11e75e9b27eb6",
".git/objects/dd/2d5b41c6d7caf57783f9dec61a75a9f018c156": "439ebbef2df8fa80e9b14585b0ce6f7e",
".git/objects/dd/f41f28651876d699f306e9a2918ba82ebb9c05": "e264d3ecddea92a44c5c2006bc73c6e4",
".git/objects/b6/84cb130fdbe9ee426fe354640540d2d28f75b5": "6f6d15c2a692a65694f2b8228760183e",
".git/objects/b6/95276579c7ae1afd0cb80b36960086da7fe063": "c1a2c496eae93544c5fdd5bda14df4bf",
".git/objects/a9/288b25ee85a23bc532a9132bf608fb97e142b5": "4717879801552453cf625f2434633c9d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/a81a3af9161bf243757509a624774eb9005c60": "3ea15ecb68f11f531b60143252c89448",
".git/objects/a8/2eae9152a46312ab1c31b742d2986cc3ab3e55": "3b795b66ba2d5cc317b7fa9a53f2de7a",
".git/objects/de/33c9084610884737532ce60515d24ffdd18dd3": "b9b9e347f0557d74189a5aaa0170301e",
".git/objects/b0/d9c7bbe23d5238b34dd2245a750d665491bb1d": "db4d80204f320d7f0e6e015b648c90c2",
".git/objects/b0/165d0ebc03cee8d27759f90468aa3b5e4ab2a7": "ebbf09fc37f9ff288505b2e2dd5912c2",
".git/objects/a6/ad7f675eec64ee6c3cfa68aa5987d8d08463e3": "c124e6ec5064df8a48c302bf71ea8435",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/fa49704b36742b58429b3d2b9c2d663ec379ee": "87c3988279ead44256508b1fda6d1e31",
".git/objects/f0/ab02e597a668203a3ad76c5f272caedbe65f4d": "98ebccaa5b51fa579b644f189784eb1d",
".git/objects/f0/09409b24308204d9b3582ea53b4ac8e3466291": "232618526da549f1b0792616ff172354",
".git/objects/c2/43ede018b24be79fca17f7170fd54aebbd2c44": "605a9a4934d835e296da5eea5aece91b",
".git/objects/f1/0661e7df295dd31d3622b49c887308b566f563": "f859ff2af057aaeba9827f906a738f1b",
".git/objects/f1/dc76bd894eab6b1689003537132ede16e2f18c": "684a13f6060dcad13d0e036bbf5085e8",
".git/objects/f1/dd69ba1fefc354ce0edb9995969b10269cf93a": "4eff40a7d4af1b525058811e7897263a",
".git/objects/e7/4f1c412da52cb03aeff5ef5fc592245575ccbc": "b513af1c5579c05e3db3fc1beaf4b413",
".git/objects/f8/0a13f5390976d2db160d96bdebba75a6ded8e4": "a0a6868221e840a34c160f3574da35b9",
".git/objects/f8/3792e0528ff980f3a29745627699c6268449b1": "08e6152b6fd963c49494f28413b7af0c",
".git/objects/f8/0f26af8096fd0c10ce034411a8f6611f311ee0": "93e1c52e651ec78414d61b465ccfeaa6",
".git/objects/ce/e0f86fe4de759fbbc293fa2da2a649945b3ee2": "d583425555b6bc81728b17e95285a866",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/2bc6945d6242f01d2d6d5a3fd03a8c04aef213": "89688fd62945a39cd94b63c3e2dc25a0",
".git/objects/41/2d916709f3d0d5a2d94713708a56cdd8e70150": "240d4fc4dcc5f6df313bb58f365bdb56",
".git/objects/1b/ffbb69decb755007a90997e16f4fb64d351509": "4adf80e1decab0abea1015ce60d5caf9",
".git/objects/48/0c745b98bc6aa82f57c77d15858a4a4d57e910": "00c04d2f929bbc1505831170e5dfc5bb",
".git/objects/4a/fc953cbc8905554753064e4c505b2ce315bdcf": "ba6cfcb545cdd751fa060e6a51e3a48c",
".git/objects/8d/e556f7c841267c9c54e4cef330539ec40d234d": "c146f2cc9fbfd9a15edaebf4a93a5316",
".git/objects/12/989df96239a5ca4daad25cd1a2c331857fb1c2": "55eb6e1b5a005c682cc68b8ddf576949",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/78/f937b110aefffc04c0cafaba57e5c007117a60": "a0016e437b3d074401df43db1e0f90d7",
".git/objects/7a/96cfeff0e1345e6836dd182328f5e2e87a2db2": "4632b8fd679a9330b1dfbe07b7b4bfb1",
".git/objects/14/8daa32f81c8200aecf94271c7fe09188874667": "74499ff8dc1e20e7a4b66c416865d931",
".git/objects/22/bea3f39807baf6d5d9cf4033398418419ff420": "02829f909e4d3319c78fa2d694c2752d",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e245a88298c8fe84998edca5e1aab90e",
".git/logs/refs/heads/main": "209e5b9deab7e066e3791f3f8a1fb913",
".git/logs/refs/remotes/origin/main": "054ae6ade97d41d3c3c62fe0584f2a9a",
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
".git/refs/heads/main": "3d82bc234d1b134a414167241e180bd8",
".git/refs/remotes/origin/main": "3d82bc234d1b134a414167241e180bd8",
".git/index": "153f2e26e2fdc553ee1262d31c5a2348",
".git/COMMIT_EDITMSG": "1264c43ad670f9fd97f56b35d63498fd",
"assets/images/logo.png": "c736c7c7af3142f5439cbeddb56b350c",
"assets/AssetManifest.json": "f7e13a39bd38102a01324ac67b1f33a7",
"assets/NOTICES": "c343bc7a1a7c1d684e945a5521459c6e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "dfdf14a0499eb4247f3ff8381de2f03a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a8d3ea4c4ab5c760af946a5c45536fda",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
