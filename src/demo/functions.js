function titleCase(title) {
    var words = title.split(' ');
    var titleCasedWords = words.map(function(word) {
        return word[0].toUpperCase() + word.substring(1);
    })
    return titleCasedWords.join(' ');
}

function bestLaCroixFlavor() {
    return 'grapefruit';
}

exports.titleCase = titleCase;
exports.bestLaCroixFlavor = this.bestLaCroixFlavor;
