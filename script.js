const verbs = [
  'running',
  'eating',
  'drinking',
  'jumping',
  'sleeping',
  'playing',
  'singing',
  'dancing',
  'laughing',
  'crying',
  'brushing',
  'washing',
  'studying',
  'reading',
  'writing',
  'drawing',
  'cooking',
  'cleaning',
  'watching',
  'listening',
  'swimming',
  'making',
  'baking',
  'taking',
  'sitting',
  'getting',
  'putting',
  'cutting',
  'tying',
  'hugging',
];

document.addEventListener('DOMContentLoaded', function () {
  const diceButton = document.getElementById('diceButton');
  const verbImage = document.getElementById('verbImage');
  const hideImagesCheckbox = document.getElementById('hideImages');
  const hideVerbCheckbox = document.getElementById('hideVerb');
  const randomVerbsCheckbox = document.getElementById('randomVerbs');

  let currentVerb = '';
  let currentIndex = 0;

  verbImage.src = 'images/reference.jpg';
  verbImage.style.display = 'block';

  diceButton.addEventListener('click', () => {
    const isRandom = randomVerbsCheckbox.checked;

    if (isRandom) {
      currentIndex = Math.floor(Math.random() * verbs.length);
    } else {
      currentIndex = (currentIndex + 1) % verbs.length;
    }

    currentVerb = verbs[currentIndex];

    if (!hideVerbCheckbox.checked) {
      diceButton.textContent = currentVerb;
    } else {
      diceButton.textContent = '???';
    }

    if (!hideImagesCheckbox.checked) {
      verbImage.src = 'images/' + currentVerb + '.jpg';
      verbImage.style.display = 'block';
    } else {
      verbImage.style.display = 'none';
    }
  });

  hideImagesCheckbox.addEventListener('change', () => {
    verbImage.style.display = hideImagesCheckbox.checked ? 'none' : 'block';
  });

  hideVerbCheckbox.addEventListener('change', () => {
    diceButton.textContent = hideVerbCheckbox.checked ? '???' : currentVerb;
  });
});
