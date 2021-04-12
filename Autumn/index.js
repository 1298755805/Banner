window.onload = () => {
  const images = document.querySelectorAll('header > div > img');
  const header = document.querySelector('header');

  header.addEventListener('mouseenter', (e) => {
    header.classList.add('moving');
  });

  header.addEventListener('mousemove', (e) => {
    let percentage = e.clientX / window.outerWidth;
    let offset = 10 * percentage;
    let blur = 20;

    for (let [index, image] of images.entries()) {
      offset *= 1.3;
      const blurValue = Math.pow(index / images.length - percentage, 2) * blur;

      image.style.setProperty('--offset', `${offset}px`);
      image.style.setProperty('--blur', `${blurValue}px`);
    }
  });

  header.addEventListener('mouseout', (e) => {
    header.classList.remove('moving');
    for (let image of images) {
      image.style.setProperty('--offset', `0px`);
      image.style.setProperty('--blur', `2px`);
    }
  });
};
