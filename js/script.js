const $sectionVideo = document.querySelector('.section-video');
const $video = $sectionVideo.querySelector('.video');

$sectionVideo.addEventListener('click', () => {
    $video.paused ? $video.play() : $video.pause();
    $sectionVideo.classList.toggle('-play');
});

const $egg = document.querySelector('.separator-egg');
const $key = [$egg.querySelector('.key ')]
$(".key").hide();
let count = 1;

$egg.addEventListener('click', async () => {
    if (count === 3) {
        await $(".key").show(350, () => {
            setTimeout(() => {
                $(".key").hide();
                count = 0
            }, 2000)
        });
    }
    count++;
});