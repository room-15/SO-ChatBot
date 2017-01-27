module.exports = function (bot) {
    var welcomeFmt = 'Welcome to the Android chat! Please review the {0}. ' +
        'Please don\'t ask if you can ask or if anyone\'s around; just ask ' +
        'your question, and if anyone\'s free and interested they\'ll help.';
    var rulesLink = bot.adapter.link(
        'room rules',
        'http://room-15.github.io/'
    );

    var config = Object.merge(
        {
            pattern: '!/',
            welcomeMessage: welcomeFmt.supplant(rulesLink),

            // this is some test key taken from the OpenWeatherMap site
            // it'll work, probably. but replace it with your own, m'kay?
            weatherKey: '44db6a862fba0b067b1930da0d769e98'
        },
        bot.memory.get('config', {})
    );

    bot.memory.set('config', config);
    bot.memory.save('config');

    return config;
};
