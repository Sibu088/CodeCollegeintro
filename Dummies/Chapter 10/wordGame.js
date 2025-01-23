let replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener('click', replaceIt);
function replaceIt() {
    let storyDiv = document.getElementById("story");
    let Hero  = "<span class='replacement'>" + document.getElementById('Hero').value + '</span>';
    let adjective = "<span class='replacement'>" + document.getElementById('adj1').value + '</span>';
    let magicalItem  = "<span class='replacement'>" + document.getElementById('magicalItem').value + '</span>';
    let fantasyCreature = "<span class='replacement'>" + document.getElementById('fantasyCreature').value + '</span>';
    let cityName = "<span class='replacement'>" + document.getElementById('cityName').value + '</span>';
    let actionVerb = "<span class='replacement'>" + document.getElementById('actionVerb').value + '</span>';
    let adventureLocation = "<span class='replacement'>" + document.getElementById('adventureLocation').value + '</span>';
    let emotion  = "<span class='replacement'>" + document.getElementById('emotion ').value + '</span>';
    let feastType  = "<span class='replacement'>" + document.getElementById('feastType ').value + '</span>';
    let royalTitle = "<span class='replacement'>" + document.getElementById('royalTitle').value + '</span>';
    let mythicalPlace = "<span class='replacement'>" + document.getElementById('mythicalPlace').value + '</span>';
    let collectible = "<span class='replacement'>" + document.getElementById('collectible').value + '</span>';
    let battleCry= "<span class='replacement'>" + document.getElementById('battleCry').value + '</span>';
    let destination= "<span class='replacement'>" + document.getElementById('destination').value + '</span>';
    let questItem = "<span class='replacement'>" + document.getElementById('questItem').value + '</span>';
    /* Insert more variable definitions here */
    
    let theStory = "<h1>Douglas's Dance Party</h1> ";
    theStory += 'One ' + Hero + ' day, ';
    theStory += 'Douglas was ' + adjective;
    theStory += ' in his ' + magicalItem;
    theStory += ', reading a book about ' + fantasyCreature + ' ' + cityName + '.<br></br>';
    theStory += ' As he ' + actionVerb + ' his ' + adventureLocation + ', ';
    theStory += 'he heard ' + emotion + ' music ';
    theStory += 'playing in the ' + feastType + '.<br></br> ';
    theStory += royalTitle + '! he exclaimed, ';
    theStory += 'as he ' + mythicalPlace + ' down the stairs to join the ';
    theStory += collectible + ' party.<br></br>';
    theStory += 'Douglas danced the ' + battleCry + ' Dance, ';
    theStory += 'the ' + destination+ ' Twist, ';
    theStory += 'and took the prize for dancing the best Electric ' + questItem + '.';

    /* Put the rest of the story here, using the += operator */
    storyDiv.innerHTML = theStory;
}