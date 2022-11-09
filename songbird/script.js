/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/db.json":
/*!****************************!*\
  !*** ./src/assets/db.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":17,\"name\":\"Storm Spirit\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/storm_spirit.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/storm_spirit.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/5/53/Vo_stormspirit_ss_rare_03.mp3\",\"descr\":\"Storm Spirit is literally a force of nature--the wild power of wind and weather, bottled in human form. And a boisterous, jovial, irrepressible form it is! As jolly as a favorite uncle, he injects every scene with crackling energy. But it was not always thus, and there was tragedy in his creation. Generations ago, in the plains beyond the Wailing Mountains, a good people lay starving in drought and famine. A simple elementalist, Thunderkeg by name, used a forbidden spell to summon the spirit of the storm, asking for rain. Enraged at this mortal’s presumption, the Storm Celestial known as Raijin lay waste to the land, scouring it bare with winds and flood. Thunderkeg was no match for the Celestial--at least until he cast a suicidal spell that forged their fates into one: he captured the Celestial in the cage of his own body. Trapped together, Thunderkeg's boundless good humor fused with Raijin's crazed energy, creating the jovial Raijin Thunderkeg, a Celestial who walks the world in physical form.\",\"descrRu\":\"Райдзин Громокег — сила природы в самом буквальном смысле: это буйная энергия ветра и непогоды, заключённая в человеческом обличье. Как же он неистов, неудержим и задорен! Весёлый, словно любимый дядюшка, Райдзин заряжает всё вокруг своей искрящейся энергией. Но не всегда всё было именно так: начало его жизни положила трагедия. Много поколений назад, на плато за Скулящими горами, добрые люди страдали от голода и засухи. Обычный маг стихий Громокег запретным заклинанием призвал духа бури, умоляя его о дожде. Разгневанный дерзостью смертного, небесный Райдзин обрушил на землю потопы и ураганы. Громокег не мог противостоять духу, пока не произнёс самоубийственное заклятье, сковавшее их судьбы: он запер небесного духа в клетке собственного тела. С тех пор громогласный Райдзин и задорный Громокег навсегда стали жизнерадостным небожителем, ступающим по земле — и имя ему Райдзин Громокег.\",\"line\":\"Mid Lane\",\"lineRu\":\"Центральная линия\",\"phrase\":\"Everyone complains about the weather…well, I'm doing something about it!\"},{\"id\":34,\"name\":\"Tinker\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tinker.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tinker.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/2/26/Vo_tinker_tink_kill_05.mp3\",\"descr\":\"Boush the Tinker's diminutive race is known for its intelligence, its cunning, and its prickly relationship with magic. As a matter of pride, they survive by their wits, and use only those powers of nature that may be unlocked through rational methodologies. Even this forbearance has led to a great deal of trouble, as Boush can attest. Once a key investigator of natural law, Boush the Tinker led a vast intellectual investigation into the workings of nature, founding a subterranean laboratory in the rumored, mist-wreathed wastes of the Violet Plateau. While scorning mages for the dangers they visit upon the world, Boush and his Tinker associates haughtily wrenched open a portal to some realm beyond comprehension and ushered in some nightmares of their own. A black mist rose from the cavernous interior of the Violet Plateau, shrouding it in permanent darkness from which sounds of horror perpetually emanate. Boush escaped with only his wits and the contraptions he carried, the sole Tinker to survive the Violet Plateau Incident.\",\"descrRu\":\"Карликовый народец, которому принадлежит Боуш, известен своими изобретательностью, хитростью и нелюбовью к магии. Гордятся они, что зарабатывают себе на хлеб исключительно разумом, применяя лишь те силы природы, которым могут найти объяснение. Но даже такая сдержанность может обернуться трагедией — уж Боушу ли не знать. Когда-то он был одним из главных исследователей законов природы, основателем подземной лаборатории всего и вся, расположенной под окутанным туманами Фиолетовым плато. Презирая магов за опасность, которую те представляют для мира, Боуш и его помощники, не ведая об опасности, открыли портал в некий мир за гранью разумения и оказались во власти собственных кошмаров. Чёрный туман покрыл Фиолетовое плато вечной тьмой, откуда теперь доносятся полные ужаса звуки. Только благодаря всяким штуковинам собственного изобретения Боушу удалось бежать. Один он пережил беду Фиолетового плато.\",\"line\":\"Mid Lane\",\"lineRu\":\"Центральная линия\",\"phrase\":\"Victory is 10% inspiration, 90% decapitation!\"},{\"id\":11,\"name\":\"Shadow Fiend\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_fiend.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nevermore.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f0/Vo_nevermore_nev_rare_05.mp3\",\"descr\":\"It is said that Nevermore the Shadow Fiend has the soul of a poet, and in fact he has thousands of them. Over the ages he has claimed the souls of poets, priests, emperors, beggars, slaves, philosophers, criminals and (naturally) heroes; no sort of soul escapes him. What he does with them is unknown. No one has ever peered into the Abysm whence Nevermore reaches out like an eel from among astral rocks. Does he devour them one after another? Does he mount them along the halls of an eldritch temple, or pickle the souls in necromantic brine? Is he merely a puppet, pushed through the dimensional rift by a demonic puppeteer? Such is his evil, so intense his aura of darkness, that no rational mind may penetrate it. Of course, if you really want to know where the stolen souls go, there's one sure way to find out: Add your soul to his collection. Or just wait for Nevermore.\",\"descrRu\":\"Говорят, у Невермора душа поэта, но на самом деле у него их тысячи. Веками он поглощал души стихотворцев, священников, императоров, нищих, рабов, философов, преступников и, естественно, героев. Не скрыться от него ни душе. Никто не знает, что он с ними делает. Никто не вглядывался в Бездну, где среди астральных скал Невермор таится, словно змея. Пожирает ли он души одну за другой? Выставляет ли он их трофеями в коридорах зловещего храма? Маринует ли в чернокнижном рассоле? А может, он — лишь марионетка, которой кукловодит зловещий разум извне пространства? Таково его зло, настолько силен его тёмный дух, что разумом его не понять. А если вам всё же очень хочется разузнать, что он делает с душами, то всё просто: присоединяйтесь к его коллекции. Или просто подождите: Невермор уже идёт к вам.\",\"line\":\"Mid Lane\",\"lineRu\":\"Центральная линия\",\"phrase\":\"So, you're curious where I come from? There's one easy way to find out for yourself.\"},{\"id\":126,\"name\":\"Void Spirit\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/void_spirit.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/void_spirit.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/c/ca/Vo_void_spirit_voidspir_spawn_21.mp3\",\"descr\":\"Not even the other spirits claim to understand the mind and machinations of the eldest amongst them, Inai the Void Spirit. Privy to secrets that would shatter a mortal mind, the Void Spirit observes the workings of the universe from an unknowable vantage, choosing to let carefully groomed servants do his bidding -- only emerging from his Hidden Temple into the material plane when he deems that he alone can steer the course of reality along its proper path.\\n With an expansive perspective on existence, Inai is focused intently on a point in time beyond which he cannot see, when the fabrics of multiple realities are fated to collide. Now he steps from the aether to personally resolve the battle of the Ancients and prepare his allies for what he views as a greater conflict to come.\",\"descrRu\":\"Даже другие духи не понимают стремлений и замыслов их старшего брата Иная, духа пустоты. Он хранит секреты, которые могут расколоть сознание смертного, и наблюдает за мановениями вселенной с непостижимой прозорливостью, оставляя подготовленным слугам исполнять его волю; и только если он решит, что больше никто не сможет направить реальность на верный путь, он покинет сокрытый храм и переместится в материальный мир.\\n Инай видит перед собой всё сущее, но его взгляд прикован к тому моменту времени, в котором столкнётся множество реальностей - грядущее ему неведомо.Теперь же он материализуется из небытия, чтобы лично решить исход битвы Древних и подготовить своих союзников к более важному противостоянию.\",\"line\":\"Mid Lane\",\"lineRu\":\"Центральная линия\",\"phrase\":\"Friend or foe, in the wake of the confluence, you will follow where I lead.\"},{\"id\":74,\"name\":\"Invoker\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/5/59/Vo_invoker_invo_level_05.mp3\",\"descr\":\"In its earliest, and some would say most potent form, magic was primarily the art of memory. It required no technology, no wands or appurtenances other than the mind of the magician. All the trappings of ritual were merely mnemonic devices, meant to allow the practitioner to recall in rich detail the specific mental formulae that unlocked a spell's power.\\nThe greatest mages in those days were the ones blessed with the greatest memories, and yet so complex were the invocations that all wizards were forced to specialize. The most devoted might hope in a lifetime to have adequate recollection of three spells—four at most. Ordinary wizards were content to know two, and it was not uncommon for a village mage to know only one—with even that requiring him to consult grimoires as an aid against forgetfulness on the rare occasions when he might be called to use it.\\nBut among these early practitioners there was one exception, a genius of vast intellect and prodigious memory who came to be known as the Invoker. In his youth, the precocious wizard mastered not four, not five, not even seven incantations: He could command no fewer than ten spells, and cast them instantly. Many more he learned but found useless, and would practice once then purge from his mind forever, to make room for more practical invocations. One such spell was the Sempiternal Cantrap—a longevity spell of such power that those who cast it in the world's first days are among us still (unless they have been crushed to atoms).\\nMost of these quasi-immortals live quietly, afraid to admit their secret: But Invoker is not one to keep his gifts hidden. He is ancient, learned beyond all others, and his mind somehow still has space to contain an immense sense of his own worth...as well as the Invocations with which he amuses himself through the long slow twilight of the world's dying days.\",\"descrRu\":\"Магия в своей самой ранней, даже можно сказать, самой мощной форме, всегда являлась в основном искусством памяти. Она не требовала техник, палочек или других принадлежностей, за исключением разума самого чародея. Всё, что ему было нужно — мнемонические средства, помогающие колдующему вспомнить в полных деталях ту психологическую формулу, что раскроет магическую силу. Величайшие волшебники тех дней были одарены отличной памятью, а сами заклинания были настолько сложны и громоздки, что чародеи были вынуждены на чем-то специализироваться. Однако даже самые отличные волшебники могли надеяться лишь на то, что они запомнят за всю свою жизнь три-четыре заклинания, не более. Обычные маги знали всего два заклинания, так что это не такое уж и необычное явление, когда деревенский чародей знал только одно заклинание, да и то требовало титанических усилий, куч подсказок и инструкций, работающих, как лекарство от забывчивости, в те редкие случаи, когда это самое заклинание просили продемонстрировать. Но среди всех этих волшебников было всего одно, но гениальное и владеющее огромной памятью исключение, и имя ему — Invoker. Уже в своей юности взрослый не по годам волшебник сумел набить руку на использовании не четырех, не пяти, и даже не семи, а не менее десятка заклинаний, которые он сотворял практически мгновенно! Еще больше он уже и так знал, но просто считал бесполезными. Одно из его заклинаний — Sempiternal Cantrap — было такой огромной мощи, что следы от его использования в первые дни создания мира видны до сих пор (или просто расщеплены на атомы). Большинство почти-бессмертных живут тихо, пряча от мира свой секрет, но Invoker — отнюдь не тот, кто хранит свой дар в кладовке. Он — древний, знающий гораздо больше остальных, разум которого все еще имеет свободное место для рассуждений о смысле существования… как и для колдовства, которым он развлекает себя, наблюдая за последними днями этого мира.\",\"line\":\"Mid Lane\",\"lineRu\":\"Центральная линия\",\"phrase\":\"I am a beacon of knowledge blazing out across a black sea of ignorance.\"},{\"id\":76,\"name\":\"Outworld Destroyer\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/obsidian_destroyer.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/obsidian_destroyer.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c0/Vo_outworld_destroyer_odest_begin_01.mp3\",\"descr\":\"One of a lordly and magisterial race, Harbinger prowls the edge of the Void, sole surviving sentry of an outpost on the world at the rim of the abyss. From this jagged crystalline Outworld, forever on guard, he has gazed for eternities into the heavens, alert for any stirring in the bottomless night beyond the stars. Imprinted deep in the shining lattices of his intellect lies a resonant pattern akin to prophecy, a dark music implying that eventually some evil will wake out there, beyond the edges of creation, and turn its attention to our world. With his whole being focused on his vigil, Outworld Destroyer paid little attention to events closer in to the sun. But at last the clamor of the Ancients, and a sense of growing threat from within as well as without, sent him winging sunward to visit the plains of war. Harbinger's place in our own prophecies is unambiguous: he must be considered an omen of worse things to come. But his arrival in itself is bad enough.\",\"descrRu\":\"Представитель благородной и властной расы, Предвестник бороздит кромку Пустоши и в одиночку несёт дозор в последней оставшейся заставе мира у края бездны. Он провёл вечность в выщербленном кристаллическом Внемирье, ни на мгновение не покидая свой пост, вглядываясь в небеса и ожидая движения в бездонной ночи за звёздами. Глубоко в сияющих переплетениях его интеллекта лежит узор пророчества — тёмная музыка, предвещающая, что однажды за гранью мироздания проснётся некое зло, которое обратит свой взор к нашему миру. Полностью поглощённый наблюдением, страж оставлял без внимания события, происходящие у самого солнца. Но вот наконец конфликт Древних и чувство нарастающей угрозы изнутри и извне заставили его двинуться в сторону солнца, к просторам сражений. Наши пророчества недвусмысленно говорят о Предвестнике: он — знак грядущих катастроф. Однако и само по себе его прибытие сулит беду.\",\"line\":\"Mid Lane\",\"lineRu\":\"Центральная линия\",\"phrase\":\"Their sanity I'll shatter; their dreams of conquest I'll destroy.\"},{\"id\":96,\"name\":\"Centaur Warrunner\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/centaur.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/centaur.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a5/Vo_centaur_cent_ally_19.mp3\",\"descr\":\"It's said that a centaur's road is paved with the corpses of the fallen. For the one called Warrunner, it has been a long road indeed. To outsiders, the four-legged clans of Druud are often mistaken for simple, brutish creatures. Their language has no written form; their culture lacks pictographic traditions, structured music, formalized religion. For centaurs, combat is the perfect articulation of thought, the highest expression of self. If killing is an art among centaurs, then Bradwarden the Warrunner is their greatest artist. He rose to dominance on the proving grounds of Omexe, an ancient arena where centaur clans have for millennia gathered to perform their gladiatorial rites. As his fame spread, spectators came from far and wide to see the great centaur in action. Always the first to step into the arena, and the last to leave, he composes a masterpiece in each guttering spray, each thrust of blood-slickened blade-length. It is the poetry of blood on steel, flung in complex patterns across the pale sands of the killing floor.\\nWarrunner defeated warrior after warrior, until the arena boomed with the cheering of his name, and he found himself alone, the uncontested champion of his kind. The great belt of Omexe was bestowed, wrapped around his broad torso, but in his victory, the death-artist found only emptiness. For what is a warrior without a challenge? The great centaur galloped out of Omexe that day with a new goal. To his people, Warrunner is the greatest warrior to ever step into the arena. Now he has set out to prove he is the greatest fighter who has ever lived.\",\"descrRu\":\"Говорят, что жизненный путь кентавра вымощен телами павших. И для кентавра по имени Warrunner этот путь был действительно длинным. Многие чужестранцы ошибочно принимают четырёхногих воинов из кланов Друуда за простоватых громил. У их языка нет письменной формы, культура бедна на графические символы; в музыке нет четкой структуры, а в религии — строгих правил и догм. Для кентавров лучшее выражение их мыслей и чувств — это битва. И если убийство среди кентавров считается искусством, то самый талантливый из их творцов — Брэдводен. Свою несокрушимую мощь он взрастил на землях Омекса, на древней арене, где тысячелетиями кланы кентавров собирались, чтобы провести гладиаторские церемонии. И чем дальше распространялась слава о нём, тем больше зрителей со всего света прибывало, чтобы увидеть великого кентавра в действии. Всегда выходя на арену первым и уходя последним, он создавал шедевры каждым брызгом крови, каждым взмахом окровавленного лезвия. Такова поэзия крови и стали, сложный узор на бледных песках бойни. Warrunner побеждал одного воина за другим до тех пор, пока арена не взрывалась выкриками его имени, и он не становился единственным, несравненным чемпионом. Ему был вручен великий пояс Омекса, но в победе ощущалась лишь пустота. Каков же воин без постоянного вызова? Великий кентавр ускакал из Омекса в тот же день с новой целью. Для своего народа Warrunner — это величайший воин, который ступал на арену. Теперь Warrunner стремится доказать, что он — величайший воин во всей истории.\",\"line\":\"Off Lane\",\"lineRu\":\"Сложная линия\",\"phrase\":\"It is not pride I take in my own power, it is passion.\"},{\"id\":129,\"name\":\"Mars\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mars.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mars.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a7/Vo_mars_mars_spawn_03.mp3\",\"descr\":\"Mars, first son of heaven, spent a long existence waging endless war, and saw countless more crusades waged beneath the banner of his old name. Wars of conquest and of vengeance. Just and unjust... Always cruel. So much like his father, Mars indulged his basest impulses--with inclinations much more monstrous than those of Zeus--and he inflicted suffering untold.\\nBut as the epochs vanished behind him, the selfish ways of his father--the ways of many amongst his godly kin, they who judged him despicable--eventually began to ring hollow. War for its own sake was no longer enough to satisfy his desires. For the first time in his ageless days, the god of war began to question to what ends he swung his glorious spear.\\nAs the Fates would have it, his solution came easily: he must wage war for a larger purpose, and inspire more than mere savagery and sorrow at the sight of his crest. He must at last lay claim to the mantle of leadership that is his birthright, for the time has come to burn down the pantheon of the old age and build a just new empire atop the ashes of his kin. Only then might he find satisfaction, and make the glory of Mars evident to all.\",\"descrRu\":\"Марс, первый сын неба, провел долгую жизнь, ведя бесконечные войны, и видел бесчисленное множество крестовых походов под знаменем своего старого имени. Войны захвата и мести. Справедливый и несправедливый... Всегда жестокий. Так же, как и его отец, Марс потакал своим самым низменным побуждениям — со склонностями гораздо более чудовищными, чем у Зевса, — и причинял невыразимые страдания.\\nНо по мере того, как эпохи исчезали позади него, эгоистичные пути его отца — пути многих его благочестивых родственников, тех, кто считал его презренным, — в конце концов стали казаться пустыми. Войны как таковой уже недостаточно для удовлетворения его желаний. Впервые за свои нестареющие дни бог войны начал задаваться вопросом, для каких целей он взмахнул своим славным копьем.\\nСудьба распорядилась так, что его решение пришло легко: он должен вести войну ради большей цели и вызывать больше, чем просто жестокость и печаль при виде своего гребня. Он должен, наконец, претендовать на мантию лидера, которая принадлежит ему по праву рождения, ибо пришло время сжечь пантеон старости и построить новую империю на пепле своих сородичей. Только тогда он сможет найти удовлетворение и сделать славу Марса очевидной для всех.\",\"line\":\"Off Lane\",\"lineRu\":\"Сложная линия\",\"phrase\":\"To those behind, rally! To those ahead, kneel.\"},{\"id\":108,\"name\":\"Underlord\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abyssal_underlord.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abyssal_underlord.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/4/47/Vo_abyssal_underlord_abys_rare_02.mp3\",\"descr\":\"Neither myth nor song exist to tell of their coming.\\nDeep below the surface of the world lay unknown wonders and horrors. Down and down again, well beneath the slithering magma fields and simmering roots of dormant volcanoes stands the obsidian city of Aziyog, its incomparable stonework spanning an endless cavern. Within honeycomb walls mortared with the bones of countless slaves lies the domain of the Abyssal Horde, and their brutal underlord Vrogros.\\nArmed by the monstrous forgemasters of his kind and well-practiced in the arts of the Dark Rift, Vrogros is able to conjure forth flame and crippling malice through the twist between worlds. He seeks always to expand his holdings, destroying or enslaving all he encounters. Yet the lands offered by the subterranean realm are few, and so his sights have turned upward. By his command the first waves of abyssal invaders have already marched through the rift, a few doomed legions meant merely to test the might of nations above. Now, as his full force readies itself for unending conquest, Vrogros himself steps into a sunlit world to announce his coming reign. Those who face the Underlord will bow and pay tribute, or be crushed where they stand.\",\"descrRu\":\"Сей рок не предрекала ни одна песнь, ни одна легенда.\\nГлубоко под поверхностью внешнего мира лежат неведомые чудеса и ужасы. Закованный в земной тверди, далеко под беспокойными лавовыми полями и подножиями спящих вулканов раскинулся обсидиановый город Азийог, бесподобная каменная кладка которого простирается по безграничной пещере. В ячеистых стенах, построенных на костях бесчисленных рабов, лежат территории Орды бездны и её жестокого владыки, Врогроша.\\nВооружённый лучшими кузнецами своего вида и обученный управлять самим пространством, в непрерывной жажде власти он несет пламя и отчаяние в каждый мир, уничтожая или порабощая всё встреченное. Тем не менее, подземный мир невелик, и потому Врогрош обратил свой взор ко внешним просторам. Одним своим словом он обрек на погибель легионы своих разведчиков, отправив тех на растерзание обитателям поверхности, дабы оценить их мощь. Теперь же, готовый продолжить завоевание, Врогрош лично ступит на освещённую солнцем землю и провозгласит своё грядущее правление. Те же, кто встретятся ему, падут ниц и выплатят дань — или умрут на месте.\",\"line\":\"Off Lane\",\"lineRu\":\"Сложная линия\",\"phrase\":\"Nothing can stop us. Nothing can slow our march. And when we have arrived, all will burn.\"},{\"id\":29,\"name\":\"Tidehunter\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tidehunter.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tidehunter.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5a/Vo_tidehunter_tide_attack_09.mp3\",\"descr\":\"The Tidehunter known as Leviathan was once the champion of the Sunken Isles, but his motives are as mysterious as those of his people. We all know the importance of the Drylanders' shipping lanes, how empires may rise and fall according to who controls the open water. Far less is known of the submarine lanes, and how the warring tribes of the Meranthic Diaspora have carved out habitations through endless undersea skirmishes. In the fragile treaties between the Mer and Men, we can glimpse the extent of the drowned empires, but their politics appear complex and opaque. It would seem that Leviathan tired of such petty strife, and set off on his own, loyal only to his abyssal god, Maelrawn the Tentacular. He stalks the shallows now in search of men or meranths who stray into his path, and with a particular loathing for Admiral Kunkka, who has long been his nemesis for reasons lost in the deepest trenches of the sea.\",\"descrRu\":\"Когда-то Левиафан был защитником Затонувших островов, но намерения его народа крайне расплывчаты. Все мы знаем о том, как для жителей суши важны морские торговые пути и как борьба за открытые воды воздвигает и низвергает целые империи. Куда меньше нам известно о подводных маршрутах, о враждующих племенах мерансской общины, образовавших поселения в бесчисленных подводных стычках. В хрупком перемирии меж сушей и мерансами мы едва ли можем оценить размах морских империй, и политика их сложна и смутна. Вполне возможно, что Левиафан устал от мелочных распрей и стал жить отдельно, преданный лишь своему глубоководному богу Мэльрону Щупальцеликому. Теперь он рыскает по мелководью в поисках людей и мерансов, смеющих перейти ему дорогу, — и в особенности не жалует одного кладдского адмирала, вражда с которым древна и загадочна, как самые глубокие морские впадины.\",\"line\":\"Off Lane\",\"lineRu\":\"Сложная линия\",\"phrase\":\"You can't hide from the tide.\"},{\"id\":55,\"name\":\"Dark Seer\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_seer.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_seer.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2b/Vo_dark_seer_dkseer_rare_01.mp3\",\"descr\":\"Fast when he needs to be, and a cunning strategist, Ish'Kafel the Dark Seer requires no edged weapons to vanquish his enemies, relying instead on the strength of his powerful mind. His talent lies in his ability to maneuver the fight to his advantage. Hailing from a place he calls 'The Land behind the wall,' Dark Seer remains an outsider here—a warrior from a realm beyond the veil of this reality.\\nOnce a great general among his people, and a valiant defender of the god-king Damathryx, Dark Seer's army was wiped out by a much larger force in the final days of the Great Boundaries War. Facing certain defeat, he made one last desperate act: he led the enemy forces into the maze between the walls. At the last moment, just before capture, he crossed over—then sealed the walls forever in an explosive release of dark energy. When the dust settled, he saw that he had saved his people but found himself blinking at the sun of a different world, with no way to return. Now he is committed to proving his worth as a military strategist, and vows to show that he's the greatest tactician this strange new world has ever seen.\",\"descrRu\":\"Стремительный в час нужды стратег Иш'Кафэль — расчётливый провидец, что обходится в бою без острых мечей: если нужно уничтожить противника, он полагается на мощь своего разума, мастерски направляя сражение в нужное русло. Сей воин пришёл из измерения вне граней реальности, которое он сам называет «миром за стеной». Когда-то Иш'Кафэль был великим военачальником своего народа и храбрым защитником святого короля Даматрикса, но в последние дни Великой войны Пределов его войско пало под натиском превосходящих сил. Поражение было неминуемо, но стратег совершил отчаянный поступок: он завёл армию врага в лабиринт меж стен. В последний миг Иш'Кафэль выскользнул из окружения и выпустил сокрушительную волну тёмной энергии, навеки заточив преследователей в лабиринте. Когда пыль улеглась, стратег увидел, что спас свой народ, однако сам он очутился под светилом иного мира, неспособный вернуться домой. Теперь Иш'Кафэль неуклонно проявляет свой военный гений, поклявшись показать себя величайшим тактиком из всех, что видел этот странный новый мир.\",\"line\":\"Off Lane\",\"lineRu\":\"Сложная линия\",\"phrase\":\"If your enemy is equal, prepare for him. If greater, elude him. If weaker, crush him.\"},{\"id\":99,\"name\":\"Bristleback\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bristleback.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bristleback.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/5/55/Vo_bristleback_bristle_rare_01.mp3\",\"descr\":\"Never one to turn his back on a fight, Rigwarl was known for battling the biggest, meanest scrappers he could get his hands on. Christened Bristleback by the drunken crowds, he waded into backroom brawls in every road tavern between Slom and Elze, until his exploits finally caught the eye of a barkeep in need of an enforcer. For a bit of brew, Bristleback was hired to collect tabs, keep the peace, and break the occasional leg or two (or five, in the case of one unfortunate web-hund).\\nAfter indulging in a night of merriment during which bodily harm was meted out in equal parts upon both delinquent patrons and his own liver, Bristleback finally met his match. 'Your tusks offend me, sir,' he was heard to drunkenly slur to one particularly large fellow from the northern wastes whose bill had come due. What followed was a fight for the ages. A dozen fighters jumped in. No stool was left unbroken, and in the end, the impossible happened: the tab went unpaid. Over the weeks that followed, Bristleback's wounds healed, and his quills grew back; but an enforcer's honor can be a prickly thing. He paid the tab from his own coin, vowing to track down this northerner and extract redemption. And then he did something he'd never done before: he actually trained, and in so doing made a startling discovery about himself. A smile peeled back from his teeth as he flexed his quills. Turning his back to a fight might be just the thing.\",\"descrRu\":\"Ригварл никогда не поворачивался спиной в бою и славился битвами с самыми крепкими и гадкими задирами, до которых только доходили руки. Любимец пьяных толп стал участвовать в подпольных боях, что проводились в каждой придорожной таверне между Сломом и Эльзе, и однажды умелого бойца заприметил один трактирщик, искавший вышибалу в бар. За скромную выпивку Ригварл стал собирать с посетителей плату, следить за порядком и время от времени ломать пару конечностей особо несговорчивым клиентам (а одному членистоногому бедняге однажды сломал целых пять). Но одной праздной ночью хмельной удар разделили Ригварл и его собственная печёнка: он нашёл равного себе бойца. «Не нравятся мне ваши бивни, уважаемый», — пробормотал он заплетающимся языком кряжистому детине с севера, которому пора было заплатить. И началось побоище века! В драку бросилась дюжина посетителей. Не уцелел ни один стул. А закончилось всё невероятно: клиент ушёл, не заплатив за выпивку. За несколько недель раны вышибалы затянулись, а иглы отросли, но удар по чести он простить не мог. Счёт Ригварл оплатил из своего кармана, поклявшись выследить северянина и взыскать с него полную плату. После этого он занялся тренировками, чего никогда раньше не делал, и неожиданно для себя сделал поразительное открытие. С улыбкой расправив иглы, он решил: иногда всё же стоит показывать обидчику спину.\",\"line\":\"Off Lane\",\"lineRu\":\"Сложная линия\",\"phrase\":\"It was a barkeep that got me into this mess. Yeah, I think I'll pay em a visit when this is done.\"},{\"id\":67,\"name\":\"Spectre\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spectre.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spectre.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b7/Vo_spectre_spec_rare_01.mp3\",\"descr\":\"Just as higher states of energy seek a lower level, the Spectre known as Mercurial is a being of intense and violent energy who finds herself irresistibly drawn to scenes of strife as they unfold in the physical world. While her normal spectral state transcends sensory limitations, each time she takes on a physical manifestation, she is stricken by a loss of self--though not of purpose. In the clash of combat, her identity shatters and reconfigures, and she begins to regain awareness. She grasps that she is Mercurial the Spectre--and that all of her Haunts are but shadows of the one true Spectre. Focus comes in the struggle for survival; her true mind reasserts itself; until in the final moments of victory or defeat, she transcends matter and is restored once more to her eternal form.\",\"descrRu\":\"Равно как самая непостижимая энергия всегда стремится к состоянию покоя, так и Меркуриал, воплощающую неудержимые и жестокие силы, непреодолимо притягивает к сценам раздора, что возникают в материальном мире. Её обычное спектральное состояние превосходит пределы восприятия, и каждый раз, обретая физическую форму, она теряет воспоминания о себе... но не о своей цели. В пылу схватки её личность разбивается и преображается, и вновь начинается процесс самоосознания. Она быстро вспоминает, что имя ей — Меркуриал, а заполонившие поле боя призраки — не более чем тени её самой, единственной и настоящей. В борьбе за выживание приходит концентрация, истинный разум вновь заявляет о себе, и Меркуриал превосходит материю, вновь и вновь возрождаясь в своей вечной форме вплоть до последних моментов победы или поражения.\",\"line\":\"Safe Lane\",\"lineRu\":\"Легкая линия\",\"phrase\":\"Among the Transcendencies, you would be thought ignoble.\"},{\"id\":1,\"name\":\"Anti-Mage\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a6/Vo_antimage_anti_kill_12.mp3\",\"descr\":\"The monks of Turstarkuri watched the rugged valleys below their mountain monastery as wave after wave of invaders swept through the lower kingdoms. Ascetic and pragmatic, in their remote monastic eyrie they remained aloof from mundane strife, wrapped in meditation that knew no gods or elements of magic. Then came the Legion of the Dead God, crusaders with a sinister mandate to replace all local worship with their Unliving Lord's poisonous nihilosophy. From a landscape that had known nothing but blood and battle for a thousand years, they tore the souls and bones of countless fallen legions and pitched them against Turstarkuri. The monastery stood scarcely a fortnight against the assault, and the few monks who bothered to surface from their meditations believed the invaders were but demonic visions sent to distract them from meditation. They died where they sat on their silken cushions. Only one youth survived--a pilgrim who had come as an acolyte, seeking wisdom, but had yet to be admitted to the monastery. He watched in horror as the monks to whom he had served tea and nettles were first slaughtered, then raised to join the ranks of the Dead God's priesthood. With nothing but a few of Turstarkuri's prized dogmatic scrolls, he crept away to the comparative safety of other lands, swearing to obliterate not only the Dead God's magic users--but to put an end to magic altogether.\",\"descrRu\":\"Монахи Турстаркури наблюдали за неровными долинами, раскинувшимися под их горным монастырем, в то время, как вторженцы, волна за волной, набегали на стоявшие у подножья королевства. Аскетичные, прагматичные, они пребывали в медитации, не знавшей никаких богов, засев в своем отрешенном от суетного мира высокогорном гнезде. Потом грянул легион Мертвого бога — крестоносцы, уничтожающие все местные культы и заменяющие их своей верой, родом из земель, известных лишь безжалостностью и тысячелетними войнами. Легионы мертвецов осадили Турстаркури. Две недели монастырь едва сдерживал натиск врагов, а те немногие монахи, что решили разузнать, в чем дело, восприняли нападение как попытку бесовских иллюзий отвлечь их от медитации. Они были убиты прямо на своих шелковых подстилках. Выжил лишь один молодой послушник — пилигрим, пришедший в поисках мудрости, но еще не принятый в монастырь. С ужасом он смотрел за тем, как монахи, которым он еще недавно подавал чаи и травы, гибли на своих местах, а потом присоединялись к рядам служителей Мертвого бога. Схватив охапку ценнейших священных писаний, он бежал в более безопасное место, поклявшись не только искоренить армию колдунов Мертвого бога, но и положить конец любой, какой бы то ни было, магии.\",\"line\":\"Safe Lane\",\"lineRu\":\"Легкая линия\",\"phrase\":\"They who live by the wand shall die by my blade.\"},{\"id\":8,\"name\":\"Juggernaut\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/juggernaut.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/juggernaut.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7d/Vo_juggernaut_jug_rare_09.mp3\",\"descr\":\"No one has ever seen the face hidden beneath the mask of Yurnero the Juggernaut. It is only speculation that he even has one. For defying a corrupt lord, Yurnero was exiled from the ancient Isle of Masks--a punishment that saved his life. The isle soon after vanished beneath the waves in a night of vengeful magic. He alone remains to carry on the Isle's long Juggernaut tradition, one of ritual and swordplay. The last practitioner of the art, Yurnero's confidence and courage are the result of endless practice; his inventive bladework proves that he has never stopped challenging himself. Still, his motives are as unreadable as his expression. For a hero who has lost everything twice over, he fights as if victory is a foregone conclusion.\",\"descrRu\":\"Никто никогда не видел лица, что скрыто за маской Юрнеро. Остаётся гадать, каков он на вид. Однажды Юрнеро бросил вызов нечистому на руку лорду и был изгнан с древнего острова Масок. Кара спасла ему жизнь: скорой ночью остров исчез под волнами, ведомыми мстительной магией. Лишь Юрнеро отныне хранит обычаи острова: древние ритуалы и искусство боя на мечах. Непоколебимость и мужество пришли к нему в нескончаемых упражнениях с клинком, а изобретательность в бою он укоренял, неутомимо испытывая себя. Как и лик воина, желания его остаются тайной. Он уже дважды терял всё, но сражается так, будто победа предрешена.\",\"line\":\"Safe Lane\",\"lineRu\":\"Легкая линия\",\"phrase\":\"By the Visage of Vengeance, which drowned in the Isle of Masks, I will carry on the rites of the Faceless Ones.\"},{\"id\":93,\"name\":\"Slark\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slark.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slark.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/e/ef/Vo_slark_slark_spawn_04.mp3\",\"descr\":\"Little known to the inhabitants of the dry world, Dark Reef is a sunken prison where the worst of the sea-breed are sent for crimes against their fellows. It is a razor barbed warren full of murderous slithereen, treacherous Deep Ones, and sociopathic meranths. In this dim labyrinth, patrolled by eels and guarded by enormous anemones, only the vicious survive. Pitched into Dark Reef for crimes unknown, Slark spent half a lifetime without kin or kindness, trusting no one, surviving through a combination of stealth and ruthlessness, keeping his thoughts and his plans to himself. When the infamous Dark Reef Dozen plotted their ill-fated breakout, they kept their plans a perfect secret, murdering anyone who could have put the pieces together--but somehow Slark discovered their scheme and made a place for himself in it. Ten of the Dozen died in the escape attempt, and two were captured, hauled back to Dark Reef, then executed for the entertainment of their fellow inmates. But Slark, the unsung thirteenth, used the commotion as cover and slipped away, never to be caught. Now a furtive resident of the carnivorous mangrove scrub that grips the southern reach of Shadeshore, Slark remains the only successful escapee from Dark Reef.\",\"descrRu\":\"Мало кому из жителей суши известно о Тёмном рифе — подводной темнице для всякого подводного отребья. Её устланные иглами ходы кишат убийцами-змееногими, изменниками из глубин, маньяками-мерансами и прочими морскими обитателями, совершившими преступления против своих сородичей. В этом тусклом лабиринте несут дозор угри и стоят на страже гигантские анемоны, и выживают тут лишь самые злобные. Здесь наш герой провёл полжизни, заточённый за давно забытые прегрешения, не ведая согласия и радостей, никому не доверяя. Выжил он лишь потому, что был скрытным и безжалостным — и хранил мысли и замыслы при себе. Но однажды двенадцать заключённых, прозванных впоследствии Дюжиной Тёмного рифа, задумали побег, которому суждено было окончиться плачевно. Заговор хранился в строжайшей тайне, а кто совал нос не в своё дело, тут же прощался с жизнью. Но всё же наш хитрец разузнал о затее и подготовил себе место в ней. В день побега десятеро из Дюжины погибли, так и не покинув Тёмный риф, а двоих изловили живьём, вернули в темницу и казнили на потеху остальным узникам. Однако беглецов оказалось тринадцать: юркий проныра воспользовался суматохой и был таков. Теперь он скрывается в хищных мангровых зарослях у южной оконечности Тенистого взморья и остаётся единственным, кому удалось сбежать из Тёмного рифа.\",\"line\":\"Safe Lane\",\"lineRu\":\"Легкая линия\",\"phrase\":\"If I'd known I'd end up here, I'd have stayed in Dark Reef Prison.\"},{\"id\":109,\"name\":\"Terrorblade\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/terrorblade.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/terrorblade.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a4/Vo_terrorblade_terr_spawn_03.mp3\",\"descr\":\"Terrorblade is the Demon Marauder—an outlaw hellion whom even other demons fear. A cosmic iconoclast, he stole from the Demon Lords, ignored the codified rites that should have bound his behavior, and broke every law of the seven Infernal Regions. For his crimes, he was taught this lesson: even Hell has a hell. A short, brutal trial ensued, with many dead on all sides, and he was finally incarcerated in Foulfell, a hidden dimension where demonkind imprison their own.\\nBut Foulfell is no normal prison. In this dark mirror of reality, demons are sentenced to gaze eternally into the twisted reflection of their own souls. But instead of suffering, Terrorblade made himself master of his own reflected worst self—a raging, thieving demon of unimaginable power. With his inner beast under sway, he destroyed the fractal prison walls and burst free to turn his terror loose upon all creation.\",\"descrRu\":\"Этот демон-мародёр обрёл славу закоренелого преступника даже среди других адских тварей. Он был невиданным бунтарём, обворовал самих Владык-демонов, отверг все установленные обряды, призванные его смирить, и преступил все законы семи кругов Ада. За это ему преподали урок: даже в преисподней есть собственный ад. После короткого, сурового суда в окружении мириады мертвецов его наконец отправили в Колодец душ — скрытое измерение, куда демоны заключают себе подобных. Но это далеко не обычная тюрьма. Колодец душ — тёмное зеркало реальности, в котором демоны обречены взирать на искривлённое отражение собственной души. Однако заключённый и не думал страдать: он подчинил себе это отражение, яростного и вороватого демона невообразимой силы. Укротив своё тёмное начало, демон разрушил фрактальные стены темницы и вырвался на свободу, дабы вселять страх во всё мироздание.\",\"line\":\"Safe Lane\",\"lineRu\":\"Легкая линия\",\"phrase\":\"The self-righteous shall choke on their sanctimony.\"},{\"id\":12,\"name\":\"Phantom Lancer\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_lancer.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_lancer.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/3/39/Vo_phantom_lancer_plance_kill_10.mp3\",\"descr\":\"The remote village of Pole had no knowledge of the wars raging in the heart of the kingdom. For them, the quiet of spear fishing, and a family meal were all that a full life required. Yet war came for them nonetheless. Joining the able-bodied conscripts as they filed passed their homes, the humble lancer Azwraith vowed to bring peace to his kingdom, and in so doing, his people. Placed with his kin in the vanguard of the final assault against the Dread Magus Vorn, the cost to his fellows was absolute. As the charging force battled toward the fortress, Azwraith alone among his kind remained standing, and he alone was able to infiltrate the keep.\\nFocused and infuriated by the slaughter of his brothers, Azwraith bested each of the wizard's deadly traps and conjured guardians. Soon the simple fisherman arrived at Vorn's tower sanctum. The pair dueled through the night, pike to staff, as chaos raged below, and with a deafening cry Azwraith pierced his enemy. But the wizard did not simply expire; he exploded into uncountable shards of light, penetrating his killer with power. As the dust settled and the smoke of combat began to clear, Azwraith found himself standing among a throng of his kin. Each seemed to be dressed as he was, each seemed armed as he was, and he could sense that each thought as he did. Aware that his allies were approaching, he willed these phantoms to hide themselves, and one by one they began to vanish into nothingness. As the soldiers came upon the sanctum, they found the warrior that had bested the wizard. When they approached their champion, the lancer vanished. The pikeman who had stood before them was no more than another phantom.\",\"descrRu\":\"Удалённая деревня Поул не знала о войнах, идущих в центре королевства. Спокойная ловля рыбы и ужин в кругу семьи — для них это была полноценная жизнь. Но война всё равно настигла их. Присоединившись к крепким рекрутам, проходившим мимо домов, скромный копейщик Азраф дал клятву принести мир своему королевству и его жителям. Его сородичи принесли великую жертву, находясь в авангарде последнего боя с магом ужаса Ворном. Когда битва подступила к крепости, Азраф остался один, и он единственный смог пробраться в неё. Сосредоточенный и разъяренный той бойней, в которой пали его братья, Азраф преодолел смертельно опасные ловушки чародея и его околдованных стражей. Вскоре простой рыбак прибыл в башню святилища Ворна. До самого рассвета, пока внизу царил хаос, они сражались, копьё против посоха, пока, наконец, Азраф не пронзил своего врага с оглушающим криком. Но колдун не просто пал: он распался на бесчисленные осколки света, которые пронзили мощью убийцу. Когда улеглась пыль, а туман войны рассеялся, Азраф обнаружил, что находится среди своих сородичей. Каждый казался одет в ту же одежду, что и он сам, каждый имел то же оружие, что и он сам, и Азраф почувствовал, что все мысли их также подобны его собственным. Зная о приближении союзников, Азраф пожелал, чтобы фантомы спрятались, и они один за другим превратились в ничто. Придя в святилище, солдаты нашли воина, что сразил чародея. Когда они приблизились к герою, копейщик испарился. Он оказался всего лишь ещё одним фантомом.\",\"line\":\"Safe Lane\",\"lineRu\":\"Легкая линия\",\"phrase\":\"We outnumbered you. We outnumber them all!\"},{\"id\":33,\"name\":\"Enigma\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enigma.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enigma.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/a/ae/Vo_enigma_enig_rare_05.mp3\",\"descr\":\"Nothing is known of Enigma's background. There are only stories and legends, most of them apocryphal, passed down through the ages. In truth, Enigma is a mystery for whom the only true biography is description: he is a universal force, a consumer of worlds. He is a being of the void, at times corporeal, other times ethereal. A beast between the planes.\\nThere are stories that say he was once a great alchemist who tried to unlock the secrets of the universe and was cursed for his arrogance. Other legends tell that he is an ancient being of strange gravity, the abyss personified—a twisted voice from out the original darkness, before the first light in the universe. And there are older legends that say he is the first collapsed star, a black hole grown complicated and sentient—his motivations unknowable, his power inexorable, a force of destruction unleashed upon existence itself.\",\"descrRu\":\"О происхождении этой сущности неизвестно ровным счётом ничего. С древних времен остались лишь истории и легенды, и большинство из них даже не похожи на правду. По сути, это существо — великая загадка, и известно об нём лишь одно: оно — вселенская сила, поглотитель миров. Оно — дитя пустоты, иногда материальное, иногда — бесплотное. Чудище, живущее вне измерений. Одни говорят, что раньше оно было великим алхимиком, пытавшимся раскрыть секреты вселенной, но проклятым за свою заносчивость. Другие называют его непостижимым древним существом, самой бездной, неясным голосом первозданной тьмы, в которой зиждился первый свет. А самые старые легенды гласят, что это первая взорвавшаяся звезда, разумная чёрная дыра — безжалостное существо c туманными намерениями и разрушительной силой, низвергнувшееся на этот мир.\",\"line\":\"Jungle\",\"lineRu\":\"Лес\",\"phrase\":\"Chaos hunts the spark of endless suns, whose light will die in my crushing grasp.\"},{\"id\":53,\"name\":\"Nature's Prophet\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/furion.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/furion.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7a/Vo_furion_furi_rare_02.mp3\",\"descr\":\"When Verodicia, Goddess of the Woods, had finished filling in the green places, having planted the coiled-up spirit in the seed, having lured the twining waters from deep within the rock, having sworn the sun its full attention to the growing things, she realized that her own time had reached its end, and like one of the leaves whose fate she had imprinted in the seed, she would fall without seeing the fruiting of her dream. It pained her to leave the world bereft, for the sprouts had not yet broken through the soil--and they would be tender and vulnerable to every sort of harm. She found in her seed pouch one last seed that she had missed in the sowing. She spoke a single word into the seed and swallowed it as she fell. Her vast body decomposed throughout the long winter, becoming the humus that would feed the seedlings in the spring. And on the morning of the vernal equinox, before the rest of the forest had begun to wake, that last seed ripened and burst in an instant. From it stepped Nature's Prophet, in full leaf, strong and wise, possessing Verodicia's power to foresee where he would be needed most in defense of the green places--and any who might be fortunate enough to call him an ally.\",\"descrRu\":\"Когда богиня лесов Веродиция закончила заполнять мир зеленью, посадила исполненные духом семена, выманила из каменистых глубин вьющиеся ручейки и взяла с солнца обещание хранить всё растущее, то поняла, что время её пришло к концу и, как падают отжившие своё листья, она падёт оземь, так и не узрев своих плодов. Больно ей было покидать мир, ведь ростки ещё не прорвались сквозь землю и всё еще были нежны и беспомощны. В суме для семян Веродиция нашла последнее, забытое зерно. Прошептав в него единственное слово, она проглотила его и упала оземь. За долгую зиму её необъятное тело разложилось, вскормило почву, и по весне на ней поднялись ростки. И в утро весеннего равноденствия, когда весь лес ещё даже не начал просыпаться, то самое позабытое семя взошло, и из него выступил защитник природы, в полном расцвете сил, сильный и мудрый, и нёс он волю Веродиции в те места, что нуждались в защите… и тем, кому повезло звать его союзником.\",\"line\":\"Jungle\",\"lineRu\":\"Лес\",\"phrase\":\"I woke within the seed and saw my destiny, and many were its branches.\"},{\"id\":66,\"name\":\"Chen\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chen.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chen.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/6/66/Vo_chen_chen_rare_02.mp3\",\"descr\":\"Born in the godless Hazhadal Barrens, Chen came of age among the outlaw tribes who eked out an existence in the shimmering heat of the desert. Using an ancient form of animal enthrallment, Chen's people husbanded the hardy desert locuthi, a stunted species of burrowing dragon that melted desert sands into tubes of glass where twice-a-year rains collected. Always on the edge of starvation and thirst, fighting amongst their neighbors and each other, Chen's clan made the mistake, one fateful day, of ambushing the wrong caravan.\",\"descrRu\":\"Рождённый в безбожных Хажадальских пустошах, Чен вырос среди разбойных племён, скрывающихся от остального мира в сияющих песках пустыни. Пользуясь древним знанием о приручении животных, его народ разводил локати — низкорослых подземных драконов, выжигающих в песке стеклянные туннели, дважды в год наполнявшиеся дождевой водой. Из-за постоянного голода и жажды племена постоянно враждовали между собой. И однажды Чен совершил непростительную ошибку, напав не на тот караван. В той жестокой схватке его клан был повержен. Облачённые в доспехи рыцари Покрова в два счёта расправились с порабощёнными локати, что нападали и умирали один за другим. Вслед за драконами пали и члены клана. Чен боролся, бился и дрался не на жизнь, а на смерть... Но ему была уготована иная участь. Поверженный, он стоял на коленях и смиренно ждал казни. Восхищённый храбростью юнца, палач убрал свой клинок. Ему пообещали даровать жизнь, если он примет веру. Чен со всей душой ухватился за эту возможность. Он присоединился к рыцарям и в кровавых проповедях заслужил себе доспехи. Теперь же с непоколебимой верой и превосходным умением приручать животных он выискивает неверных и вершит над ними последний суд.\",\"line\":\"Jungle\",\"lineRu\":\"Лес\",\"phrase\":\"You can learn faith at the end of a sword.\"},{\"id\":4,\"name\":\"Bloodseeker\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bloodseeker.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bloodseeker.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/a/ac/Vo_bloodseeker_blod_rare_02.mp3\",\"descr\":\"Strygwyr the Bloodseeker is a ritually sanctioned hunter, Hound of the Flayed Twins, sent down from the mist-shrouded peaks of Xhacatocatl in search of blood. The Flayed Ones require oceanic amounts of blood to keep them sated and placated, and would soon drain their mountain empire of its populace if the priests of the high plateaus did not appease them. Strygwyr therefore goes out in search of carnage. The vital energy of any blood he lets, flows immediately to the Twins through the sacred markings on his weapons and armor. Over the years, he has come to embody the energy of a vicious hound; in battle he is savage as a jackal. Beneath the Mask of the Bloodseeker, in the rush of bloody quenching, it is said that you can sometime see the features of the Flayers taking direct possession of their Hound.\",\"descrRu\":\"Стригвир — прошедший ритуалы охотник; гончая Бескожих близнецов, отправленная с туманных вершин Ксакатокатля на поиски крови. Чтоб насытить близнецов, нужны поистине океаны жизненных соков, и горная империя уж давно бы опустела, не сумей жрецы с верхних плато задобрить богов. Посему Стригвир рыщет по миру в поисках кровавых битв. Жизненная энергия любой пролитой им крови тут же передаётся Бескожим близнецам через священные знаки на его оружии и броне. Прошли многие годы, а Стригвир всё ещё неустанен, как бешеный пёс, и свиреп в бою, как ненасытный шакал. Говорят, что в кровопролитном бою под его маской можно разглядеть черты самих близнецов, лично направляющих свою гончую.\",\"line\":\"Jungle\",\"lineRu\":\"Лес\",\"phrase\":\"You should be honored to bleed so that the Flayed Ones may live.\"},{\"id\":104,\"name\":\"Legion Commander\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/legion_commander.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/legion_commander.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b8/Vo_legion_commander_legcom_begin_01.mp3\",\"descr\":\"They came without warning. Within the city walls of Stonehall there came a rumble and a terrible sound, and from blackness unknown came a force of beasts numbering beyond count, wielding flame and foul sorcery, slaying and snatching mothers and sons to dark purpose. Of once-mighty Stonehall's military strength only the Bronze Legion, led by the indomitable Commander Tresdin, was near enough to answer the call of battle. They rode into their city, fighting through bloodstained alleyways and burning markets, cutting their way through the monstrous throng to the source of the sudden invasion: an ethereal rift within the city square, and at its precipice thundered their dreaded champion.\\nEnwrapped in a corrosive shimmer, the leader of the abyssal horde swung its massive blade, cleaving a legionnaire in two as his flesh began to spoil. Tresdin lifted her blood-stained sword and settled her sights on the beast. It turned, smiling at her through a maze of teeth. Heedless of the battle raging around them, they charged one another.\",\"descrRu\":\"Они пришли без предупреждения. Внутри городских стен Стоунхолла вдруг раздался ужасный грохот, и из неизведанной тьмы явились бесчисленные твари, несущие пламя и разруху, убивающие и захватывающие матерей и сыновей во имя тёмных целей. Из бывшей когда-то могучей армии Стоунхолла лишь Бронзовый легион под руководством главнокомандующей Тресдин находился рядом и смог ответить на зов помощи. Въехав в город, они начали пробиваться через окровавленные переулки и пылающие рынки, прорубая свой путь к источнику внезапного вторжения — пространственному расколу на главной площади, на краю которого бушевал лидер Орды бездны.\\nОхваченный губительным блеском, он взмахивал своим гигантским клинком, рассекая воинов напополам, и плоть его жертв тут же начинала разлагаться. Тресдин подняла свой окровавленный меч и взглянула на чудовище. Оно обернулось, обнажив в улыбке массу клыков. Забыв о битве, бушующей вокруг, они бросились навстречу друг другу. Отражая один выпад за другим, пара кружилась в смертельном танце, пока солдаты Бронзового легиона терпели сокрушительное поражение. Тресдин сделала выпад, а враг встретил её своим мечом. Сильнейший удар сбоку заставил Тресдин покачнуться, но она собрала свои силы для ответного взмаха. Клинок ударился о клинок, вошел по рукоять в кривую лапу, разорвав её надвое, разбрызгивая ужасающую смесь искр и крови. Подлые твари ошеломленно смотрели на битву, а Тресдин не прекращала бить, вонзая меч всё глубже, прямо к неистово бьющемуся сердцу чудовища. Раздался жуткий вой, донесшийся до самых облаков, и монстр разразился потоком крови и страдания. Адский портал содрогнулся. Сила, питающая его, исчезла так же внезапно, как и появилась. Оставшиеся враги пали под напором стали Стоунхолла.\\nПобеду не было смысла праздновать: город лежал в руинах, выживших осталось совсем немного. Пожар продолжал полыхать. Развернув свои знамена, Тресдин собрала уцелевших союзников. В гневе она дала клятву отомстить силам бездны, и обречён будет тот, кто встанет на её пути.\",\"line\":\"Jungle\",\"lineRu\":\"Лес\",\"phrase\":\"If they want war, then we shall give it to them!\"},{\"id\":77,\"name\":\"Lycan\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lycan.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lycan.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a8/Vo_lycan_lycan_spawn_02.mp3\",\"descr\":\"Banehallow was noble-born to the house of Ambry, the greatest of the landed castes in the old kingdom of Slom. Before the Fall, as the King's wants grew strange, and his court grew crowded with sorcerers and charlatans, the house of Ambry was the first to rise against the avarice of the throne. No longer willing to pay homage and fealty, they instead sent six-thousand swords into the capital, where they were wiped out in the Massacre of the Apostates. And then came the teeth behind the old truth: When you strike a king's neck, you had better take his head.\\nEnraged by the betrayal, the king exterminated the vast Ambry bloodline, sparing only the lord of the house and his youngest son, Banehallow. Before all the royal court, with the disgraced lord chained to the ornate marble floor, the King bade his magicians transform the boy into a wolf so that he might tear out his own father's throat. 'Do this,' the king said, 'so that Lord Ambry will understand the bite of betrayal.' Powerful magic was invoked, and the child was transformed. But though his body was changed, his spirit remained intact, and instead of biting the exposed neck of his father, he attacked his handlers, tearing them to pieces. A dozen of the King's knights perished under the wolf's teeth before they managed to drive it off into the night. Lord Ambry laughed from his chains even as the King ran him through with a sword. Now the heir to the lost house of Ambry, Banehallow wanders the trail as the Lycan, part warrior, part wolf, in search of justice for all that he lost.\",\"descrRu\":\"Бейнхаллоу был одним из наследников благородного дома Эмбри, величайшего землевладельческого рода королевства Слом. До Падения дом Эмбри первым восстал против ненасытного короля, чьи желания становились всё страннее и страннее, в то время как двор заполоняли колдуны и шарлатаны. Не желая больше платить вассальскую дань, Эмбри послали в столицу шеститысячную армию, но её перерезали в сражении, названном позже «Бойней отступников». Тогда старое выражение показало свою настоящую шкуру: когда метишь в шею королю, лучше рубить сразу всю голову. Разъярённый предательством король истребил всякого живущего Эмбри, оставив жизнь лишь лорду и его младшему сыну, Бейнхаллоу. Опозоренный лорд был прикован к узорчатому мраморному полу королевской залы, и монарх приказал своим волшебникам превратить мальчика в волка, чтобы тот разодрал глотку своему же отцу. «Сделайте это, — сказал король, — чтобы Лорд Эмбри осознал, как остры зубы предательства». Были призваны сильнейшие магические силы, и тело ребенка исказилось. Однако, хоть тело Бейнхаллоу больше и не было человеческим, его душа никак не изменилась — и вместо того, чтобы разодрать шею беззащитного отца, он набросился на прислугу монарха. Прежде чем волка наконец-то смогли выгнать в тишь ночи, он разорвал на клочки дюжину королевских рыцарей. Лорд Эмбри, всё ещё в кандалах, смеялся, даже когда его тело пронзил королевский меч. Ныне Бейнхаллоу — наследник потерянного дома Эмбри, бродящий по миру под именем Lycan. Наполовину воин, наполовину волк, он ищет возмездия за всё то, что потерял.\",\"line\":\"Jungle\",\"lineRu\":\"Лес\",\"phrase\":\"A wolf in man's clothing.\"},{\"id\":71,\"name\":\"Spirit Breaker\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spirit_breaker.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spirit_breaker.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/6/65/Vo_spirit_breaker_spir_rare_01.mp3\",\"descr\":\"Barathrum the Spirit Breaker is a lordly and powerful being, a fierce and elemental intelligence which chose to plane-shift into the world of matter to take part in events with repercussions in the elemental realm that is his home. To that end, he assembled a form that would serve him well, both in our world and out of it. His physical form borrows from the strengths of this world, blending features both bovine and simian--horns, hooves and hands--as outward emblems of his inner qualities of strength, speed and cunning. He wears a ring in his nose, as a reminder that he serves a hidden master, and that this world in which he works is but a shadow of the real one.\",\"descrRu\":\"Баратрум — гордое и могущественное существо, яростный первичный разум. В мир материи он пришёл, чтоб участвовать в событиях, отзвуки которых донесутся до его родной первичной вселенной. Сам собрал своё тело Баратрум, и послужит оно ему как в нашем мире, так и за его пределами. Его бренная оболочка черпает силы из нашей вселенной, объединяет она формы быка и обезьяны: рога, копыта и лапы воплощают его силу, скорость и ловкость. Кольцо в носу напоминает Баратруму, что служит он тайному господину и что мир, где трудится он, — лишь тень настоящего бытия.\",\"line\":\"Roaming\",\"lineRu\":\"Роуминг\",\"phrase\":\"I'm the beast of many parts; I part enemies from their lives.\"},{\"id\":107,\"name\":\"Earth Spirit\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earth_spirit.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earth_spirit.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/9/97/Vo_earth_spirit_earthspi_battlebegins_01.mp3\",\"descr\":\"Deep amid the Upland crags and cliffs there runs a seam of sacred jade long foresworn by highland miners. From this rare material, the likeness of the great general Kaolin was carved and buried at the head of a stone funerary army ten thousand strong—a force of soldiers and holy men, jesters and acrobats, carved by crafstmen and entombed for millennia in the dark embrace of the Earth.\\nWhat the craftsmen had not known was that within the strange seam of jade flowed the spirit of the Earth itself—an elemental force at one with the planet. When the force within the carved jade found itself cut off from the life's blood of the world, it gathered its strength over the course of a thousand years and dug itself free and into the light. Now the great Kaolin Earth Spirit strides the Upland roads, fighting for the spirit of the Earth; and in times of need calls forth remnants of his buried army still locked in the loving embrace of the soil.\",\"descrRu\":\"Глубоко среди скал и утёсов Повершья есть заброшенный рудокопами разрез, где давным-давно добывали священный нефрит. Когда-то из этого редкого материала вырезали изваяние великого генерала Каолина, и легло оно во главе могилы десяти тысяч каменных воинов: солдатов и священников, шутов и акробатов — мастера высекли великое множество статуй и на веки вечные опустили их в тёмные объятья почвы. Но не знали ремесленники, что разрез тот был необыкновенным: в нём обитал дух самой земли, единый с планетой. Долго копилась мощь в нефритовом изваянии, отрезанном от живительного источника, и спустя тысячу лет оно проложило себе путь на поверхность. Теперь вновь рождённый великий Каолин путешествует по дорогам Повершья, борясь во имя духа земли и при нужде призывая остатки великой армии, что и по сей день сокрыта в любящих объятьях земляной толщи.\",\"line\":\"Roaming\",\"lineRu\":\"Роуминг\",\"phrase\":\"Through conflict, one's nature is revealed.\"},{\"id\":100,\"name\":\"Tusk\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tusk.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tusk.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a7/Vo_tusk_tusk_rare_03.mp3\",\"descr\":\"It had been a brawl to remember. There stood Ymir, the Tusk, the Terror from the Barrier, the Snowball from Cobalt, the only fighter to have bested the Bristled Bruiser in a fair fight, and now the last man standing in Wolfsden Tavern. What started as a simple bar bet of supremacy ended with four regulars, a blacksmith, and six of the Frost Brigade's best soldiers writhing against the shards and splinters of almost every bottle, mug, and chair in the building. The Tusk boasted and toasted his victory as he emptied his brew.\\nNo sooner had the defeated regained consciousness than the cries for double-or-nothing rang out. The Tusk was pleased at the prospect, but none could think of a bet bigger than the one he just conquered. Horrified at the damage to his tavern and desperate to avoid another brawl, the barkeep had an idea. As skilled as he was, Ymir had never taken part in a real battle, never tested himself against the indiscriminate death and chaos of war. He proposed a wager to the fighter: seek out the biggest battle he could find, survive, and win it for whichever side he chose. The stakes? The next round of drinks.\",\"descrRu\":\"Славная была потасовка! После нее в таверне «Волчья дыра» на ногах остался стоять лишь Имир — он же Бивень, он же Ужас из Барьера, он же Снежный ком из Кобальта и единственный, кому удалось одолеть одного небезызвестного вышибалу с иглами на спине. Все началось с безобидного спора «кто кого?», что не редкость среди завсегдатаев заведений подобного рода. В итоге у трактирщика не осталось ни одной целой бутылки, кувшина или стула, а в глубокий нокаут отправились четверо здешних постояльцев, один кузнец и шестеро лучших вояк Морозной дружины. Созерцая эту картину, Имир провозгласил громкий тост в свою честь и осушил кружку хмельного. Как только проигравшие пришли в себя, тут же начали требовать реванша и ставок повыше. Имиру это было лишь в радость, вот только он сомневался, что у этих бедолаг еще что-то осталось из наличности. Видя весь этот погром и пытаясь любым способом предотвратить очередной дебош, трактирщик пошел на хитрость. Поскольку Имир, несмотря на свои отменные боевые качества, никогда не участвовал в реальной битве, не ведал хаоса, творящегося на поле брани, и не знал, какой неразборчивой порой бывает смерть, трактирщик предложил ему новое пари: принять участие в самом масштабном сражении, неважно за какую сторону, при этом выжить и разгромить врага. Ну а что на кону? Конечно же, добротная порция выпивки за счет заведения.\",\"line\":\"Roaming\",\"lineRu\":\"Роуминг\",\"phrase\":\"After a bar brawl it's customary, as a courtesy, to buy everyone who's still standing a round of drinks.\"},{\"id\":14,\"name\":\"Pudge\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/6/69/Vo_pudge_pud_rare_02.mp3\",\"descr\":\"In the Fields of Endless Carnage, far to the south of Quoidge, a corpulent figure works tirelessly through the night--dismembering, disembowelling, piling up the limbs and viscera of the fallen that the battlefield might be clear by dawn. In this cursed realm, nothing can decay or decompose; no corpse may ever return to the earth from which it sprang, no matter how deep you dig the grave. Flocked by carrion birds who need him to cut their meals into beak-sized chunks, Pudge the Butcher hones his skills with blades that grow sharper the longer he uses them. Swish, swish, thunk. Flesh falls from the bone; tendons and ligaments part like wet paper. And while he always had a taste for the butchery, over the ages, Pudge has developed a taste for its byproduct as well. Starting with a gobbet of muscle here, a sip of blood there...before long he was thrusting his jaws deep into the toughest of torsos, like a dog gnawing at rags. Even those who are beyond fearing the Reaper, fear the Butcher.\",\"descrRu\":\"На полях Вечной бойни, далеко на юге от Квойджа, тучная фигура упорно трудится под покровом ночи — убирает, а затем расчленяет, потрошит, сгружает в кучи конечности и внутренние органы павших. И все это лишь для того, чтобы на следующее утро бойня могла повториться. В том проклятом мире ничто не разлагается само по себе — мертвецам никогда не суждено вернуться обратно в землю, и не важно, насколько глубока могила. Окруженный стаями птиц-падальщиков, которым нужны порезанные кусочки трупов, мясник Pudge упражняется с лезвиями, которые затачиваются от резки трупов. Вжик-вжик-тух. Плоть отсекается от костей, связки и сухожилия отрываются как кусочки мокрой бумаги. И хоть у Pudge всегда было пристрастие к мясницкому ремеслу, со временем тучный здоровяк полюбил и то, что получается, когда он заканчивает работу над трупом. Сначала кусочек мускула там, глоточек крови... Вскоре Pudge уже вгрызался в тела самых крепких существ подобно грызущей кость собаке. Даже те, кто не питает страха перед жнецом Смерти, предпочитают не связываться с мясником.\",\"line\":\"Roaming\",\"lineRu\":\"Роуминг\",\"phrase\":\"When I'm through with these vermin, they'll be fit for a pie!\"},{\"id\":62,\"name\":\"Bounty Hunter\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bounty_hunter.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bounty_hunter.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c3/Vo_bounty_hunter_bount_battlebegins_01.mp3\",\"descr\":\"When the hunted tell tales of Gondar the Bounty Hunter, none are sure of which are true. In whispered tones they say he was abandoned as a kit, learning his skill in tracking as a matter of simple survival. Others hear he was an orphan of war, taken in by the great Soruq the Hunter to learn the master's skill with a blade as they plumbed the dark forests for big game. Still others believe he was a lowly street urchin raised among a guild of cutpurses and thieves, trained in the arts of stealth and misdirection. Around campfires in the wild countryside his quarry speaks the rumors of Gondar's work, growing ever more fearful: they say it was he who tracked down the tyrant King Goff years after the mad regent went into hiding, delivering his head and scepter as proof. That it was he who infiltrated the rebel camps at Highseat, finally bringing the legendary thief White Cape to be judged for his crimes. And that it was he who ended the career of Soruq the Hunter, condemned as a criminal for killing the Prince's prized hellkite. The tales of Gondar's incredible skill stretch on, with each daring feat more unbelievable than the last, each target more elusive. For the right price, the hunted know, anyone can be found. For the right price, even the mightiest may find fear in the shadows.\",\"descrRu\":\"Жертвы рассказывают многое об охотнике за головами по имени Гондар — и никто не знает, что из этого правда. Кто-то шепчет о том, что его бросили ещё котёнком, и ему пришлось научиться охоте, лишь чтобы выжить. Другие слышали, что война лишила беднягу семьи, и того взял под крыло великий охотник Сорук, который научил сироту обращаться с клинками и вместе с ним прочёсывал тёмные рощи, выходя на большую охоту. А некоторые считают, что Гондар был обычным уличным оборванцем, взращённым в гильдии карманников и воров, где он и научился скрываться и запутывать следы. Его жертвы собираются вокруг костров в диких землях и делятся слухами, всё больше страшась головореза: например, поговаривают, что это он выследил короля Гоффа — безумного тирана, годами скрывавшегося от правосудия, — и в доказательство принёс его голову и скипетр. И что он проник в лагерь повстанцев на Хайсите, схватил там легендарного вора по прозвищу Белый плащ и доставил его до суда. А ещё — что именно он положил конец охотнику Соруку, которого объявили вне закона за убийство лучшего бугая принца. Так и расходятся истории о невероятных способностях Гондара, в которых одна авантюра невероятнее другой, а неуловимых целей будто бы не существует. Жертвы знают: за хорошую цену выследить можно кого угодно. За хорошую цену даже за самыми могущественными явится смерть из тени.\",\"line\":\"Roaming\",\"lineRu\":\"Роуминг\",\"phrase\":\"No job is too big; no fee is too big.\"},{\"id\":9,\"name\":\"Mirana\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mirana.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mirana.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d3/Vo_mirana_mir_rare_10.mp3\",\"descr\":\"Born to a royal family, a blood princess next in line for the Solar Throne, Mirana willingly surrendered any claim to mundane land or titles when she dedicated herself completely to the service of Selemene, Goddess of the Moon. Known ever since as Princess of the Moon, Mirana prowls the sacred Nightsilver Woods searching for any who would dare poach the sacred luminous lotus from the silvery pools of the Goddess's preserve. Riding on her enormous feline familiar, she is poised, proud and fearless, attuned to the phases of the moon and the wheeling of the greater constellations. Her bow, tipped with sharp shards of lunar ore, draws on the moon's power to charge its arrows of light.\",\"descrRu\":\"Наследница королевской династии и первая претендентка на Лучезарный трон отреклась от мирских земель и титулов, посвятив свою жизнь богине Луны Селемине. С тех пор зовётся она принцессой Луны. Ревностно охраняет она неприкосновенные Серебристые Леса от любого, кто осмелится сорвать хоть цветок священного лучистого лотоса, растущего в заповедных серебряных запрудах. Разъезжая на огромном звере из рода благородных кошек, с гордостью и отвагой несёт она службу в гармонии с лунными фазами и движением великих созвездий. Укреплённый накладкой из лунной породы лук наделяет её стрелы могуществом ночного светила.\",\"line\":\"Roaming\",\"lineRu\":\"Роуминг\",\"phrase\":\"How long must we ride before we're summoned again to the Nightsilver Woods?\"},{\"id\":26,\"name\":\"Lion\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lion.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lion.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a8/Vo_lion_lion_spawn_06.mp3\",\"descr\":\"Once a Grandmaster of the Demon Witch tradition of sorcery, Lion earned fame among his brethren for fighting on the side of light and righteousness. But adulation corrupts. With powers surpassed only by his ambition, the mage was seduced by a demon and turned to evil, trading his soul for prestige. After committing horrible crimes that marred his soul, he was abandoned. The demon betrayed him, striking better deals with his enemies. Such was Lion’s rage that he followed the demon back to Hell and slew it, ripping it limb from limb, taking its demonic hand for his own. However, such demonoplasty comes at a cost. Lion was transfigured by the process, his body transformed into something unrecognizable. He rose from Hell, rage incarnate, slaying even those who had once called him master, and laying waste to the lands where he had once been so adored. He survives now as the sole practitioner of the Demon Witch tradition, and those who present themselves as acolytes or students are soon relieved of their mana and carried off by the faintest gust of wind.\",\"descrRu\":\"Некогда Великий магистр демонологии заслужил известность среди своих собратьев, сражаясь на стороне света и справедливости. Но лесть испортила его. Силы мага превосходило лишь его же честолюбие, и демон завлёк его на тёмную сторону, выменяв душу магистра на уважение других. Запятнав душу ужасными преступлениями, маг остался в одиночестве: демон предал его и стал искать выгоды у врагов. Ярость демонолога погнала его за предателем в самый ад, где, отрывая конечность за конечностью, он жестоко расправился с демоном и забрал себе его демоническую руку. Оказалось, что демонопластика не проходит бесследно. В ходе трансфигурации тело мага изменилось до неузнаваемости. Он восстал из ада и обрушил ярость на наш мир, убивая даже тех, кто однажды называл его господином, и не оставляя камня на камне в тех землях, где его когда-то обожали. Теперь он живёт в уединении, упражняясь в демонологии, а те, кто называют себя его помощниками или учениками, вскоре лишаются своей маны и растворяются в легчайших порывах ветра.\",\"line\":\"Support\",\"lineRu\":\"Поддержка\",\"phrase\":\"All hells broken loose, and I hold the pieces.\"},{\"id\":30,\"name\":\"Witch Doctor\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/witch_doctor.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/witch_doctor.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/d/de/Vo_witchdoctor_wdoc_attack_07.mp3\",\"descr\":\"A wiry silhouette hitches forward—uneven of feature and limb, bizarre of gait, relentlessly criss-crossing the battlefield in search of that vital weak point where his talents can do most good, and most harm. Whether broken or mismade it is not clear, but still, none can doubt the power carried in his twisted physique. A long staff thumps the earth as the Witch Doctor advances, deploying a terrifying arsenal of fetishes, hexes and spells. It is a body of magical knowledge learned over several lifetimes in the island highlands of Prefectura, now wielded with precise accuracy against his enemies. Witch Doctor is your best friend, or your worst enemy--healing allies and laying waste to all who oppose him.\",\"descrRu\":\"Вдали ковыляет тонкий силуэт — конечности его свисают, а походка виляет: это колдун неустанно ищет на поле боя слабину, где его умения принесут больше всего пользы и вреда. Неясно, уродилось ли это существо таким или его что-то обезобразило, но никто не усомнится в силах, что держит в себе такой неопрятный каркас. Громко стуча посохом оземь, Жарвакко вышагивает по полю боя, пользуясь внушительным арсеналом амулетов, проклятий, заговоров и заклинаний. В его теле — магические знания, добытые за несколько жизненных циклов на взгорье острова Арктура, и теперь колдун мастерски разит этими знаниями противников. Жарвакко может стать и лучшим другом, и злейшим врагом: он исцеляет союзников, но сеет смерть для тех, кто встаёт у него на пути.\",\"line\":\"Support\",\"lineRu\":\"Поддержка\",\"phrase\":\"Malpractice makes perfect.\"},{\"id\":86,\"name\":\"Rubick\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rubick.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rubick.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/4/48/Vo_rubick_rubick_move_21.mp3\",\"descr\":\"Any mage can cast a spell or two, and a few may even study long enough to become a wizard, but only the most talented are allowed to be recognized as a Magus. Yet as with any sorcerer's circle, a sense of community has never guaranteed competitive courtesy.\\nAlready a renowned duelist and scholar of the grander world of sorcery, it had never occurred to Rubick that he might perhaps be Magus material until he was in the midst of his seventh assassination attempt. As he casually tossed the twelfth of a string of would-be killers from a high balcony, it dawned on him how utterly unimaginative the attempts on his life had become. Where once the interruption of a fingersnap or firehand might have put a cheerful spring in his step, it had all become so very predictable. He craved greater competition. Therefore, donning his combat mask, he did what any wizard seeking to ascend the ranks would do: he announced his intention to kill a Magus.\\n Rubick quickly discovered that to threaten one Magus is to threaten them all, and they fell upon him in force. Each antagonist's spell was an unstoppable torrent of energy, and every attack a calculated killing blow. But very soon something occurred that Rubick's foes found unexpected: their arts appeared to turn against them. Inside the magic maelstrom, Rubick chuckled, subtly reading and replicating the powers of one in order to cast it against another, sowing chaos among those who had allied against him. Accusations of betrayal began to fly, and soon the sorcerers turned one upon another without suspecting who was behind their undoing.\\nWhen the battle finally drew to a close, all were singed and frozen, soaked and cut and pierced. More than one lay dead by an ally's craft. Rubick stood apart, sore but delighted in the week's festivities. None had the strength to argue when he presented his petition of assumption to the Hidden Council, and the Insubstantial Eleven agreed as one to grant him the title of Grand Magus.\",\"descrRu\":\"Любому колдуну под силу использовать заклинание или два, а некоторые из них могут даже обучаться достаточно долго, чтобы стать волшебником, но лишь самым талантливым дозволено носить титул мага. Впрочем, как и в любом другом кругу колдунов, ощущение сплоченности никогда не гарантировало гладкого соперничества. Уже известный в высшем колдовском кругу как дуэлянт и ученый, Rubick никогда и не думал, что у него есть задатки мага. До тех пор, пока его не попытались убить в седьмой раз. Со вздохом выкинув двенадцатого из так называемых убийц со своего балкона, он осознал, насколько безнадежно неинтересны стали покушения на его жизнь. Раньше внезапный щелчок пальца или воспламеняющийся на чьей-то руке огонь заставляли его радостно пружинить при ходьбе, но теперь все стало страшно предсказуемо. Ему хотелось более серьезной борьбы. Итак, надев свою боевую маску, он сделал то, что сделал бы любой волшебник, желающий продвинуться в сообществе: он объявил о своих намерениях убить мага. Вскоре Rubick осознал, что напав на одного мага, он напал на них всех, и те обрушились на него всеми силами. Каждое заклинание любого из его противников было неостановимым потоком энергии, всякая атака - рассчитанным на убийство ударом. Но очень скоро случилось то, чего враги Рубика не ожидали: их мастерство обратилось против них. Внутри урагана магии Рубик хохотал, незаметно читая и копируя способности одного, чтобы использовать их против другого, создавая хаос в ряду тех, кто объединился против него. Посыпались обвинения в предательстве, и вскоре колдуны обратились друг против друга, даже не подозревая, кто привел их к такой гибели. Когда битва наконец утихла, все вокруг было обуглено и заморожено, изрезано, облито и порвано. Лишь Рубик выделялся из беспорядка, слегка побитый, но восхищенный случившемуся на этой неделе торжеству. Ни у кого не нашлось мощи возразить ему, когда он подал заявку на принятие в Скрытый Совет, и Одиннадцать Иллюзорных как один согласились вручить ему титул Великого мага.\",\"line\":\"Support\",\"lineRu\":\"Поддержка\",\"phrase\":\"No sorcery lies beyond my grasp.\"},{\"id\":75,\"name\":\"Silencer\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/silencer.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/silencer.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/1/19/Vo_silencer_silen_kill_01.mp3\",\"descr\":\"Part of the seventh and final generation of a carefully designed pedigree, Nortrom was bred by the ancient order of the Aeol Drias to be the greatest magic user the world had ever seen. He was the prophesied one, the culmination of two-hundred years of careful pairings, a war-mage who would bring glory to the order, and destruction to their sworn enemies, The Knights of the Fold.\\nRaised with other young mages in a hidden cantonment among the hills of the Hazhadal barrens, the order's preceptors waited for Nortrom's abilities to manifest. While the other students honed their talents with fire, or ice, or incantatory spells, Nortrom sat silent and talentless, unable to cast so much as a hex. As the day of final testing approached, he still hadn't found his magic. In disgust, the preceptors berated him, while the children laughed. 'You are no mage,' the head of the order declared. Still, Nortrom did not slink away. He entered the day of testing and faced down the young mages who had mocked him. And then his preceptors learned a valuable lesson: a lack of magic can be the greatest magic of all. Nortrom silenced the young mages one by one and defeated them in single combat, until he alone stood as champion of the Aeol Drias, in fulfillment of the prophecy.\",\"descrRu\":\"Часть седьмого и последнего поколения тщательно спланированной селекции, Нортром выведен древним орденом Эол Драйас, дабы стать величайшим из магов, что видел свет. Он был тем, о ком гласило пророчество: кульминацией двухсот лет осторожного скрещивания, магом-бойцом, что принёс бы славу ордену и погибель заклятым врагам его, рыцарям Покрова. Он рос вместе с другими молодыми магами в военном городке, сокрытом среди холмов Хажадальских пустошей, и наставники ждали, когда способности Нортрома проявят себя. Остальные ученики уже оттачивали мастерство обращения с огнём, льдом или чарами, а Нортром оставался молчаливым и бездарным, неспособным даже наложить сглаз. День финальных испытаний близился, но он так и не нашёл своего призвания. С отвращением наставники ругали его, а дети осмеивали. «Ты не маг», — провозгласил глава ордена. И всё же Нортром не отступил. Он явился в день экзамена и дерзко предстал перед молодыми магами, что насмехались над ним. И тогда его наставники получили ценный урок: отсутствие магии может быть лучшим из всех её видов. Юные маги не могли произнести ни слова, а Нортром одерживал победу в одном поединке за другим, покуда не остался на поле сражения один. Пророчество было исполнено. Именно он — величайший маг ордена Эол Драйас.\",\"line\":\"Support\",\"lineRu\":\"Поддержка\",\"phrase\":\"Enemies should be seen and not heard.\"},{\"id\":5,\"name\":\"Crystal Maiden\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/crystal_maiden.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/crystal_maiden.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/8/82/Vo_crystalmaiden_cm_rare_01.mp3\",\"descr\":\"Born in a temperate realm, raised with her fiery older sister Lina, Rylai the Crystal Maiden soon found that her innate elemental affinity to ice created trouble for all those around her. Wellsprings and mountain rivers froze in moments if she stopped to rest nearby; ripening crops were bitten by frost, and fruiting orchards turned to mazes of ice and came crashing down, spoiled. When their exasperated parents packed Lina off to the equator, Rylai found herself banished to the cold northern realm of Icewrack, where she was taken in by an Ice Wizard who had carved himself a hermitage at the crown of the Blueheart Glacier. After long study, the wizard pronounced her ready for solitary practice and left her to take his place, descending into the glacier to hibernate for a thousand years. Her mastery of the Frozen Arts has only deepened since that time, and now her skills are unmatched.\",\"descrRu\":\"Рождённая в тихих местах и взращённая вместе со своей огненно-рыжей сестрой, ещё в молодости Рилай поняла, что её внутреннее единство со стихией льда вредит всем вокруг. Источники и горные реки замерзали, стоило ей прикорнуть неподалеку; зреющие плоды сковывал кусачий мороз, а цветущие висячие сады осыпались на землю безжизненной ледяной мозаикой. Когда отчаявшиеся родители решили отселить пламенную Лину на экватор, они изгнали и Рилай, чьим новым домом стали холодные земли Айсрека. Там, в пещере на вершине ледника Голубого сердца, её и стал наставлять маг льда. Спустя многие дни тренировок волшебник признал, что она готова творить магию в одиночку и оставил ей свой пост — а сам спустился вглубь ледника на тысячелетнюю спячку. С тех пор Рилай серьёзно отточила свое мастерство, и с ней не сравнится уже никто.\",\"line\":\"Support\",\"lineRu\":\"Поддержка\",\"phrase\":\"When Hell freezes over, I'll start calling it Heaven.\"},{\"id\":84,\"name\":\"Ogre Magi\",\"img\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ogre_magi.png\",\"video\":\"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ogre_magi.webm\",\"audio\":\"https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cc/Vo_ogre_magi_ogmag_ability_multi_09.mp3\",\"descr\":\"The ordinary ogre is the creature for whom the phrase 'As dumb as a bag of rock hammers' was coined. In his natural state, an ogre is supremely incapable of doing or deciding anything. Clothed in dirt, he sometimes finds himself accidentally draped in animal skins after eating lanekill. Not an especially social creature, he is most often found affectionately consorting with the boulders or tree-stumps he has mistaken for kin (a factor that may explain the ogre's low rate of reproduction). However, once every generation or so, the ogre race is blessed with the birth of a two-headed Ogre Magi, who is immediately given the traditional name of Aggron Stonebreak, the name of the first and perhaps only wise ogre in their line's history.\\nWith two heads, Ogre Magi finds it possible to function at a level most other creatures manage with one. And while the Ogre Magi will win no debates (even with itself), it is graced with a divine quality known as Dumb Luck—a propensity for serendipitous strokes of fortune which have allowed the ogre race to flourish in spite of enemies, harsh weather, and an inability to feed itself. It's as if the Goddess of Luck, filled with pity for the sadly inept species, has taken Ogre Magi under her wing. And who could blame her? Poor things.\",\"descrRu\":\"Огр обыкновенный — создание, для которого словно придумали выражение «туп как пень». В обычной своей форме огр решительно неспособен на осмысленный поступок или обоснованное действие. Обычно покрытый грязью, он может вдруг обнаружить, что завернулся в шкуру падали, только что ей пообедав. Не намного лучше и его социальные способности — огр частенько нежно заигрывает с камнем или пнём, которые случайно принял за кого-то из своих (этим зачастую и объясняют маленький уровень рождаемости у огров). Однако примерно раз в поколение на расу огров снисходит благословение — рождение двухголового чудотворца, которому сразу же дается традиционное имя Аггрон Стонбрейк — так звали первого и, возможно, единственного мудрого огра за всю историю их расы. С двумя головами огр уже способен жить и мыслить на уровне, для которого многим другим существам хватило бы и одной. Пусть такой огр и не выйдет победителем из философского спора (даже с самим собой), ему дана посланная с небес «удача дурака» — склонность к необъяснимым, случайным чередам невероятной удачи, которые позволяют расе огров блистать, несмотря на врагов, жестокие погодные условия и неспособность прокормить себя. Будто бы сама богиня удачи, переполненная жалостью к печально недалёким существам, берёт одарённого огра к себе под крыло. И кому же её винить? Бедняжки.\",\"line\":\"Support\",\"lineRu\":\"Поддержка\",\"phrase\":\"Once is not enough! It's just as high as we can count.\"}]");

/***/ }),

/***/ "./src/assets/lang.json":
/*!******************************!*\
  !*** ./src/assets/lang.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"safe-lane\",\"rus\":\"Легкая линия\",\"eng\":\"Safe Lane\"},{\"id\":\"mid-lane\",\"rus\":\"Центральная линия\",\"eng\":\"Mid Lane\"},{\"id\":\"off-lane\",\"rus\":\"Сложная линия\",\"eng\":\"Off Lane\"},{\"id\":\"jungle\",\"rus\":\"Лес\",\"eng\":\"Jungle\"},{\"id\":\"roaming\",\"rus\":\"Роуминг\",\"eng\":\"Roaming\"},{\"id\":\"support\",\"rus\":\"Поддержка\",\"eng\":\"Support\"},{\"id\":\"score-value\",\"rus\":\"Счет\",\"eng\":\"Score\"},{\"id\":\"instruction-title\",\"rus\":\"Инструкция\",\"eng\":\"Instruction\"},{\"id\":\"instruction-descr\",\"rus\":\"1. Включите плеер и прослушайте героя.\\n2. Выберите героя из списка голос которого прозвучал.\\n3. После выбора правильного героя нажмите 'Далее'.\",\"eng\":\"1. Turn on the player and listen to the hero.\\n2. Select a hero from the list whose voice was heard.\\n3. After choosing the right hero, click 'Next'.\"},{\"id\":\"next-btn\",\"rus\":\"Далее\",\"eng\":\"Next\"},{\"id\":\"lang-switcher\",\"rus\":\"Язык\",\"eng\":\"Language\"},{\"id\":\"minor\",\"rus\":\"Викторина по героям игры\",\"eng\":\"Quiz on heroes of the game\"},{\"id\":\"promo-descr\",\"rus\":\"Dota — одна из наиболее популярных онлайн игр современности. Каждый день в неё играют сотни тысяч людей. А главный турнир The International ежигодно приковывает взгляды миллионов людей со всего мира. Поэтому предлогаю вам познакомится чуть ближе с миром этой игры, а знакомым с ней, испытать свои познания в репликах всем известных героев.\",\"eng\":\"Dota is one of the most popular online games of our time. Every day will come in hundreds of thousands of people. The main tournament of The International attracts the attention of millions of people from all over the world every year. Therefore, I suggest that you get to know the world of this game a little closer, test your knowledge in replicas of all the characters.\"},{\"id\":\"start-game-btn\",\"rus\":\"начать викторину\",\"eng\":\"start the quiz\"},{\"id\":\"minor-results\",\"rus\":\"Поздравляем!\",\"eng\":\"Congratulations!\"},{\"id\":\"results-text-before\",\"rus\":\"ВЫ ПРОШЛИ ВИКТОРИНУ И НАБРАЛИ\",\"eng\":\"YOU PASSED THE QUIZ AND GOT\"},{\"id\":\"results-text-after\",\"rus\":\"ИЗ 30 ВОЗМОЖНЫХ БАЛЛОВ\",\"eng\":\"OUT OF 30 POSSIBLE POINTS\"},{\"id\":\"restart-btn\",\"rus\":\"начать сначала\",\"eng\":\"restart\"},{\"id\":\"all-heroes\",\"rus\":\"Все герои\",\"eng\":\"all heroes\"},{\"id\":\"play\",\"rus\":\"играть\",\"eng\":\"play\"}]");

/***/ }),

/***/ "./src/js/modules/allHeroes.js":
/*!*************************************!*\
  !*** ./src/js/modules/allHeroes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/db.json */ "./src/assets/db.json");
var _assets_db_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/db.json */ "./src/assets/db.json", 1);
/* harmony import */ var _createPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPlayer */ "./src/js/modules/createPlayer.js");



function allHeroes() {
  const container = document.querySelector('.details .container');
  let containerInner = '';
  _assets_db_json__WEBPACK_IMPORTED_MODULE_0__.forEach(({
    id,
    name,
    img,
    video,
    audio,
    descr,
    descrRu,
    phrase
  }) => {
    containerInner += `
    <div class="details__wrapper details__wrapper_all">
    <div class="details__hero all-heroes" style="display: flex;">
      <div class="all-heroes__wrapper">
        <div class="all-heroes__video">
          <video width="140" height="140" autoplay muted loop>
            <source src="${video}" type="	video/webm">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="all-heroes__descr">
          <div class="all-heroes__name">
            ${name}
          </div>
          <div class="all-heroes__phrase">
            "${phrase}"
          </div>
          
          <div class="all-heroes__audio">
            <div class="audio-player audio-player-small audio-${id}">
              <div class="timeline">
                <div class="progress" style="width: 0%;"></div>
              </div>
              <div class="controls">
                <div class="play-container">
                  <div class="toggle-play play">
                </div>
                </div>
                <div class="time">
                  <div class="current">0:00</div>
                  <div class="divider">/</div>
                  <div class="length">00:00</div>
                </div>
                <div class="volume-container">
                  <div class="volume-button">
                    <div class="volume icono-volumeMedium"></div>
                  </div>
                  <div class="volume-slider">
                    <div class="volume-percentage" style="width: 75%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="all-heroes__text">
          ${localStorage.getItem('lang') == 'rus' ? descrRu : descr}
        </div>
      </div>
    </div>
  </div>
  `;
  });
  container.innerHTML = containerInner;
  _assets_db_json__WEBPACK_IMPORTED_MODULE_0__.forEach(({
    id,
    audio
  }) => {
    Object(_createPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])(`.audio-${id}`, audio);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (allHeroes);

/***/ }),

/***/ "./src/js/modules/calcScore.js":
/*!*************************************!*\
  !*** ./src/js/modules/calcScore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calcScore() {
  const scoreIndicator = document.querySelector('.header__btn-inner-score');
  const incorrectSelected = document.querySelectorAll('.variant__list_incorrect');
  const currentScore = scoreIndicator.textContent;

  if (!document.querySelector('.next-btn_active')) {
    const pointsForLevel = +currentScore + 5 - +incorrectSelected.length;
    scoreIndicator.textContent = pointsForLevel;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (calcScore);

/***/ }),

/***/ "./src/js/modules/createPlayer.js":
/*!****************************************!*\
  !*** ./src/js/modules/createPlayer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createPlayer(selector, audioSrc) {
  const audioPlayer = document.querySelector(selector);
  const audio = new Audio(audioSrc);
  audio.addEventListener("loadeddata", () => {
    audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(audio.duration);
    audio.volume = '.75';
  }, false);
  const timeline = audioPlayer.querySelector(".timeline");
  timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
  }, false);
  const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
  volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
  }, false);
  setInterval(() => {
    const progressBar = audioPlayer.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(audio.currentTime);

    if (localStorage.getItem('sound') == 'stop') {
      audio.currentTime = 0;
      audio.pause();
    }
  }, 190);
  const playBtn = audioPlayer.querySelector(".controls .toggle-play");
  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      audio.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    }
  }, false);
  audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
    const volumeEl = audioPlayer.querySelector(".volume-container .volume");
    audio.muted = !audio.muted;

    if (audio.muted) {
      volumeEl.classList.remove("icono-volumeMedium");
      volumeEl.classList.add("icono-volumeMute");
    } else {
      volumeEl.classList.add("icono-volumeMedium");
      volumeEl.classList.remove("icono-volumeMute");
    }
  });

  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) {
      return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    }

    return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (createPlayer);

/***/ }),

/***/ "./src/js/modules/language.js":
/*!************************************!*\
  !*** ./src/js/modules/language.js ***!
  \************************************/
/*! exports provided: language, languageSwithing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageSwithing", function() { return languageSwithing; });
/* harmony import */ var _assets_lang_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/lang.json */ "./src/assets/lang.json");
var _assets_lang_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/lang.json */ "./src/assets/lang.json", 1);


function language() {
  const engBtn = document.querySelector('#english');
  const rusBtn = document.querySelector('#russian');
  engBtn.addEventListener('click', () => {
    localStorage.setItem('lang', 'eng');
    languageSwithing();
  });
  rusBtn.addEventListener('click', () => {
    localStorage.setItem('lang', 'rus');
    languageSwithing();
  });
}

function languageSwithing() {
  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'rus');
  }

  const chooseLang = localStorage.getItem('lang');
  const langElems = document.querySelectorAll('[data-lang]');
  langElems.forEach(elem => {
    const elemLangId = elem.getAttribute('data-lang');
    const translation = _assets_lang_json__WEBPACK_IMPORTED_MODULE_0__.filter(elem => elem.id == elemLangId)[0];
    elem.textContent = translation[chooseLang];
  });
}



/***/ }),

/***/ "./src/js/modules/mainThemeAudio.js":
/*!******************************************!*\
  !*** ./src/js/modules/mainThemeAudio.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function mainThemeAudio() {
  if (document.querySelector('#main-audio-theme')) {
    const audioTheme = document.querySelector('#main-audio-theme');
    audioTheme.volume = '.1';
    audioTheme.play();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (mainThemeAudio);

/***/ }),

/***/ "./src/js/modules/nextBtn.js":
/*!***********************************!*\
  !*** ./src/js/modules/nextBtn.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resetCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetCategory */ "./src/js/modules/resetCategory.js");
/* harmony import */ var _setHeroes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setHeroes */ "./src/js/modules/setHeroes.js");



function nextBtn() {
  const nextButton = document.querySelector('.next-btn');
  nextButton.addEventListener('click', () => {
    if (nextButton.classList.contains('next-btn_active')) {
      const categorieElems = document.querySelectorAll('.pagination__item');
      let currentIdexOfCategory;

      if (nextButton.getAttribute('data-results')) {
        const linkToResults = document.createElement('a');
        const body = document.querySelector('body');
        linkToResults.setAttribute('href', './results.html');
        linkToResults.classList.add('results-link');
        body.appendChild(linkToResults);
        const score = document.querySelector('.header__btn-inner-score');
        localStorage.setItem('score', score.textContent);
        body.querySelector('.results-link').click();
      }

      categorieElems.forEach((elem, index) => {
        if (elem.classList.contains('pagination__item_active') && categorieElems.length == index + 2) {
          const lang = localStorage.getItem('lang');
          nextButton.firstElementChild.textContent = lang == 'rus' ? 'Результаты' : 'Results';
          nextButton.setAttribute('data-results', 'true');
        }

        if (elem.classList.contains('pagination__item_active')) {
          currentIdexOfCategory = index;
          elem.classList.remove('pagination__item_active');
        }

        if (index == currentIdexOfCategory + 1) {
          elem.classList.add('pagination__item_active');
        }
      });
      nextButton.classList.remove('next-btn_active');
    }

    Object(_resetCategory__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_setHeroes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (nextBtn);

/***/ }),

/***/ "./src/js/modules/resetCategory.js":
/*!*****************************************!*\
  !*** ./src/js/modules/resetCategory.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function resetCategory() {
  const instruction = document.querySelector('.details__instruction');
  const details = document.querySelector('.details__hero');
  instruction.style.display = 'block';
  details.style.display = 'none';
  const heroName = document.querySelector('.jumbotron__title');
  heroName.textContent = '******';
  const mainHeroWrapper = document.querySelector('.jumbotron__wrapper');
  const heroDefaultImg = `
    <div class="jumbotron__img">
      <img src="./assets/img/anon.png" alt="anonimous photo">
    </div>
    `;
  mainHeroWrapper.firstElementChild.remove();
  mainHeroWrapper.insertAdjacentHTML('afterbegin', heroDefaultImg);
  const audioPlayer = document.querySelector('.audio-player');
  audioPlayer.remove();
  const elemBeforePlayer = document.querySelector('.jumbotron__divider');
  const playerInnerHtml = `
    <div class="audio-player">
      <div class="timeline">
        <div class="progress" style="width: 0%;"></div>
      </div>
      <div class="controls">
        <div class="play-container">
          <div class="toggle-play play">
        </div>
        </div>
        <div class="time">
          <div class="current">0:00</div>
          <div class="divider">/</div>
          <div class="length">0:05</div>
        </div>
        <div class="volume-container">
          <div class="volume-button">
            <div class="volume icono-volumeMedium"></div>
          </div>
          <div class="volume-slider">
            <div class="volume-percentage" style="width: 75%;"></div>
          </div>
        </div>
      </div>
    </div>
  `;
  elemBeforePlayer.insertAdjacentHTML('afterend', playerInnerHtml);
}

/* harmony default export */ __webpack_exports__["default"] = (resetCategory);

/***/ }),

/***/ "./src/js/modules/setHeroes.js":
/*!*************************************!*\
  !*** ./src/js/modules/setHeroes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/db.json */ "./src/assets/db.json");
var _assets_db_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/db.json */ "./src/assets/db.json", 1);
/* harmony import */ var _createPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPlayer */ "./src/js/modules/createPlayer.js");
/* harmony import */ var _showCorrectChoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showCorrectChoose */ "./src/js/modules/showCorrectChoose.js");
/* harmony import */ var _showDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showDetail */ "./src/js/modules/showDetail.js");





function setHeroes() {
  const currCategory = document.querySelector('.pagination__item_active .pagination__link').getAttribute('id');
  const heroesList = document.querySelector('.variant__wrapper');
  const heroes = _assets_db_json__WEBPACK_IMPORTED_MODULE_0__.filter(hero => hero.line == currCategory);
  const randomHeroIndex = Math.floor(Math.random() * 6);
  const correctHero = heroes[randomHeroIndex];
  let heroListInner = '';
  heroes.forEach(({
    id,
    name
  }) => {
    heroListInner += `
      <div class="variant__list" heroId="${id}">
        <span class="variant__status"></span>
        ${name}
      </div>
    `;
  });
  heroesList.innerHTML = heroListInner;
  Object(_showDetail__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_showCorrectChoose__WEBPACK_IMPORTED_MODULE_2__["default"])(correctHero);
  Object(_createPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])('.audio-player', correctHero.audio);
}

/* harmony default export */ __webpack_exports__["default"] = (setHeroes);

/***/ }),

/***/ "./src/js/modules/showCorrectChoose.js":
/*!*********************************************!*\
  !*** ./src/js/modules/showCorrectChoose.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calcScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcScore */ "./src/js/modules/calcScore.js");
/* harmony import */ var _soundEffects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soundEffects */ "./src/js/modules/soundEffects.js");



function showCorrectChoose(correctHero) {
  const heroes = document.querySelectorAll('.variant__list');
  heroes.forEach(hero => {
    hero.addEventListener('click', event => {
      const clickedElem = event.target;
      const nextButton = document.querySelector('.next-btn');

      if (clickedElem.getAttribute('heroId') == correctHero.id) {
        clickedElem.classList.add('variant__list_correct');
        const mainHeroWrapper = document.querySelector('.jumbotron__wrapper');
        const heroVideoInner = `
        <div class="hero__video" style="height: 130px;">
          <video width="120" height="120" autoplay="" muted="" loop="">
            <source src="${correctHero.video}">
            Your browser does not support the video tag.
          </video>
        </div>`;
        mainHeroWrapper.firstElementChild.remove();
        mainHeroWrapper.insertAdjacentHTML('afterbegin', heroVideoInner);
        const hiddenHeroName = document.querySelector('.jumbotron__title');
        hiddenHeroName.innerHTML = correctHero.name;
        Object(_soundEffects__WEBPACK_IMPORTED_MODULE_1__["default"])(true);
        Object(_calcScore__WEBPACK_IMPORTED_MODULE_0__["default"])();
        nextButton.classList.add('next-btn_active');
      } else {
        if (!nextButton.classList.contains('next-btn_active')) {
          clickedElem.classList.add('variant__list_incorrect');
          Object(_soundEffects__WEBPACK_IMPORTED_MODULE_1__["default"])(false);
        }
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (showCorrectChoose);

/***/ }),

/***/ "./src/js/modules/showDetail.js":
/*!**************************************!*\
  !*** ./src/js/modules/showDetail.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/db.json */ "./src/assets/db.json");
var _assets_db_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/db.json */ "./src/assets/db.json", 1);
/* harmony import */ var _createPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPlayer */ "./src/js/modules/createPlayer.js");
/* harmony import */ var _showCorrectChoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showCorrectChoose */ "./src/js/modules/showCorrectChoose.js");




function showDetail() {
  const heroes = document.querySelectorAll('.variant__list');
  const instruction = document.querySelector('.details__instruction');
  const details = document.querySelector('.details__hero');
  heroes.forEach(hero => {
    hero.addEventListener('click', event => {
      const checkedId = event.target.getAttribute('heroId');
      const checkedHeroData = _assets_db_json__WEBPACK_IMPORTED_MODULE_0__.filter(hero => hero.id == checkedId)[0];
      const {
        name,
        phrase,
        descrRu,
        descr,
        video,
        audio
      } = checkedHeroData;
      const descrOnCurrLang = localStorage.getItem('lang') == 'rus' ? descrRu : descr;
      details.innerHTML = `
      <div class="hero__wrapper">
        <div class="hero__video">
          <video width="140" height="140" autoplay muted loop>
            <source src="${video}">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="hero__descr">
          <div class="hero__name">
          ${name}
          </div>
          <div class="hero__phrase">
            "${phrase}"
          </div>
          
          <div class="hero__audio">
            <div class="audio-player audio-player-small">
              <div class="timeline">
                <div class="progress" style="width: 0%;"></div>
              </div>
              <div class="controls">
                <div class="play-container">
                  <div class="toggle-play play">
                </div>
                </div>
                <div class="time">
                  <div class="current">0:00</div>
                  <div class="divider">/</div>
                  <div class="length">00:00</div>
                </div>
                <div class="volume-container">
                  <div class="volume-button">
                    <div class="volume icono-volumeMedium"></div>
                  </div>
                  <div class="volume-slider">
                    <div class="volume-percentage" style="width: 75%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="hero__text">
    ${descrOnCurrLang}
    </div>
    `;
      Object(_createPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])('.audio-player-small', audio);
      instruction.style.display = 'none';
      details.style.display = 'block';
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (showDetail);

/***/ }),

/***/ "./src/js/modules/soundEffects.js":
/*!****************************************!*\
  !*** ./src/js/modules/soundEffects.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function soundEffects(choosenStatus) {
  const uncorrectChooseSound = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Blink_Dagger_Blink_1.mp3';
  const correctChooseSound = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d8/Hand_of_Midas_Transmute.mp3';

  if (choosenStatus) {
    const audio = new Audio(correctChooseSound);
    localStorage.setItem('sound', 'stop');
    audio.play();
    setTimeout(() => {
      localStorage.setItem('sound', 'start');
    }, 400);
  } else {
    const audio = new Audio(uncorrectChooseSound);
    audio.play();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (soundEffects);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_allHeroes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/allHeroes */ "./src/js/modules/allHeroes.js");
/* harmony import */ var _modules_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/language */ "./src/js/modules/language.js");
/* harmony import */ var _modules_mainThemeAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mainThemeAudio */ "./src/js/modules/mainThemeAudio.js");
/* harmony import */ var _modules_nextBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/nextBtn */ "./src/js/modules/nextBtn.js");
/* harmony import */ var _modules_setHeroes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/setHeroes */ "./src/js/modules/setHeroes.js");





document.addEventListener('DOMContentLoaded', event => {
  try {
    Object(_modules_language__WEBPACK_IMPORTED_MODULE_1__["language"])();
    Object(_modules_setHeroes__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_modules_nextBtn__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_modules_mainThemeAudio__WEBPACK_IMPORTED_MODULE_2__["default"])();
  } catch (error) {}

  Object(_modules_language__WEBPACK_IMPORTED_MODULE_1__["languageSwithing"])();

  try {
    const scoreElem = document.querySelector('.results__score-points');
    const scoreValue = localStorage.getItem('score');
    scoreElem.innerHTML = scoreValue;
  } catch (error) {}

  try {
    Object(_modules_allHeroes__WEBPACK_IMPORTED_MODULE_0__["default"])();
  } catch (error) {}
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map