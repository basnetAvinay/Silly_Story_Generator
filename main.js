var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

// Takes an array, and returns one of the items stored inside the array at random.
function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}

var storyText = "It was 94 farenheit outside, so :insertx: went for a walk."
+"When they got to :inserty:, they stared in horror for a few moments, then :insertz:. "
+"Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.\n";

var insertX = ["Willy the Goblin",
    "Big Daddy","Father Christmas"];

var insertY = ["the soup kitchen", "Disneyland", "the White House"];

var insertZ = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];


function result() {

    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // Call is made to the method equal to newStory, so each time it is called,
    // newStory is made equal to itself, but with substitutions made
    newStory = newStory.replace(':insertx', xItem);
    newStory = newStory.replace(':insertx', xItem);
    newStory = newStory.replace(':inserty', yItem);
    newStory = newStory.replace(':insertz', zItem);

    // Replace the name 'Bob' with the name variable is name is given.
    if(customName.value !== '') {
        var name = customName.value;

        newStory = newStory.replace('Bob', name);
    }

    // Checking if uk radio button has been selected.
    if(document.getElementById("uk").checked) {
        var weight = Math.round(300*0.071428571428571);
        var temperature =  Math.round((94-32)*.5556) + ' centigrade';

        newStory = newStory.replace('94 farenheit', temperature);
        newStory = newStory.replace("300 pounds", weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';

}

// Adds a click event listener to the randomize variable so that when
// the button it represents is clicked, the result() function is run.
randomize.addEventListener('click', result, false);