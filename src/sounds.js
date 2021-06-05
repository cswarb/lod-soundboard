const SOUNDS = [
    { source: './sounds/AbsolutelyWatertight.mp3', image: './img/AbsolutelyWatertight.png', title: 'Absolutely watertight' },
    { source: './sounds/MotherOfGodCry.mp3', image: './img/MotherOfGodCry.png', title: 'Mother of God' },
    { source: './sounds/AllImSayingMate.mp3', image: './img/AllImSayingMate.png', title: 'All I\'m saying mate' },
    { source: './sounds/MotherOfGodDeep.mp3', image: './img/MotherOfGodDeep.png', title: 'Mother of god deep' },
    { source: './sounds/AnyQuestions.mp3', image: './img/AnyQuestions.png', title: 'Any questions' },
    { source: './sounds/BackedRightHorse.mp3', image: './img/BackedRightHorse.png', title: 'Backed the right horse' },
    { source: './sounds/MotherOfGodWhisper.mp3', image: './img/MotherOfGodWhisper.png', title: 'Mother of god whisper' },
    { source: './sounds/BentCoppers.mp3', image: './img/BentCoppers.png', title: 'Bent coppers' },
    { source: './sounds/BitOfAComedian.mp3', image: './img/BitOfAComedian.png', title: 'Bit of a comedian' },
    { source: './sounds/NeedToGetSomeKipMate.mp3', image: './img/NeedToGetSomeKipMate.png', title: 'Need to get some kip mate' },
    { source: './sounds/CatPiss.mp3', image: './img/CatPiss.png', title: 'Cat piss' },
    { source: './sounds/NiceOneMate.mp3', image: './img/NiceOneMate.png', title: 'Nice one mate' },
    { source: './sounds/NightMate.mp3', image: './img/NightMate.png', title: 'Night mate' },
    { source: './sounds/Clappers.mp3', image: './img/Clappers.png', title: 'Clappers' },
    { source: './sounds/NotLikeThatMate.mp3', image: './img/NotLikeThatMate.png', title: 'Not like that mate' },
    { source: './sounds/Clappers2.mp3', image: './img/Clappers2.png', title: 'Clappers 2' },
    { source: './sounds/ComeOnMate.mp3', image: './img/ComeOnMate.png', title: 'Come on mate' },
    { source: './sounds/OnlyInterestedBentCoppers.mp3', image: './img/OnlyInterestedBentCoppers.png', title: 'Only interested bent coppers' },
    { source: './sounds/CookedGoose.mp3', image: './img/CookedGoose.png', title: 'Cooked Goose' },
    { source: './sounds/OrganGrinderNotHerMonkey.mp3', image: './img/OrganGrinderNotHerMonkey.png', title: 'Organ grinder, not her Monkey' },
    { source: './sounds/SaidItBeforeSayItAgain.mp3', image: './img/SaidItBeforeSayItAgain.png', title: 'Said it before, and I\'ll Say it again' },
    { source: './sounds/DownTheDrains.mp3', image: './img/DownTheDrains.png', title: 'Down the drains' },
    { source: './sounds/Significance.mp3', image: './img/Significance.png', title: 'Significance' },
    { source: './sounds/DutyToLetterLaw.mp3', image: './img/DutyToLetterLaw.png', title: 'Duty to letter law' },
    { source: './sounds/SorryMate.mp3', image: './img/SorryMate.png', title: 'Sorry mate' },
    { source: './sounds/EggSucking.mp3', image: './img/EggSucking.png', title: 'Egg sucking' },
    { source: './sounds/SpratMakrel.mp3', image: './img/SpratMakrel.png', title: 'Sprat - Makrel' },
    { source: './sounds/Float.mp3', image: './img/Float.png', title: 'Float' },
    { source: './sounds/StopMakingATitOfYourselfAndPissOff.mp3', image: './img/StopMakingATitOfYourselfAndPissOff.png', title: 'Stop making a tit of yourself & piss off' },
    { source: './sounds/SuckingDiesel.mp3', image: './img/SuckingDiesel.png', title: 'Sucking diesel' },
    { source: './sounds/GiveMeStrength.mp3', image: './img/GiveMeStrength.png', title: 'Give me strength' },
    { source: './sounds/SuckingDiesel2.mp3', image: './img/SuckingDiesel2.png', title: 'Sucking diesel 2' },
    { source: './sounds/GladForYouMate.mp3', image: './img/GladForYouMate.png', title: 'Glad for you mate' },
    { source: './sounds/TenStone.mp3', image: './img/TenStone.png', title: 'Ten stone' },
    { source: './sounds/GodGiveMeStrength2.mp3', image: './img/GodGiveMeStrength2.png', title: 'God give me strength 2' },
    { source: './sounds/GotYouMate.mp3', image: './img/GotYouMate.png', title: 'Got you mate' },
    { source: './sounds/TheLetterOfTheLawSir.mp3', image: './img/TheLetterOfTheLawSir.png', title: 'The letter of the law sir' },
    { source: './sounds/Hastings.mp3', image: './img/Hastings.png', title: 'Hastings' },
    { source: './sounds/ThreeShotsFella.mp3', image: './img/ThreeShotsFella.png', title: 'Three shots fella' },
    { source: './sounds/IAmCalm.mp3', image: './img/IAmCalm.png', title: 'I am calm...' },
    { source: './sounds/TotallyCalm.mp3', image: './img/TotallyCalm.png', title: '...Totally calm' },
    { source: './sounds/InterestedInOneThingOnly.mp3', image: './img/InterestedInOneThingOnly.png', title: 'Interested in one thing only' },
    { source: './sounds/WeWorkToTheLetterOfTheLaw.mp3', image: './img/WeWorkToTheLetterOfTheLaw.png', title: 'We work to the letter of the law' },
    { source: './sounds/JesusMaryAndJoseph.mp3', image: './img/JesusMaryAndJoseph.png', title: 'Jesus, Mary and Joseph' },
    { source: './sounds/WellDoneMate.mp3', image: './img/WellDoneMate.png', title: 'Well done mate' },
    { source: './sounds/LeakingLikeAColander.mp3', image: './img/LeakingLikeAColander.png', title: 'Leaking like a colander' },
    { source: './sounds/WerentBornYesterdayFella.mp3', image: './img/WerentBornYesterdayFella.png', title: 'Weren\'t born yesterday fella' },
    { source: './sounds/LetsGetYouOutOfHereMate.mp3', image: './img/LetsGetYouOutOfHereMate.png', title: 'Let\'s get you out of here mate' },
    { source: './sounds/WhatsUpMate.mp3', image: './img/WhatsUpMate.png', title: 'What\'s up mate' },
    { source: './sounds/ListenToThisFella.mp3', image: './img/ListenToThisFella.png', title: 'Listen to this fella' },
    { source: './sounds/WhiteSmoke.mp3', image: './img/WhiteSmoke.png', title: 'White smoke' },
    { source: './sounds/LoosingItFella.mp3', image: './img/LoosingItFella.png', title: 'Loosing it fella' },
    { source: './sounds/WorksForMeMate.mp3', image: './img/WorksForMeMate.png', title: 'Works for me mate' },
    { source: './sounds/ManInTheHosptial.mp3', image: './img/ManInTheHosptial.png', title: 'Man in the Hosptial' },
];

export default SOUNDS;
