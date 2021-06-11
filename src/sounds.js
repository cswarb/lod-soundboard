const SOUNDS = [
    { source: './sounds/AbsolutelyWatertight.mp3', image: './img/AbsolutelyWatertight.png', title: 'Absolutely watertight' },
    { source: './sounds/MotherOfGodCry.mp3', image: './img/MotherOfGodCry.png', title: 'Mother of God' },
    { source: './sounds/AllImSayingMate.mp3', image: './img/AllImSayingMate.png', title: 'All I\'m saying mate' },
    { source: './sounds/MotherOfGodDeep.mp3', image: './img/MotherOfGodDeep.png', title: 'Mother of god.' },
    { source: './sounds/AnyQuestions.mp3', image: './img/AnyQuestions.png', title: 'Any questions' },
    { source: './sounds/BackedRightHorse.mp3', image: './img/BackedRightHorse.png', title: 'Backed the right horse, didn\'t you son?' },
    { source: './sounds/MotherOfGodWhisper.mp3', image: './img/MotherOfGodWhisper.png', title: '*Mother of god*' },
    { source: './sounds/BentCoppers.mp3', image: './img/BentCoppers.png', title: 'Bent coppers' },
    { source: './sounds/BitOfAComedian.mp3', image: './img/BitOfAComedian.png', title: 'Fancy yourself as a bit of a comedian do you?' },
    { source: './sounds/NeedToGetSomeKipMate.mp3', image: './img/NeedToGetSomeKipMate.png', title: 'Need to get some kip mate' },
    { source: './sounds/CatPiss.mp3', image: './img/CatPiss.png', title: 'Cat piss' },
    { source: './sounds/NiceOneMate.mp3', image: './img/NiceOneMate.png', title: 'Nice one mate' },
    { source: './sounds/NightMate.mp3', image: './img/NightMate.png', title: 'Night mate' },
    { source: './sounds/Clappers.mp3', image: './img/Clappers.png', title: 'He\'s going like the clappers' },
    { source: './sounds/NotLikeThatMate.mp3', image: './img/NotLikeThatMate.png', title: 'Not like that mate' },
    { source: './sounds/Clappers2.mp3', image: './img/Clappers2.png', title: 'Plus, you were going like the clappers' },
    { source: './sounds/ComeOnMate.mp3', image: './img/ComeOnMate.png', title: 'Come on mate' },
    { source: './sounds/OnlyInterestedBentCoppers.mp3', image: './img/OnlyInterestedBentCoppers.png', title: 'Only interested in one thing only, and that\'s bent coppers' },
    { source: './sounds/CookedGoose.mp3', image: './img/CookedGoose.png', title: 'Well, she\'s cooked her Goose now' },
    { source: './sounds/OrganGrinderNotHerMonkey.mp3', image: './img/OrganGrinderNotHerMonkey.png', title: 'Organ grinder, not her Monkey' },
    { source: './sounds/SaidItBeforeSayItAgain.mp3', image: './img/SaidItBeforeSayItAgain.png', title: 'I\'ve said it before, and I\'ll say it again' },
    { source: './sounds/DownTheDrains.mp3', image: './img/DownTheDrains.png', title: 'Down the bloody drains' },
    { source: './sounds/Significance.mp3', image: './img/Significance.png', title: 'Significance' },
    { source: './sounds/DutyToLetterLaw.mp3', image: './img/DutyToLetterLaw.png', title: 'We do our duty to the letter of the law' },
    { source: './sounds/SorryMate.mp3', image: './img/SorryMate.png', title: 'Sorry mate' },
    { source: './sounds/EggSucking.mp3', image: './img/EggSucking.png', title: 'Egg sucking tips for granny' },
    { source: './sounds/SpratMakrel.mp3', image: './img/SpratMakrel.png', title: 'Sprat - Mackerel' },
    { source: './sounds/Float.mp3', image: './img/Float.png', title: 'I didn\'t float up the Lagan' },
    { source: './sounds/StopMakingATitOfYourselfAndPissOff.mp3', image: './img/StopMakingATitOfYourselfAndPissOff.png', title: 'Stop making a tit of yourself & piss off' },
    { source: './sounds/SuckingDiesel.mp3', image: './img/SuckingDiesel.png', title: 'Sucking diesel' },
    { source: './sounds/GiveMeStrength.mp3', image: './img/GiveMeStrength.png', title: 'God give me strength' },
    { source: './sounds/SuckingDiesel2.mp3', image: './img/SuckingDiesel2.png', title: 'Sucking diesel 2' },
    { source: './sounds/GladForYouMate.mp3', image: './img/GladForYouMate.png', title: 'Glad for you mate' },
    { source: './sounds/TenStone.mp3', image: './img/TenStone.png', title: 'Ten stone' },
    { source: './sounds/GodGiveMeStrength2.mp3', image: './img/GodGiveMeStrength2.png', title: 'God give me strength 2' },
    { source: './sounds/GotYouMate.mp3', image: './img/GotYouMate.png', title: 'Got you mate' },
    { source: './sounds/TheLetterOfTheLawSir.mp3', image: './img/TheLetterOfTheLawSir.png', title: 'To the letter of the law sir' },
    { source: './sounds/Hastings.mp3', image: './img/Hastings.png', title: 'Hastings' },
    { source: './sounds/ThreeShotsFella.mp3', image: './img/ThreeShotsFella.png', title: 'Three. shots. fella' },
    { source: './sounds/IAmCalm.mp3', image: './img/IAmCalm.png', title: 'I am calm...' },
    { source: './sounds/TotallyCalm.mp3', image: './img/TotallyCalm.png', title: '...Totally calm' },
    { source: './sounds/InterestedInOneThingOnly.mp3', image: './img/InterestedInOneThingOnly.png', title: 'I\'m interested in one thing, and one thing only' },
    { source: './sounds/WeWorkToTheLetterOfTheLaw.mp3', image: './img/WeWorkToTheLetterOfTheLaw.png', title: 'We work to the letter of the law' },
    { source: './sounds/JesusMaryAndJoseph.mp3', image: './img/JesusMaryAndJoseph.png', title: 'Jesus, Mary and Joseph' },
    { source: './sounds/WellDoneMate.mp3', image: './img/WellDoneMate.png', title: 'Well done mate' },
    { source: './sounds/LeakingLikeAColander.mp3', image: './img/LeakingLikeAColander.png', title: 'We\'re leaking like a colander' },
    { source: './sounds/WerentBornYesterdayFella.mp3', image: './img/WerentBornYesterdayFella.png', title: 'We weren\'t born yesterday fella' },
    { source: './sounds/LetsGetYouOutOfHereMate.mp3', image: './img/LetsGetYouOutOfHereMate.png', title: 'Let\'s get you out of here mate' },
    { source: './sounds/WhatsUpMate.mp3', image: './img/WhatsUpMate.png', title: 'What\'s up mate' },
    { source: './sounds/ListenToThisFella.mp3', image: './img/ListenToThisFella.png', title: 'Listen to this fella' },
    { source: './sounds/WhiteSmoke.mp3', image: './img/WhiteSmoke.png', title: 'White smoke' },
    { source: './sounds/LoosingItFella.mp3', image: './img/LoosingItFella.png', title: 'Are you loosing it out there fella' },
    { source: './sounds/WorksForMeMate.mp3', image: './img/WorksForMeMate.png', title: 'Works for me mate' },
    { source: './sounds/ManInTheHosptial.mp3', image: './img/ManInTheHosptial.png', title: 'I have a man in the Hosptial' },
    { source: './sounds/AndTheWeeDonkey.mp3', image: './img/AndTheWeeDonkey.png', title: 'Jesus, Mary and Joseph and the wee Donkey' },
    { source: './sounds/CheekyWeeShite.mp3', image: './img/CheekyWeeShite.png', title: 'Cheeky wee shite' },
    { source: './sounds/NobodyBlackerThanMeSon.mp3', image: './img/NobodyBlackerThanMeSon.png', title: 'Nobody\'s blacker than me son' },
];

export default SOUNDS;
